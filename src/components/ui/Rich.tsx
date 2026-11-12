import { Fragment } from "react";

/**
 * Tiny inline markup used in page content:
 *   **text**       → medium weight (inherits colour)
 *   [[text]]       → orange semibold highlight
 *   [text](url)    → underlined link (external links open in a new tab)
 *   \n             → line break
 */
export default function Rich({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|\[\[[^\]]+\]\]|\[[^\]]+\]\([^)]+\))/g);
  return (
    <>
      {parts.map((p, i) => {
        if (p.startsWith("**")) return <span key={i} className="font-medium">{p.slice(2, -2)}</span>;
        if (p.startsWith("[[")) return <span key={i} className="font-semibold text-orange-300">{p.slice(2, -2)}</span>;
        const link = p.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (link) {
          const external = /^https?:/.test(link[2]);
          return (
            <a key={i} href={link[2]} className="underline hover:text-navy-300" {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
              {link[1]}
            </a>
          );
        }
        const lines = p.split("\n");
        return (
          <Fragment key={i}>
            {lines.map((l, j) => (
              <Fragment key={j}>
                {j > 0 && <br />}
                {l}
              </Fragment>
            ))}
          </Fragment>
        );
      })}
    </>
  );
}
