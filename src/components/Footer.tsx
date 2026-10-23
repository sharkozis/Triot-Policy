import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FacebookIcon, ShieldCheckIcon, MailIcon, PhoneIcon, ExternalLinkIcon } from "./Icons";
import { COMPANY_INFO } from "@/data/legalContent";

export default function Footer() {
  return (
    <footer className="bg-[#141A1E] text-[#D8E1E8] border-t border-[#26323B] transition-colors mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand & Overview */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden bg-white p-1 border border-[#3A4752] flex items-center justify-center">
                <Image
                  src="/triot-logo.png"
                  alt="TRIOT Footwear"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-black tracking-wider text-white">TRIOT</span>
            </div>
            <p className="text-xs text-[#9BA8B4] leading-relaxed">
              Official online footwear brand from Bangladesh founded in 2024. Handcrafted comfort shoes made from premium cruelty-free artificial leather and ergonomic soft soles. Serving retail customers and wholesale grands nationwide.
            </p>
            <div className="pt-2">
              <a
                href={COMPANY_INFO.facebookPage}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold bg-[#1877F2] text-white hover:bg-[#0E65D9] transition-all"
              >
                <FacebookIcon className="w-4 h-4 fill-white" />
                <span>Follow on Facebook</span>
                <ExternalLinkIcon className="w-3 h-3 opacity-80" />
              </a>
            </div>
          </div>

          {/* Quick Legal Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#C28E34]">
              Legal & Policies
            </h4>
            <ul className="space-y-2 text-xs text-[#B2BFCB]">
              <li>
                <Link href="/terms-and-conditions" className="hover:text-white transition-colors">
                  Terms and Conditions of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy & Data Policy
                </Link>
              </li>
              <li>
                <Link href="/data-deletion" className="hover:text-white transition-colors">
                  User Data Deletion Instructions (Meta)
                </Link>
              </li>
              <li>
                <Link href="/shipping-and-returns" className="hover:text-white transition-colors">
                  Shipping, Exchanges & Comfort Guarantee
                </Link>
              </li>
              <li>
                <Link href="/wholesale" className="hover:text-white transition-colors">
                  Wholesale Grand Terms & Inquiries
                </Link>
              </li>
              <li>
                <Link href="/meta-compliance" className="hover:text-white transition-colors">
                  Meta Compliance & Anti-Harm Declaration
                </Link>
              </li>
            </ul>
          </div>

          {/* Meta Reviewer & Verification */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#C28E34]">
              Meta App Review & Compliance
            </h4>
            <p className="text-xs text-[#9BA8B4] leading-relaxed">
              This portal hosts verified URLs for Meta App Review, Facebook Commerce, Messenger Webhooks, and WhatsApp Business verification.
            </p>
            <div className="space-y-1.5 text-[11px] text-[#8695A2]">
              <div className="flex items-center gap-1.5">
                <ShieldCheckIcon className="w-3.5 h-3.5 text-[#48BB78]" />
                <span>Zero Counterfeit or Prohibited Goods</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheckIcon className="w-3.5 h-3.5 text-[#48BB78]" />
                <span>Strict Meta Platform Terms Adherence</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheckIcon className="w-3.5 h-3.5 text-[#48BB78]" />
                <span>No Third-Party Personal Data Brokering</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheckIcon className="w-3.5 h-3.5 text-[#48BB78]" />
                <span>Bangladesh Consumer Protection Act 2009</span>
              </div>
            </div>
          </div>

          {/* Contact & Support */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#C28E34]">
              Contact & Inquiries
            </h4>
            <div className="space-y-2 text-xs text-[#B2BFCB]">
              <div className="flex items-center gap-2">
                <MailIcon className="w-4 h-4 text-[#C28E34]" />
                <span>Legal: privacy@triotbd.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MailIcon className="w-4 h-4 text-[#C28E34]" />
                <span>Wholesale: wholesale@triotbd.com</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneIcon className="w-4 h-4 text-[#C28E34]" />
                <span>Hotline: +880 1800-000000</span>
              </div>
              <p className="text-[11px] text-[#7E8D9B] pt-1">
                Dhaka, Bangladesh • Sat - Thu: 10:00 AM - 9:00 PM (GMT+6)
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#26323B] flex flex-col sm:flex-row items-center justify-between text-xs text-[#7E8D9B] gap-4">
          <p>© 2024 - 2026 TRIOT Bangladesh. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Footwear of Bangladesh</span>
            <span>•</span>
            <span>Artificial Leather & Soft Sole Comfort</span>
            <span>•</span>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
