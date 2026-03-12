"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

interface BlogPost {
  slug: string;
  title: string;
  subtitle?: string;
}

const CATEGORIES = [
  { label: "All", key: "all" },
  { label: "Compliance & Deadlines", key: "compliance" },
  { label: "PAYE & Tax", key: "paye" },
  { label: "NIS & NHT", key: "nis" },
  { label: "Getting Started", key: "getting-started" },
  { label: "Software Guides", key: "software" },
] as const;

type CategoryKey = (typeof CATEGORIES)[number]["key"];

function categorizePost(title: string | undefined): CategoryKey[] {
  if (!title) return [];
  const t = title.toLowerCase();
  const cats: CategoryKey[] = [];

  if (
    t.includes("deadline") ||
    t.includes("compliance") ||
    t.includes("march 31") ||
    t.includes("annual return") ||
    t.includes("so1") ||
    t.includes("penalty") ||
    t.includes("penalties") ||
    t.includes("audit") ||
    t.includes("checklist") ||
    t.includes("year-end") ||
    t.includes("tax year")
  ) {
    cats.push("compliance");
  }

  if (
    t.includes("paye") ||
    t.includes("income tax") ||
    t.includes("tax rate") ||
    t.includes("tax threshold") ||
    t.includes("education tax") ||
    t.includes("etaj") ||
    t.includes("tax treatment") ||
    t.includes("tax update")
  ) {
    cats.push("paye");
  }

  if (
    t.includes("nis") ||
    t.includes("nht") ||
    t.includes("national insurance") ||
    t.includes("national housing")
  ) {
    cats.push("nis");
  }

  if (
    t.includes("first time") ||
    t.includes("getting started") ||
    t.includes("new employer") ||
    t.includes("how to do payroll") ||
    t.includes("how to run payroll") ||
    t.includes("set up payroll") ||
    t.includes("setup guide") ||
    t.includes("first employee") ||
    t.includes("register for") ||
    t.includes("new tax year") ||
    t.includes("beginner")
  ) {
    cats.push("getting-started");
  }

  if (
    t.includes("software") ||
    t.includes("calculator") ||
    t.includes("automation") ||
    t.includes("automate") ||
    t.includes("switch") ||
    t.includes("migration") ||
    t.includes("excel") ||
    t.includes("template") ||
    t.includes("buyer")
  ) {
    cats.push("software");
  }

  return cats;
}

export default function BlogFilter({ posts }: { posts: BlogPost[] }) {
  const [active, setActive] = useState<CategoryKey>("all");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    let result = posts;

    if (active !== "all") {
      result = result.filter((p) => {
        const cats = categorizePost(p.title);
        return cats.includes(active);
      });
    }

    if (search.trim()) {
      const q = search.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          (p.subtitle && p.subtitle.toLowerCase().includes(q))
      );
    }

    return result;
  }, [posts, active, search]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: posts.length };
    for (const cat of CATEGORIES) {
      if (cat.key === "all") continue;
      counts[cat.key] = posts.filter((p) =>
        categorizePost(p.title).includes(cat.key)
      ).length;
    }
    return counts;
  }, [posts]);

  return (
    <div>
      {/* Search */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search articles..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm"
        />
      </div>

      {/* Category filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActive(cat.key)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
              active === cat.key
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            {cat.label}
            <span className="ml-1.5 opacity-70">
              {categoryCounts[cat.key] ?? 0}
            </span>
          </button>
        ))}
      </div>

      {/* Results count */}
      <p className="text-sm text-muted-foreground mb-4">
        Showing {filtered.length} of {posts.length} articles
        {search.trim() && (
          <>
            {" "}
            for &ldquo;{search.trim()}&rdquo;
          </>
        )}
      </p>

      {/* Post grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((post) => (
          <Link
            key={post.slug}
            className="no-underline border rounded-lg p-5 hover:shadow transition"
            href={`/blog/${post.slug}`}
          >
            <h2 className="text-lg font-semibold mb-1">{post.title}</h2>
            {post.subtitle && (
              <p className="text-sm text-muted-foreground">{post.subtitle}</p>
            )}
          </Link>
        ))}
        {filtered.length === 0 && (
          <div className="text-muted-foreground col-span-full py-8 text-center">
            No articles match your search. Try different keywords or clear your
            filters.
          </div>
        )}
      </div>
    </div>
  );
}
