import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroFX from "@/components/HeroFX";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: {
    default: "NexGen Solutions – Modern Web & App Development",
    template: "%s | NexGen Solutions"
  },
  description:
    "NexGen Solutions is a software company specialized in modern website design, app development, digital marketing, and IT consulting. Based in the UAE, serving clients globally.",
  keywords: [
    "Web Development",
    "Next.js",
    "React",
    "Tailwind CSS",
    "App Development",
    "Software Company UAE",
    "Digital Marketing",
    "IT Consulting"
  ],
  authors: [{ name: "NexGen Solutions", url: "https://nexgen-solutions.com" }],
  creator: "NexGen Solutions",
  publisher: "NexGen Solutions",
  metadataBase: new URL("https://nexgen-solutions.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nexgen-solutions.com",
    siteName: "NexGen Solutions",
    title: "NexGen Solutions – Modern Web & App Development",
    description:
      "We build high-quality websites and apps with React, Next.js, and Tailwind. Serving businesses in UAE and worldwide.",
    images: [
      {
        url: "/og-image.png", // ⚡ ضع صورة OG هنا (1200x630)
        width: 1200,
        height: 630,
        alt: "NexGen Solutions – Web & App Development"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "NexGen Solutions – Modern Web & App Development",
    description:
      "We build high-quality websites and apps with React, Next.js, and Tailwind. Serving businesses in UAE and worldwide.",
    images: ["/og-image.png"],
    creator: "@nexgen" // غيّرها لحساب تويتر شركتك إذا موجود
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png"
  },
  alternates: {
    canonical: "https://nexgen-solutions.com"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
      <HeroFX  />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
