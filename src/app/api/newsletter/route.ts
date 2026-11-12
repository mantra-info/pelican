import { deliverNewsletter, parseSubmission } from "@/lib/submissions";
export const runtime = "nodejs";
export async function POST(request: Request) {
  const data = await parseSubmission(request);
  return data instanceof Response ? data : deliverNewsletter(data);
}
