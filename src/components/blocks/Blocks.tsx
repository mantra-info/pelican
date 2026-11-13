import VideoDialogButton from "@/components/ui/VideoDialogButton";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import Rich from "@/components/ui/Rich";
import { ButtonLink, TextLink } from "@/components/ui/Button";
import { HLine, VLine } from "@/components/ui/Lines";

export type Bg = "white" | "page" | "navy50" | "none";
const bgClass: Record<Bg, string> = { white: "bg-light-50", page: "bg-light-100", navy50: "bg-navy-50", none: "" };

/** Standard section shell: 60px vertical padding, 40px gap (Figma frames at 1920 with 180px side padding). */
export function Section({ bg = "none", children, className = "", id }: { bg?: Bg; children: React.ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={bgClass[bg]}>
      <div className={`container-page flex flex-col gap-10 py-[3.75rem] ${className}`}>{children}</div>
    </section>
  );
}

/* ───────────── Intro split: title (426) | paragraphs (1062), optional wide image ───────────── */
export type IntroSplitProps = {
  title: string;
  paragraphs: string[];
  image?: { src: string; alt: string; aspect?: string };
  bg?: Bg;
  /** Optional CTA under the paragraphs. */
  cta?: { label: string; href: string };
};
export function IntroSplit({ title, paragraphs, image, bg = "none", cta }: IntroSplitProps) {
  return (
    <Section bg={bg}>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-[4.5rem]">
        <h2 className="t-display1 font-medium text-dark-300 lg:w-[26.625rem] lg:shrink-0">
          <Rich text={title} />
        </h2>
        <div className="flex min-w-0 flex-1 flex-col items-start gap-8">
          {paragraphs.map((p, i) => (
            <p key={i} className="t-body1 text-dark-300">
              <Rich text={p} />
            </p>
          ))}
          {cta && <ButtonLink href={cta.href}>{cta.label}</ButtonLink>}
        </div>
      </div>
      {image && (
        <div className="relative w-full overflow-hidden rounded-sm" style={{ aspectRatio: image.aspect ?? "1560/417" }}>
          <Image src={image.src} alt={image.alt} fill sizes="(min-width:1024px) 85vw, 100vw" className="object-cover" />
        </div>
      )}
    </Section>
  );
}

