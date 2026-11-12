import Faq from "@/components/home/Faq";
import { VideoFeature } from "@/components/blocks/Blocks";
import CmsTestimonials from "./Testimonials";
import type { CmsPage } from "@/lib/cms/types";

export function PageFaq({ content }: { content: CmsPage }) {
  return content.faqEnabled && content.faqItems?.length ? <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: content.faqItems.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })) }).replace(/</g, "\\u003c") }} /><Faq title={content.faqTitle} items={content.faqItems} moreHref={null} /></> : null;
}
export function PageGuide({ content }: { content: CmsPage }) {
  const video = content.guideVideo;
  return content.guideEnabled && video?.thumb && (video.videoId || video.videoUrl) ? <VideoFeature title={content.guideTitle || video.title} paragraphs={content.guideParagraphs ?? []} thumbnail={video.thumb} label={video.title} videoId={video.videoId} videoUrl={video.videoUrl} captionsUrl={video.captionsUrl} /> : null;
}
export default function PageSections({ content, faq = true, testimonials = true, guide = true }: { content: CmsPage | null; faq?: boolean; testimonials?: boolean; guide?: boolean }) {
  if (!content) return null;
  return <>{faq && <PageFaq content={content} />}{guide && <PageGuide content={content} />}{testimonials && content.testimonialsEnabled && <CmsTestimonials title={content.testimonialsTitle} items={content.testimonials ?? []} />}</>;
}
