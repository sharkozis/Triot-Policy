import type { Metadata } from "next";
import PolicyViewer from "@/components/PolicyViewer";

export const metadata: Metadata = {
  title: "User Data Deletion Instructions | TRIOT Footwear - Meta Compliance",
  description:
    "Official Facebook / Meta User Data Deletion Instructions for TRIOT. Learn how to disconnect permissions from your Facebook account or request permanent database removal.",
};

export default function DataDeletionPage() {
  return (
    <main>
      <PolicyViewer initialPolicyId="data-deletion" isStandalonePage={true} />
    </main>
  );
}
