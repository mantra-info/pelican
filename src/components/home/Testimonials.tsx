import { testimonialVideos } from "@/content/videos";
import SectionHeading from "@/components/ui/SectionHeading";
import Carousel from "@/components/ui/Carousel";
import TestimonialVideoCard from "@/components/site/TestimonialVideoCard";
import type { CmsVideo } from "@/lib/cms/types";

export default function Testimonials({ videos = testimonialVideos }: { videos?: CmsVideo[] }) {
  if (!videos.length) return null;
  return (
    <section className="relative overflow-hidden bg-orange-300">
      <img alt="" src="/images/world-map-dots-orange.svg" width={1010} height={527} className="pointer-events-none absolute top-px left-[calc(50%-28.4375rem)] h-[32.9375rem] w-[63.125rem] max-w-none -translate-x-1/2" />
      <div className="relative flex flex-col gap-10 py-[3.75rem]">
        <div className="container-page">
          <SectionHeading tone="light" bold title="What our Client Says" description="Hear from individuals and families who have successfully migrated with our assistance" />
        </div>
        <Carousel label="testimonials">
          {videos.map((v) => (
            <TestimonialVideoCard key={v.id} video={{ ...v, videoId: v.videoId ?? v.id }} sizes="(min-width:640px) 500px, 85vw" className="w-[85vw] max-w-[31.25rem] shrink-0 snap-start sm:w-[31.25rem]" />
          ))}
        </Carousel>
      </div>
    </section>
  );
}
