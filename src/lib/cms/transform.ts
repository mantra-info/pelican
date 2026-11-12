import type { CmsPage, CmsTestimonial } from "./types";
export function renderableTestimonials(items: CmsTestimonial[] | undefined): CmsTestimonial[] {
  return (items ?? []).filter((item) => item?.id && item.name && (item.kind === "text" ? Boolean(item.quote?.trim()) : Boolean(item.video?.thumb && (item.video.videoId || item.video.videoUrl))));
}
export function normalizePage(page: CmsPage | null): CmsPage | null {
  if (!page) return null;
  return { ...page, faqItems: (page.faqItems ?? []).filter((item) => item?.q?.trim() && item.a?.trim()), testimonials: renderableTestimonials(page.testimonials) };
}
