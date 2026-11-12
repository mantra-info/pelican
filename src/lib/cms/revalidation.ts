export type CmsChange = { _type?: string; pagePath?: string; previousPagePath?: string; slug?: string; previousSlug?: string };
export function revalidationTargets(change: CmsChange) {
  const tags = new Set<string>();
  const paths = new Set<string>();
  const validPath = (path: unknown): path is string => typeof path === "string" && /^\/(?:[a-z0-9-]+(?:\/[a-z0-9-]+)*)?$/.test(path);
  if (change._type === "pageContent") {
    for (const path of [change.pagePath, change.previousPagePath]) if (validPath(path)) { tags.add(`sanity:page:${path}`); paths.add(path); }
  } else if (change._type === "blogPost") {
    tags.add("sanity:blogs");
    for (const slug of [change.slug, change.previousSlug]) if (typeof slug === "string" && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) paths.add(`/blogs/${slug}`);
  } else if (change._type === "visaApproval") tags.add("sanity:approvals");
  else if (change._type === "testimonial") tags.add("sanity:testimonials");
  else if (change._type === "video" || change._type === "sanity.fileAsset") tags.add("sanity:videos");
  else if (change._type === "siteContent" || change._type === "sanity.imageAsset") for (const tag of ["sanity:pages", "sanity:approvals", "sanity:testimonials", "sanity:blogs", "sanity:videos"]) tags.add(tag);
  return { tags: [...tags], paths: [...paths] };
}
