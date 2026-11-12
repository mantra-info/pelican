import { getPageContent } from "@/lib/cms/content";
import PageSections from "@/components/cms/PageSections";
import CmsTestimonials from "@/components/cms/Testimonials";
import type { Metadata } from "next";
import SiteHero from "@/components/site/SiteHero";
import StoryTabs from "@/components/site/StoryTabs";
import ContactSection from "@/components/site/ContactSection";
import { Section } from "@/components/blocks/Blocks";

export const metadata: Metadata = {
  title: "Success Stories | Pelican Migration Consultants",
  description: "Client testimonials and reviews from families and professionals who migrated with Pelican Migration Consultants.",
};

export const revalidate = 3600;
export default async function SuccessStoriesPage() {
  const content = await getPageContent("/success-stories");
  return (
    <>
      <SiteHero image="/images/pages/site/stories-hero.png" breadcrumb={[{ label: "Success Stories" }]} title="Highest Standards, Happiest Customers" />
      <Section>
        <div className="t-body1 flex flex-col gap-8 text-dark-300">
          <p>
            Clients are at the heart of everything we do. Every relationship we build, every service we deliver, and every goal we help achieve is driven by our commitment to creating meaningful and
            lasting experiences. We believe that true success is not measured only by the opportunities we provide, but also by the trust, confidence, and satisfaction we build along the way.
          </p>
          <p>
            Our clients&apos; experiences reflect the values we stand for. Their feedback, reviews, and testimonials offer genuine insights into the quality of our services, the dedication of our team,
            and the relationships we strive to maintain. Each positive experience inspires us to keep raising our standards and delivering better outcomes.
          </p>
        </div>
        {content ? content.testimonialsEnabled && <CmsTestimonials title={content.testimonialsTitle} items={content.testimonials ?? []} /> : <StoryTabs />}
      </Section>
      <PageSections content={content} testimonials={false} />
      <ContactSection />
    </>
  );
}
