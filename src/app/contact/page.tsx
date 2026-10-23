import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { COMPANY_INFO } from "@/data/legalContent";
import {
  MailIcon,
  PhoneIcon,
  FacebookIcon,
  ShieldCheckIcon,
  ExternalLinkIcon,
  BuildingIcon,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "Official Contact & Business Verification | TRIOT Footwear Bangladesh",
  description:
    "Direct contact details, official Facebook page, customer support hotline, wholesale department, and business verification for TRIOT Bangladesh.",
};

export default function ContactPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="bg-white rounded-3xl border border-[#E6DED0] shadow-sm p-6 sm:p-12 space-y-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-[#F0EAE0]">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-[#FAF7F2] border border-[#E6DED0] p-2 flex items-center justify-center">
              <Image
                src="/triot-logo.png"
                alt="TRIOT Bangladesh"
                width={56}
                height={56}
                className="object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl sm:text-3xl font-black text-[#141A1E]">TRIOT</h1>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#141A1E] text-white uppercase tracking-wider">
                  Official Store
                </span>
              </div>
              <p className="text-xs text-[#6F7C88] font-medium">
                Comfort Footwear • Bangladesh (Est. 2024)
              </p>
            </div>
          </div>

          <a
            href={COMPANY_INFO.facebookPage}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-[#1877F2] text-white hover:bg-[#0E65D9] transition-all"
          >
            <FacebookIcon className="w-4 h-4 fill-white" />
            <span>Official Facebook Page</span>
            <ExternalLinkIcon className="w-3 h-3" />
          </a>
        </div>

        {/* Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Channel 1: Customer Care */}
          <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#E8E0D2] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-[#DDD3C3] flex items-center justify-center text-[#C28E34]">
              <PhoneIcon className="w-5 h-5" />
            </div>
            <h2 className="text-base font-bold text-[#141A1E]">Customer Care & Orders</h2>
            <p className="text-xs text-[#5D6B77] leading-relaxed">
              For retail orders, size exchanges, comfort advice, and delivery tracking across Bangladesh:
            </p>
            <div className="pt-1 text-xs space-y-1 font-semibold text-[#141A1E]">
              <p>Hotline: {COMPANY_INFO.phone}</p>
              <p>Email: {COMPANY_INFO.officialEmail}</p>
              <p className="text-[#8895A2] font-normal">{COMPANY_INFO.operatingHours}</p>
            </div>
          </div>

          {/* Channel 2: Legal & Privacy */}
          <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#E8E0D2] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-[#DDD3C3] flex items-center justify-center text-[#C28E34]">
              <ShieldCheckIcon className="w-5 h-5" />
            </div>
            <h2 className="text-base font-bold text-[#141A1E]">Legal & Data Protection</h2>
            <p className="text-xs text-[#5D6B77] leading-relaxed">
              For Meta App Review officers, compliance audits, and user data deletion requests:
            </p>
            <div className="pt-1 text-xs space-y-1 font-semibold text-[#141A1E]">
              <p>Legal Inquiries: {COMPANY_INFO.legalEmail}</p>
              <p>Data Deletion Request: <Link href="/data-deletion" className="text-[#C28E34] underline">Submit Online</Link></p>
              <p className="text-[#8895A2] font-normal">Response time: Within 24-48 business hours</p>
            </div>
          </div>

          {/* Channel 3: Wholesale */}
          <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#E8E0D2] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-[#DDD3C3] flex items-center justify-center text-[#C28E34]">
              <BuildingIcon className="w-5 h-5" />
            </div>
            <h2 className="text-base font-bold text-[#141A1E]">Wholesale Grand Department</h2>
            <p className="text-xs text-[#5D6B77] leading-relaxed">
              For shoe boutiques, bulk retailers, and master regional distributors in Bangladesh:
            </p>
            <div className="pt-1 text-xs space-y-1 font-semibold text-[#141A1E]">
              <p>Wholesale Email: {COMPANY_INFO.wholesaleEmail}</p>
              <p>Commercial Catalog: Available upon trade verification</p>
            </div>
          </div>

          {/* Channel 4: Official Social Channels */}
          <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#E8E0D2] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-[#DDD3C3] flex items-center justify-center text-[#1877F2]">
              <FacebookIcon className="w-5 h-5" />
            </div>
            <h2 className="text-base font-bold text-[#141A1E]">Official Social Commerce</h2>
            <p className="text-xs text-[#5D6B77] leading-relaxed">
              Connect directly with our verified Facebook Page and Messenger automated assistant:
            </p>
            <div className="pt-1 text-xs space-y-1">
              <a
                href={COMPANY_INFO.facebookPage}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1877F2] font-semibold hover:underline flex items-center gap-1"
              >
                <span>facebook.com/profile.php?id=61556981380240</span>
                <ExternalLinkIcon className="w-3.5 h-3.5" />
              </a>
              <p className="text-[#8895A2]">Direct messaging available 24/7</p>
            </div>
          </div>
        </div>

        {/* Verification Note for Meta */}
        <div className="p-5 rounded-xl bg-[#141A1E] text-white text-xs space-y-2">
          <div className="flex items-center gap-2 font-bold text-[#C28E34]">
            <ShieldCheckIcon className="w-4 h-4" />
            Official Meta Commerce & Webhook Verification
          </div>
          <p className="text-[#A2B1BF] leading-relaxed">
            TRIOT operates under the trade laws of the People&apos;s Republic of Bangladesh. All footwear items sold are original Bangladeshi designs made from synthetic artificial leather and soft soles. No restricted or illegal items are handled.
          </p>
        </div>
      </div>
    </main>
  );
}
