/**
 * Safe JSON-LD serialization for inline <script type="application/ld+json"> blocks.
 *
 * JSON.stringify does NOT escape "</script>", which lets an attacker close the
 * script tag early and inject arbitrary HTML/JS.  This function escapes the
 * three characters that can break out of an inline script context:
 *   <  →  \u003C
 *   >  →  \u003E
 *   &  →  \u0026
 *
 * The output is valid JSON (Unicode escapes are part of the JSON spec) and
 * safe to embed directly in dangerouslySetInnerHTML.
 */
export function safeJsonLd(value: unknown): string {
  return JSON.stringify(value)
    .replace(/</g, "\\u003C")
    .replace(/>/g, "\\u003E")
    .replace(/&/g, "\\u0026");
}
