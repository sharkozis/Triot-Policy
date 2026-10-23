import type { Metadata } from "next";
import PolicyViewer from "@/components/PolicyViewer";

export const metadata: Metadata = {
  title: "Shipping, Returns & Comfort Guarantee | TRIOT Footwear Bangladesh",
  description:
    "Delivery timelines across all 64 districts in Bangladesh, doorstep parcel inspection privilege, 7-day hassle-free size exchange, and manufacturing defect warranty for TRIOT shoes.",
};

export default function ShippingAndReturnsPage() {
  return (
    <main>
      <PolicyViewer initialPolicyId="returns" isStandalonePage={true} />
    </main>
  );
}
