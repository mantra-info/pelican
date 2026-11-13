import { getApprovals, getPageContent } from "@/lib/cms/content";
import PageSections from "@/components/cms/PageSections";
import type { Metadata } from "next";
import Image from "next/image";
import SiteHero from "@/components/site/SiteHero";
import ContactSection from "@/components/site/ContactSection";
import { Section } from "@/components/blocks/Blocks";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Visa Approvals | Pelican Migration Consultants",
  description: "Visa approval highlights from Pelican Migration Consultants clients.",
};

const defaultApprovals = Array.from({ length: 10 }, (_, i) =>
  (i % 5) % 2 === 0
    ? { image: "/images/approval-canada.png", alt: "Canada permanent residency visa approval" }
    : { image: "/images/approval-australia.png", alt: "Australia visa approval" },
);

export const revalidate = 3600;
export default async function VisaGalleryPage() {
  const [items, content] = await Promise.all([getApprovals(), getPageContent("/visa-gallery")]);
  const approvals = items ?? defaultApprovals;
  return (
    <>
      <SiteHero image="/images/pages/site/gallery-hero.png" breadcrumb={[{ label: "Visa Approvals" }]} title="Approved and Ready: Our Clients' Stories" />
      <Section>
        <p className="t-body1 text-dark-300">
          Discover how Pelican Migration Consultants turn dreams into reality with our Visa Approval Highlights. See how our clients have achieved success and made their Canadian dreams come true!
        </p>
        <SectionHeading title="Our Visa Approvals" />
        {!approvals.length && <p className="t-body1 text-dark-100">New visa approval highlights will appear here soon.</p>}
        <div className="grid grid-cols-2 gap-x-4 gap-y-7 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-[3.1875rem]">
          {approvals.map((a, i) => (
            <div key={i} className="card-hover relative aspect-[271/336] w-full overflow-hidden rounded-sm">
              <Image src={a.image} alt={a.alt} fill sizes="(min-width:1024px) 15vw, (min-width:640px) 33vw, 50vw" className={items ? "object-contain" : "object-cover"} />
            </div>
          ))}
        </div>
      </Section>
      <PageSections content={content} />
      <ContactSection />
    </>
  );
}
