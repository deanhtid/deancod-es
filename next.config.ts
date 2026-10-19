import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { join } from "node:path";
import type { NextConfig } from "next";

// PegCast generates the privacy page, so the launch switch cannot change it.
// The build stops when the page and the switch disagree about the App Store link.
// Next does not change to the project folder, so both files load from this file's folder.
const site = import.meta.dirname;
const { appStoreUrl, onAppStore } = createRequire(import.meta.url)(
  "./src/app/pegcast/launch.ts",
) as typeof import("./src/app/pegcast/launch");
const privacyPage = readFileSync(join(site, "public/pegcast/privacy/index.html"), "utf8");
const linked = privacyPage.includes(`href="${appStoreUrl}"`);
const comingSoon = /coming soon|becomes active when/i.test(privacyPage);
if (onAppStore !== linked || (onAppStore && comingSoon)) {
  throw new Error(
    onAppStore
      ? `onAppStore is true, so the privacy page must link to ${appStoreUrl} and say nothing is coming soon. Export it again from PegCast.`
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
