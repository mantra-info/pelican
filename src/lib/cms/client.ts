import "server-only";
import { cache } from "react";

export const cmsConfigured = Boolean(process.env.SANITY_PROJECT_ID && process.env.SANITY_DATASET);
export const cmsTag = (path: string) => `sanity:page:${path}`;

/** One published, cached request per content section; no CMS SDK in visitor bundles. */
export const cmsFetch = cache(async <T>(query: string, params: Record<string, string | boolean>, tags: string[]): Promise<T | null> => {
  const project = process.env.SANITY_PROJECT_ID;
  const dataset = process.env.SANITY_DATASET;
  if (!project || !dataset) return null;
  if (!/^[a-z0-9]+$/.test(project) || !/^[a-z0-9_-]+$/.test(dataset)) return null;
  const url = new URL(`https://${project}.api.sanity.io/v2025-02-19/data/query/${dataset}`);
  url.searchParams.set("query", query);
  url.searchParams.set("perspective", "published");
  for (const [name, value] of Object.entries(params)) url.searchParams.set(`$${name}`, JSON.stringify(value));
  try {
    const response = await fetch(url, { headers: process.env.SANITY_API_READ_TOKEN ? { Authorization: `Bearer ${process.env.SANITY_API_READ_TOKEN}` } : {}, next: { revalidate: process.env.NODE_ENV === "development" ? 0 : 3600, tags }, signal: AbortSignal.timeout(6000) });
    if (!response.ok) throw new Error("CMS request failed");
    const payload = await response.json();
    if (payload.error) throw new Error("CMS query failed");
    return payload.result as T;
  } catch {
    console.warn("[Sanity] Published content unavailable; using local fallback.");
    return null;
  }
});
