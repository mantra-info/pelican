import SectionHeading from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { BlogGrid } from "@/components/site/BlogCard";
import { blogPosts } from "@/content/blogs";

export default function Blogs({ posts = blogPosts }: { posts?: import("@/content/blogs").BlogPost[] }) {
  if (!posts.length) return null;
  return (
    <section className="bg-navy-50">
      <div className="container-page flex flex-col items-center gap-10 py-[3.75rem]">
        <SectionHeading title="Blogs and News" />
        <BlogGrid posts={posts.slice(0, 4)} />
        <ButtonLink href="/blogs" variant="secondary">
          View All Updates
        </ButtonLink>
      </div>
    </section>
  );
}
