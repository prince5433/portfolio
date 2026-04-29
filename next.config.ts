import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    typedRoutes: true
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "leetcard.jacoblin.cool"
      },
      {
        protocol: "https",
        hostname: "ghchart.rshah.org"
      }
    ]
  },
  // @ts-ignore - 'eslint' does not exist in type 'NextConfig' according to strict types, but is still parsed by Next.js
  eslint: {
    ignoreDuringBuilds: true
  }
};

export default nextConfig;