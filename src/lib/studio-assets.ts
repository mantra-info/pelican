import { readFile } from "node:fs/promises";
import path from "node:path";

const mime: Record<string, string> = {
  ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".mjs": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8", ".json": "application/json", ".map": "application/json", ".webmanifest": "application/manifest+json",
  ".svg": "image/svg+xml", ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".ico": "image/x-icon",
  ".wasm": "application/wasm", ".webp": "image/webp", ".avif": "image/avif", ".gif": "image/gif",
  ".woff": "font/woff", ".woff2": "font/woff2", ".ttf": "font/ttf",
};

/** Serve the standalone Studio build without the website layout or a second server. */
export async function serveStudio(parts: string[] = [], directory = path.join(process.cwd(), "studio", "dist")) {
  const headers = { "X-Robots-Tag": "noindex, nofollow", "X-Content-Type-Options": "nosniff" };
  if (parts.some((part) => !part || part === "." || part === ".." || /[\\/\0]/.test(part) || part.startsWith("."))) return new Response("Not found", { status: 404, headers });
  const relative = parts.join("/");
  const asset = parts[0] === "static";
  if (!asset && relative !== "index.html" && path.extname(relative)) return new Response("Not found", { status: 404, headers });
  const filename = asset ? relative : "index.html";
  const resolved = path.resolve(directory, filename);
  if (!resolved.startsWith(path.resolve(directory) + path.sep)) return new Response("Not found", { status: 404, headers });
  try {
    const content = await readFile(resolved);
    // Sanity's build keeps some icon/manifest URLs root-relative even at a subpath.
    const body = filename === "index.html" || filename.endsWith(".webmanifest")
      ? Buffer.from(content.toString("utf8").replace(/(["'])\/static\//g, "$1/studio/static/"))
      : content;
    return new Response(new Uint8Array(body), { headers: { ...headers, "Content-Type": mime[path.extname(filename)] ?? "application/octet-stream", "Cache-Control": asset ? /-[\w-]{8,}\.(?:js|css|woff2?)$/.test(filename) ? "public, max-age=31536000, immutable" : "public, max-age=3600" : "no-store" } });
  } catch {
    return new Response(asset ? "Not found" : "Sanity Studio is not built yet. Run npm run cms:build, then reload /studio.", { status: asset ? 404 : 503, headers: { ...headers, "Cache-Control": "no-store" } });
  }
}
