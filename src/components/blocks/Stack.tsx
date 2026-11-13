
import { imageUrl } from "@/lib/image-url";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import Rich from "@/components/ui/Rich";
import { HLine, VLine } from "@/components/ui/Lines";
import { ButtonLink } from "@/components/ui/Button";
import RichContent, { type RichNode } from "./RichContent";
import { Section, type Bg } from "./Blocks";

export type StackEl =
  /** Title (426px column) beside a content flow (1062px column). */
  | { el: "split"; title: string; content: RichNode[]; gap?: number }
  | { el: "heading"; title: string; description?: string; align?: "center" | "left"; muted?: boolean }
  /** Rounded photo (504×373) + title + text, 3 per row (Visit Visa destinations). */
  | { el: "photoCards"; items: { image: string; title: string; text: string }[] }
  | { el: "line" }
  /** 28px navy sub-heading + intro paragraph (full width). */
  | { el: "sub"; title: string; text?: string }
  /** Cards with optional image on top (cream = #fdf5e9 "PR_Benefits"). */
  | { el: "cards"; items: { image?: string; title: string; text: string | string[] }[]; cols?: 2 | 3 | 4; variant?: "cream" | "white" | "plain"; imageAspect?: string }
  /** Cream step cards ("Step_PR"): orange label + text. */
  | { el: "stepCards"; items: { label: string; text: string }[] }
  /** White panels (p28) each holding a content flow ("Frame 132/133…" program cards). */
  | { el: "panels"; items: RichNode[][]; gap?: number }
  | { el: "content"; content: RichNode[]; gap?: number }
  | { el: "button"; label: string; href: string }
  /** White cards with photo, logo and name (Figma institution cards, 381px). */
  | { el: "logoCards"; items: { image: string; logo: string; logoSize: [number, number]; name: string }[] }
  /** Row of illustrated features (80px icon + label) separated by vertical rules. */
  | { el: "iconFeatures"; items: { icon: string; text: string }[] }
  /** Orange-header table (Figma points grid). */
  | { el: "table"; headers: string[]; rows: string[][] };

const cardBg = { cream: "bg-[#fdf5e9] border-[0.5px] border-orange-200", white: "bg-light-50", plain: "bg-[#fafafa] border-[0.5px] border-grey-50" };

