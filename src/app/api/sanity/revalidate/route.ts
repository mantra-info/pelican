import { isValidSignature, SIGNATURE_HEADER_NAME } from "@sanity/webhook";
import { revalidatePath, revalidateTag } from "next/cache";
import { revalidationTargets, type CmsChange } from "@/lib/cms/revalidation";
export const runtime = "nodejs";

export async function POST(request: Request) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;
  if (!secret) return Response.json({ error: "CMS webhook is not configured" }, { status: 503 });
  const reader = request.body?.getReader();
  if (!reader) return Response.json({ error: "Missing body" }, { status: 400 });
  const chunks: Uint8Array[] = [];
  let size = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    size += value.length;
    if (size > 16_384) { await reader.cancel(); return Response.json({ error: "Payload too large" }, { status: 413 }); }
    chunks.push(value);
  }
  const body = Buffer.concat(chunks).toString("utf8");
  const signature = request.headers.get(SIGNATURE_HEADER_NAME);
  if (!signature || !await isValidSignature(body, signature, secret)) return Response.json({ error: "Invalid signature" }, { status: 401 });
  let change: CmsChange;
  try { change = JSON.parse(body); if (!change || typeof change !== "object" || Array.isArray(change)) throw new Error(); }
  catch { return Response.json({ error: "Invalid body" }, { status: 400 }); }
  const targets = revalidationTargets(change);
  targets.tags.forEach((tag) => revalidateTag(tag));
  targets.paths.forEach((path) => revalidatePath(path));
  return Response.json({ revalidated: true, ...targets });
}
