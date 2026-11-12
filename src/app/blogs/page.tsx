import type { Metadata } from "next";
import SiteHero from "@/components/site/SiteHero";
import BlogCard, { BlogGrid } from "@/components/site/BlogCard";
import { Section } from "@/components/blocks/Blocks";
import { HLine, VLine } from "@/components/ui/Lines";
import { getBlogs, getPageContent } from "@/lib/cms/content";
import PageSections from "@/components/cms/PageSections";

export const metadata: Metadata = {
  title: "Blogs and News | Pelican Migration Consultants",
  description: "Immigration insights, document checklists and visa pathway guides from Pelican Migration Consultants.",
};

export const revalidate = 3600;
export default async function BlogsPage() {
  const [blogPosts, content] = await Promise.all([getBlogs(), getPageContent("/blogs")]);
  const [featured, recent, other] = blogPosts;
  return (
    <>
      <SiteHero image="/images/pages/site/blogs-hero.png" breadcrumb={[{ label: "Blogs and News" }]} title="Insights for Your Global Journey" />
      <Section>
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-12">
          <div className="flex min-w-0 flex-col gap-7 lg:w-[59.875rem] lg:shrink-0">
            <h2 className="t-h1 font-semibold text-dark-300">Featured Blog</h2>
            {featured ? <BlogCard post={featured} variant="featured" /> : <p className="t-body1 text-dark-100">New articles will appear here soon.</p>}
          </div>
          <VLine src="/icons/line-h-navy.svg" className="hidden opacity-40 lg:flex" />
          <div className="flex min-w-0 flex-1 flex-col gap-10">
            <div className="flex flex-col gap-7">
              <h2 className="t-h1 font-semibold text-dark-300">Recent Blogs</h2>
              {recent && <BlogCard post={recent} variant="side" />}
            </div>
            <div className="flex flex-col gap-7">
              <h2 className="t-h1 font-semibold text-dark-300">Featured Blogs</h2>
              {other && <BlogCard post={other} variant="side" />}
            </div>
          </div>
        </div>
        <HLine src="/icons/line-h-navy.svg" className="opacity-40" />
        <BlogGrid posts={blogPosts} />
      </Section>
      <PageSections content={content} />
    </>
  );
}
