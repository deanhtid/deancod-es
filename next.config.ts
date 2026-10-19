import { readFileSync } from "node:fs";
import type { NextConfig } from "next";
import { appStoreUrl, onAppStore } from "./src/app/pegcast/launch";

// PegCast generates the privacy page, so the launch switch cannot change it.
// The build stops when the page and the switch disagree about the App Store link.
const privacyPage = readFileSync("public/pegcast/privacy/index.html", "utf8");
if (privacyPage.includes(`href="${appStoreUrl}"`) !== onAppStore) {
  throw new Error(
    onAppStore
      ? `onAppStore is true, but the privacy page has no link to ${appStoreUrl}. Export it again from PegCast with that link.`
      : `The privacy page links to ${appStoreUrl}, but onAppStore is false in src/app/pegcast/launch.ts.`,
  );
}

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
