import type { FaqItem } from "@/components/home/Faq";
export type CmsVideo = { id: string; title: string; thumb: string; videoId?: string; videoUrl?: string; captionsUrl?: string };
export type CmsTestimonial = { id: string; kind: "video" | "text"; name: string; quote?: string; rating?: string; video?: CmsVideo };
export type Approval = { id?: string; image: string; alt: string; country?: string; visaType?: string };
export type PortableSpan = { _key: string; text: string; marks?: string[] };
export type PortableBlock = { _key: string; _type: string; style?: string; children?: PortableSpan[]; markDefs?: { _key: string; href: string }[]; listItem?: string; level?: number; url?: string; alt?: string };
export type CmsPage = { pagePath: string; faqEnabled?: boolean; faqTitle?: string; faqItems?: FaqItem[]; testimonialsEnabled?: boolean; testimonialsTitle?: string; testimonials?: CmsTestimonial[]; guideEnabled?: boolean; guideTitle?: string; guideParagraphs?: string[]; guideVideo?: CmsVideo };
