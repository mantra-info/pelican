import assets from "@/content/image-assets.json";

const images = assets as Record<string, { url: string }>;

/** Resolve legacy local paths to the compressed assets hosted by Sanity. */
export function imageUrl(src: string, width?: number, quality = 85): string {
  const resolved = images[src]?.url ?? src;
  if (!resolved.startsWith("https://cdn.sanity.io/images/")) return resolved;
  const url = new URL(resolved);
  url.searchParams.set("auto", "format");
  url.searchParams.set("fit", "max");
  url.searchParams.set("q", String(quality));
  if (width) url.searchParams.set("w", String(width));
  return url.toString();
}

