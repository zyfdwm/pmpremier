import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter_Tight } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
});

const interTight = Inter_Tight({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PM Premier Consulting",
  description: "PM Premier Consulting is a leading provider of high-quality consulting services to businesses of all sizes. We specialize in helping our clients achieve their goals through strategic planning, operational excellence, and innovative solutions.",
  keywords: "PM Premier Consulting, consulting services, strategic planning, operational excellence, innovative solutions",
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
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${plusJakartaSans.variable} ${interTight.variable}`}>
        <Navbar />
        <PageTransition>
          {children}
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
