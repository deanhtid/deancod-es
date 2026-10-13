import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const title = "Dean Whittaker | Senior Platform Engineer";
const description =
  "Senior Platform Engineer specialising in production AI infrastructure, agentic systems, AWS, Terraform, CI/CD and observability.";

export const metadata: Metadata = {
  metadataBase: new URL("https://deancod.es"),
  title,
  description,
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Dean Whittaker",
    "Senior Platform Engineer",
    "Production AI Infrastructure",
    "Agentic Systems",
    "Platform Engineering",
    "Amazon Web Services",
    "AWS",
    "Amazon Bedrock",
    "Terraform",
    "CI/CD",
    "Datadog",
    "Observability",
    "DevOps",
  ],
  authors: [{ name: "Dean Whittaker", url: "https://deancod.es" }],
  creator: "Dean Whittaker",
  openGraph: {
    title,
    description,
    url: "/",
    type: "profile",
    locale: "en_GB",
    siteName: "Dean Whittaker",
    images: [
      {
        url: "https://deancod.es/og.png",
        width: 1200,
        height: 630,
        alt: "Dean Whittaker, Senior Platform Engineer specialising in production AI infrastructure and agentic systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["https://deancod.es/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#070b14",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-slate-950 font-sans text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
