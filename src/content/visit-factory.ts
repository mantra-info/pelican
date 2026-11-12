import type { PageData } from "./types";
import { faqBlock, reviewsBlock, serviceTops, videoBlock } from "./common";

const check = { button: { label: "Check Eligibility", href: "#assessment" } };

export type VisitVisaInput = {
  /** URL slug under /visit-visa/ and image prefix in /images/pages/visit/. */
  key: string;
  country: string;
  heroTitle: string;
  heroText: string;
  formTitle: string;
  why: { title: string; paragraphs: string[] };
  places: [string, string][];
  /** Image index per place (defaults to 1..6). Lets pages reuse a shared image. */
  placeImages?: string[];
  consultants: { title: string; paragraphs: string[] };
  types: { title: string; paragraphs: string[]; cards: { title: string; text: string | string[] }[] };
  process: { title: string; intro: string[]; ticks: string[]; outro: string };
  reviewsTitle?: string;
};

/** Visit Visa template (Figma "VisitVisa_*" frames share this structure). */
export function visitVisaPage(v: VisitVisaInput): PageData {
  const img = (n: string) => `/images/pages/visit/${v.key}-${n}.png`;
  return {
    slug: `visit-visa/${v.key}`,
    metaTitle: `${v.heroTitle} | Pelican Migration Consultants`,
    metaDescription: v.heroText,
    hero: {
      image: img("hero"),
      breadcrumb: [{ label: "Visit Visa", href: "/visit-visa/usa" }, { label: v.country }],
      title: v.heroTitle,
      tops: serviceTops,
      text: `**${v.heroText}**`,
      form: { title: v.formTitle, destination: v.key === "schengen" ? "Schengen Visa" : v.country, variant: "visit" },
    },
    blocks: [
      {
        type: "stack",
        els: [
          { el: "heading", title: v.why.title, description: v.why.paragraphs.join("\n\n"), muted: true },
          {
            el: "photoCards",
            items: v.places.map(([title, text], i) => ({
              title,
              text,
              image: v.placeImages?.[i] ?? img(String(i + 1)),
            })),
          },
        ],
      },
      {
        type: "media",
        bg: "white",
        imageSide: "left",
        title: v.consultants.title,
        content: [...v.consultants.paragraphs, check],
        image: img("consultants"),
        imageAlt: `${v.country} travel`,
      },
      {
        type: "cards",
        bg: "navy50",
        cols: v.types.cards.length >= 4 ? 4 : v.types.cards.length === 3 ? 3 : 2,
        title: v.types.title,
        description: v.types.paragraphs.join("\n\n"),
        descTone: "grey",
        cards: v.types.cards.map((c) => ({ ...c, link: { label: "Know More", href: "#assessment" } })),
      },
      {
        type: "media",
        bg: "white",
        title: v.process.title,
        content: [...v.process.intro, { ticks: v.process.ticks }, v.process.outro, check],
        image: img("process"),
        imageAlt: `${v.country} visa process`,
      },
      videoBlock(),
      faqBlock,
      reviewsBlock(v.reviewsTitle ?? "Canada Immigration Made Easy"),
    ],
  };
}
