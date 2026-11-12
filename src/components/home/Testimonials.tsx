"use client";

import VideoDialogButton from "@/components/ui/VideoDialogButton";
import { testimonialVideos } from "@/content/videos";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";



export default function Testimonials({ videos = testimonialVideos }: { videos?: import("@/lib/cms/types").CmsVideo[] }) {
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
    const step = card ? card.offsetWidth + 28 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  if (!videos.length) return null;
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
          <SectionHeading
            tone="light"
            bold
            title="What our Client Says"
            description="Hear from individuals and families who have successfully migrated with our assistance"
          />
        </div>

        <div className="flex flex-col gap-7">
          <div
            ref={track}
            onScroll={update}
            className="no-scrollbar bleed-start flex snap-x snap-mandatory gap-7 overflow-x-auto pr-[var(--gutter)]"
          >
            {videos.map((v) => (
              <VideoDialogButton videoId={v.videoId ?? v.id} videoUrl={v.videoUrl} captionsUrl={v.captionsUrl} title={v.title}
                key={v.id}
                type="button"
                data-card
                aria-label={`Play testimonial: ${v.title}`}
                className="group flex w-[85vw] max-w-[31.25rem] shrink-0 cursor-pointer snap-start flex-col text-left sm:w-[31.25rem]"
              >
                <span className="relative block aspect-[500/282] w-full overflow-hidden rounded-t-sm">
                  <Image src={v.thumb} alt="" fill sizes="(min-width:1024px) 26vw, 85vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </span>
                <span className="flex w-full items-center justify-between rounded-b-sm bg-navy-300 px-6 py-4">
                  <span className="t-label1 text-light-50">{v.title}</span>
                  <img alt="" src="/icons/play.svg" width={42} height={42} className="size-[2.625rem] shrink-0 transition-transform group-hover:scale-110" />
                </span>
              </VideoDialogButton>
            ))}
          </div>

          <div className="container-page flex items-center justify-center gap-5">
            <button
              type="button"
              aria-label="Previous testimonials"
              onClick={() => scrollBy(-1)}
              disabled={!canPrev}
              className="flex cursor-pointer items-center rounded-sm border border-light-50 p-2 transition-opacity disabled:cursor-default disabled:opacity-50"
            >
              <img alt="" src="/icons/arrow-back.svg" width={32} height={32} className="size-8" />
            </button>
            <button
              type="button"
              aria-label="Next testimonials"
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
