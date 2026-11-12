import PageSections, { PageFaq, PageGuide } from "@/components/cms/PageSections";
import CmsTestimonials from "@/components/cms/Testimonials";
import type { CmsPage } from "@/lib/cms/types";
import type { Block } from "@/content/types";
import { CheckColumns, ImageCards, IntroSplit, NumberedCards, StepBlocks, VideoFeature } from "./Blocks";
import Reviews from "./Reviews";
import { MediaSplit, Stack } from "./Stack";
import Faq from "@/components/home/Faq";
import CtaBanner from "@/components/home/CtaBanner";
import { customBlocks } from "@/content/custom";

export default function RenderBlocks({ blocks, content }: { blocks: Block[]; content?: CmsPage | null }) {
  return (
    <>
      {blocks.map((b, i) => {
        switch (b.type) {
          case "intro":
            return <IntroSplit key={i} {...b} />;
          case "cards":
            return <NumberedCards key={i} {...b} />;
          case "checks":
            return <CheckColumns key={i} {...b} />;
          case "steps":
            return <StepBlocks key={i} {...b} />;
          case "imageCards":
            return <ImageCards key={i} {...b} />;
          case "video":
            return content ? <PageGuide key={i} content={content} /> : <VideoFeature key={i} {...b} />;
          case "faq":
            return content ? <PageFaq key={i} content={content} /> : <Faq key={i} title={b.title} items={b.items} moreHref={null} />;
          case "reviews":
            return content ? content.testimonialsEnabled ? <CmsTestimonials key={i} title={content.testimonialsTitle || b.title} items={content.testimonials ?? []} /> : null : <Reviews key={i} title={b.title} reviews={b.reviews} />;
          case "banner":
            return <CtaBanner key={i} variant="light" title={b.title} text={b.text} />;
          case "stack":
            return <Stack key={i} bg={b.bg} els={b.els} gap={b.gap} />;
          case "media":
            return <MediaSplit key={i} {...b} />;
          case "custom": {
            const C = customBlocks[b.id];
            return C ? <C key={i} /> : null;
          }
        }
      })}
      <PageSections content={content ?? null} faq={!blocks.some((b) => b.type === "faq")} guide={!blocks.some((b) => b.type === "video")} testimonials={!blocks.some((b) => b.type === "reviews")} />
    </>
  );
}
