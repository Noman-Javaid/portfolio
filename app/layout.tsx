import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "M Noman Javaid - Full Stack Software Engineer",
  description: "Portfolio of M Noman Javaid - Software Engineer specializing in Ruby on Rails, React.js, and MERN Stack. Over 2 years of experience in full-stack development.",
  keywords: "Software Engineer, Full Stack Developer, Ruby on Rails, React, MERN, TypeScript, Next.js",
  authors: [{ name: "M Noman Javaid" }],
  creator: "M Noman Javaid",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

