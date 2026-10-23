import type { Metadata } from "next";
import PolicyViewer from "@/components/PolicyViewer";

export const metadata: Metadata = {
  title: "Terms and Conditions of Service | TRIOT Footwear Bangladesh",
  description:
    "Official Terms and Conditions for TRIOT footwear store, Bangladesh. Covers orders, comfort guarantee, artificial leather shoe specifications, retail and wholesale grand agreements.",
};

export default function TermsAndConditionsPage() {
  return (
    <main>
      <PolicyViewer initialPolicyId="terms" isStandalonePage={true} />
    </main>
  );
}
