import { getPageContent } from "@/lib/cms/content";
import PageSections from "@/components/cms/PageSections";
import Link from "next/link";
import legal from "@/content/legal.json";

const cookies = {
  title: "Cookie Policy", source: "", blocks: [
    { tag: "p", text: "This page explains the browser storage and external services used by this website." },
    { tag: "h2", text: "Essential browser storage" },
    { tag: "p", text: "The assessment popup uses sessionStorage under pelican-popup-dismissed to remember when you close it. This preference lasts for your browser session and does not contain your contact information. Form answers are held in page memory and are not saved to browser storage." },
    { tag: "h2", text: "Video services" },
    { tag: "p", text: "Videos are loaded from YouTube’s privacy-enhanced domain or Sanity’s media CDN only after you choose to play a video. The selected video provider receives connection and device information when the player loads. YouTube may use storage or cookies when you interact with its player. You can close the player at any time." },
    { tag: "h2", text: "Enquiries and subscriptions" },
    { tag: "p", text: "When you submit an enquiry, your details are sent to Pelican through its email service provider. Newsletter subscriptions are sent to the configured mailing service only when you submit the subscription form. These submissions do not require advertising cookies." },
    { tag: "h2", text: "Your browser settings" },
    { tag: "p", text: "You can clear site storage and manage cookies in your browser settings. Clearing session storage may cause the assessment popup to appear again. This version of the website does not include an advertising or analytics tracker." },
    { tag: "h2", text: "Contact" },
    { tag: "p", text: "For questions about this website’s use of cookies or storage, contact support@pelicanmigration.com." },
  ],
};

export default async function PolicyPage({ slug }: { slug: "terms-of-service" | "privacy-policy" | "cookie-policy" }) {
  const content = await getPageContent(`/${slug}`);
  const policy = slug === "cookie-policy" ? cookies : legal[slug];
  return <><article className="container-page py-12 lg:py-20">
    <nav aria-label="Breadcrumb" className="t-body3 mb-8 text-dark-100"><Link href="/">Home</Link> / <span aria-current="page">{policy.title}</span></nav>
    <h1 className="t-display1 mb-10 font-medium text-navy-300">{policy.title}</h1>
    <div className="flex max-w-[65rem] flex-col gap-5 text-dark-200">{policy.blocks.map((block, i) => /^h/.test(block.tag) ? <h2 key={i} className="t-h2 mt-5 font-semibold text-dark-300">{block.text}</h2> : <p key={i} className="t-body1 whitespace-pre-line">{block.text}</p>)}</div>
    {slug === "privacy-policy" && <section className="mt-10 max-w-[65rem] border-t border-grey-100 pt-8"><h2 className="t-h2 font-semibold text-dark-300">Website enquiries, subscriptions and video</h2><p className="t-body1 mt-4 text-dark-200">Details you choose to submit through this website are processed by our email delivery provider (Resend) to deliver your enquiry to Pelican. Newsletter requests are processed by our mailing service separately. Newsletter and marketing choices are optional. Videos connect to YouTube or Sanity’s media CDN only when you choose to play them. Please contact support@pelicanmigration.com about access, correction or removal of information you have provided.</p></section>}
    {policy.source && <p className="t-body3 mt-10 text-dark-100">Existing company policy: <a href={policy.source} className="text-navy-300 underline">Pelican Migration Consultants</a>.</p>}
  </article><PageSections content={content} /></>;
}
