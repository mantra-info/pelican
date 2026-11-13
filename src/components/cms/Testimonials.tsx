import SectionHeading from "@/components/ui/SectionHeading";
import Carousel from "@/components/ui/Carousel";
import { ReviewCard } from "@/components/blocks/Reviews";
import TestimonialVideoCard from "@/components/site/TestimonialVideoCard";
import type { CmsTestimonial } from "@/lib/cms/types";

/** CMS testimonials row: orange band with horizontally scrollable video (500px) and review (382px) cards. */
export default function CmsTestimonials({ items, title = "What Our Clients Say" }: { items: CmsTestimonial[]; title?: string }) {
  if (!items.length) return null;
  return (
    <section className="relative overflow-hidden bg-orange-300">
      <img alt="" src="/images/world-map-dots-orange.svg" width={1010} height={527} className="pointer-events-none absolute top-px left-[calc(50%-28.4375rem)] h-[32.9375rem] w-[63.125rem] max-w-none -translate-x-1/2" />
      <div className="relative flex flex-col gap-10 py-[3.75rem]">
        <div className="container-page">
          <SectionHeading title={title} tone="light" bold />
        </div>
        <Carousel label="testimonials" gapPx={24}>
          {items.map((item) =>
            item.kind === "text" ? (
              <ReviewCard key={item.id} review={{ name: item.name, quote: item.quote ?? "", rating: item.rating ?? "" }} className="w-[85vw] max-w-[23.875rem] shrink-0 snap-start sm:w-[23.875rem]" />
            ) : item.video ? (
              <TestimonialVideoCard key={item.id} video={item.video} title={item.name} sizes="(min-width:640px) 500px, 85vw" className="w-[85vw] max-w-[31.25rem] shrink-0 snap-start sm:w-[31.25rem]" />
            ) : null,
          )}
        </Carousel>
      </div>
    </section>
  );
}
