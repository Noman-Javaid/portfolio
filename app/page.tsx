"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/noman-wedding-invitation?w=w");
  }, [router]);

  return <div className="h-[100dvh] bg-[#050617]" />;
}

