import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ["three", "@react-three/fiber", "@react-three/drei"],
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "images.pexels.com" },
      { protocol: "https", hostname: "cdn.pixabay.com" },
      { protocol: "https", hostname: "videos.pexels.com" },
    ],
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    // Keep drei out of optimizePackageImports — it can break R3F's React reconciler
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default nextConfig;
