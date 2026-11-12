import { serveStudio } from "@/lib/studio-assets";
export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export async function GET(_request: Request, { params }: { params: Promise<{ path?: string[] }> }) {
  return serveStudio((await params).path);
}
