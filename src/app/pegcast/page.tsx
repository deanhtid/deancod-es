import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import { appStoreId, appStoreUrl, onAppStore, storeStatus } from "./launch";
import ThemedImage, { type Themed } from "./ThemedImage";
import WashingLine from "./WashingLine";
import styles from "./pegcast.module.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
});

/** Where to get PegCast, before and after the App Store launch. */
const availability = onAppStore
  ? {
      summary: "Download it on the App Store.",
      heading: "Get PegCast",
      text: "PegCast is on the App Store for iPhone. It needs iOS 26 or later.",
    }
  : {
      summary: "Coming soon to the App Store.",
      heading: "Coming soon",
      text: "PegCast is in its last round of private testing. Then it comes to the App Store for iPhone.",
    };

const title = "PegCast: when to hang the washing out";
const description = `PegCast is an iPhone app that tells you when to hang the washing out and when to bring it in. Made by Dean Whittaker. ${availability.summary}`;

export const metadata: Metadata = {
  title,
  description,
  itunes: onAppStore ? { appId: appStoreId } : null,
  alternates: {
    // The export writes pegcast/index.html, and Cloudflare Pages serves it at /pegcast/.
    canonical: "https://deancod.es/pegcast/",
  },
  openGraph: {
    title,
    description,
    url: "https://deancod.es/pegcast/",
    type: "website",
    locale: "en_GB",
    siteName: "Dean Whittaker",
    images: [
      {
        url: "https://deancod.es/pegcast/og.png",
        width: 1200,
        height: 630,
        alt: "PegCast on an iPhone under a blue sky. The app says Hang now. Bring in between 11:30 am and 7:00 pm.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["https://deancod.es/pegcast/og.png"],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#123e7c" },
    { media: "(prefers-color-scheme: dark)", color: "#0a1230" },
  ],
};

const homeAlt: Themed = {
  light:
    "PegCast Home screen for Sunderland, under a blue day sky. Round blue About and Refresh buttons sit at the top. The sky says Hang now. Bring in between 11:30 am and 7:00 pm. Sunshine helps drying. Below, on a white sheet, are three steps. Hang time: Today, 9:00 am. Dry from about: Today, 11:30 am. Bring in before dark: Today, 7:00 pm. Below the steps are a full-width I've hung it out button and the reason Moving air helps drying.",
  dark:
    "PegCast Home screen for Sunderland, under a navy and purple night sky. Round blue About and Refresh buttons sit at the top. The sky says Hang now. Bring in between 11:30 am and 7:00 pm. Sunshine helps drying. Below, on a black sheet, are three steps. Hang time: Today, 9:00 am. Dry from about: Today, 11:30 am. Bring in before dark: Today, 7:00 pm. Below the steps are a full-width I've hung it out button and the reason Moving air helps drying.",
};
const loadPlanAlt: Themed = {
  light:
    "The Load Plan screen, with a blue card on a white screen. An Everyday Load is on the line in Sunderland. Bring in before dark, today, 7:00 pm. Checked today, 9:00 am. Sunshine helps drying. The card has a Check again button. Three switches are off: Remind me at 7:00 pm, Show on Lock Screen, and Alert me if the forecast changes. A note says alerts use background checks, which iOS can run hours late. Below are Plan history and a full-width Brought in button.",
  dark:
    "The Load Plan screen, with a navy card on a black screen. An Everyday Load is on the line in Sunderland. Bring in before dark, today, 7:00 pm. Checked today, 9:00 am. Sunshine helps drying. The card has a Check again button. Three switches are off: Remind me at 7:00 pm, Show on Lock Screen, and Alert me if the forecast changes. A note says alerts use background checks, which iOS can run hours late. Below are Plan history and a full-width Brought in button.",
};
const widgetAlt: Themed = {
  light:
    "A small Home Screen widget on a blue day sky. It says On the line, before dark, today, 7:00 pm, saved and checked at 10:30 am.",
  dark:
    "A small Home Screen widget on a navy and purple night sky. It says On the line, before dark, today, 7:00 pm, saved and checked at 10:30 am.",
};
const liveActivityAlt: Themed = {
  light:
    "A Live Activity on the Lock Screen, on a blue day sky. It says bring in before dark, today, 7:00 pm, 8 hours, 30 minutes left, saved and checked at 10:30 am.",
  dark:
    "A Live Activity on the Lock Screen, on a navy and purple night sky. It says bring in before dark, today, 7:00 pm, 8 hours, 30 minutes left, saved and checked at 10:30 am.",
};
const chartAlt: Themed = {
  light:
    "Three weather charts on a white background, from 9 am to after 9 pm. Drying speed: water lost each hour from 1 square metre of wet fabric. Drying is fastest from 12:00 pm to 2:00 pm, then slows as the sun gets lower. Its bars end at 7:00 pm, and a dashed line shows no drying after that. A key below it names the Recommended Window and the advice times. Rain chance: the rain chance is 0% in every hour. Wind: the wind is 7 mph in every hour. A green band along the top of each chart marks the Recommended Window, 9 am to 7:00 pm. A green line marks the hang time, 9 am. Two dotted orange lines, near 11 am and 11:30 am, mark when it should be dry. A dashed red line marks the time to bring it in, 7:00 pm. A pale orange tint marks the daylight hours. It matches the Daylight key below.",
  dark:
    "Three weather charts on a black background, from 9 am to after 9 pm. Drying speed: water lost each hour from 1 square metre of wet fabric. Drying is fastest from 12:00 pm to 2:00 pm, then slows as the sun gets lower. Its bars end at 7:00 pm, and a dashed line shows no drying after that. A key below it names the Recommended Window and the advice times. Rain chance: the rain chance is 0% in every hour. Wind: the wind is 7 mph in every hour. A green band along the top of each chart marks the Recommended Window, 9 am to 7:00 pm. A green line marks the hang time, 9 am. Two dotted yellow lines, near 11 am and 11:30 am, mark when it should be dry. A dashed red line marks the time to bring it in, 7:00 pm. A dark brown tint marks the daylight hours. It matches the Daylight key below.",
};
/** The app icon sits beside the name "PegCast", so it is decoration. */
const decorative: Themed = { light: "", dark: "" };

const steps = [
  {
    label: "Hang time",
    text: "When to peg the washing out.",
    className: styles.hangStep,
    icon: HangerIcon,
  },
  {
    label: "Dry from about",
    text: "When the washing should be dry.",
    className: styles.dryByStep,
    icon: SunIcon,
  },
  {
    label: "Bring in before dark",
    text: "The latest time to bring it in, and why.",
    className: styles.bringInStep,
    icon: BasketIcon,
  },
];

export default function PegCastPage() {
  return (
    <div className={`${styles.page} ${nunito.variable} relative min-h-screen`}>
      <a
        href="#content"
        className={`${styles.onSky} sr-only fixed left-4 top-4 z-50 rounded-full bg-white px-4 py-2 font-bold text-[#123e7c] focus:not-sr-only`}
      >
        Skip to content
      </a>

      <header className={`${styles.onSky} absolute inset-x-0 top-0 z-10 text-white`}>
        <div className="mx-auto flex w-full max-w-6xl items-center px-6 py-6 lg:px-8">
          <Link
            href="/"
            className="flex items-center gap-3 rounded-full pr-2 font-semibold"
          >
            <span className="grid size-10 place-items-center rounded-full border border-white/30 bg-white/10 text-sm font-bold tracking-wider">
              DW
            </span>
            <span>Dean Whittaker</span>
          </Link>
        </div>
      </header>

      <main id="content">
        <div className={styles.sky}>
          <section
            aria-labelledby="pegcast-heading"
            className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 pt-28 md:grid-cols-[1fr_auto] md:gap-16 lg:px-8 lg:pt-32"
          >
            <div className="max-w-xl">
              <div className="flex items-center gap-4">
                <ThemedImage
                  src={{
                    light: "/pegcast/app-icon-light.webp",
                    dark: "/pegcast/app-icon-dark.webp",
                  }}
                  alt={decorative}
                  width={240}
                  height={240}
                  priority
                  className="size-16 sm:size-18"
                />
                <h1
                  id="pegcast-heading"
                  className="text-5xl font-extrabold tracking-tight sm:text-6xl"
                >
                  PegCast
                </h1>
              </div>
              <p className="mt-6 text-balance text-3xl font-bold leading-tight sm:text-4xl">
                Know when to hang the washing out, and when to bring it in.
              </p>
              <p className="mt-5 max-w-lg text-pretty text-lg font-medium leading-relaxed text-white">
                An iPhone app that reads the hourly forecast for your town and
                gives you three times for each load. It works in the UK,
                Ireland, Australia and New Zealand.
              </p>
              {onAppStore ? (
                <AppStoreBadge className="mt-7" />
              ) : (
                <p
                  className={`${styles.pill} mt-7 inline-flex items-center gap-2 rounded-full px-4 py-2 text-base font-semibold`}
                >
                  <ClockIcon />
                  {storeStatus}
                </p>
              )}
            </div>

            <div className={`${styles.frame} mx-auto w-64 sm:w-72 lg:w-80`}>
              <ThemedImage
                src={{
                  light: "/pegcast/home-light.webp",
                  dark: "/pegcast/home-dark.webp",
                }}
                alt={homeAlt}
                width={585}
                height={1266}
                priority
                className="h-auto w-full"
              />
            </div>
          </section>

          <WashingLine />
        </div>

        <div className={styles.sheet}>
          <section
            aria-labelledby="times-heading"
            className="mx-auto w-full max-w-6xl px-6 pb-16 pt-16 lg:px-8 lg:pb-20 lg:pt-20"
          >
            <div className="grid gap-10 md:grid-cols-2 md:gap-16">
              <div className="max-w-xl">
                <h2
                  id="times-heading"
                  className="text-3xl font-extrabold tracking-tight sm:text-4xl"
                >
                  Three times for every load
                </h2>
                <p className={`${styles.muted} mt-4 text-lg leading-relaxed`}>
                  PegCast reads the rain, wind, temperature, humidity, cloud
                  cover and daylight, hour by hour. It also works out how much sun
                  reaches the washing. Then it tells you what to do and when.
                </p>
                <p className="mt-4 text-lg leading-relaxed">
                  <strong>Built on drying science.</strong>{" "}
                  <span className={styles.muted}>
                    PegCast works out drying time from Apple Weather forecasts
                    and published research on how fabric dries. Weather can
                    change, so keep an eye on the sky.
                  </span>
                </p>
              </div>
              <ol className={`${styles.steps} grid gap-5`}>
                {steps.map(({ label, text, className, icon: Icon }) => (
                  <li key={label} className="relative flex items-center gap-4">
                    <span className={`${styles.step} ${className}`}>
                      <Icon />
                    </span>
                    <span>
                      <span className="block text-xl font-bold">{label}</span>
                      <span className={`${styles.muted} block text-base`}>
                        {text}
                      </span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section
            aria-labelledby="features-heading"
            className="mx-auto w-full max-w-6xl px-6 pb-16 lg:px-8 lg:pb-24"
          >
            <h2
              id="features-heading"
              className="text-3xl font-extrabold tracking-tight sm:text-4xl"
            >
              What PegCast does
            </h2>

            {/*
              On a phone the Load Plan screenshot follows "The Load Plan".
              On a wider screen it spans every row of the left column, and the empty rows centre the text.
            */}
            <div className="mt-12 grid gap-9 md:grid-cols-[auto_1fr] md:grid-rows-[1fr_repeat(4,auto)_1fr] md:gap-x-20 md:gap-y-0">
              <Feature title="Hang now in one tap" className="max-w-xl md:col-start-2 md:row-start-2">
                When the advice says Hang now, tap I&apos;ve hung it out.
                PegCast saves the load and tells you when to bring it in.
              </Feature>
              <Feature title="Tells you why" className="max-w-xl md:col-start-2 md:row-start-3 md:mt-9">
                The time to bring the washing in comes with its reason: dark,
                rain, damp air or strong wind. A small chance of rain only adds
                a caution, such as &ldquo;A light shower is possible at 2:00
                pm.&rdquo;
              </Feature>
              <Feature title="The Load Plan" className="max-w-xl md:col-start-2 md:row-start-4 md:mt-9">
                Plan a load for later. When you hang it out, PegCast checks the
                weather again. While the washing is out, Check again tells you
                if the time to bring it in has changed.
              </Feature>
              <div
                className={`${styles.frame} mx-auto my-3 w-60 sm:w-64 md:col-start-1 md:row-span-6 md:row-start-1 md:my-0 md:self-center`}
              >
                <ThemedImage
                  src={{
                    light: "/pegcast/load-plan-light.webp",
                    dark: "/pegcast/load-plan-dark.webp",
                  }}
                  alt={loadPlanAlt}
                  width={585}
                  height={1266}
                  className="h-auto w-full"
                />
              </div>
              <Feature title="Reminders" className="max-w-xl md:col-start-2 md:row-start-5 md:mt-9">
                Turn on a reminder for when to bring the washing in. A load you
                plan for later can also remind you at its Hang time. PegCast
                can alert you if the forecast changes. iOS decides when
                its background checks run, so an alert can arrive hours late.
              </Feature>
            </div>

            <div className="mt-20 grid items-center gap-12 md:grid-cols-2 md:gap-20">
              <div className="grid max-w-xl gap-9">
                <Feature title="Widget and Live Activity">
                  See when to bring the washing in on your Home Screen and
                  Lock Screen, without opening the app.
                </Feature>
                <Feature title="Siri">
                  Say &ldquo;Check drying advice in PegCast&rdquo; or
                  &ldquo;Open my Load Plan in PegCast&rdquo;.
                </Feature>
                <Feature title="Drying Outcomes">
                  Keep a record of how each load dried. Export your Drying
                  Outcomes when you like, and choose where they go.
                </Feature>
              </div>
              <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-end md:flex-col md:items-start lg:flex-row lg:items-end">
                <ThemedImage
                  src={{
                    light: "/pegcast/widget-light.webp",
                    dark: "/pegcast/widget-dark.webp",
                  }}
                  alt={widgetAlt}
                  width={334}
                  height={334}
                  className={`${styles.tile} h-auto w-[170px]`}
                />
                <ThemedImage
                  src={{
                    light: "/pegcast/live-activity-light.webp",
                    dark: "/pegcast/live-activity-dark.webp",
                  }}
                  alt={liveActivityAlt}
                  width={710}
                  height={260}
                  className={`${styles.tile} h-auto w-full max-w-[340px]`}
                />
              </div>
            </div>

            <div className="mt-20 grid items-center gap-12 md:grid-cols-[1fr_1fr] md:gap-20">
              <div
                className={`${styles.panel} mx-auto w-full max-w-md overflow-hidden rounded-[20px] p-2`}
              >
                <ThemedImage
                  src={{
                    light: "/pegcast/weather-chart-light.webp",
                    dark: "/pegcast/weather-chart-dark.webp",
                  }}
                  alt={chartAlt}
                  width={780}
                  height={1296}
                  className="h-auto w-full rounded-[14px]"
                />
              </div>
              <div className="max-w-xl">
                <Feature title="The weather chart">
                  Small charts show the drying speed, the chance of rain and
                  the wind for each hour. A green band marks the Recommended
                  Window, lines mark the advice times, and the chart shows the
                  hours of daylight.
                </Feature>
              </div>
            </div>
          </section>

          <section
            aria-labelledby="about-heading"
            className="mx-auto w-full max-w-6xl px-6 pb-20 lg:px-8 lg:pb-28"
          >
            <div className={`${styles.panel} grid gap-8 rounded-[28px] p-7 sm:p-10 md:grid-cols-2`}>
              <div>
                <h2 id="about-heading" className="text-2xl font-extrabold">
                  {availability.heading}
                </h2>
                <p className={`${styles.muted} mt-3 text-lg leading-relaxed`}>
                  {availability.text}
                </p>
                {onAppStore && (
                  <p className="mt-5 text-lg font-bold">
                    <a href={appStoreUrl} className={styles.accentLink}>
                      View PegCast on the App Store
                    </a>
                  </p>
                )}
                <p className="mt-5 text-lg font-bold">
                  Made by{" "}
                  <Link href="/" className={styles.accentLink}>
                    Dean Whittaker
                  </Link>
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-extrabold">Privacy</h2>
                <p className={`${styles.muted} mt-3 text-lg leading-relaxed`}>
                  The app has no account, no adverts and no tracking. Your
                  plans stay on your iPhone.
                </p>
                <p className="mt-5 text-lg font-bold">
                  {/* A static page from PegCast, not a route, so a plain link loads it. */}
                  <a href="/pegcast/privacy/" className={styles.accentLink}>
                    Read the privacy notice
                  </a>
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

function Feature({
  title,
  className = "",
  children,
}: {
  title: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className={`${styles.muted} mt-2 text-lg leading-relaxed`}>{children}</p>
    </div>
  );
}

/**
 * Apple's own badge artwork, unaltered and at least 40 px high, as Apple's badge guidelines ask.
 * They also allow one badge for each layout, so the panel lower down uses a text link.
 */
function AppStoreBadge({ className }: { className: string }) {
  return (
    <a href={appStoreUrl} className={`${className} inline-block rounded-[10px]`}>
      <Image
        src="/pegcast/app-store-badge.svg"
        alt="Download on the App Store"
        width={144}
        height={48}
        className="h-12 w-auto"
      />
    </a>
  );
}

function HangerIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9.5 6.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6v.6" />
      <path d="M12 11 3.5 17a1 1 0 0 0 .6 1.8h15.8a1 1 0 0 0 .6-1.8L12 11Z" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4" />
    </svg>
  );
}

function BasketIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 10h18l-1.8 9.2a1 1 0 0 1-1 .8H5.8a1 1 0 0 1-1-.8L3 10Z" />
      <path d="M7.5 10 11 4M16.5 10 13 4M9 14v3M12 14v3M15 14v3" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}
