import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SmoothScroll } from "@/components/smooth-scroll";
import { SiteShell } from "@/components/site-shell";
import type { ReactNode } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL("https://prince-seth.dev"),
  title: {
    default: "Prince Seth | Full Stack Developer | AI Integration Engineer",
    template: "%s | Prince Seth"
  },
  description:
    "Prince Seth is a full stack developer and AI integration engineer building scalable systems, RAG pipelines, and production-grade web products.",
  keywords: ["Prince Seth", "Full Stack Developer", "AI Integration Engineer", "Next.js portfolio", "competitive programmer"],
  authors: [{ name: "Prince Seth" }],
  openGraph: {
    title: "Prince Seth | Full Stack Developer | AI Integration Engineer",
    description: "Premium developer portfolio with AI systems, production-grade case studies, and competitive programming depth.",
    url: "https://prince-seth.dev",
    siteName: "Prince Seth Portfolio",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Prince Seth | Full Stack Developer | AI Integration Engineer",
    description: "Premium developer portfolio with AI systems, production-grade case studies, and competitive programming depth."
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} bg-[#040816] font-sans antialiased`}>
        <SmoothScroll>
          <SiteShell>{children}</SiteShell>
        </SmoothScroll>
      </body>
    </html>
  );
}