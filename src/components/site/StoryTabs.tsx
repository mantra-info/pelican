"use client";

import VideoDialogButton from "@/components/ui/VideoDialogButton";
import { testimonialVideos } from "@/content/videos";
import Image from "next/image";
import { useState } from "react";
import { ReviewCard, defaultReviews } from "@/components/blocks/Reviews";

const videos = testimonialVideos;
const tabs = ["Client Testimonials", "Client Reviews"] as const;

/** Figma "Frame 240" tabs + "Frame 242" grid of 500×356 video cards (or review cards on the second tab). */
export default function StoryTabs() {
  const [tab, setTab] = useState<(typeof tabs)[number]>("Client Testimonials");
  return (
    <div className="flex flex-col gap-10">
      <div role="tablist" className="no-scrollbar flex overflow-x-auto border-b border-grey-100">
        {tabs.map((t) => (
          <button
            key={t}
            role="tab"
            type="button"
            aria-selected={tab === t}
            onClick={() => setTab(t)}
            className={`t-h3 -mb-px shrink-0 cursor-pointer border-b-2 p-5 font-medium transition-colors ${
              tab === t ? "border-orange-300 text-dark-300" : "border-transparent text-dark-200 hover:text-dark-300"
            }`}
          >
            {t}
          </button>
        ))}
      </div>
      {tab === "Client Testimonials" ? (
        <div role="tabpanel" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-7">
          {videos.map((v) => (
            <VideoDialogButton videoId={v.id} title={v.title} key={v.id} type="button" aria-label={`Play video: ${v.title}`} className="group flex cursor-pointer flex-col overflow-hidden rounded-sm text-left">
              <span className="relative block aspect-[500/282] w-full overflow-hidden">
                <Image src={v.thumb} alt="" fill sizes="(min-width:1024px) 30vw, (min-width:640px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </span>
              <span className="flex items-center justify-between gap-2.5 bg-navy-300 px-6 py-4">
                <span className="t-h3 text-light-50">{v.title}</span>
                <img alt="" src="/icons/play.svg" width={42} height={42} className="size-[2.625rem] shrink-0 transition-transform group-hover:scale-110" />
              </span>
            </VideoDialogButton>
          ))}
        </div>
      ) : (
        <div role="tabpanel" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {defaultReviews.map((r) => (
            <ReviewCard key={r.name} review={r} className="border-[0.5px] border-grey-50" />
          ))}
        </div>
      )}
    </div>
  );
}
