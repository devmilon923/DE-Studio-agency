import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./sections/Footer";
import Header from "./sections/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DE STUDIO | Brand Identity, Web Design & Development Agency",
  description:
    "Full-service creative studio specializing in brand identity, web design, and scalable development. We craft digital brands & products that drive results.",
  keywords:
    "brand identity, web design, development, creative agency, digital branding, React, Next.js, Webflow",
  authors: [{ name: "DE STUDIO" }],
  openGraph: {
    title: "DE STUDIO | Brand Identity, Web Design & Development",
    description:
      "Full-service creative studio specializing in brand identity, web design, and scalable development.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "DE STUDIO | Creative Agency",
    description: "We craft digital brands & products that drive results.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
