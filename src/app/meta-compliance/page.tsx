import type { Metadata } from "next";
import PolicyViewer from "@/components/PolicyViewer";

export const metadata: Metadata = {
  title: "Meta Platform Compliance & Anti-Harm Declaration | TRIOT Bangladesh",
  description:
    "Official statement of TRIOT's compliance with Meta Platform Terms, WhatsApp Business Policies, Commerce Requirements, and strict prohibition of illegal, counterfeit, or harmful goods.",
};

export default function MetaCompliancePage() {
  return (
    <main>
      <PolicyViewer initialPolicyId="meta-compliance" isStandalonePage={true} />
    </main>
  );
}
