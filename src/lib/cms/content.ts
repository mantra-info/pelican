import "server-only";
import { normalizePage, renderableTestimonials } from "./transform";
import { cache } from "react";
import { cmsFetch, cmsTag } from "./client";
import { APPROVALS, BLOG, BLOGS, HOME_TESTIMONIALS, PAGE } from "./queries";
import type { Approval, CmsPage, CmsTestimonial } from "./types";
import { blogPosts, type BlogPost } from "@/content/blogs";

export const getPageContent = cache(async (path: string) => normalizePage(await cmsFetch<CmsPage>(PAGE, { path }, [cmsTag(path), "sanity:pages", "sanity:testimonials", "sanity:videos"])));
export async function getApprovals(home = false): Promise<Approval[] | null> {
  const data = await cmsFetch<{ enabled?: boolean; items: Approval[] }>(APPROVALS, { home }, ["sanity:approvals"]);
  return data?.enabled ? (data.items ?? []).filter((item) => item.image && item.alt).slice(0, home ? 5 : 100) : null;
}
export async function getHomeTestimonials(): Promise<CmsTestimonial[] | null> {
  const data = await cmsFetch<{ enabled?: boolean; items: CmsTestimonial[] }>(HOME_TESTIMONIALS, {}, ["sanity:testimonials", "sanity:videos"]);
  return data?.enabled ? renderableTestimonials(data.items) : null;
}
function formatPost(post: BlogPost): BlogPost {
  return { ...post, date: /^\d{4}-\d{2}-\d{2}/.test(post.date) ? new Date(post.date).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric", timeZone: "UTC" }) : post.date };
}
export const getBlogs = cache(async (): Promise<BlogPost[]> => {
  const data = await cmsFetch<{ enabled?: boolean; items: BlogPost[] }>(BLOGS, {}, ["sanity:blogs"]);
  return data?.enabled ? (data.items ?? []).filter((post) => post.slug && post.title && post.image).map(formatPost) : blogPosts;
});
export const getBlog = cache(async (slug: string): Promise<BlogPost | undefined> => {
  const [post, listing] = await Promise.all([cmsFetch<BlogPost>(BLOG, { slug }, ["sanity:blogs", `sanity:blog:${slug}`]), cmsFetch<{ enabled?: boolean; items: BlogPost[] }>(BLOGS, {}, ["sanity:blogs"])]);
  // In CMS mode, unpublishing/deleting a post must not resurrect the local copy.
  if (listing?.enabled) return post?.slug && post.image ? formatPost(post) : undefined;
  return post?.slug && post.image ? formatPost(post) : blogPosts.find((item) => item.slug === slug);
});
