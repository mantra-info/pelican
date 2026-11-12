import type { PageHeroProps } from "@/components/blocks/PageHero";
import type { IntroSplitProps, NumberedCard, TickColumn, Step, ImageCard, Bg } from "@/components/blocks/Blocks";
import type { Review } from "@/components/blocks/Reviews";
import type { FaqItem } from "@/components/home/Faq";
import type { StackEl } from "@/components/blocks/Stack";
import type { RichNode } from "@/components/blocks/RichContent";

export type Block =
  | ({ type: "intro" } & IntroSplitProps)
  | { type: "cards"; title?: string; description?: string; cards: NumberedCard[]; bg?: Bg; cols?: 2 | 3 | 4; numbered?: boolean; descTone?: "grey" | "dark" }
  | { type: "checks"; title: string; description?: string; columns: TickColumn[]; cta?: { label: string; href: string }; bg?: Bg }
  | { type: "steps"; title?: string; description?: string; steps: Step[]; bg?: Bg; large?: boolean }
  | { type: "imageCards"; title?: string; description?: string; cards: ImageCard[]; bg?: Bg; cols?: 3 | 4 }
  | { type: "video"; title: string; paragraphs: string[]; thumbnail: string; label: string; videoId?: string; bg?: Bg }
  | { type: "faq"; title?: string; items?: FaqItem[] }
  | { type: "reviews"; title: string; reviews?: Review[] }
  | { type: "banner"; title?: string; text?: string }
  | { type: "stack"; els: StackEl[]; bg?: Bg; gap?: number }
  | { type: "media"; title: string; content: RichNode[]; image: string; imageAlt?: string; imageSide?: "left" | "right"; bg?: Bg }
  | { type: "custom"; id: string };

export type PageData = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  hero: PageHeroProps;
  blocks: Block[];
};
