import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "lenis/dist/lenis.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Intelligence Designed To Evolve",
  description:
    "Build applications that reason, adapt and collaborate using a modular AI platform designed for production.",
  openGraph: {
    title: "Intelligence Designed To Evolve",
    description:
      "Build applications that reason, adapt and collaborate using a modular AI platform designed for production.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceMono.variable}`}>
      <head>
        {/*
          BubbledotICG-FinePos — dot-matrix retro display font.
          Self-host the .woff2 file at /fonts/BubbledotICG-FinePos.woff2
          for production (zero CDN dependency). Until then, CDN fallback:
        */}
        <link
          href="https://db.onlinewebfonts.com/c/8cb707a9b8a73f8a7403336b861c3074?family=BubbledotICG-FinePos"
          rel="stylesheet"
          type="text/css"
        />
      </head>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
