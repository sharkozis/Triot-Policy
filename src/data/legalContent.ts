export interface LegalSection {
  id: string;
  title: string;
  iconName?: string;
  content: string[];
  subsections?: {
    id: string;
    title: string;
    points: string[];
  }[];
}

export interface PolicyDocument {
  id: "terms" | "privacy" | "data-deletion" | "returns" | "meta-compliance" | "wholesale";
  title: string;
  shortTitle: string;
  badge: string;
  lastUpdated: string;
  effectiveDate: string;
  summary: string;
  sections: LegalSection[];
}

export const COMPANY_INFO = {
  name: "TRIOT",
  tagline: "Comfort First Footwear • Made in Bangladesh",
  founded: "2024",
  country: "Bangladesh",
  productFocus: "Handcrafted comfort footwear engineered with premium artificial leather and ultra-soft ergonomic soles.",
  businessModel: "Retail (Direct-to-Consumer) and Wholesale Footwear Grand Distributor",
  facebookPage: "https://www.facebook.com/profile.php?id=61556981380240",
  officialEmail: "support@triotbd.com",
  legalEmail: "privacy@triotbd.com",
  wholesaleEmail: "wholesale@triotbd.com",
  phone: "+880 1800-000000",
  operatingHours: "Saturday - Thursday: 10:00 AM - 9:00 PM (GMT+6, Dhaka Time)",
  address: "Dhaka, Bangladesh",
};

export const META_COMPLIANCE_HIGHLIGHTS = [
  {
    title: "100% Anti-Illegal & Ethical Operations",
    description: "Strict prohibition of counterfeit goods, weapons, adult products, tobacco, hazardous substances, hate speech, or deceptive practices. All TRIOT footwear is genuine local production.",
  },
  {
    title: "Meta Automation & Messaging Compliance",
    description: "Full compliance with Meta Platform Terms, WhatsApp Business Policies, and Facebook Messenger Automation guidelines. Opt-out anytime with 'STOP' or connect with live human support with 'AGENT'.",
  },
  {
    title: "No Data Selling or Commercial Brokering",
    description: "Customer data is used strictly for footwear fulfillment and Bangladesh courier delivery. Data is never sold, leased, or transferred to third-party ad networks.",
  },
  {
    title: "Instant User Data Deletion Mechanism",
    description: "Full self-serve and request-based data deletion instructions complying with Meta App Review guidelines and Bangladesh digital privacy standards.",
  },
  {
    title: "Customer Comfort & Transparent Commerce",
    description: "Clear retail and wholesale policies, doorstep parcel inspection across all 64 districts of Bangladesh, easy 7-day size exchange, and zero hidden charges.",
  },
];

