"use client";

import { useSearchParams } from "next/navigation";
import { WeddingInvitationExperience } from "./WeddingInvitationExperience";

function isTruthyParam(raw: string | null): boolean {
  if (raw === null) return false;
  const v = raw.trim().toLowerCase();
  if (v === "" || v === "1" || v === "true" || v === "yes") return true;
  if (v === "0" || v === "false" || v === "no") return false;
  return true;
}

export function WeddingInvitationPageClient() {
  const searchParams = useSearchParams();
  const walimaOnly = isTruthyParam(searchParams.get("w"));
  return <WeddingInvitationExperience walimaOnly={walimaOnly} />;
}
