"use client";

import React, { useState } from "react";
import { ShieldCheckIcon, CopyIcon, CheckIcon, ExternalLinkIcon } from "./Icons";
import { COMPANY_INFO } from "@/data/legalContent";

export default function MetaAuditBanner() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(true);

  const copyToClipboard = (text: string, key: string) => {
    if (typeof window !== "undefined") {
      const fullUrl = window.location.origin + text;
      navigator.clipboard.writeText(fullUrl);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2500);
    }
  };

  if (!isOpen) {
    return (
      <div className="bg-[#1F2830] text-[#D8E1E8] py-2 px-4 border-b border-[#2C3843]">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <ShieldCheckIcon className="w-4 h-4 text-[#C28E34]" />
            <span className="font-semibold text-white">Meta Developer & App Review Verification Portal</span>
            <span className="hidden md:inline text-[#94A2B0]">| TRIOT Online Business Bangladesh</span>
          </div>
          <button
            onClick={() => setIsOpen(true)}
            className="text-xs font-medium text-[#C28E34] hover:underline"
          >
            Show Meta Reviewer URLs
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="bg-gradient-to-r from-[#182129] via-[#141A1E] to-[#1C2630] text-white border-b border-[#2C3843] py-4 px-4 sm:px-6 relative no-print">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Left badge & summary */}
          <div className="space-y-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wider uppercase bg-[#C28E34] text-[#141A1E]">
                <ShieldCheckIcon className="w-3.5 h-3.5" />
                Meta App Review Notice
              </span>
              <span className="text-xs text-[#AFC0CE] font-medium">
                Verified compliance for Meta Graph API, Facebook Messenger & WhatsApp Automation
              </span>
            </div>
            <p className="text-xs text-[#8997A5] max-w-3xl">
              TRIOT is an ethical footwear manufacturer & retailer in Bangladesh (Est. 2024). We confirm zero illegal, counterfeit, hazardous, or restricted merchandise, and full adherence to Meta Platform Terms.
            </p>
          </div>

          {/* Quick Copy Buttons for Meta App Dashboard */}
          <div className="flex items-center gap-2 flex-wrap text-xs">
            <button
              onClick={() => copyToClipboard("/privacy-policy", "privacy")}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#27333F] hover:bg-[#344453] text-[#FAF7F2] border border-[#3E4E5D] transition-all"
              title="Copy direct Privacy Policy URL for Meta App Dashboard"
            >
              {copiedKey === "privacy" ? (
                <>
                  <CheckIcon className="w-3.5 h-3.5 text-[#48BB78]" />
                  <span className="text-[#48BB78]">Copied Privacy URL</span>
                </>
              ) : (
                <>
                  <CopyIcon className="w-3.5 h-3.5 text-[#C28E34]" />
                  <span>Copy Privacy URL</span>
                </>
              )}
            </button>

            <button
              onClick={() => copyToClipboard("/terms-and-conditions", "terms")}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#27333F] hover:bg-[#344453] text-[#FAF7F2] border border-[#3E4E5D] transition-all"
              title="Copy direct Terms of Service URL for Meta App Dashboard"
            >
              {copiedKey === "terms" ? (
                <>
                  <CheckIcon className="w-3.5 h-3.5 text-[#48BB78]" />
                  <span className="text-[#48BB78]">Copied Terms URL</span>
                </>
              ) : (
                <>
                  <CopyIcon className="w-3.5 h-3.5 text-[#C28E34]" />
                  <span>Copy Terms URL</span>
                </>
              )}
            </button>

            <button
              onClick={() => copyToClipboard("/data-deletion", "deletion")}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#27333F] hover:bg-[#344453] text-[#FAF7F2] border border-[#3E4E5D] transition-all"
              title="Copy Data Deletion Instructions URL for Meta App Dashboard"
            >
              {copiedKey === "deletion" ? (
                <>
                  <CheckIcon className="w-3.5 h-3.5 text-[#48BB78]" />
                  <span className="text-[#48BB78]">Copied Deletion URL</span>
                </>
              ) : (
                <>
                  <CopyIcon className="w-3.5 h-3.5 text-[#C28E34]" />
                  <span>Copy Deletion URL</span>
                </>
              )}
            </button>

            <button
              onClick={() => setIsOpen(false)}
              className="text-xs text-[#8997A5] hover:text-white px-2 py-1"
              aria-label="Dismiss banner"
            >
              ✕
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
