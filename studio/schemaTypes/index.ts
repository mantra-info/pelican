import { defineArrayMember, defineField, defineType } from "sanity";

const image = (name: string, title: string) => defineField({ name, title, type: "image", options: { hotspot: true }, fields: [{ name: "alt", title: "Alternative text", type: "string", validation: (rule) => rule.required() }], validation: (rule) => rule.required() });
const order = defineField({ name: "sortOrder", title: "Display order", type: "number", initialValue: 0 });
const external = defineType({ name: "link", type: "object", fields: [defineField({ name: "href", title: "URL", type: "url", validation: (rule) => rule.required().uri({ scheme: ["https", "http", "mailto"] }) })] });
export const video = defineType({ name: "video", title: "Videos", type: "document", fields: [
  defineField({ name: "title", type: "string", validation: (rule) => rule.required() }),
  defineField({ name: "source", type: "string", options: { list: [{ title: "YouTube (recommended for streaming)", value: "youtube" }, { title: "Upload MP4 / WebM", value: "upload" }], layout: "radio" }, initialValue: "youtube", validation: (rule) => rule.required() }),
  defineField({ name: "youtubeId", title: "YouTube video ID", description: "The 11 characters after watch?v= (for example wLAOihHHS94).", type: "string", hidden: ({ document }) => document?.source !== "youtube", validation: (rule) => rule.custom((value, context) => context.document?.source === "youtube" && !/^[\w-]{11}$/.test(value ?? "") ? "Enter a valid 11-character YouTube ID" : true) }),
  defineField({ name: "file", title: "Video upload", type: "file", options: { accept: "video/mp4,video/webm" }, hidden: ({ document }) => document?.source !== "upload", description: "Use compressed, web-ready media. YouTube is preferable for long videos.", validation: (rule) => rule.custom((value, context) => context.document?.source === "upload" && !value?.asset ? "Upload a video" : true) }),
  image("poster", "Poster / thumbnail"),
  defineField({ name: "captions", title: "English captions (WebVTT, for uploaded videos)", type: "file", options: { accept: ".vtt" } }),
], preview: { select: { title: "title", media: "poster", subtitle: "source" } } });
export const approval = defineType({ name: "visaApproval", title: "Visa Approvals", type: "document", fields: [
  defineField({ name: "title", type: "string", validation: (rule) => rule.required() }),
  defineField({ name: "country", type: "string", validation: (rule) => rule.required() }),
  defineField({ name: "visaType", title: "Visa / programme", type: "string" }),
  defineField({ name: "approvedOn", title: "Approval date", type: "date" }),
  { ...image("image", "Approval image"), description: "Upload a redacted image intended for public display. Remove passport numbers and unapproved personal details." },
  defineField({ name: "showOnHome", title: "Feature on homepage", type: "boolean", initialValue: false }), order,
], preview: { select: { title: "title", subtitle: "country", media: "image" } } });
export const testimonial = defineType({ name: "testimonial", title: "Testimonials (Video / Text)", type: "document", fields: [
  defineField({ name: "name", title: "Client / display name", type: "string", validation: (rule) => rule.required() }),
  defineField({ name: "kind", type: "string", options: { list: ["video", "text"], layout: "radio" }, initialValue: "video", validation: (rule) => rule.required() }),
  defineField({ name: "video", type: "reference", to: [{ type: "video" }], hidden: ({ document }) => document?.kind !== "video", validation: (rule) => rule.custom((value, context) => context.document?.kind === "video" && !value?._ref ? "Choose a video" : true) }),
  defineField({ name: "quote", type: "text", rows: 5, hidden: ({ document }) => document?.kind !== "text", validation: (rule) => rule.custom((value, context) => context.document?.kind === "text" && !value?.trim() ? "Enter the client review" : true) }),
  defineField({ name: "rating", type: "number", hidden: ({ document }) => document?.kind !== "text", validation: (rule) => rule.min(0).max(5) }),
  defineField({ name: "showOnHome", title: "Feature video on homepage", type: "boolean", initialValue: false, hidden: ({ document }) => document?.kind !== "video" }), order,
], preview: { select: { title: "name", subtitle: "kind", media: "video.poster" } } });
export const page = defineType({ name: "pageContent", title: "Page Sections", type: "document", fields: [
  defineField({ name: "pagePath", title: "Page URL path", type: "string", readOnly: ({ document }) => Boolean(document?._id.replace(/^drafts\./, "").startsWith("page--")), description: "Use / for the homepage, /canada-migration for Canada, /blogs/article-slug for an article. Each page has its own settings.", validation: (rule) => rule.required().regex(/^\/(?:[a-z0-9-]+(?:\/[a-z0-9-]+)*)?$/).custom(async (value, context) => {
    if (!value) return true;
    const id = context.document?._id.replace(/^drafts\./, "");
    const count = await context.getClient({ apiVersion: "2025-02-19" }).fetch<number>('count(*[_type == "pageContent" && pagePath == $path && !(_id in [$id, $draft])])', { path: value, id, draft: `drafts.${id}` });
    return count === 0 || "This page already has a settings document. Edit that document instead.";
  }) }),
  defineField({ name: "faqEnabled", title: "Show FAQ section", type: "boolean", initialValue: true }),
  defineField({ name: "faqTitle", title: "FAQ heading", type: "string", initialValue: "Frequently Asked Questions", hidden: ({ document }) => document?.faqEnabled === false }),
  defineField({ name: "faqs", title: "FAQs for this page", type: "array", hidden: ({ document }) => document?.faqEnabled === false, of: [defineArrayMember({ type: "object", name: "faq", fields: [defineField({ name: "question", type: "string", validation: (rule) => rule.required() }), defineField({ name: "answer", type: "text", rows: 4, validation: (rule) => rule.required() })], preview: { select: { title: "question" } } })] }),
  defineField({ name: "testimonialsEnabled", title: "Show page testimonials", type: "boolean", initialValue: false, hidden: ({ document }) => document?.pagePath === "/" }),
  defineField({ name: "testimonialsTitle", title: "Testimonials heading", type: "string", initialValue: "What Our Clients Say", hidden: ({ document }) => document?.pagePath === "/" || !document?.testimonialsEnabled }),
  defineField({ name: "testimonials", title: "Page testimonials (drag to reorder)", type: "array", of: [{ type: "reference", to: [{ type: "testimonial" }] }], hidden: ({ document }) => document?.pagePath === "/" || !document?.testimonialsEnabled }),
  defineField({ name: "guideEnabled", title: "Show how-to / guide video", type: "boolean", initialValue: false }),
  defineField({ name: "guideTitle", title: "Guide heading", type: "string", hidden: ({ document }) => !document?.guideEnabled }),
  defineField({ name: "guideParagraphs", title: "Guide introduction", type: "array", of: [{ type: "text" }], hidden: ({ document }) => !document?.guideEnabled }),
  defineField({ name: "guideVideo", title: "Guide video", type: "reference", to: [{ type: "video" }], validation: (rule) => rule.custom((value, context) => context.document?.guideEnabled && !value?._ref ? "Choose a guide video" : true), hidden: ({ document }) => !document?.guideEnabled }),
], preview: { select: { title: "pagePath" }, prepare: ({ title }) => ({ title, subtitle: "FAQs · Guide video · Testimonials" }) } });
export const post = defineType({ name: "blogPost", title: "Blog Posts", type: "document", fields: [
  defineField({ name: "title", type: "string", validation: (rule) => rule.required() }),
  defineField({ name: "slug", type: "slug", options: { source: "title", maxLength: 96 }, validation: (rule) => rule.required().custom((value) => !value?.current || /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value.current) ? true : "Use lowercase letters, numbers and hyphens") }),
  defineField({ name: "publishedAt", title: "Publication date", type: "datetime", validation: (rule) => rule.required(), initialValue: () => new Date().toISOString() }),
  image("coverImage", "Cover image"),
  defineField({ name: "excerpt", type: "text", rows: 3, validation: (rule) => rule.max(300) }),
  defineField({ name: "body", type: "array", of: [defineArrayMember({ type: "block", styles: [{ title: "Paragraph", value: "normal" }, { title: "Heading", value: "h2" }, { title: "Subheading", value: "h3" }, { title: "Quote", value: "blockquote" }], marks: { decorators: [{ title: "Strong", value: "strong" }, { title: "Emphasis", value: "em" }], annotations: [{ type: "link" }] } }), defineArrayMember({ type: "image", options: { hotspot: true }, fields: [{ name: "alt", type: "string", validation: (rule) => rule.required() }] })], validation: (rule) => rule.required().min(1) }),
  defineField({ name: "seoTitle", title: "Search title", type: "string", validation: (rule) => rule.max(70) }),
  defineField({ name: "seoDescription", title: "Search description", type: "text", rows: 2, validation: (rule) => rule.max(170) }),
], preview: { select: { title: "title", media: "coverImage", subtitle: "publishedAt" } } });
export const settings = defineType({ name: "siteContent", title: "Collection Settings", type: "document", fields: [
  defineField({ name: "manageApprovals", title: "Use CMS visa approval collection", type: "boolean", description: "Enable after uploading approval images. An empty collection then displays an empty state rather than sample images.", initialValue: false }),
  defineField({ name: "manageHomeTestimonials", title: "Use CMS homepage video testimonials", type: "boolean", initialValue: false }),
  defineField({ name: "manageBlogs", title: "Use CMS blog collection", type: "boolean", description: "Enable after importing articles. Unpublished posts will be removed from the public site.", initialValue: false }),
] });
export const schemaTypes = [external, video, approval, testimonial, page, post, settings];
