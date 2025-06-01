import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "About Me - Dean Whittaker",
  description:
    "Dean Whittaker - AWS Cloud Engineer specialising in microservices, serverless technologies, and DevOps. Based in Newcastle Upon Tyne, England.",
  keywords: [
    "Dean Whittaker",
    "Cloud Engineer",
    "AWS",
    "DevOps",
    "microservices",
    "serverless",
    "Python",
    "JavaScript",
    "Newcastle Upon Tyne",
    "infrastructure as code",
  ],
  authors: [{ name: "Dean Whittaker" }],
  creator: "Dean Whittaker",
  metadataBase: new URL("https://deancod.es"),
  openGraph: {
    title: "About Me - Dean Whittaker",
    description:
      "AWS Cloud Engineer specialising in microservices, serverless technologies, and DevOps",
    type: "website",
    locale: "en_GB",
    siteName: "Dean Whittaker",
  },
  twitter: {
    card: "summary",
    title: "About Me - Dean Whittaker",
    description:
      "AWS Cloud Engineer specialising in microservices, serverless technologies, and DevOps",
    creator: "@DeaNHtiD99",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans text-gray-900 dark:text-white bg-white dark:bg-gray-900 transition-colors duration-200`}
      >
        <main className="relative">{children}</main>
      </body>
    </html>
  );
}
