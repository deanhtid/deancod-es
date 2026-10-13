import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  typescript: {
    // `pnpm build` checks types first with TypeScript 7 (`pnpm typecheck`).
    // Next.js would check them again with TypeScript 6, the `typescript` package that ESLint needs.
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
