"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";

const sections = [
  {
    title: "1. Information We Collect",
    content: `We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support. This includes:

• Account information (name, email address, phone number)
• Business information (company name, WhatsApp Business account details)
• Communication data (messages sent through our platform, contact lists)
• Payment information (billing address, payment method details)
• Usage data (how you interact with our services)`
  },
  {
    title: "2. How We Use Your Information",
    content: `We use the information we collect to:

• Provide, maintain, and improve our services
• Process transactions and send related information
• Send technical notices, updates, and support messages
• Respond to your comments, questions, and customer service requests
• Monitor and analyze trends, usage, and activities
• Detect, investigate, and prevent fraudulent or unauthorized activities
• Personalize and improve your experience`
  },
  {
    title: "3. Information Sharing",
    content: `We do not sell, trade, or otherwise transfer your personal information to third parties except:

• With your consent or at your direction
• To comply with legal obligations
• To protect our rights, privacy, safety, or property
• In connection with a merger, acquisition, or sale of assets
• With service providers who assist in our operations`
  },
  {
    title: "4. Data Security",
    content: `We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes:

• Encryption of data in transit and at rest
• Regular security assessments and audits
• Access controls and authentication measures
• Employee training on data protection practices`
  },
  {
    title: "5. Data Retention",
    content: `We retain your personal information for as long as necessary to fulfill the purposes for which it was collected, including to satisfy legal, accounting, or reporting requirements. When determining retention periods, we consider:

• The nature and sensitivity of the data
• The purposes for which we process your data
• Applicable legal requirements`
  },
  {
    title: "6. Your Rights",
    content: `Depending on your location, you may have the following rights:

• Access to your personal information
• Correction of inaccurate or incomplete data
• Deletion of your personal information
• Restriction of processing
• Data portability
• Objection to processing

To exercise these rights, please contact us at privacy@whatsfunnels.io`
  },
  {
    title: "7. Cookies and Tracking",
    content: `We use cookies and similar tracking technologies to collect and track information about your use of our services. You can control cookies through your browser settings. We use:

• Essential cookies (required for service functionality)
• Analytics cookies (to understand usage patterns)
• Marketing cookies (for relevant advertising, with consent)`
  },
  {
    title: "8. Changes to This Policy",
    content: `We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. Your continued use of our services after changes constitutes acceptance of the updated policy.`
  },
  {
    title: "9. Contact Us",
    content: `If you have any questions about this Privacy Policy, please contact us at:

Email: privacy@whatsfunnels.io
Address: WhatsFunnels Inc., 123 Business Ave, Suite 100, San Francisco, CA 94105`
  }
];

export default function PrivacyContent() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--background)" }}>
      {/* Header */}
      <header className="border-b" style={{ borderColor: "var(--border-color)", backgroundColor: "var(--surface)" }}>
        <div className="max-w-4xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link href="/" className="flex items-center group">
            <img src="/Dark svg.svg" alt="WhatsFunnels Logo" className="h-8 w-auto" />
          </Link>
          <Link 
            href="/" 
            className="flex items-center gap-2 text-sm transition-colors"
            style={{ color: "var(--foreground-muted)" }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-extrabold mb-4" style={{ color: "var(--foreground)" }}>
            Privacy Policy
          </h1>
          <p className="text-sm mb-12" style={{ color: "var(--foreground-muted)" }}>
            Last Updated: March 15, 2026
          </p>

          <p className="text-base leading-relaxed mb-12" style={{ color: "var(--foreground-muted)" }}>
            At WhatsFunnels, we take your privacy seriously. This Privacy Policy explains how we collect, 
            use, disclose, and safeguard your information when you use our WhatsApp marketing platform 
            and related services.
          </p>

          <div className="space-y-10">
            {sections.map((section, index) => (
              <motion.section
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <h2 className="text-xl font-bold mb-4" style={{ color: "var(--foreground)" }}>
                  {section.title}
                </h2>
                <div 
                  className="text-sm leading-relaxed whitespace-pre-line"
                  style={{ color: "var(--foreground-muted)" }}
                >
                  {section.content}
                </div>
              </motion.section>
            ))}
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="border-t py-8" style={{ borderColor: "var(--border-color)" }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs" style={{ color: "var(--foreground-muted)" }}>
            © {new Date().getFullYear()} WhatsFunnels. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
