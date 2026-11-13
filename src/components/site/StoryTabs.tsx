"use client";

import { useState } from "react";
import { testimonialVideos } from "@/content/videos";
import { ReviewCard, defaultReviews, type Review } from "@/components/blocks/Reviews";
import { Button } from "@/components/ui/Button";
import TestimonialVideoCard from "./TestimonialVideoCard";
import type { CmsVideo } from "@/lib/cms/types";

const PAGE = 6;
type Tab = "Client Testimonials" | "Client Reviews";
const tabId = (t: Tab) => `story-tab-${t === "Client Testimonials" ? "testimonials" : "reviews"}`;

/** Figma Success_Stories: "Client Testimonials | Client Reviews" tabs, 3-column card grid (500px cards, 28px gutter) and "Load More". */
export default function StoryTabs({ videos = testimonialVideos, reviews = defaultReviews }: { videos?: (CmsVideo & { name?: string })[]; reviews?: Review[] }) {
  const tabs = ([["Client Testimonials", videos.length], ["Client Reviews", reviews.length]] as const).filter(([, count]) => count > 0).map(([t]) => t as Tab);
  const [tab, setTab] = useState<Tab>(tabs[0] ?? "Client Testimonials");
  const [shown, setShown] = useState(PAGE);
  if (!tabs.length) return null;
  const total = tab === "Client Testimonials" ? videos.length : reviews.length;

  return (
    <div className="flex flex-col items-center gap-10">
      <div role="tablist" aria-label="Success stories" className="no-scrollbar flex w-full overflow-x-auto border-b border-grey-100">
        {tabs.map((t) => (
          <button
            key={t}
            id={tabId(t)}
            role="tab"
            type="button"
            aria-selected={tab === t}
            aria-controls="story-panel"
            onClick={() => { setTab(t); setShown(PAGE); }}
            className={`t-h3 -mb-px shrink-0 cursor-pointer border-b-2 p-5 font-medium text-dark-200 transition-colors hover:text-dark-300 ${tab === t ? "border-orange-300" : "border-transparent"}`}
          >
            {t}
          </button>
        ))}
      </div>
      <div id="story-panel" role="tabpanel" aria-labelledby={tabId(tab)} className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-7">
        {tab === "Client Testimonials"
          ? videos.slice(0, shown).map((v) => <TestimonialVideoCard key={v.id} video={v} title={v.name ?? v.title} />)
          : reviews.slice(0, shown).map((r, i) => <ReviewCard key={`${r.name}-${i}`} review={r} className="border-[0.5px] border-grey-50" />)}
      </div>
      {shown < total && (
        <Button variant="secondary" onClick={() => setShown((n) => n + PAGE)}>
          Load More
        </Button>
      )}
    </div>
  );
}
