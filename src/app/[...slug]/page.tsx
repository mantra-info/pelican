import { getPageContent } from "@/lib/cms/content";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/blocks/PageHero";
import RenderBlocks from "@/components/blocks/RenderBlocks";
import { eligibilityHref, linkEligibilityCtas } from "@/lib/eligibility";
import { pages } from "@/content/pages";

export const revalidate = 3600;

type Params = { slug: string[] };

export function generateStaticParams(): Params[] {
  return Object.keys(pages).map((s) => ({ slug: s.split("/") }));
}


export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const page = pages[slug.join("/")];
  if (!page) return {};
  return { title: page.metaTitle, description: page.metaDescription };
}

export default async function ContentPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const page = pages[slug.join("/")];
  if (!page) notFound();
  const content = await getPageContent(`/${page.slug}`);
  return (
    <>
      <PageHero {...page.hero} form={page.hero.form ? { ...page.hero.form, optionsKey: page.slug } : undefined} />
      <RenderBlocks content={content} blocks={linkEligibilityCtas(page.blocks, eligibilityHref(page.slug))} />
    </>
  );
}
