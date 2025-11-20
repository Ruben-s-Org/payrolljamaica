"use client";

import { useCallback, useEffect, useRef } from "react";

const FORM_ID = "9YAcx65V79us";
const SCRIPT_SRC = "https://server.fillout.com/embed/v1/";

function ensureFilloutLoaded(): Promise<void> {
  return new Promise((resolve) => {
    const w = globalThis as any;
    // If already ready
    if (w && w.Fillout && typeof w.Fillout.open === "function") {
      resolve();
      return;
    }
    // Check for an existing script tag
    let script = document.querySelector(`script[src="${SCRIPT_SRC}"]`) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.src = SCRIPT_SRC;
      script.async = true;
      document.body.appendChild(script);
    }
    // Resolve when Fillout becomes available (poll briefly)
    let tries = 0;
    const maxTries = 40; // ~2s @ 50ms
    const iv = setInterval(() => {
      if (w && w.Fillout && typeof w.Fillout.open === "function") {
        clearInterval(iv);
        resolve();
      } else if (++tries >= maxTries) {
        clearInterval(iv);
        resolve(); // resolve anyway; fallback will try container click
      }
    }, 50);
  });
}

export async function openFilloutPopup() {
  const w = globalThis as any;
  await ensureFilloutLoaded();
  if (w && w.Fillout && typeof w.Fillout.open === "function") {
    try {
      w.Fillout.open({ formId: FORM_ID, size: "large" });
      return true;
    } catch (_) {
      // continue to fallback
    }
  }
  const container = document.querySelector(
    '[data-fillout-id="9YAcx65V79us"][data-fillout-embed-type="popup"]',
  ) as HTMLElement | null;
  if (container) {
    container.click();
    return true;
  }
  return false;
}

export default function FilloutGlobalHandler() {
  const handlingRef = useRef(false);

  const trigger = useCallback((e: Event & { button?: number; metaKey?: boolean; ctrlKey?: boolean; shiftKey?: boolean; altKey?: boolean }) => {
    const target = (e.target as HTMLElement | null);
    if (!target) return;

    // Find nearest actionable element
    const actionable = target.closest("a, button, [role=button]") as HTMLElement | null;
    if (!actionable) return;

    // Allow opt-out via class
    if (actionable.classList.contains("no-fillout")) return;

    // Avoid re-entrancy
    if (handlingRef.current) return;
    handlingRef.current = true;

    // Prevent default navigation / action and open the modal instead
    e.preventDefault();
    e.stopImmediatePropagation?.();
    (e as any).stopPropagation?.();
    openFilloutPopup().finally(() => {
      handlingRef.current = false;
    });
  }, []);

  useEffect(() => {
    // Neutralize anchors so they don't navigate away
    const neutralizeAnchors = (root: ParentNode | Document = document) => {
      const anchors = root.querySelectorAll<HTMLAnchorElement>("a[href]");
      anchors.forEach((a) => {
        if (a.classList.contains("no-fillout")) return;
        if (a.getAttribute("href") !== "#") {
          a.setAttribute("href", "#");
        }
        // Remove target to avoid new tabs
        if (a.hasAttribute("target")) a.removeAttribute("target");
        // Mark as role button for accessibility
        a.setAttribute("role", "button");
      });
    };
    neutralizeAnchors();
    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        if (m.type === "childList") {
          m.addedNodes.forEach((n) => {
            if (n.nodeType === Node.ELEMENT_NODE) {
              neutralizeAnchors(n as ParentNode);
            }
          });
        } else if (m.type === "attributes" && (m.target as Element).tagName === "A") {
          neutralizeAnchors(document);
        }
      }
    });
    mo.observe(document.documentElement, {
      childList: true,
      attributes: true,
      subtree: true,
      attributeFilter: ["href", "class", "target"],
    });
    // Use capture to intercept before Next.js Link handles navigation
    const onClick = (e: MouseEvent) => {
      // Ignore modified clicks
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      trigger(e);
    };
    const onMouseDown = (e: MouseEvent) => {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      trigger(e);
    };
    const onPointerUp = (e: PointerEvent) => {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      trigger(e as any);
    };
    const onPointerDown = (e: PointerEvent) => {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      trigger(e as any);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      if (e.key === "Enter" || e.key === " ") trigger(e as any);
    };
    const onTouchStart = (e: TouchEvent) => {
      trigger(e as any);
    };
    const onTouchEnd = (e: TouchEvent) => {
      trigger(e as any);
    };

    document.addEventListener("click", onClick, true);
    document.addEventListener("mousedown", onMouseDown, true);
    document.addEventListener("pointerup", onPointerUp, true);
    document.addEventListener("pointerdown", onPointerDown, true);
    document.addEventListener("keydown", onKeyDown, true);
    document.addEventListener("touchstart", onTouchStart, true);
    document.addEventListener("touchend", onTouchEnd, true);
    return () => {
      document.removeEventListener("click", onClick, true);
      document.removeEventListener("mousedown", onMouseDown, true);
      document.removeEventListener("pointerup", onPointerUp, true);
      document.removeEventListener("pointerdown", onPointerDown, true);
      document.removeEventListener("keydown", onKeyDown, true);
      document.removeEventListener("touchstart", onTouchStart, true);
      document.removeEventListener("touchend", onTouchEnd, true);
      mo.disconnect();
    };
  }, [trigger]);

  return null;
}
