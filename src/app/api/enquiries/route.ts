import { deliverEnquiry, parseSubmission } from "@/lib/submissions";
export const runtime = "nodejs";
export async function POST(request: Request) {
  const data = await parseSubmission(request);
  return data instanceof Response ? data : deliverEnquiry(data);
}
