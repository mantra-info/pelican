import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  distDir: process.env.NEXT_BUILD_DIR ?? ".next",
  outputFileTracingIncludes: { "/studio/**": ["./studio/dist/**/*"] },
  images: { loader: "custom", loaderFile: "./src/lib/image-loader.ts", remotePatterns: [{ protocol: "https", hostname: "cdn.sanity.io", pathname: "/images/**" }] },
};

export default nextConfig;
