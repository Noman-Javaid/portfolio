import type { Metadata } from "next";
import { Cormorant_Garamond, Great_Vibes } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-wedding-serif",
});

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-wedding-script",
});

export const metadata: Metadata = {
  title: "Wedding Invitation — Noman & Noor",
  description:
    "Mr & Mrs Javaid invite you to celebrate the wedding of Muhammad Noman Javaid & Noor Fatima. Barat & Walima details inside.",
  openGraph: {
    title: "Wedding Invitation — Noman & Noor",
    description: "Join us for Barat & Walima celebrations in Lahore.",
  },
};

export default function WeddingInvitationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${cormorant.variable} ${greatVibes.variable} h-[100dvh] overflow-hidden font-[family-name:var(--font-wedding-serif)] antialiased`}
    >
      {children}
    </div>
  );
}
