"use client";

import { imageUrl } from "./image-url";

/** Next Image keeps responsive srcsets; Sanity performs the transformations. */

export default function imageLoader({ src, width, quality }: { src: string; width: number; quality?: number }) {
  return imageUrl(src, width, quality);
}
