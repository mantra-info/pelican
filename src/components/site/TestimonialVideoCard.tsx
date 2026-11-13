import Image from "next/image";
import VideoDialogButton from "@/components/ui/VideoDialogButton";
import type { CmsVideo } from "@/lib/cms/types";

/** Figma "Video" card (500×356): 500×282 thumbnail, navy-300 caption bar with label1 title and 42px play icon. */
export default function TestimonialVideoCard({ video, title = video.title, className = "", sizes = "(min-width:1024px) 30vw, (min-width:640px) 50vw, 100vw" }: { video: CmsVideo; title?: string; className?: string; sizes?: string }) {
  return (
    <VideoDialogButton
      videoId={video.videoId}
      videoUrl={video.videoUrl}
      captionsUrl={video.captionsUrl}
      title={video.title}
      aria-label={`Play testimonial: ${title}`}
      data-card
      className={`card-hover group flex cursor-pointer flex-col rounded-sm text-left ${className}`}
    >
      <span className="relative block aspect-[500/282] w-full overflow-hidden rounded-t-sm">
        <Image src={video.thumb} alt="" fill sizes={sizes} className="object-cover transition-transform duration-500 group-hover:scale-105" />
      </span>
      <span className="flex w-full items-center justify-between gap-2.5 rounded-b-sm bg-navy-300 px-6 py-4">
        <span className="t-label1 text-light-50">{title}</span>
        <img alt="" src="/icons/play.svg" width={42} height={42} className="size-[2.625rem] shrink-0 transition-transform group-hover:scale-110" />
      </span>
    </VideoDialogButton>
  );
}
