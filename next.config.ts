// Using a loose config type here because the Next.js exported
// `NextConfig` type may not include newer or tooling-specific
// properties in certain Next.js versions. Keeping the file
// untyped avoids the "Object literal may only specify known
// properties" TypeScript error while still exporting a valid
// runtime config for Next.js.

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ⛔ Disables ESLint errors during `next build`
  },
};

export default nextConfig;
