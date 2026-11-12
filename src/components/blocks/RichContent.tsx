import Image from "next/image";
import Rich from "@/components/ui/Rich";
import { ButtonLink } from "@/components/ui/Button";

/**
 * Content atoms used inside long-form sections:
 *  p      body1 dark text            muted  body1 grey (#777) label
 *  h      20px semibold navy-200     title  28px semibold (orange or navy) card title
 *  ticks  green-tick list (dense = 4px rows as in program cards)
 *  chips  flight-icon chips in a row (cream = #fdf5e9 fill)
 *  chip   single full-width cream chip (sub-programme heading)
 *  button primary CTA            image  rounded image
 */
export type RichNode =
  | string
  | { p: string; tone?: "dark" | "grey" }
  | { muted: string }
  | { h: string }
  | { title: string; color?: "orange" | "navy" }
  | { ticks: string[]; dense?: boolean }
  | { chips: string[]; cream?: boolean; cols?: 3 | 4 | 5 }
  | { chip: string }
  | { button: { label: string; href: string } }
  | { image: { src: string; alt?: string; aspect: string } }
  | { group: RichNode[]; gap?: number };

function renderTick(text: string, i: number, dense?: boolean) {
  return (
    <li key={i} className={`flex items-start gap-2.5 ${dense ? "py-1" : "py-4"}`}>
      <img alt="" src="/icons/tick-green.svg" width={20} height={20} className="mt-[0.3125rem] size-5 shrink-0" />
      <span className="t-body1 min-w-0 flex-1 text-dark-300">
        <Rich text={text} />
      </span>
    </li>
  );
}

export function Chip({ label, cream }: { label: string; cream?: boolean }) {
  return (
    <span className={`flex items-center gap-2 rounded-sm px-3 py-2.5 ${cream ? "bg-[#fdf5e9]" : ""}`}>
      <span className="flex items-center rounded-full p-0.5">
        <img alt="" src="/icons/flight.svg" width={32} height={32} className="size-8" />
      </span>
      <span className="t-body1 font-semibold text-dark-300">{label}</span>
    </span>
  );
}

function Node({ n }: { n: RichNode }) {
  if (typeof n === "string")
    return (
      <p className="t-body1 text-dark-300">
        <Rich text={n} />
      </p>
    );
  if ("p" in n)
    return (
      <p className={`t-body1 ${n.tone === "grey" ? "text-dark-200" : "text-dark-300"}`}>
        <Rich text={n.p} />
      </p>
    );
  if ("muted" in n) return <p className="t-body1 text-dark-100">{n.muted}</p>;
  if ("h" in n) return <h4 className="t-h3 font-semibold text-navy-200">{n.h}</h4>;
  if ("title" in n) return <h3 className={`t-h1 font-semibold ${n.color === "navy" ? "text-navy-300" : "text-orange-300"}`}>{n.title}</h3>;
  if ("ticks" in n) return <ul className={`flex flex-col ${n.dense ? "gap-1" : ""}`}>{n.ticks.map((t, i) => renderTick(t, i, n.dense))}</ul>;
  if ("chips" in n)
    return (
      <div
        className={`grid gap-x-6 gap-y-2 ${
          n.cols === 5
            ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-y-6"
            : `grid-cols-1 md:grid-cols-3 ${n.cols === 4 ? "sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-6" : ""}`
        }`}
      >
        {n.chips.map((c, i) => (
          <Chip key={i} label={c} cream={n.cream} />
        ))}
      </div>
    );
  if ("chip" in n) return <Chip label={n.chip} cream />;
  if ("button" in n) return <ButtonLink href={n.button.href} className="self-start">{n.button.label}</ButtonLink>;
  if ("image" in n)
    return (
      <div className="relative w-full overflow-hidden rounded-sm" style={{ aspectRatio: n.image.aspect }}>
        <Image src={n.image.src} alt={n.image.alt ?? ""} fill sizes="(min-width:1024px) 60vw, 100vw" className="object-cover" />
      </div>
    );
  if ("group" in n) return <RichContent nodes={n.group} gap={n.gap ?? 16} />;
  return null;
}

/** Renders a vertical flow of content atoms with a Figma gap (px). */
export default function RichContent({ nodes, gap = 24, className = "" }: { nodes: RichNode[]; gap?: number; className?: string }) {
  return (
    <div className={`flex flex-col ${className}`} style={{ gap: `${gap / 16}rem` }}>
      {nodes.map((n, i) => (
        <Node key={i} n={n} />
      ))}
    </div>
  );
}
