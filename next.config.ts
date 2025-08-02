import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ⛔ Disables ESLint errors during `next build`
  },
};

export default nextConfig;
