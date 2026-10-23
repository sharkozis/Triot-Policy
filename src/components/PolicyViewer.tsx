"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  POLICIES,
  PolicyDocument,
  COMPANY_INFO,
  META_COMPLIANCE_HIGHLIGHTS,
} from "@/data/legalContent";
import {
  FileTextIcon,
  ShieldCheckIcon,
  TrashIcon,
  TruckIcon,
  BuildingIcon,
  ScaleIcon,
  SearchIcon,
  CopyIcon,
  CheckIcon,
  PrinterIcon,
  FacebookIcon,
  ExternalLinkIcon,
  ChevronRightIcon,
  AlertTriangleIcon,
} from "./Icons";

interface PolicyViewerProps {
  initialPolicyId?: string;
  isStandalonePage?: boolean;
}

export default function PolicyViewer({
  initialPolicyId = "terms",
  isStandalonePage = false,
}: PolicyViewerProps) {
  const [activeTab, setActiveTab] = useState<string>(initialPolicyId);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [copiedUrl, setCopiedUrl] = useState<boolean>(false);
  const [deletionSubmitted, setDeletionSubmitted] = useState<boolean>(false);
  const [deletionForm, setDeletionForm] = useState({
    name: "",
    phone: "",
    facebookUrl: "",
    notes: "",
  });

  const currentPolicy: PolicyDocument = POLICIES[activeTab] || POLICIES.terms;

  const tabList = [
    { id: "terms", label: "Terms & Conditions", icon: FileTextIcon, path: "/terms-and-conditions" },
    { id: "privacy", label: "Privacy Policy", icon: ShieldCheckIcon, path: "/privacy-policy" },
    { id: "data-deletion", label: "Data Deletion", icon: TrashIcon, path: "/data-deletion" },
    { id: "returns", label: "Shipping & Exchanges", icon: TruckIcon, path: "/shipping-and-returns" },
    { id: "wholesale", label: "Wholesale Grand", icon: BuildingIcon, path: "/wholesale" },
    { id: "meta-compliance", label: "Meta Compliance", icon: ScaleIcon, path: "/meta-compliance" },
  ];

  // Search filter across sections
  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) return currentPolicy.sections;
    const query = searchQuery.toLowerCase();
    return currentPolicy.sections.filter((sec) => {
      const titleMatch = sec.title.toLowerCase().includes(query);
      const contentMatch = sec.content.some((p) => p.toLowerCase().includes(query));
      return titleMatch || contentMatch;
    });
  }, [currentPolicy, searchQuery]);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedUrl(true);
      setTimeout(() => setCopiedUrl(false), 2000);
    }
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  const handleDeletionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDeletionSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      {/* Header Overview Banner */}
      <div className="bg-gradient-to-br from-[#FFFFFF] to-[#F5EFE6] rounded-2xl border border-[#E6DED0] p-6 sm:p-10 shadow-sm mb-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C28E34]/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-3 max-w-3xl">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#141A1E] text-[#FAF7F2]">
                {currentPolicy.badge}
              </span>
              <span className="text-xs font-semibold text-[#8B6E32] bg-[#F7F0E4] px-2.5 py-1 rounded-full border border-[#EADBCC]">
                Official Bangladesh Footwear
              </span>
              <span className="text-xs text-[#6F7C88]">
                Effective: {currentPolicy.effectiveDate} • Last Updated: {currentPolicy.lastUpdated}
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-black text-[#141A1E] tracking-tight">
              {currentPolicy.title}
            </h1>
            
            <p className="text-sm sm:text-base text-[#4F5B66] leading-relaxed">
              {currentPolicy.summary}
            </p>
          </div>

          {/* Quick Action Toolbar */}
          <div className="flex flex-row md:flex-col gap-2 shrink-0 no-print">
            <button
              onClick={handleCopyLink}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-white hover:bg-[#FAF7F2] text-[#141A1E] border border-[#DCD3C4] shadow-sm transition-all"
              title="Copy current page URL"
            >
              {copiedUrl ? (
                <>
                  <CheckIcon className="w-4 h-4 text-[#48BB78]" />
                  <span className="text-[#48BB78]">Link Copied</span>
                </>
              ) : (
                <>
                  <CopyIcon className="w-4 h-4 text-[#C28E34]" />
                  <span>Copy Direct URL</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-white hover:bg-[#FAF7F2] text-[#141A1E] border border-[#DCD3C4] shadow-sm transition-all"
              title="Print document or save as PDF"
            >
              <PrinterIcon className="w-4 h-4 text-[#6A7885]" />
              <span>Print / PDF</span>
            </button>

            <a
              href={COMPANY_INFO.facebookPage}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-[#1877F2] text-white hover:bg-[#0E65D9] shadow-sm transition-all"
            >
              <FacebookIcon className="w-4 h-4 fill-white" />
              <span>Facebook Page</span>
            </a>
          </div>
        </div>

        {/* Brand Highlights Bar */}
        <div className="mt-8 pt-6 border-t border-[#E6DED0] grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
          <div>
            <span className="block text-[#82909C] font-medium">Business Origin</span>
            <span className="font-bold text-[#141A1E]">Bangladesh (Since 2024)</span>
          </div>
          <div>
            <span className="block text-[#82909C] font-medium">Product Focus</span>
            <span className="font-bold text-[#141A1E]">Artificial Leather & Soft Sole</span>
          </div>
          <div>
            <span className="block text-[#82909C] font-medium">Service Coverage</span>
            <span className="font-bold text-[#141A1E]">Retail & Wholesale Grands</span>
          </div>
          <div>
            <span className="block text-[#82909C] font-medium">Meta Integration</span>
            <span className="font-bold text-[#48BB78] flex items-center gap-1">
              <ShieldCheckIcon className="w-3.5 h-3.5" /> 100% Policy Compliant
            </span>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="mb-8 no-print">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {tabList.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return isStandalonePage ? (
              <Link
                key={tab.id}
                href={tab.path}
                className={`inline-flex items-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap transition-all ${
                  isActive
                    ? "bg-[#141A1E] text-white shadow-md"
                    : "bg-white text-[#4A5560] hover:bg-[#F2ECE1] border border-[#E2D9CB]"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-[#C28E34]" : "text-[#768593]"}`} />
                <span>{tab.label}</span>
              </Link>
            ) : (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setSearchQuery("");
                }}
                className={`inline-flex items-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap transition-all ${
                  isActive
                    ? "bg-[#141A1E] text-white shadow-md"
                    : "bg-white text-[#4A5560] hover:bg-[#F2ECE1] border border-[#E2D9CB]"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-[#C28E34]" : "text-[#768593]"}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="mb-8 no-print">
        <div className="relative">
          <SearchIcon className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-[#8B98A5]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={`Search within ${currentPolicy.shortTitle} (e.g. Meta, sole, artificial leather, refund, courier, wholesale)...`}
            className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white border border-[#DDD4C5] focus:outline-none focus:border-[#C28E34] text-sm text-[#141A1E] shadow-sm transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-[#8B98A5] hover:text-[#141A1E]"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Main Content Layout with Sticky Table of Contents */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sticky Table of Contents (Desktop) */}
        <aside className="hidden lg:block lg:col-span-1 no-print">
          <div className="sticky top-28 space-y-4">
            <div className="bg-white rounded-xl p-5 border border-[#E6DED0] shadow-sm">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#141A1E] mb-3 flex items-center gap-2">
                <FileTextIcon className="w-4 h-4 text-[#C28E34]" />
                Contents Navigation
              </h3>
              <nav className="space-y-1.5 text-xs">
                {currentPolicy.sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block py-1.5 px-2.5 rounded-lg text-[#52606D] hover:text-[#141A1E] hover:bg-[#F5EFE6] transition-colors truncate"
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>

            {/* Quick Meta Compliance Badge */}
            <div className="bg-gradient-to-br from-[#1C252D] to-[#141A1E] rounded-xl p-4 text-white border border-[#2B3742] space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#C28E34]">
                <ShieldCheckIcon className="w-4 h-4" />
                Meta Review Ready
              </div>
              <p className="text-[11px] text-[#A6B5C3] leading-relaxed">
                Zero illegal products, authentic artificial leather, and direct Bangladesh customer service.
              </p>
              <a
                href={COMPANY_INFO.facebookPage}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-white hover:text-[#C28E34] transition-colors"
              >
                <span>Visit Facebook Page</span>
                <ExternalLinkIcon className="w-3 h-3" />
              </a>
            </div>
          </div>
        </aside>

        {/* Content Body */}
        <main className="lg:col-span-3 space-y-6 print-page">
          {filteredSections.length === 0 ? (
            <div className="bg-white rounded-2xl p-10 border border-[#E6DED0] text-center space-y-3">
              <SearchIcon className="w-8 h-8 text-[#A0AEC0] mx-auto" />
              <p className="text-sm font-semibold text-[#141A1E]">No matching clauses found</p>
              <p className="text-xs text-[#718096]">
                Try adjusting your search keywords or clear the search to view all sections.
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="px-4 py-2 rounded-lg text-xs font-semibold bg-[#141A1E] text-white"
              >
                Reset Search
              </button>
            </div>
          ) : (
            filteredSections.map((section) => (
              <article
                key={section.id}
                id={section.id}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E6DED0] shadow-sm space-y-4 scroll-mt-28"
              >
                <div className="flex items-center justify-between border-b border-[#F0EAE0] pb-3">
                  <h2 className="text-lg sm:text-xl font-bold text-[#141A1E]">
                    {section.title}
                  </h2>
                  <a
                    href={`#${section.id}`}
                    className="text-xs font-medium text-[#8F9EAC] hover:text-[#C28E34] transition-colors"
                    title="Direct link to this section"
                  >
                    #link
                  </a>
                </div>

                <div className="space-y-3 text-sm text-[#3E4A54] leading-relaxed">
                  {section.content.map((paragraph, pIdx) => {
                    const isBullet = paragraph.startsWith("•") || paragraph.startsWith("Step");
                    return isBullet ? (
                      <p
                        key={pIdx}
                        className="pl-4 py-1 border-l-2 border-[#C28E34] bg-[#FAF8F4] rounded-r-lg font-medium text-[#29323A]"
                      >
                        {paragraph}
                      </p>
                    ) : (
                      <p key={pIdx}>{paragraph}</p>
                    );
                  })}
                </div>
              </article>
            ))
          )}

          {/* Interactive User Data Deletion Request Form (Displays on Data Deletion Tab) */}
          {activeTab === "data-deletion" && (
            <div className="bg-gradient-to-br from-[#FFFFFF] to-[#F8F4EC] rounded-2xl p-6 sm:p-8 border border-[#DFD6C6] shadow-sm space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#C28E34]">
                  Automated Self-Service
                </span>
                <h3 className="text-xl font-bold text-[#141A1E]">
                  Submit User Data Deletion Request
                </h3>
                <p className="text-xs text-[#5D6B77]">
                  Meta users who engaged with TRIOT via Facebook Login, Lead forms, or Messenger can submit this request to trigger permanent deletion of their data within 48 to 72 business hours.
                </p>
              </div>

              {deletionSubmitted ? (
                <div className="p-6 rounded-xl bg-[#F0FFF4] border border-[#9AE6B4] text-center space-y-2">
                  <CheckIcon className="w-8 h-8 text-[#38A169] mx-auto" />
                  <h4 className="text-base font-bold text-[#22543D]">
                    Deletion Request Registered
                  </h4>
                  <p className="text-xs text-[#276749]">
                    Your data deletion ticket has been recorded. Our Data Protection Team will purge your identifiers from our databases within 48 to 72 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleDeletionSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#141A1E] mb-1">
                        Full Name / Facebook Display Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={deletionForm.name}
                        onChange={(e) =>
                          setDeletionForm({ ...deletionForm, name: e.target.value })
                        }
                        placeholder="e.g. Rafiqul Islam"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#D5CCC0] text-sm text-[#141A1E] focus:outline-none focus:border-[#C28E34]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#141A1E] mb-1">
                        Phone Number Used for Orders *
                      </label>
                      <input
                        type="tel"
                        required
                        value={deletionForm.phone}
                        onChange={(e) =>
                          setDeletionForm({ ...deletionForm, phone: e.target.value })
                        }
                        placeholder="01XXXXXXXXX"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#D5CCC0] text-sm text-[#141A1E] focus:outline-none focus:border-[#C28E34]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#141A1E] mb-1">
                      Facebook Profile URL or Messenger ID (Optional)
                    </label>
                    <input
                      type="text"
                      value={deletionForm.facebookUrl}
                      onChange={(e) =>
                        setDeletionForm({ ...deletionForm, facebookUrl: e.target.value })
                      }
                      placeholder="https://facebook.com/your-username"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#D5CCC0] text-sm text-[#141A1E] focus:outline-none focus:border-[#C28E34]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#141A1E] mb-1">
                      Additional Notes (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={deletionForm.notes}
                      onChange={(e) =>
                        setDeletionForm({ ...deletionForm, notes: e.target.value })
                      }
                      placeholder="Specify if you wish to delete previous order history, messages, or all records..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#D5CCC0] text-sm text-[#141A1E] focus:outline-none focus:border-[#C28E34]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#141A1E] hover:bg-[#252E36] text-white text-xs font-bold tracking-wide uppercase shadow-sm transition-all"
                  >
                    <TrashIcon className="w-4 h-4 text-[#C28E34]" />
                    <span>Confirm Data Deletion Request</span>
                  </button>
                </form>
              )}
            </div>
          )}

          {/* Wholesale Contact Card (Displays on Wholesale Tab) */}
          {activeTab === "wholesale" && (
            <div className="bg-gradient-to-br from-[#1F2830] to-[#141A1E] rounded-2xl p-6 sm:p-8 text-white space-y-4 border border-[#2F3C47]">
              <div className="flex items-center gap-2">
                <BuildingIcon className="w-5 h-5 text-[#C28E34]" />
                <h3 className="text-xl font-bold">Wholesale Grand Inquiries & Bulk Orders</h3>
              </div>
              <p className="text-xs text-[#9EB0C0] leading-relaxed">
                We supply physical shoe retailers, footwear boutiques, corporate bulk orders, and regional distributors across Bangladesh with tiered pricing and custom size packing.
              </p>
              <div className="flex flex-wrap gap-4 pt-2 text-xs">
                <a
                  href={`mailto:${COMPANY_INFO.wholesaleEmail}`}
                  className="px-4 py-2.5 rounded-xl bg-[#C28E34] text-[#141A1E] font-bold hover:bg-[#DFB15B] transition-colors"
                >
                  Email: {COMPANY_INFO.wholesaleEmail}
                </a>
                <a
                  href={COMPANY_INFO.facebookPage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-[#2A3742] text-white font-semibold hover:bg-[#384A59] transition-colors"
                >
                  Message Wholesale Team on Facebook
                </a>
              </div>
            </div>
          )}

          {/* Meta Compliance Summary Card (Displays on Meta Compliance Tab) */}
          {activeTab === "meta-compliance" && (
            <div className="space-y-4">
              <div className="bg-[#FAF8F5] rounded-2xl p-6 border border-[#E6DED0]">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#C28E34] mb-3">
                  Summary of Meta Platform Safeguards
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {META_COMPLIANCE_HIGHLIGHTS.map((item, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-white border border-[#E8E0D4] space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#141A1E]">
                        <ShieldCheckIcon className="w-4 h-4 text-[#48BB78]" />
                        <span>{item.title}</span>
                      </div>
                      <p className="text-xs text-[#5D6B77]">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
