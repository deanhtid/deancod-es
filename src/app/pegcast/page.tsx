import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import ThemedImage, { type Themed } from "./ThemedImage";
import WashingLine from "./WashingLine";
import styles from "./pegcast.module.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
});

const title = "PegCast: when to hang the washing out";
const description =
  "PegCast is an iPhone app that tells you when to hang the washing out and when to bring it in. Made by Dean Whittaker. In private testing.";

export const metadata: Metadata = {
  title,
  description,
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
    "PegCast Home screen for Sunderland, under a blue day sky. The sky says Hang now. Bring in between 11:30 am and 7:00 pm. Sunshine helps drying. Below, on a white sheet, are three steps. Hang time: Today, 9:00 am. Dry from about: Today, 11:30 am. Bring in before dark: the button I've hung it out covers this time.",
  dark:
    "PegCast Home screen for Sunderland, under a navy and purple night sky. The sky says Hang now. Bring in between 11:30 am and 7:00 pm. Sunshine helps drying. Below, on a black sheet, are three steps. Hang time: Today, 9:00 am. Dry from about: Today, 11:30 am. Bring in before dark: the button I've hung it out covers this time.",
};
const loadPlanAlt: Themed = {
  light:
    "The Load Plan screen, with a blue card on a white screen. An Everyday Load is on the line in Sunderland. Bring in before dark, today, 7:00 pm. Checked today, 9:00 am. Sunshine helps drying. Two switches are off: Remind me at 7:00 pm, and Show on Lock Screen. Below the first are the words Notifications are off, and an Open Settings button.",
  dark:
    "The Load Plan screen, with a navy card on a black screen. An Everyday Load is on the line in Sunderland. Bring in before dark, today, 7:00 pm. Checked today, 9:00 am. Sunshine helps drying. Two switches are off: Remind me at 7:00 pm, and Show on Lock Screen. Below the first are the words Notifications are off, and an Open Settings button.",
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
    "Weather details on a white background, with two charts across the day. The rain chance is 0% in every hour. The wind is 7 mph in every hour. A pale orange band marks the daylight hours.",
  dark:
    "Weather details on a black background, with two charts across the day. The rain chance is 0% in every hour. The wind is 7 mph in every hour. A dark brown band marks the daylight hours.",
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
    text: "When it should be dry.",
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
                gives you three times for each load.
              </p>
              <p
                className={`${styles.pill} mt-7 inline-flex items-center gap-2 rounded-full px-4 py-2 text-base font-semibold`}
              >
                <FlaskIcon />
                In private testing
              </p>
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
                <p className={`${styles.muted} mt-4 text-lg leading-relaxed`}>
                  PegCast sets its dry times a little late on purpose, so you
                  do not bring the washing in damp.
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

            <div className="mt-12 grid items-center gap-12 md:grid-cols-[auto_1fr] md:gap-20">
              <div className={`${styles.frame} mx-auto w-60 sm:w-64`}>
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
              <div className="grid max-w-xl gap-9">
                <Feature title="Hang now in one tap">
                  When the advice says Hang now, tap I&apos;ve hung it out.
                  PegCast saves the load and tells you when to bring it in.
                </Feature>
                <Feature title="Tells you why">
                  The time to bring the washing in comes with its reason:
                  dark, rain, damp air or strong wind.
                </Feature>
                <Feature title="The Load Plan">
                  Plan a load for later. PegCast checks the weather again
                  before you hang it out. While the washing is out, Check
                  again tells you if the time to bring it in has changed.
                </Feature>
                <Feature title="Reminders">
                  Turn on a reminder for when to bring the washing in. A load
                  you plan for later can also remind you at its Hang time.
                </Feature>
              </div>
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
                  height={673}
                  className="h-auto w-full rounded-[14px]"
                />
              </div>
              <div className="max-w-xl">
                <Feature title="The weather chart">
                  Two small charts show the chance of rain and the wind for
                  each hour. Daylight hours are shaded.
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
                  In private testing
                </h2>
                <p className={`${styles.muted} mt-3 text-lg leading-relaxed`}>
                  PegCast is not on the App Store yet. Its advice is
                  experimental.
                </p>
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
                  No account, no adverts or tracking, and your plans stay on
                  your iPhone.
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

function Feature({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className={`${styles.muted} mt-2 text-lg leading-relaxed`}>{children}</p>
    </div>
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

function FlaskIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 3h6M10 3v6.5L4.6 18.4A1.7 1.7 0 0 0 6 21h12a1.7 1.7 0 0 0 1.4-2.6L14 9.5V3" />
      <path d="M7.5 15h9" />
    </svg>
  );
}
