import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.metaknacks.com"),
  title: {
    default: "METAKNACKS | SAP Staffing, IT & Cloud Solutions",
    template: "%s | METAKNACKS",
  },
  description: "SAP staffing, IT cloud solutions, and specialist teams that turn ambition into impact. METAKNACKS helps organisations move from strategy to execution.",
  keywords: [
    "SAP staffing",
    "SAP consulting",
    "IT staffing",
    "cloud solutions",
    "technology consulting",
    "global resourcing",
    "METAKNACKS",
  ],
  authors: [{ name: "METAKNACKS" }],
  creator: "METAKNACKS",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "METAKNACKS | SAP Staffing, IT & Cloud Solutions",
    description: "SAP staffing, IT cloud solutions, and specialist teams that turn ambition into impact.",
    siteName: "METAKNACKS",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "METAKNACKS | SAP Staffing, IT & Cloud Solutions",
    description: "SAP staffing, IT cloud solutions, and specialist teams that turn ambition into impact.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
