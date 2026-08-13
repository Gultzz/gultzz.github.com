import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
  },
  experimental: { optimizePackageImports: ["framer-motion", "d3-scale"] },
  poweredByHeader: false,
  turbopack: { root: projectRoot },
  trailingSlash: true,
  output: "export",
};
export default nextConfig;
