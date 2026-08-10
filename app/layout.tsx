import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SEO Dashboard — Semrush Analytics",
  description: "Dark-themed SEO analytics dashboard built with Next.js & Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark h-full`}>
      <body className="h-full font-sans bg-surface text-text-primary overflow-hidden">
        {children}
      </body>
    </html>
  );
}
