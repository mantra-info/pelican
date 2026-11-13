"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Full-bleed horizontal scroller with prev/next arrows (Figma testimonial/review rows).
 * Children should be fixed-width `shrink-0 snap-start` cards; one must carry `data-card` for step sizing.
 */
export default function Carousel({ children, label, gapPx = 28 }: { children: ReactNode; label: string; gapPx?: number }) {
  const track = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

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
    el.scrollBy({ left: dir * (card ? card.offsetWidth + gapPx : el.clientWidth * 0.8), behavior: "smooth" });
  };

  const arrow = "flex cursor-pointer items-center rounded-sm border border-light-50 p-2 transition-opacity disabled:cursor-default disabled:opacity-50";
  return (
    <div className="flex flex-col gap-7">
      <div
        ref={track}
        onScroll={update}
        role="region"
        aria-label={label}
        tabIndex={0}
        style={{ gap: gapPx }}
        className="no-scrollbar bleed-start -my-6 flex snap-x py-6 snap-mandatory overflow-x-auto pr-[var(--gutter)] focus-visible:outline-2 focus-visible:outline-light-50"
      >
        {children}
      </div>
      {(canPrev || canNext) && (
        <div className="container-page flex items-center justify-center gap-5">
          <button type="button" aria-label={`Previous ${label}`} onClick={() => scrollBy(-1)} disabled={!canPrev} className={arrow}>
            <img alt="" src="/icons/arrow-back.svg" width={32} height={32} className="size-8" />
          </button>
          <button type="button" aria-label={`Next ${label}`} onClick={() => scrollBy(1)} disabled={!canNext} className={arrow}>
            <img alt="" src="/icons/arrow-forward.svg" width={32} height={32} className="size-8" />
          </button>
        </div>
      )}
    </div>
  );
}
