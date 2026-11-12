import type { Block } from "./types";

/** "How Does It Work" — the same 4 steps appear on every migration / PR page; only the subtitle changes. */
export const processSteps = (description: string): Block => ({
  type: "steps",
  title: "How Does It Work",
  description,
  steps: [
    { title: "Fill the Application Form", text: "The process starts with filling the online application form." },
    { title: "Scan and Upload the Documents", text: "Uploading the required documents in either English or French." },
    { title: "Submit The Completed Application", text: "After ensuring all the mandatory fields are filled, the application is submitted." },
    { title: "Check Your Application Status", text: "We keep you updated about your application status regularly." },
  ],
});

const guideText =
  "Do you know what is the most beneficial route to Canada? The Canadian Permanent Residency Visa. A Canadian PR Visa is valid for five years and entitles the holder to all of the protections and entitlements of a Canadian citizen, with the exception of three things.";

/** Shared "Video" instance. Most pages keep the component's default copy; pass overrides where Figma changes it. */
export const videoBlock = (o: Partial<{ title: string; paragraphs: string[]; label: string; thumbnail: string; videoId: string }> = {}): Block => ({
  type: "video",
  title: o.title ?? "How to Apply for Canada Immigration?",
  paragraphs: o.paragraphs ?? [guideText, guideText],
  label: o.label ?? "Canada Immigration Guide",
  thumbnail: o.thumbnail ?? "/images/video-guide.png",
  videoId: o.videoId,
});

export const faqBlock: Block = { type: "faq" };

export const reviewsBlock = (title: string): Block => ({ type: "reviews", title });

/** Standard hero tops for service pages (breadcrumb y210, title y435, text y583, form y239). */
export const serviceTops = { breadcrumb: 210, title: 435, text: 583 } as const;
