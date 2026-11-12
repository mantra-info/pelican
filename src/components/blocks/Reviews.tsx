"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";

export type Review = { rating: string; quote: string; name: string };

export const defaultReviews: Review[] = [
  { rating: "4.5", quote: "“I found Pelican Migration Consultants very impressive and I will definitely recommend pelican migration to others.”", name: "Ranjan Mathew" },
  { rating: "4.8", quote: "“The team was incredibly helpful and made the entire migration process smooth and stress-free.”", name: "Anita Kapoor" },
  { rating: "4.7", quote: "“Professional service with clear communication throughout. Highly recommend Pelican Migration.”", name: "Michael Tan" },
  { rating: "4.9", quote: "“Expert advice and personalized attention helped me achieve my migration goals quickly.”", name: "Sofia Hernandez" },
  { rating: "4.6", quote: "“Reliable and efficient consultants who genuinely care about their clients' success.”", name: "James Wu" },
];

/** Orange reviews carousel (Figma "Frame 120", Review cards 382×255). */
export default function Reviews({ title, reviews = defaultReviews }: { title: string; reviews?: Review[] }) {
  const track = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const update = useCallback(() => {
    const el = track.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  const scrollBy = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    el.scrollBy({ left: dir * (card ? card.offsetWidth + 24 : el.clientWidth * 0.8), behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-orange-300">
      <img
        alt=""
        src="/images/world-map-dots-orange.svg"
        width={1010}
        height={527}
        className="pointer-events-none absolute top-px left-[calc(50%-28.4375rem)] h-[32.9375rem] w-[63.125rem] max-w-none -translate-x-1/2"
      />
      <div className="relative flex flex-col gap-10 py-[3.75rem]">
        <div className="container-page">
          <SectionHeading tone="light" bold title={title} />
        </div>
        <div className="flex flex-col gap-7">
          <div ref={track} onScroll={update} className="no-scrollbar bleed-start flex snap-x snap-mandatory gap-6 overflow-x-auto pr-[var(--gutter)]">
            {reviews.map((r) => (
              <ReviewCard key={r.name} review={r} className="w-[85vw] max-w-[23.875rem] shrink-0 snap-start sm:w-[23.875rem]" />
            ))}
          </div>
          <div className="container-page flex items-center justify-center gap-5">
            <button
              type="button"
              aria-label="Previous reviews"
              onClick={() => scrollBy(-1)}
              disabled={!canPrev}
              className="flex cursor-pointer items-center rounded-sm border border-light-50 p-2 transition-opacity disabled:cursor-default disabled:opacity-50"
            >
              <img alt="" src="/icons/arrow-back.svg" width={32} height={32} className="size-8" />
            </button>
            <button
              type="button"
              aria-label="Next reviews"
              onClick={() => scrollBy(1)}
              disabled={!canNext}
              className="flex cursor-pointer items-center rounded-sm border border-light-50 p-2 transition-opacity disabled:cursor-default disabled:opacity-50"
            >
              <img alt="" src="/icons/arrow-forward.svg" width={32} height={32} className="size-8" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/** White review card (Figma "Review", 382px): rating pill, quote, avatar initial + name. */
export function ReviewCard({ review: r, className = "" }: { review: Review; className?: string }) {
  return (
    <figure data-card className={`flex min-h-[15.9375rem] flex-col justify-between gap-6 rounded-sm bg-light-50 p-8 ${className}`}>
      <div className="flex flex-col gap-4">
        {r.rating && <span className="flex w-fit items-center gap-[0.1875rem] rounded-sm border-[0.5px] border-[#95c476] bg-[#edf5e7] px-1 py-0.5">
          <img alt="" src="/icons/star-green.svg" width={18} height={18} className="size-[1.125rem]" />
          <span className="t-label3 font-medium text-[#499a13]">{r.rating}</span>
        </span>}
        <blockquote className="t-body1 text-dark-300">{r.quote}</blockquote>
      </div>
      <figcaption className="flex items-center gap-2">
        <span className="t-label3 flex size-[2.125rem] items-center justify-center rounded-full bg-navy-300 font-medium text-light-50">{r.name[0]}</span>
        <span className="t-label2 font-semibold text-dark-300">{r.name}</span>
      </figcaption>
    </figure>
  );
}
