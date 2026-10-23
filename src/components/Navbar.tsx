"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FacebookIcon, ExternalLinkIcon, ShieldCheckIcon } from "./Icons";
import { COMPANY_INFO } from "@/data/legalContent";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/terms-and-conditions", label: "Terms of Service" },
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/data-deletion", label: "Data Deletion" },
    { href: "/shipping-and-returns", label: "Shipping & Exchanges" },
    { href: "/wholesale", label: "Wholesale Grand" },
    { href: "/meta-compliance", label: "Meta Compliance" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E6DED0] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-white shadow-sm border border-[#E6DED0] flex items-center justify-center p-1 group-hover:border-[#C28E34] transition-all">
              <Image
                src="/triot-logo.png"
                alt="TRIOT Official Logo"
                width={48}
                height={48}
                priority
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black tracking-wider text-[#141A1E] group-hover:text-[#C28E34] transition-colors">
                  TRIOT
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded-full bg-[#1F2830] text-[#FAF7F2]">
                  <ShieldCheckIcon className="w-3 h-3 text-[#C28E34]" />
                  Verified
                </span>
              </div>
              <span className="text-xs text-[#63707B] font-medium hidden sm:inline">
                Comfort Footwear • Bangladesh (Est. 2024)
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                    isActive
                      ? "bg-[#141A1E] text-white shadow-sm"
                      : "text-[#3D4750] hover:text-[#141A1E] hover:bg-[#EFE7DC]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Official Facebook Page */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={COMPANY_INFO.facebookPage}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-[#1877F2] text-white shadow-sm hover:bg-[#0E65D9] transition-all hover:scale-[1.02]"
              title="Visit official Facebook Page for TRIOT"
            >
              <FacebookIcon className="w-4 h-4 fill-white" />
              <span>Official Page</span>
              <ExternalLinkIcon className="w-3 h-3 opacity-80" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={COMPANY_INFO.facebookPage}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#1877F2] text-white hover:bg-[#0E65D9]"
              title="Official Facebook Page"
            >
              <FacebookIcon className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-lg text-[#141A1E] hover:bg-[#EFE7DC] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-[#E6DED0] space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-[#141A1E] text-white font-semibold"
                      : "text-[#3D4750] hover:bg-[#EFE7DC] hover:text-[#141A1E]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
}
