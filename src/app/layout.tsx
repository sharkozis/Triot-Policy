import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MetaAuditBanner from "@/components/MetaAuditBanner";

export const metadata: Metadata = {
  metadataBase: new URL("https://triotbd.vercel.app"),
  title: "TRIOT Bangladesh | Terms of Service, Privacy Policy & Meta Verification",
  description:
    "Official Terms and Conditions, Privacy Policy, Data Deletion Instructions, and Meta Automation Flow compliance for TRIOT - Online Footwear Brand in Bangladesh since 2024. Handcrafted comfort shoes made from artificial leather and soft soles.",
  keywords: [
    "TRIOT",
    "TRIOT Bangladesh",
    "TRIOT Privacy Policy",
    "TRIOT Terms and Conditions",
    "Meta Policy Compliance",
    "Footwear Bangladesh",
    "Artificial Leather Shoes",
    "Soft Sole Shoes",
    "Retail Wholesale Shoes Bangladesh",
    "Data Deletion TRIOT",
  ],
  authors: [{ name: "TRIOT Bangladesh" }],
  creator: "TRIOT",
  publisher: "TRIOT Bangladesh",
  openGraph: {
    title: "TRIOT | Terms of Service & Privacy Policy",
    description:
      "Official legal portal and Meta compliance documentation for TRIOT Footwear Bangladesh. Est. 2024.",
    url: "https://triotbd.vercel.app",
    siteName: "TRIOT Terms & Policy Portal",
    images: [
      {
        url: "/triot-logo.png",
        width: 800,
        height: 800,
        alt: "TRIOT Official Footwear Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/triot-logo.png",
    apple: "/triot-logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col bg-[#FAF7F2] text-[#141A1E]">
        <MetaAuditBanner />
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
