import { WeddingInvitationPageClient } from "@/components/wedding/WeddingInvitationPageClient";
import { Suspense } from "react";

export default function NomanWeddingInvitationPage() {
  return (
    <Suspense fallback={<div className="h-[100dvh] bg-[#070914]" />}>
      <WeddingInvitationPageClient />
    </Suspense>
  );
}
