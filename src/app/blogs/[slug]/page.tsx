import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import SiteHero from "@/components/site/SiteHero";
import { BlogGrid } from "@/components/site/BlogCard";
import { Section } from "@/components/blocks/Blocks";
import { HLine } from "@/components/ui/Lines";
import Rich from "@/components/ui/Rich";
import { articleSources } from "@/content/additional-articles";
import { getBlog, getBlogs, getPageContent } from "@/lib/cms/content";
import PortableBody from "@/components/cms/PortableBody";
import PageSections from "@/components/cms/PageSections";

type Props = { params: Promise<{ slug: string }> };

export const revalidate = 3600;
export const dynamicParams = true;
export async function generateStaticParams() {
  return (await getBlogs()).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlog(slug);
  return post ? { title: post.seoTitle ?? `${post.title} | Pelican Migration Consultants`, description: post.seoDescription ?? post.excerpt ?? post.title } : {};
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = await getBlog(slug);
  if (!post) notFound();
  const [blogPosts, content] = await Promise.all([getBlogs(), getPageContent(`/blogs/${slug}`)]);
  const related = blogPosts.filter((p) => p.slug !== slug);
  return (
    <>
      <SiteHero
        image="/images/pages/site/blogs-hero.png"
        breadcrumb={[{ label: "Blogs & News", href: "/blogs" }, { label: "Blog Details" }]}
        title="Insights for Your Global Journey"
      />
      <Section>
        <header className="flex flex-col gap-5">
          <h1 className="t-display1 font-medium text-dark-300">{post.title}</h1>
          <time className="t-body3 text-dark-100">{post.date}</time>
        </header>
        <div className="relative aspect-[1560/817] w-full overflow-hidden rounded-sm">
          <Image src={post.image} alt={post.imageAlt ?? post.title} fill priority sizes="(min-width:1024px) 85vw, 100vw" className="object-cover" />
        </div>
        {post.portableBody ? <PortableBody blocks={post.portableBody} /> : post.body && (
          <div className="flex flex-col gap-8 text-dark-300">
            {post.body.map((s, i) => (
              <section key={i} className="flex flex-col gap-[1.125rem]">
                {s.heading && <h2 className="t-h1 font-medium">{s.heading}</h2>}
                {s.paragraphs.map((p, j) => (
                  <p key={j} className="t-body1">
                    <Rich text={p} />
                  </p>
                ))}
              </section>
            ))}
          </div>
        )}
        {!post.portableBody && articleSources[post.slug] && <aside className="t-body2 flex flex-col gap-2 text-dark-100"><p className="font-semibold">Further reading</p>{articleSources[post.slug].map((source) => <a key={source.url} href={source.url} className="text-navy-300 underline">{source.title}</a>)}</aside>}
        <HLine src="/icons/line-h-navy.svg" className="opacity-40" />
        <h2 className="t-h1 font-medium text-dark-300">Related Articles</h2>
        <BlogGrid posts={related} />
      </Section>
      <PageSections content={content} />
    </>
  );
}
