import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "FanTracker — Real. Ultimate. Control. | Vehicle & Fleet Tracking",
  description:
    "24/7 real-time vehicle tracking, fuel monitoring, fleet management & video telematics. Trusted by 3,000+ clients across 20+ countries.",
  keywords:
    "vehicle tracking, fleet management, GPS tracking, fuel monitoring, speed limiting, video telematics, driver behavior",
  openGraph: {
    title: "FanTracker — Real. Ultimate. Control.",
    description:
      "Cutting-edge vehicle tracking and fleet management solutions with unmatched reliability.",
    type: "website",
    url: "https://fantracker.net",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-[family-name:var(--font-inter)] antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
