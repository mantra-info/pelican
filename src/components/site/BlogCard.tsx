import Image from "next/image";
import Link from "next/link";
import { TextLink } from "@/components/ui/Button";
import { blogHref, type BlogPost } from "@/content/blogs";

/**
 * Figma "Blog" card.
 *  grid     372px column, square-ish 372×373 image, 18px title (homepage + listing rows)
 *  featured 958px column, 958×616 image, 24px title
 *  side     506px column, 506×176 image, 24px title
 */
export default function BlogCard({ post, variant = "grid" }: { post: BlogPost; variant?: "grid" | "featured" | "side" }) {
  const href = blogHref(post);
  const aspect = { grid: "aspect-[372/373]", featured: "aspect-[958/616]", side: "aspect-[506/176]" }[variant];
  const sizes = { grid: "(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw", featured: "(min-width:1024px) 55vw, 100vw", side: "(min-width:1024px) 30vw, 100vw" }[variant];
  return (
    <article className="flex flex-col gap-[1.5625rem]">
      <Link href={href} className={`group relative block w-full overflow-hidden rounded-sm ${aspect}`}>
        <Image src={post.image} alt={post.imageAlt ?? post.title} fill sizes={sizes} className="object-cover transition-transform duration-500 group-hover:scale-105" />
      </Link>
      <div className={`flex flex-1 flex-col justify-between gap-6 ${variant === "grid" ? "sm:min-h-[9.875rem]" : ""}`}>
        <div className="flex flex-col gap-5">
          <time className="t-body3 text-dark-100">{post.date}</time>
          <h3 className={`${variant === "grid" ? "t-body1" : "t-h2"} font-medium text-dark-300`}>
            <Link href={href} className="hover:text-navy-300">
              {post.title}
            </Link>
          </h3>
        </div>
        <TextLink href={href} color="navy">
          Read More
        </TextLink>
      </div>
    </article>
  );
}

export function BlogGrid({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {posts.map((p) => (
        <BlogCard key={p.slug} post={p} />
      ))}
    </div>
  );
}
