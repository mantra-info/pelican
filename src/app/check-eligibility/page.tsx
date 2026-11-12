import { getPageContent } from "@/lib/cms/content";
import PageSections from "@/components/cms/PageSections";
import type { Metadata } from "next";
import Link from "next/link";
import EligibilityForm from "@/components/eligibility/EligibilityForm";
import { eligibilityServices } from "@/lib/eligibility";

export const metadata: Metadata = {
  title: "Check Your Eligibility | Pelican Migration Consultants",
  description: "Explore your migration pathway with a country-specific profile assessment from Pelican Migration Consultants.",
};

export default async function EligibilityPage({ searchParams }: { searchParams: Promise<{ country?: string; service?: string }> }) {
  const content = await getPageContent("/check-eligibility");
  const query = await searchParams;
  const country = typeof query.country === "string" && Object.hasOwn(eligibilityServices, query.country) ? query.country : "";
  return (
    <section className="bg-navy-50">
      <div className="container-page py-10 lg:py-16">
        <nav aria-label="Breadcrumb" className="t-body3 mb-10 flex gap-2 text-dark-100"><Link href="/" className="hover:text-navy-300">Home</Link><span aria-hidden="true">/</span><span aria-current="page" className="text-navy-300">Check Eligibility</span></nav>
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div className="lg:sticky lg:top-40">
            <p className="t-body3 mb-5 font-semibold tracking-widest text-orange-400">YOUR NEXT CHAPTER</p>
            <h1 className="t-display1 max-w-[34rem] font-medium text-navy-300">Find the pathway that fits your future.</h1>
            <p className="t-body1 mt-6 max-w-[32rem] text-dark-200">Every journey is different. Tell us where you want to go and a little about yourself to start your free eligibility assessment.</p>
            <ul className="mt-8 flex flex-col gap-5">{["Questions tailored to your destination country", "Your profile reviewed by our immigration team", "Clear guidance on your next steps"].map((text) => <li key={text} className="t-body2 flex items-start gap-3 text-dark-200"><img src="/icons/tick-small.svg" alt="" width={18} height={18} className="mt-0.5 size-[1.125rem] shrink-0" />{text}</li>)}</ul>
            <p className="t-body3 mt-10 text-dark-100">Free assessment · Confidential information · Personal guidance</p>
          </div>
          <EligibilityForm key={country} initialCountry={country} lockCountry={Boolean(country)} />
        </div>
      </div>
      <PageSections content={content} />
    </section>
  );
}
