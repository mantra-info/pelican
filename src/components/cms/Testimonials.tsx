import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import VideoDialogButton from "@/components/ui/VideoDialogButton";
import { ReviewCard } from "@/components/blocks/Reviews";
import type { CmsTestimonial } from "@/lib/cms/types";

export default function CmsTestimonials({ items, title = "What Our Clients Say" }: { items: CmsTestimonial[]; title?: string }) {
  if (!items.length) return null;
  return <section className="bg-orange-300"><div className="container-page flex flex-col gap-10 py-[3.75rem]">
    <SectionHeading title={title} tone="light" bold />
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">{items.map((item) => item.kind === "text" ?
      <ReviewCard key={item.id} review={{ name: item.name, quote: item.quote ?? "", rating: item.rating ?? "" }} /> : item.video ?
      <VideoDialogButton key={item.id} title={item.video.title} videoId={item.video.videoId} videoUrl={item.video.videoUrl} captionsUrl={item.video.captionsUrl} className="group flex cursor-pointer flex-col overflow-hidden rounded-sm bg-navy-300 text-left">
        <span className="relative block aspect-video w-full"><Image src={item.video.thumb} alt={item.video.title} fill sizes="(min-width:1024px) 30vw, (min-width:640px) 50vw, 100vw" className="object-cover" /></span>
        <span className="t-h3 flex w-full items-center justify-between gap-4 p-5 text-light-50">{item.name}<img src="/icons/play.svg" alt="" width={32} height={32} className="size-8" /></span>
      </VideoDialogButton> : null)}</div>
  </div></section>;
}
