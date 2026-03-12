"use client";

export function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 bg-foreground text-background font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity print:hidden"
    >
      <span>🖨️</span> Print / Save as PDF
    </button>
  );
}
