import { getApprovals, getBlogs, getHomeTestimonials, getPageContent } from "@/lib/cms/content";
import PageSections, { PageFaq } from "@/components/cms/PageSections";
import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import Certifications from "@/components/home/Certifications";
import Destinations from "@/components/home/Destinations";
import WhoWeHelp from "@/components/home/WhoWeHelp";
import Services from "@/components/home/Services";
import WhyChoose from "@/components/home/WhyChoose";
import Steps from "@/components/home/Steps";
import VisaApprovals from "@/components/home/VisaApprovals";
import Testimonials from "@/components/home/Testimonials";
import Faq from "@/components/home/Faq";
import Blogs from "@/components/home/Blogs";
import CtaBanner from "@/components/home/CtaBanner";

export const revalidate = 3600;
export default async function HomePage() {
  const [approvals, videos, blogs, content] = await Promise.all([getApprovals(true), getHomeTestimonials(), getBlogs(), getPageContent("/")]);
  return (
    <>
      <Hero />
      <TrustBar />
      <Certifications />
      <Destinations />
      <WhoWeHelp />
      <Services />
      <WhyChoose />
      <Steps />
      <VisaApprovals approvals={approvals ?? undefined} />
      <Testimonials videos={videos?.flatMap((item) => item.video ? [item.video] : []) ?? undefined} />
      {content ? <PageFaq content={content} /> : <Faq moreHref={null} />}
      <PageSections content={content} faq={false} testimonials={false} />
      <Blogs posts={blogs} />
      <CtaBanner />
    </>
  );
}
