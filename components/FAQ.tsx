"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do I need to apply for WhatsApp Business API separately?",
    answer:
      "No. WhatsFunnels guides you through the entire Meta/WhatsApp API onboarding process inside the platform. We make API access straightforward, even if you've never done it before.",
  },
  {
    question: "Is this the official WhatsApp Business API?",
    answer:
      "Yes. WhatsFunnels connects exclusively via the official Meta-approved WhatsApp Business API. We do not use unofficial methods — your account is fully compliant and protected.",
  },
  {
    question: "Will my contacts need to opt in before I message them?",
    answer:
      "Yes, as per WhatsApp's policies, contacts must have opted in to receive marketing messages from your business. WhatsFunnels provides opt-in tools to help you build a compliant subscriber list easily.",
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer:
      "Absolutely. There are no long-term contracts. You can cancel your subscription from your account settings at any time with no penalties or hidden fees.",
  },
  {
    question: "What’s the difference between the Pro and Enterprise plans?",
    answer:
      "The Pro plan is great if you want to manage everything yourself, with access to all features, unlimited conversations, team collaboration, analytics, and API access. The Enterprise plan includes everything in Pro, but also gives you a dedicated WhatsApp support agent, faster priority support, and custom integrations, making it ideal if you need more hands on support and flexibility as you scale.",
  },
  {
    question: "How long does it take to get started?",
    answer:
      "Most users are set up and sending their first broadcast within 5 minutes. Our guided onboarding and Meta API integration makes the whole process seamless with no technical skills required.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="relative py-16 sm:py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #FFFFFF 0%, #FAFAFA 35%, #ECFDF5 70%, #FFFFFF 100%)",
      }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div
          className="absolute top-[5%] -left-[10%] w-[min(420px,80vw)] h-[min(420px,80vw)] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(16,185,129,0.12) 0%, rgba(16,185,129,0.04) 50%, transparent 72%)",
            filter: "blur(36px)",
          }}
        />
        <div
          className="absolute bottom-[10%] -right-[5%] w-[min(500px,90vw)] h-[min(500px,90vw)] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.12) 0%, rgba(14,165,233,0.08) 45%, transparent 70%)",
            filter: "blur(42px)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(15,23,42,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.035) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse 80% 65% at 50% 40%, black 20%, transparent 78%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 65% at 50% 40%, black 20%, transparent 78%)",
          }}
        />
        <div className="absolute inset-0 section-noise opacity-60 mix-blend-overlay" aria-hidden="true" />
      </div>

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <span
            className="inline-block px-3 py-1.5 rounded-full text-xs font-semibold mb-4 border shadow-sm"
            style={{
              background:
                "linear-gradient(135deg, rgba(16,185,129,0.12) 0%, rgba(255,255,255,0.9) 100%)",
              color: "var(--brand)",
              borderColor: "rgba(16, 185, 129, 0.2)",
              boxShadow: "0 2px 12px rgba(16, 185, 129, 0.08)",
            }}
          >
            FAQ
          </span>
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-balance"
            style={{ color: "var(--foreground)" }}
          >
            Common questions
          </h2>
          <p className="mt-4 text-base max-w-lg mx-auto" style={{ color: "var(--foreground)" }}>
            Everything you need to know before getting started.
          </p>
        </div>

        {/* FAQ list */}
        <div
          className="rounded-3xl border p-4 sm:p-6 md:p-8"
          style={{
            background:
              "linear-gradient(145deg, rgba(255,255,255,0.82) 0%, rgba(248,250,252,0.72) 50%, rgba(255,255,255,0.65) 100%)",
            borderColor: "rgba(15,23,42,0.08)",
            boxShadow:
              "0 24px 64px rgba(15,23,42,0.08), 0 0 0 1px rgba(255,255,255,0.8) inset, 0 1px 0 rgba(255,255,255,0.9) inset",
          }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border-b border-[rgba(15,23,42,0.06)] last:border-b-0 rounded-2xl px-1 transition-colors duration-200 hover:bg-[rgba(16,185,129,0.03)] data-[state=open]:bg-[rgba(255,255,255,0.72)]"
              >
                <AccordionTrigger
                  className="text-sm font-semibold py-4 px-3 sm:py-5 sm:px-4 hover:no-underline data-[state=open]:text-[var(--brand)]"
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-3 sm:px-4 text-sm leading-relaxed text-[var(--foreground)]">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
