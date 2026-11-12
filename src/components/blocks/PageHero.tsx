
import { imageUrl } from "@/lib/image-url";
import Image from "next/image";
import Link from "next/link";
import Rich from "@/components/ui/Rich";
import HeroForm, { type HeroFormProps } from "./HeroForm";

export type Crumb = { label: string; href?: string };

export type PageHeroProps = {
  image: string;
  breadcrumb: Crumb[];
  title: string;
  /** Figma y positions (px within the 794px hero) for each left-column element at desktop. */
  tops: { breadcrumb?: number; title: number; badge?: number; text?: number };
  /** Figma title box width in px (default 396). */
  titleWidth?: number;
  titleWeight?: "medium" | "semibold";
  badge?: boolean;
  text?: string;
  /** Figma text box width in px. */
  textWidth?: number;
  form?: HeroFormProps & { top?: number };
};

const rem = (px: number) => `${px / 16}rem`;

export function Breadcrumb({ items, className = "" }: { items: Crumb[]; className?: string }) {
  return (
    <nav aria-label="Breadcrumb" className={`flex flex-wrap items-center ${className}`}>
      {items.map((c, i) => {
        const last = i === items.length - 1;
        return (
          <span key={i} className="flex items-center">
            {i > 0 && <span className="t-label3 px-0.5 py-2 text-light-50">/</span>}
            {c.href && !last ? (
              <Link href={c.href} className="t-label3 px-0.5 py-2 text-light-50 hover:text-orange-300">
                {c.label}
              </Link>
            ) : (
              <span className={`t-label3 px-0.5 py-2 text-light-50 ${last && items.length > 1 ? "font-medium" : ""}`} aria-current={last ? "page" : undefined}>
                {c.label}
              </span>
            )}
          </span>
        );
      })}
    </nav>
  );
}

export function CiccBadge({ className = "" }: { className?: string }) {
  return (
    <div className={`flex w-[11.25rem] flex-col items-center ${className}`}>
      <img alt="CICC licensed" src={imageUrl("/images/cicc-badge.png")} width={174} height={57} className="h-[3.5625rem] w-[10.875rem]" />
      <p className="t-body2 w-full font-medium text-light-50">We are CICC Licensed</p>
    </div>
  );
}

/** Inner-page hero (Figma "Frame 114/115", 1920×794). Desktop elements sit at their Figma y positions. */
export default function PageHero({ image, breadcrumb, title, tops, titleWidth = 396, titleWeight = "medium", badge, text, textWidth = 438, form }: PageHeroProps) {
  const pos = (top?: number) => (top === undefined ? undefined : ({ "--top": rem(top) } as React.CSSProperties));
  const abs = "lg:absolute lg:left-[var(--gutter)] lg:top-[var(--top)]";
  return (
    <section className="relative overflow-hidden bg-navy-500">
      <Image src={image} alt="" fill priority sizes="100vw" className="object-cover object-[65%_center] lg:object-center" />
      <div className="absolute inset-0 bg-navy-500/55 lg:hidden" aria-hidden />

      <div className="container-page relative flex flex-col gap-6 py-12 md:py-16 lg:h-[49.625rem] lg:py-0">
        {tops.breadcrumb !== undefined && (
          <div className={abs} style={pos(tops.breadcrumb)}>
            <Breadcrumb items={breadcrumb} />
          </div>
        )}
        {badge && tops.badge !== undefined && tops.badge < tops.title && (
          <div className={abs} style={pos(tops.badge)}>
            <CiccBadge />
          </div>
        )}
        <h1
          className={`t-display text-light-50 ${titleWeight === "semibold" ? "font-semibold" : "font-medium"} ${abs}`}
          style={{ ...pos(tops.title), maxWidth: rem(titleWidth) }}
        >
          <Rich text={title} />
        </h1>
        {text && tops.text !== undefined && (
          <p className={`t-label3 text-light-50 ${abs}`} style={{ ...pos(tops.text), maxWidth: rem(textWidth) }}>
            <Rich text={text} />
          </p>
        )}
        {badge && tops.badge !== undefined && tops.badge > tops.title && (
          <div className={abs} style={pos(tops.badge)}>
            <CiccBadge />
          </div>
        )}
        {form && (
          <div
            id="assessment"
            className="w-full max-w-[35.125rem] scroll-mt-32 lg:absolute lg:top-[var(--top)] lg:right-[var(--gutter)] lg:w-[35.125rem]"
            style={pos(form.top ?? 239)}
          >
            <HeroForm {...form} />
          </div>
        )}
      </div>
    </section>
  );
}
