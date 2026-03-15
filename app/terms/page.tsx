"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: `By accessing or using WhatsFunnels services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.

These Terms of Service apply to all users of the platform, including businesses, marketers, and any individuals who access our services.`
  },
  {
    title: "2. Description of Service",
    content: `WhatsFunnels provides a WhatsApp marketing platform built on the official Meta WhatsApp Business API. Our services include:

• Broadcast messaging and campaign management
• Lead capture and funnel building tools
• Automated responses and chatbot features
• Analytics and reporting dashboard
• Team collaboration tools
• Integration with third-party services

We reserve the right to modify, suspend, or discontinue any part of our services at any time.`
  },
  {
    title: "3. Account Registration",
    content: `To use our services, you must:

• Create an account with accurate and complete information
• Maintain the security of your account credentials
• Be at least 18 years old or have legal authority to bind your organization
• Have a valid WhatsApp Business account
• Comply with Meta's WhatsApp Business Policy

You are responsible for all activities that occur under your account.`
  },
  {
    title: "4. Acceptable Use Policy",
    content: `You agree NOT to use our services to:

• Send spam, unsolicited messages, or bulk promotional content without consent
• Violate any applicable laws, regulations, or third-party rights
• Transmit harmful, offensive, or illegal content
• Impersonate any person or entity
• Interfere with or disrupt our services or servers
• Attempt to gain unauthorized access to any systems
• Collect user data without proper consent
• Engage in any fraudulent or deceptive practices

Violation of these terms may result in immediate termination of your account.`
  },
  {
    title: "5. WhatsApp Business Policy Compliance",
    content: `As our platform operates on the WhatsApp Business API, you must comply with:

• Meta's WhatsApp Business Policy
• WhatsApp Commerce Policy
• Meta's Terms of Service
• All applicable messaging regulations in your jurisdiction

We reserve the right to suspend accounts that violate these policies.`
  },
  {
    title: "6. Payment Terms",
    content: `• Subscription fees are billed in advance on a monthly or annual basis
• All fees are non-refundable unless otherwise stated
• We reserve the right to change pricing with 30 days notice
• Failed payments may result in service suspension
• You are responsible for any applicable taxes
• Conversation-based charges from WhatsApp are separate and billed according to Meta's pricing`
  },
  {
    title: "7. Intellectual Property",
    content: `• WhatsFunnels and its licensors retain all rights to the platform, including trademarks, logos, and proprietary technology
• You retain ownership of your content and data
• You grant us a license to use your content as necessary to provide our services
• You may not copy, modify, or reverse engineer our software
• Feedback and suggestions may be used by us without obligation`
  },
  {
    title: "8. Data and Privacy",
    content: `• Your use of our services is subject to our Privacy Policy
• You are responsible for obtaining necessary consents from your contacts
• You must comply with applicable data protection laws (GDPR, CCPA, etc.)
• We process data as outlined in our Data Processing Agreement
• You may export your data at any time during your subscription`
  },
  {
    title: "9. Limitation of Liability",
    content: `TO THE MAXIMUM EXTENT PERMITTED BY LAW:

• Our services are provided "as is" without warranties of any kind
• We are not liable for any indirect, incidental, or consequential damages
• Our total liability shall not exceed the fees paid in the 12 months preceding the claim
• We are not responsible for third-party services or WhatsApp API availability
• We do not guarantee message delivery rates or timing`
  },
  {
    title: "10. Termination",
    content: `• You may cancel your subscription at any time through your account settings
• We may terminate or suspend your account for violation of these terms
• Upon termination, your right to use our services ceases immediately
• We may retain certain data as required by law or legitimate business purposes
• Provisions that by their nature should survive termination shall remain in effect`
  },
  {
    title: "11. Modifications to Terms",
    content: `We reserve the right to modify these Terms of Service at any time. We will provide notice of material changes by:

• Posting the updated terms on our website
• Sending an email to your registered address
• Displaying a notice within our platform

Your continued use of our services after changes constitutes acceptance of the modified terms.`
  },
  {
    title: "12. Governing Law",
    content: `These Terms of Service shall be governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions. Any disputes shall be resolved in the courts of San Francisco County, California.`
  },
  {
    title: "13. Contact Information",
    content: `For questions about these Terms of Service, please contact us at:

Email: legal@whatsfunnels.io
Address: WhatsFunnels Inc., 123 Business Ave, Suite 100, San Francisco, CA 94105`
  }
];

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--background)" }}>
      {/* Header */}
      <header className="border-b" style={{ borderColor: "var(--border-color)", backgroundColor: "var(--surface)" }}>
        <div className="max-w-4xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: "var(--brand)" }}>
              <MessageCircle className="w-4 h-4 text-black" />
            </div>
            <span className="font-bold text-lg" style={{ color: "var(--foreground)" }}>
              Whats<span style={{ color: "var(--brand)" }}>Funnels</span>
            </span>
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
            Terms of Service
          </h1>
          <p className="text-sm mb-12" style={{ color: "var(--foreground-muted)" }}>
            Last Updated: March 15, 2026
          </p>

          <p className="text-base leading-relaxed mb-12" style={{ color: "var(--foreground-muted)" }}>
            Welcome to WhatsFunnels. These Terms of Service govern your use of our WhatsApp marketing 
            platform and related services. Please read these terms carefully before using our services.
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