function El({ e }: { e: StackEl }) {
  switch (e.el) {
    case "split":
      return (
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-[4.5rem]">
          <h2 className="t-display1 font-medium text-dark-300 lg:w-[26.625rem] lg:shrink-0">
            <Rich text={e.title} />
          </h2>
          <RichContent nodes={e.content} gap={e.gap ?? 32} className="min-w-0 flex-1" />
        </div>
      );
    case "heading":
      return <SectionHeading title={e.title} description={e.description} descTone={e.muted ? "grey" : "dark"} align={e.align} />;
    case "photoCards":
      return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {e.items.map((c, i) => (
            <div key={i} className="flex flex-col gap-[1.5625rem]">
              <div className="card-hover relative aspect-[504/373] w-full overflow-hidden rounded-sm">
                <Image src={c.image} alt={c.title} fill sizes="(min-width:1024px) 30vw, (min-width:640px) 50vw, 100vw" className="object-cover" />
              </div>
              <div className="flex flex-col gap-[1.3125rem]">
                <h3 className="t-h2 font-semibold text-dark-300">{c.title}</h3>
                <p className="t-body1 text-dark-200">{c.text}</p>
              </div>
            </div>
          ))}
        </div>
      );
    case "line":
      return <HLine src="/icons/line-h-navy.svg" className="opacity-40" />;
    case "sub":
      return (
        <div className="flex flex-col gap-5">
          <h3 className="t-h1 font-semibold text-navy-300">{e.title}</h3>
          {e.text && (
            <p className="t-body1 text-dark-200">
              <Rich text={e.text} />
            </p>
          )}
        </div>
      );
    case "cards": {
      const cols = { 2: "md:grid-cols-2", 3: "md:grid-cols-2 lg:grid-cols-3", 4: "sm:grid-cols-2 lg:grid-cols-4" }[e.cols ?? 4];
      return (
        <div className={`grid grid-cols-1 gap-6 ${cols}`}>
          {e.items.map((c, i) => (
            <div key={i} className={`card-hover flex flex-col overflow-hidden rounded-sm ${cardBg[e.variant ?? "cream"]}`}>
              {c.image && (
                <div
                  className={`relative w-full shrink-0 ${e.imageAspect ? "" : "h-[13.4375rem]"}`}
                  style={e.imageAspect ? { aspectRatio: e.imageAspect } : undefined}
                >
                  <Image src={c.image} alt="" fill sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw" className="object-cover" />
                </div>
              )}
              <div className="flex flex-col gap-7 p-7">
                <h3 className="t-h3 font-semibold text-dark-300">{c.title}</h3>
                {(Array.isArray(c.text) ? c.text : [c.text]).map((t, i) => (
                  <p key={i} className="t-body1 text-dark-300">
                    <Rich text={t} />
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      );
    }
    case "stepCards":
      return (
        <div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:[grid-template-columns:repeat(var(--n),minmax(0,1fr))]"
          style={{ "--n": e.items.length } as React.CSSProperties}
        >
          {e.items.map((s) => (
            <div key={s.label} className="card-hover flex flex-col gap-7 rounded-sm bg-[#fdf5e9] p-6">
              <p className="t-h2 font-semibold text-orange-300">{s.label}</p>
              <p className="t-body2 text-dark-300">
                <Rich text={s.text} />
              </p>
            </div>
          ))}
        </div>
      );
    case "panels":
      return (
        <div className="flex flex-col gap-4">
          {e.items.map((nodes, i) => (
            <div key={i} className="card-hover rounded-sm bg-light-50 p-5 md:p-7">
              <RichContent nodes={nodes} gap={e.gap ?? 24} />
            </div>
          ))}
        </div>
      );
    case "content":
      return <RichContent nodes={e.content} gap={e.gap ?? 24} />;
    case "logoCards":
      return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {e.items.map((u, i) => (
            <div key={i} className="card-hover flex flex-col gap-5 rounded-sm bg-light-50 p-5">
              <div className="relative aspect-[341/368] w-full overflow-hidden">
                <Image src={u.image} alt={u.name} fill sizes="(min-width:1024px) 20vw, (min-width:640px) 50vw, 100vw" className="object-cover" />
              </div>
              <img
                alt=""
                src={imageUrl(u.logo)}
                width={u.logoSize[0]}
                height={u.logoSize[1]}
                style={{ width: `${u.logoSize[0] / 16}rem`, height: `${u.logoSize[1] / 16}rem` }}
                className="object-contain"
              />
              <p className="t-label2 font-medium text-dark-300">{u.name}</p>
            </div>
          ))}
        </div>
      );
    case "iconFeatures":
      return (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:flex lg:items-stretch lg:justify-between lg:gap-[3.75rem]">
          {e.items.map((f, i) => (
            <div key={i} className="contents">
              {i > 0 && <VLine src="/icons/line-h-navy.svg" className="hidden opacity-40 lg:flex" />}
              <div className="flex flex-col items-start gap-11 lg:w-[18.75rem]">
                <img alt="" src={f.icon} width={80} height={80} className="size-20" />
                <p className="t-h3 font-medium text-dark-300">{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      );
    case "table":
      return (
        <div className="w-full overflow-x-auto">
          <table className="w-full min-w-[36rem] border-collapse text-left">
            <thead>
              <tr>
                {e.headers.map((h) => (
                  <th key={h} className="t-label2 bg-orange-300 px-7 py-3.5 font-medium text-light-50">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {e.rows.map((r, i) => (
                <tr key={i}>
                  {r.map((c, j) => (
                    <td key={j} className="t-label2 border-[0.5px] border-grey-100 px-7 py-3.5 align-middle font-medium text-dark-300">
                      <Rich text={c} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "button":
      return (
        <div className="flex justify-center">
          <ButtonLink href={e.href}>{e.label}</ButtonLink>
        </div>
      );
  }
}

/** A Figma section built from a sequence of elements, sharing one 60px-padded container. */
export function Stack({ bg = "none", els, gap = 40 }: { bg?: Bg; els: StackEl[]; gap?: number }) {
  return (
    <Section bg={bg} className="!gap-0">
      <div className="flex flex-col" style={{ gap: `${gap / 16}rem` }}>
        {els.map((e, i) => (
          <El key={i} e={e} />
        ))}
      </div>
    </Section>
  );
}

/** Text column (760) beside an image (760) that stretches to the section height. */
export function MediaSplit({
  title,
  content,
  image,
  imageAlt = "",
  imageSide = "right",
  bg = "none",
}: {
  title: string;
  content: RichNode[];
  image: string;
  imageAlt?: string;
  imageSide?: "left" | "right";
  bg?: Bg;
}) {
  return (
    <Section bg={bg}>
      <div className={`flex flex-col gap-10 lg:items-stretch ${imageSide === "left" ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
        <div className="flex min-w-0 flex-1 flex-col gap-5">
          <h2 className="t-display1 font-medium text-dark-300">
            <Rich text={title} />
          </h2>
          <RichContent nodes={content} gap={20} />
        </div>
        <div className="relative aspect-[760/530] w-full shrink-0 overflow-hidden rounded-sm lg:aspect-auto lg:w-[47.5rem]">
          <Image src={image} alt={imageAlt} fill sizes="(min-width:1024px) 40vw, 100vw" className="object-cover" />
        </div>
      </div>
    </Section>
  );
}
