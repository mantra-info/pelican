import { getPageContent } from "@/lib/cms/content";
import PageSections from "@/components/cms/PageSections";
import type { Metadata } from "next";
import Image from "next/image";
import SiteHero from "@/components/site/SiteHero";
import ContactSection from "@/components/site/ContactSection";
import { Section } from "@/components/blocks/Blocks";
import SectionHeading from "@/components/ui/SectionHeading";
import { HLine } from "@/components/ui/Lines";

export const metadata: Metadata = {
  title: "Contact Us | Pelican Migration Consultants",
  description: "Talk to Pelican Migration Consultants in Business Bay, Dubai. Call +971 4 564 6282 or send us your immigration plans for a free assessment.",
};

const MAP_URL = "https://www.google.com/maps/search/?api=1&query=Iris+Bay+Tower+Business+Bay+Dubai";

export const revalidate = 3600;
export default async function ContactPage() {
  const content = await getPageContent("/contact-us");
  return (
    <>
      <SiteHero image="/images/pages/site/contact-hero.png" breadcrumb={[{ label: "Contact Us" }]} title="Your Journey Begins with a Conversation" />
      <ContactSection />
      <PageSections content={content} />
      <Section bg="white">
        <SectionHeading title="We're Here to Guide You." description="Meet our team and take the first step towards your international future." />
        <HLine src="/icons/line-h-navy.svg" className="opacity-40" />
        <a
          href={MAP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open Pelican Migration Consultants office location in Google Maps"
          className="relative block aspect-[1560/400] min-h-[15rem] w-full overflow-hidden rounded-sm"
        >
          <Image src="/images/pages/site/contact-map.png" alt="Map showing Iris Bay Tower, Business Bay, Dubai" fill sizes="(min-width:1024px) 85vw, 100vw" className="object-cover" />
        </a>
      </Section>
    </>
  );
}
