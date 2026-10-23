import type { Metadata } from "next";
import PolicyViewer from "@/components/PolicyViewer";

export const metadata: Metadata = {
  title: "Wholesale Grand Terms & Distribution | TRIOT Footwear Bangladesh",
  description:
    "B2B wholesale terms, minimum order quantities (MOQ), commercial invoicing, and distributor agreements for TRIOT artificial leather comfort footwear in Bangladesh.",
};

export default function WholesalePage() {
  return (
    <main>
      <PolicyViewer initialPolicyId="wholesale" isStandalonePage={true} />
    </main>
  );
}