export const POLICIES: Record<string, PolicyDocument> = {
  terms: {
    id: "terms",
    title: "Terms and Conditions of Service",
    shortTitle: "Terms of Service",
    badge: "Commercial & User Agreement",
    lastUpdated: "October 2026",
    effectiveDate: "January 1, 2024",
    summary:
      "These Terms and Conditions govern the access, browsing, and purchase of footwear products from TRIOT via our official online storefront, Facebook page, automated messaging channels, and wholesale distribution network in Bangladesh.",
    sections: [
      {
        id: "acceptance",
        title: "1. Acceptance of Terms & Eligibility",
        content: [
          "By accessing our catalog, ordering via our Facebook official page (https://www.facebook.com/profile.php?id=61556981380240), interacting with our automated chat assistants, or placing wholesale/retail orders, you agree to be legally bound by these Terms and Conditions.",
          "You must be at least 18 years old, or possess valid parental/guardian consent under the laws of Bangladesh, to submit binding orders or provide personal delivery information.",
          "If you do not agree with any portion of these terms, please refrain from submitting orders or using our digital ordering channels.",
        ],
      },
      {
        id: "business-nature",
        title: "2. Business Identity & Product Specifications",
        content: [
          "TRIOT is a footwear brand founded in Bangladesh in 2024, specializing in comfortable, everyday footwear for men and women.",
          "Material Transparency: All TRIOT shoes are purposefully manufactured with high-grade cruelty-free artificial leathers (synthetic PU / microfiber) and specialized soft, flexible cushioning soles engineered for maximum foot comfort.",
          "We do not use genuine animal hides or exotic leathers, ensuring ethical, durable, water-resistant, and sustainable manufacturing standards.",
          "All product photographs and color swatches shown on our Facebook page or catalog are captured from genuine samples. Minor color variations may occur due to screen calibration or photographic lighting.",
        ],
      },
      {
        id: "ordering-pricing",
        title: "3. Orders, Pricing & Payment in Bangladesh",
        content: [
          "All prices listed are in Bangladeshi Taka (BDT) and represent transparent pricing.",
          "Retail Orders: Customers can order via Facebook Messenger, WhatsApp, automated order forms, or website links. Order confirmation is formalized once our automated system or support executive verifies delivery address and phone number.",
          "Wholesale Orders: TRIOT supports wholesale grands and bulk distributor orders across Bangladesh. Wholesale pricing, minimum order quantities (MOQs), and payment schedules are governed by custom wholesale invoices and written agreements.",
          "Payment Methods: We support Cash on Delivery (COD) across all 64 districts of Bangladesh, as well as verified Mobile Financial Services (bKash, Nagad, Rocket) and direct bank transfers for wholesale partners.",
        ],
      },
      {
        id: "prohibited-activities",
        title: "4. Strict Prohibition of Illegal & Harmful Conduct",
        content: [
          "TRIOT strictly complies with the laws of the People's Republic of Bangladesh and international commerce guidelines, including Meta Platform Policies.",
          "You expressly agree NOT to use TRIOT platforms or services for any of the following:",
          "• Engaging in any fraudulent purchase, placing fake/malicious Cash on Delivery orders, or impersonating other individuals.",
          "• Uploading, sending, or transmitting defamatory, obscene, threatening, hateful, or harassing communications to our automated systems or staff.",
          "• Attempting to reverse-engineer, disrupt, overload, or exploit our automated messaging infrastructure, APIs, or website.",
          "• Reselling counterfeit copies under the TRIOT brand name or infringing upon our intellectual property rights.",
          "Violators are subject to immediate blacklisting, legal reporting to Bangladesh cyber-crime authorities, and Meta platform reporting.",
        ],
      },
      {
        id: "sizing-comfort",
        title: "5. Customer Comfort Guarantee & Sizing",
        content: [
          "TRIOT's foundational philosophy is customer comfort. Our soft soles and flexible artificial leather uppers are designed for prolonged wear.",
          "Standard Bangladeshi & European shoe sizing (EU 39 to 44 / UK equivalents) is utilized. A detailed size chart in centimeters and inches is available upon request in our chat flow.",
          "Because every foot shape is unique, we offer a hassle-free size exchange policy if the delivered pair does not provide an optimal comfortable fit.",
        ],
      },
      {
        id: "meta-platform-terms",
        title: "6. Meta Platform & Automation Compliance",
        content: [
          "Our interactive communication channels integrate with Meta platforms (Facebook Messenger, Instagram Direct, and WhatsApp Business API).",
          "Nothing in our operations, terms, promotions, or interactions breaches Meta Platform Terms, Developer Policies, or Facebook Community Standards.",
          "Automated interactions strictly follow user opt-in and consent. You may end automated communications at any time simply by typing 'STOP', 'UNSUBSCRIBE', or requesting a human agent.",
        ],
      },
      {
        id: "ip-governing-law",
        title: "7. Intellectual Property & Governing Law",
        content: [
          "The 'TRIOT' name, geometric triangle logo, brand identity, product photos, descriptions, and digital assets are the exclusive property of TRIOT.",
          "These Terms are governed by and construed in accordance with the laws of the People's Republic of Bangladesh. Any dispute arising out of or related to these terms shall fall under the exclusive jurisdiction of the competent courts of Dhaka, Bangladesh.",
        ],
      },
    ],
  },

  privacy: {
    id: "privacy",
    title: "Privacy and Personal Data Policy",
    shortTitle: "Privacy Policy",
    badge: "Data Protection & Privacy",
    lastUpdated: "October 2026",
    effectiveDate: "January 1, 2024",
    summary:
      "This Privacy Policy explains how TRIOT collects, uses, protects, and handles your personal information when you visit our platforms, interact with our Facebook Messenger automation, or order our comfort footwear.",
    sections: [
      {
        id: "data-we-collect",
        title: "1. Information We Collect",
        content: [
          "We collect only the minimal information strictly required to process shoe orders, facilitate safe courier delivery, and provide customer support:",
          "• Contact Information: Full customer name, primary and backup mobile phone number, and optional email address.",
          "• Delivery Information: Full shipping address including District, Thana/Upazila, Road/House number, and postal code within Bangladesh.",
          "• Order Details: Shoe model selected, size (EU/BD), color, quantity, order type (retail or wholesale), and special packaging requests.",
          "• Meta Platform Identifiers: When contacting us via our official Facebook page or Messenger automation, Meta provides us with your Page-Scoped ID (PSID), your public Facebook profile name, and conversation timestamps as authorized under your Meta account settings.",
          "• Logistics Status: Delivery tracking code, courier dispatch updates, and delivery confirmation signature/receipt from courier partners.",
        ],
      },
      {
        id: "how-we-use-data",
        title: "2. How We Use Your Information",
        content: [
          "Your personal data is used solely for the following legitimate business purposes:",
          "• Fulfilling and packing your footwear order with the correct artificial leather shoe model and size.",
          "• Providing parcel delivery details to authorized third-party courier services (e.g. Steadfast Courier, Pathao, RedX, Sundarban) for doorstep Cash on Delivery or prepaid delivery.",
          "• Sending automated order verification messages, dispatch tracking numbers, and delivery confirmation updates via Messenger or SMS.",
          "• Assisting with shoe size exchanges, comfort advice, and customer support queries.",
          "• Managing wholesale grand partner invoicing, inventory distribution, and commercial accounts.",
        ],
      },
      {
        id: "zero-selling-pledge",
        title: "3. Absolute Pledge: We Never Sell Your Data",
        content: [
          "TRIOT takes data privacy seriously. Under no circumstance do we sell, rent, lease, trade, or monetize your personal information to third-party advertisers, data brokers, or marketing syndicates.",
          "We do not engage in invasive behavioral tracking across external websites.",
          "All data shared with courier partners is strictly limited to name, phone number, address, and COD invoice amount necessary to deliver your physical package.",
        ],
      },
      {
        id: "meta-automation-data",
        title: "4. Meta Automation Flow & Messenger Privacy",
        content: [
          "TRIOT utilizes Meta Graph API, Webhooks, and automated response flows to ensure fast customer service, instant size recommendations, and rapid order taking.",
          "Our automated assistant only accesses data explicitly provided by you inside the chat thread or permitted by Meta's privacy protocols.",
          "We do not collect sensitive personal data such as financial passwords, credit card numbers, or biometric data through Meta chat.",
          "All payments are handled via Cash on Delivery or official Bangladesh Mobile Financial Services (bKash/Nagad merchant portals) outside of chat plaintext.",
        ],
      },
      {
        id: "security-retention",
        title: "5. Data Security & Storage Period",
        content: [
          "We implement industry-standard administrative, electronic, and physical safeguards to prevent unauthorized access, alteration, or disclosure of customer records.",
          "Customer order logs are retained only as long as necessary to satisfy the delivery lifecycle, the 7-day exchange and warranty guarantee, and mandatory commercial accounting rules under Bangladesh revenue regulations.",
          "Once this period expires or upon a verified user deletion request, data is permanently scrubbed from our active databases.",
        ],
      },
      {
        id: "user-rights",
        title: "6. Your Rights & Access",
        content: [
          "Under Bangladesh guidelines and global privacy principles, you have the right to:",
          "• Request a summary of the personal data TRIOT holds about you.",
          "• Request correction of inaccurate phone numbers, names, or addresses.",
          "• Opt-out of any promotional or automated messaging at any time.",
          "• Request complete deletion of your records (see our dedicated Data Deletion section).",
        ],
      },
    ],
  },

  "data-deletion": {
    id: "data-deletion",
    title: "User Data Deletion Instructions & Policy",
    shortTitle: "Data Deletion",
    badge: "Meta Compliance Requirement",
    lastUpdated: "October 2026",
    effectiveDate: "January 1, 2024",
    summary:
      "In compliance with Meta Platform Policies, Facebook Login / Messenger Guidelines, and consumer privacy rights, this page outlines how users can delete their data or remove TRIOT app permissions from their Facebook accounts.",
    sections: [
      {
        id: "meta-app-removal",
        title: "1. Remove TRIOT from Your Facebook Account (Self-Service)",
        content: [
          "If you interacted with TRIOT through Facebook Login, Lead Ads, or Messenger automation and wish to disconnect our application and revoke permissions, please follow these official Meta steps:",
          "Step 1: Open your Facebook mobile app or navigate to facebook.com in your web browser.",
          "Step 2: Go to your Account Profile > click 'Settings & Privacy' > then select 'Settings'.",
          "Step 3: Scroll down to the 'Your Information' or 'Permissions' section and click on 'Apps and Websites'.",
          "Step 4: Find 'TRIOT' in the list of active apps or connected pages.",
          "Step 5: Click the 'Remove' or 'Revoke' button next to TRIOT.",
          "Step 6: (Optional) Check the box to delete all posts, videos, or events that TRIOT may have sent on your behalf, and confirm removal.",
        ],
      },
      {
        id: "manual-deletion-request",
        title: "2. Request Permanent Deletion from TRIOT Databases",
        content: [
          "If you placed an order or conversed with our automated assistant and wish for your phone number, delivery address, order history, and Messenger PSID to be permanently purged from our internal records, you can submit a manual deletion request:",
          "Method A (Via Facebook Messenger): Send a message to our official page (https://www.facebook.com/profile.php?id=61556981380240) with the exact text: 'DELETE MY DATA' along with your contact number.",
          "Method B (Via Email): Send an email to our Data Protection Officer at privacy@triotbd.com with the subject line 'Personal Data Deletion Request'. Include your full name, phone number, and Facebook profile URL.",
          "Method C (Via WhatsApp/Phone): Contact our verified support line at +880 1800-000000 during business hours.",
        ],
      },
      {
        id: "deletion-timeline",
        title: "3. Processing Timeline & Confirmation",
        content: [
          "Upon receiving your verified request, TRIOT will:",
          "• Acknowledge receipt within 24 hours.",
          "• Permanently delete or anonymize all associated identifiers, chat logs, delivery addresses, and phone records within 48 to 72 business hours.",
          "• Dispatch a final confirmation notification via Messenger or email confirming complete data scrubbing.",
          "Note: Orders currently in transit with courier partners cannot have delivery addresses scrubbed until parcel delivery or courier return is concluded.",
        ],
      },
    ],
  },

  returns: {
    id: "returns",
    title: "Shipping, Exchange & Customer Comfort Policy",
    shortTitle: "Shipping & Exchanges",
    badge: "Consumer Protection",
    lastUpdated: "October 2026",
    effectiveDate: "January 1, 2024",
    summary:
      "Customer comfort is TRIOT's primary priority. We provide straightforward delivery across Bangladesh, parcel inspection at your doorstep, and a hassle-free 7-day size exchange guarantee.",
    sections: [
      {
        id: "delivery-coverage",
        title: "1. Delivery Coverage & Timelines Across Bangladesh",
        content: [
          "TRIOT ships footwear to all 64 districts and upazilas across Bangladesh via reliable courier partners (Steadfast Courier, Pathao Courier, RedX, Sundarban, eCourier).",
          "• Inside Dhaka City: Delivered within 24 to 48 hours.",
          "• Dhaka Suburbs & Greater Dhaka: Delivered within 48 to 72 hours.",
          "• Outside Dhaka (All Other Divisions): Delivered within 3 to 5 business days.",
          "Delivery charges are communicated upfront during order checkout or chat confirmation with zero hidden fees.",
        ],
      },
      {
        id: "doorstep-inspection",
        title: "2. Doorstep Inspection Privilege",
        content: [
          "To guarantee transparency and customer peace of mind, TRIOT allows customers to inspect the outer condition, shoe model, color, and size in the presence of the delivery rider before completing Cash on Delivery payment.",
          "If the shoe delivered does not match your ordered model or exhibits visible transit damage, you may reject the parcel immediately without penalty.",
        ],
      },
      {
        id: "comfort-exchange",
        title: "3. 7-Day Hassle-Free Size Exchange",
        content: [
          "Because TRIOT footwear focuses on maximum comfort, achieving the perfect fit is essential.",
          "If your delivered shoes feel too tight or too loose, notify us within 7 calendar days of receipt.",
          "Conditions for Size Exchange:",
          "• Shoes must be unworn outdoors and free from dirt, scuffs, or sole abrasion.",
          "• Original shoebox, inner tissue, tags, and accessories must be intact.",
          "Our courier will pick up the current pair and swap it for your requested size at standard regional exchange courier rates.",
        ],
      },
      {
        id: "defect-refund",
        title: "4. Manufacturing Defect & Refund Policy",
        content: [
          "Every pair of TRIOT artificial leather shoes undergoes strict quality inspection before dispatch.",
          "In the rare event of a genuine manufacturing flaw (such as sole separation, stitching defect, or material tear) reported within 7 days, TRIOT will provide a 100% free replacement or a full refund via bKash/Nagad/Bank Transfer.",
          "Normal wear and tear, intentional damage, exposure to extreme heat/chemicals, or washing machine damage is not covered under manufacturing defect warranty.",
        ],
      },
    ],
  },

  wholesale: {
    id: "wholesale",
    title: "Wholesale & Bulk Supply Terms",
    shortTitle: "Wholesale Grand",
    badge: "B2B Commercial Terms",
    lastUpdated: "October 2026",
    effectiveDate: "January 1, 2024",
    summary:
      "TRIOT caters to both retail consumers and wholesale grands, supplying retailers, footwear boutiques, corporate bulk orders, and regional distributors across Bangladesh.",
    sections: [
      {
        id: "wholesale-eligibility",
        title: "1. Wholesale Partner Eligibility",
        content: [
          "Footwear shops, physical retailers, e-commerce sellers, and corporate buyers seeking bulk inventory of TRIOT artificial leather comfort shoes are eligible for wholesale pricing tiers.",
          "Wholesale accounts must provide valid business identification (Trade License, Shop address, or official social commerce credentials in Bangladesh).",
        ],
      },
      {
        id: "moq-pricing",
        title: "2. Minimum Order Quantity (MOQ) & Pricing Tiers",
        content: [
          "Standard Wholesale MOQ: 12 pairs per design/color run (assorted standard size breakdown: 39, 40, 41, 42, 43, 44).",
          "Grand Wholesale MOQ (Master Distributor): 60+ pairs with tiered volume discount margins.",
          "Wholesale price quotations remain valid for 14 calendar days from the date of official commercial invoice issuance.",
        ],
      },
      {
        id: "wholesale-dispatch",
        title: "3. Logistics & Bulk Transport",
        content: [
          "Bulk consignments are dispatched via commercial highway transports (Sundarban Courier, SA Paribahan, Karatoa Courier, or dedicated freight).",
          "Consignment tracking documents and transport bility (Chalan) are transmitted directly to the partner upon dispatch.",
        ],
      },
      {
        id: "wholesale-contact",
        title: "4. Wholesale Inquiries & Orders",
        content: [
          "To open a wholesale account or request our B2B footwear catalog:",
          "• Direct WhatsApp / Phone: +880 1800-000000",
          "• Email: wholesale@triotbd.com",
          "• Official Facebook: Message our page (https://www.facebook.com/profile.php?id=61556981380240) with the prefix '[WHOLESALE INQUIRY]'.",
        ],
      },
    ],
  },

  "meta-compliance": {
    id: "meta-compliance",
    title: "Meta Platform Compliance & Anti-Harmful Content Statement",
    shortTitle: "Meta Compliance",
    badge: "Meta Policy Verification",
    lastUpdated: "October 2026",
    effectiveDate: "January 1, 2024",
    summary:
      "Official declaration of TRIOT's rigorous compliance with Meta Platform Terms, Developer Policies, Commerce Policies, and Community Standards for automated systems and Facebook operations.",
    sections: [
      {
        id: "meta-platform-statement",
        title: "1. Formal Statement of Meta Policy Adherence",
        content: [
          "TRIOT operates its online store and automation flows in strict and uncompromising adherence to:",
          "• Meta Platform Terms and Developer Policies.",
          "• Facebook Community Standards & Commerce Eligibility Requirements.",
          "• WhatsApp Business Messaging Policy & Commercial Terms.",
          "• Instagram Platform Policies and Messaging Guidelines.",
          "We do not employ deceptive tactics, undisclosed automation, dark patterns, or unauthorized scraping.",
        ],
      },
      {
        id: "prohibited-goods-declaration",
        title: "2. Explicit Affirmation: Zero Prohibited or Illegal Products",
        content: [
          "TRIOT deals EXCLUSIVELY in legal, handcrafted comfort footwear manufactured from artificial leather and soft soles.",
          "We explicitly certify that our catalog, advertisements, messaging flows, and business operations NEVER promote, host, or transact:",
          "• Counterfeit, replica, pirated, or unauthorized branded shoes or merchandise.",
          "• Weapons, ammunition, firearms, explosives, or hazardous tactical equipment.",
          "• Tobacco, e-cigarettes, vaping devices, alcohol, or illicit/prescription drugs.",
          "• Endangered wildlife parts or genuine exotic animal skins (TRIOT uses 100% synthetic artificial leathers).",
          "• Adult, sexually explicit, suggestive, or non-consensual materials.",
          "• Pyramid schemes, deceptive get-rich-quick claims, or gambling/betting services.",
          "• Counterfeit medical equipment, health misinformation, or unsubstantiated wellness claims.",
        ],
      },
      {
        id: "automation-controls",
        title: "3. Automated Chatbot Controls & Human Escalation",
        content: [
          "Our Meta automation flow is designed to streamline customer convenience—providing instantaneous responses regarding shoe sizing, color options, stock availability, and delivery updates.",
          "Opt-Out Guarantee: Any customer can disable automated responses immediately by typing 'STOP' or 'UNSUBSCRIBE'.",
          "Human Agent Escalation: If a customer has a complex inquiry, dispute, or wholesale request, typing 'AGENT', 'HUMAN', or 'TALK TO PERSON' immediately routes the chat to an active human customer service representative in Dhaka, Bangladesh.",
        ],
      },
      {
        id: "verification-credentials",
        title: "4. Business Verification Credentials for Meta Reviewers",
        content: [
          "This portal provides the canonical, public, and verifiable legal documentation required for Meta App Review and Business Verification:",
          "• Official Business Name: TRIOT",
          "• Founding Year: 2024",
          "• Headquarters: Dhaka, Bangladesh",
          "• Official Facebook Page: https://www.facebook.com/profile.php?id=61556981380240",
          "• Core Commerce Activity: Footwear (Artificial Leather & Soft Sole Shoes - Retail & Wholesale)",
          "• Canonical Privacy Policy URL: /privacy-policy",
          "• Canonical Terms of Service URL: /terms-and-conditions",
          "• User Data Deletion URL: /data-deletion",
        ],
      },
    ],
  },
};
