import type { Metadata } from "next";
import PolicyViewer from "@/components/PolicyViewer";

export const metadata: Metadata = {
  title: "Privacy Policy | TRIOT Footwear Bangladesh - Official Meta Compliance",
  description:
    "Official Privacy Policy of TRIOT. Learn how we collect, protect, and handle customer data for shoe orders and Meta Messenger automation in Bangladesh. Zero data selling pledge.",
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <PolicyViewer initialPolicyId="privacy" isStandalonePage={true} />
    </main>
  );
}
