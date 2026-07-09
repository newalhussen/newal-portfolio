import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { BackgroundEffects } from "@/components/shared/background-effects";
import { SITE_URL } from "@/lib/constants";
import { profile } from "@/data/profile";

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

const title = `${profile.name} | Software Engineer & Full Stack Developer`;
const description = `${profile.heroDescription} Based in ${profile.location}.`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: `%s | ${profile.name}`,
  },
  description,
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "Flutter Developer",
    "Laravel Developer",
    "React Developer",
    profile.name,
    "Addis Ababa",
    "Ethiopia",
  ],
  authors: [{ name: profile.name, url: SITE_URL }],
  creator: profile.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: profile.name,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full overflow-x-hidden">
        <BackgroundEffects />
        {children}
      </body>
    </html>
  );
}