/* ───────────── Numbered cards (Canada_Pathway etc.) ───────────── */
export type NumberedCard = { title: string; text: string | string[]; link?: { label: string; href: string }; meta?: string };
export function NumberedCards({
  title,
  description,
  cards,
  bg = "navy50",
  cols = 3,
  numbered = true,
  descTone = "dark",
}: {
  title?: string;
  description?: string;
  cards: NumberedCard[];
  bg?: Bg;
  cols?: 2 | 3 | 4;
  numbered?: boolean;
  descTone?: "grey" | "dark";
}) {
  const grid = { 2: "md:grid-cols-2", 3: "md:grid-cols-2 lg:grid-cols-3", 4: "md:grid-cols-2 lg:grid-cols-4" }[cols];
  return (
    <Section bg={bg}>
      {title && <SectionHeading title={title} description={description} descTone={descTone} />}
      <div className={`grid grid-cols-1 gap-6 ${grid}`}>
        {cards.map((c, i) => (
          <div key={i} className="card-hover flex flex-col items-start justify-between gap-8 rounded-md border-[0.5px] border-grey-50 bg-[#fafafa] p-5">
            <div className="flex w-full flex-col gap-5">
              {numbered && (
                <span className="t-body3 flex size-8 items-center justify-center rounded-sm bg-orange-300 font-medium text-light-50">
                  {String(i + 1).padStart(2, "0")}
                </span>
              )}
              <div className="flex flex-col gap-6">
                <h3 className="t-h2 font-semibold text-dark-300">{c.title}</h3>
                {c.meta && (
                  <p className="flex items-center gap-2">
                    <img alt="" src="/icons/date.svg" width={24} height={24} className="size-6 shrink-0" />
                    <span className="t-label2 font-semibold text-navy-300">{c.meta}</span>
                  </p>
                )}
                {(Array.isArray(c.text) ? c.text : [c.text]).map((t, j) => (
                  <p key={j} className="t-body1 text-dark-300">
                    <Rich text={t} />
                  </p>
                ))}
              </div>
            </div>
            {c.link && (
              <TextLink href={c.link.href} color="navy">
                {c.link.label}
              </TextLink>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ───────────── Tick list item (Figma "Eligiblity") ───────────── */
export function TickItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2.5 py-4">
      <img alt="" src="/icons/tick-green.svg" width={20} height={20} className="mt-[0.3125rem] size-5 shrink-0" />
      <span className="t-body1 min-w-0 flex-1 text-dark-300">
        <Rich text={text} />
      </span>
    </li>
  );
}

/* ───────────── Two tick-list columns (Eligibility & Benefits) ───────────── */
export type TickColumn = { title: string; intro?: string; items: string[] };
export function CheckColumns({
  title,
  description,
  columns,
  cta,
  bg = "page",
}: {
  title: string;
  description?: string;
  columns: TickColumn[];
  cta?: { label: string; href: string };
  bg?: Bg;
}) {
  return (
    <Section bg={bg} className="items-center">
      <SectionHeading title={title} description={description} descTone="dark" />
      <HLine src="/icons/line-h-navy.svg" className="opacity-40" />
      {Array.from({ length: Math.ceil(columns.length / 2) }, (_, r) => columns.slice(r * 2, r * 2 + 2)).map((row, r) => (
      <div key={r} className="flex w-full flex-col gap-10 lg:flex-row lg:items-stretch lg:gap-[3.75rem]">
        {row.map((col, i) => (
          <div key={col.title} className="contents">
            {i > 0 && <VLine src="/icons/line-h-navy.svg" className="hidden opacity-40 lg:flex" />}
            <div className="flex min-w-0 flex-1 flex-col gap-10">
              <div className="flex flex-col gap-5">
                <h3 className="t-h1 font-semibold text-navy-300">{col.title}</h3>
                {col.intro && (
                  <p className="t-body1 text-dark-200">
                    <Rich text={col.intro} />
                  </p>
                )}
              </div>
              <ul className="flex flex-col">
                {col.items.map((it) => (
                  <TickItem key={it} text={it} />
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      ))}
      {cta && <ButtonLink href={cta.href}>{cta.label}</ButtonLink>}
    </Section>
  );
}

/* ───────────── Alternating navy/orange step blocks ───────────── */
export type Step = { title: string; text?: string | string[] };
export function StepBlocks({
  title,
  description,
  steps,
  bg = "navy50",
  large = false,
}: {
  title?: string;
  description?: string;
  steps: Step[];
  bg?: Bg;
  /** Large variant (About "Our Mission"): display1 titles, two wide blocks. */
  large?: boolean;
}) {
  const cols = steps.length >= 4 ? "md:grid-cols-2 lg:grid-cols-4" : steps.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2";
  return (
    <Section bg={bg}>
      {title && <SectionHeading title={title} description={description} descTone="dark" />}
      <div className={`grid grid-cols-1 ${cols}`}>
        {steps.map((s, i) => {
          const navy = i % 2 === 0;
          return (
            <div key={i} className={`flex flex-col gap-4 p-8 ${navy ? "bg-navy-300" : "bg-orange-300"}`}>
              <div className="flex flex-col gap-7">
                <p className={`t-h2 font-semibold ${navy ? "text-orange-300" : "text-navy-300"}`}>{String(i + 1).padStart(2, "0")}</p>
                <h3 className={large ? "t-display1 font-medium text-light-50" : "t-h2 font-semibold text-light-50"}>{s.title}</h3>
                {s.text &&
                  (Array.isArray(s.text) ? s.text : [s.text]).map((t, j) => (
                    <p key={j} className="t-body1 text-light-50">
                      <Rich text={t} />
                    </p>
                  ))}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

/* ───────────── Image cards (About "Why Choose", Services1) ───────────── */
export type ImageCard = { title: string; text: string; image: string; link?: { label: string; href: string } };
export function ImageCards({
  title,
  description,
  cards,
  bg = "none",
  cols = 3,
}: {
  title?: string;
  description?: string;
  cards: ImageCard[];
  bg?: Bg;
  cols?: 3 | 4;
}) {
  return (
    <Section bg={bg}>
      {title && <SectionHeading title={title} description={description} />}
      <div className={`grid grid-cols-1 gap-6 sm:grid-cols-2 ${cols === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
        {cards.map((c) => (
          <article key={c.title} className="card-hover flex flex-col overflow-hidden rounded-sm bg-light-50">
            <div className="relative h-[13.4375rem] w-full">
              <Image src={c.image} alt="" fill sizes="(min-width:1024px) 30vw, (min-width:640px) 50vw, 100vw" className="object-cover" />
            </div>
            <div className="flex flex-1 flex-col items-start gap-4 p-7">
              <span className="flex items-center rounded-full p-0.5">
                <img alt="" src="/icons/flight.svg" width={32} height={32} className="size-8" />
              </span>
              <div className="flex w-full flex-1 flex-col gap-7 text-dark-300">
                <h3 className="t-h2 font-semibold">{c.title}</h3>
                <p className="t-body1">
                  <Rich text={c.text} />
                </p>
              </div>
              {c.link && <TextLink href={c.link.href}>{c.link.label}</TextLink>}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

/* ───────────── Video feature (Figma "Video" instance) ───────────── */
export function VideoFeature({
  title,
  paragraphs,
  thumbnail,
  label,
  videoId,
  videoUrl,
  captionsUrl,
  bg = "navy50",
}: {
  title: string;
  paragraphs: string[];
  thumbnail: string;
  label: string;
  videoId?: string;
  videoUrl?: string;
  captionsUrl?: string;
  bg?: Bg;
}) {
  return (
    <Section bg={bg}>
      <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
        <div className="flex min-w-0 flex-1 flex-col gap-5 text-dark-300 lg:min-h-[25.5rem]">
          <h2 className="t-display1 font-medium">{title}</h2>
          <div className="flex flex-col gap-8">
            {paragraphs.map((p, i) => (
              <p key={i} className="t-body1">
                <Rich text={p} />
              </p>
            ))}
          </div>
        </div>
        {/* 760×408 player frame */}
        <VideoDialogButton title={label} videoId={videoId} videoUrl={videoUrl} captionsUrl={captionsUrl}
          type="button"
          aria-label={`Play video: ${label}`}
          className="group relative aspect-[760/408] w-full shrink-0 cursor-pointer overflow-hidden rounded-md lg:w-[47.5rem]"
        >
          <Image src={thumbnail} alt="" fill sizes="(min-width:1024px) 40vw, 100vw" className="object-cover" />
          <span className="t-h2 absolute top-[7.1%] left-[6.32%] w-[28.55%] text-left font-semibold text-light-50">{label}</span>
          <span className="absolute top-[37.99%] left-[43.29%] flex aspect-square w-[13.29%] items-center justify-center rounded-full bg-orange-300 p-[1.3%] transition-transform group-hover:scale-105">
            <img alt="" src="/icons/video-play-large.svg" width={81} height={81} className="size-full" />
          </span>
          <span className="absolute top-[87.5%] left-[2.89%] h-[0.73%] w-[93.68%] rounded-[0.5625rem] bg-[rgba(217,217,217,0.45)]" />
          <img alt="" src="/icons/video-play-small.svg" width={21} height={21} className="absolute top-[90.93%] left-[2.5%] w-[2.76%]" />
          <span className="t-body3 absolute top-[90.69%] left-[5.26%] rounded-[2rem] px-2 py-1 font-medium text-light-50">0.00/05.50</span>
          <img alt="" src="/icons/video-fullscreen.svg" width={17} height={17} className="absolute top-[90.93%] left-[94.47%] w-[2.24%]" />
        </VideoDialogButton>
      </div>
    </Section>
  );
}
