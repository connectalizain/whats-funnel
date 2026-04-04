"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

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
    question: "What's the difference between the Growth and Enterprise plans?",
    answer:
      "The Growth plan gives you all the tools to run WhatsApp marketing yourself. The Enterprise plan includes our team handling your API setup, funnel strategy, campaign copywriting, and monthly strategy calls — ideal for businesses who want results without doing the work themselves.",
  },
  {
    question: "How long does it take to get started?",
    answer:
      "Most users are set up and sending their first broadcast within 5 minutes. Our guided onboarding and Meta API integration makes the whole process seamless with no technical skills required.",
  },
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.08,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      className="rounded-2xl border border-transparent transition-colors duration-200 hover:border-[rgba(34,197,94,0.12)]"
      style={{
        backgroundColor: open ? "rgba(255,255,255,0.72)" : "rgba(255,255,255,0.45)",
        boxShadow: open
          ? "0 8px 32px rgba(15,23,42,0.06), inset 0 1px 0 rgba(255,255,255,0.85)"
          : "0 1px 0 rgba(15,23,42,0.04)",
      }}
    >
      <motion.button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-4 px-4 sm:py-5 sm:px-5 text-left rounded-2xl"
        aria-expanded={open}
        whileHover={{ x: 2 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        <span
          className="text-sm font-semibold pr-2 transition-colors duration-200"
          style={{ color: open ? "var(--brand)" : "var(--foreground)" }}
        >
          {faq.question}
        </span>
        <motion.span
          className="flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center border"
          style={{
            backgroundColor: open ? "var(--brand)" : "rgba(255,255,255,0.8)",
            color: open ? "#000" : "var(--foreground-muted)",
            borderColor: open ? "transparent" : "rgba(15,23,42,0.08)",
            boxShadow: open ? "0 4px 14px rgba(34,197,94,0.25)" : "none",
          }}
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {open ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
        </motion.span>
      </motion.button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p
              className="pb-5 px-4 sm:px-5 pt-4 text-sm leading-relaxed border-t"
              style={{
                color: "var(--foreground-muted)",
                borderColor: "rgba(15,23,42,0.06)",
              }}
            >
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="faq"
      className="relative py-16 sm:py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #eef6ff 0%, #f0f7fc 35%, #f4fcf7 70%, #eef2f7 100%)",
      }}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div
          className="absolute top-[5%] -left-[10%] w-[min(420px,80vw)] h-[min(420px,80vw)] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(34,197,94,0.16) 0%, rgba(34,197,94,0.04) 50%, transparent 72%)",
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
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12"
        >
          <span
            className="inline-block px-3 py-1.5 rounded-full text-xs font-semibold mb-4 border shadow-sm"
            style={{
              background:
                "linear-gradient(135deg, rgba(34,197,94,0.14) 0%, rgba(255,255,255,0.9) 100%)",
              color: "var(--brand)",
              borderColor: "rgba(34,197,94,0.22)",
              boxShadow: "0 2px 12px rgba(34,197,94,0.08)",
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
          <p className="mt-4 text-base max-w-lg mx-auto" style={{ color: "var(--foreground-muted)" }}>
            Everything you need to know before getting started.
          </p>
        </motion.div>

        <div
          className="rounded-3xl border p-4 sm:p-6 md:p-8 backdrop-blur-xl"
          style={{
            background:
              "linear-gradient(145deg, rgba(255,255,255,0.82) 0%, rgba(248,250,252,0.72) 50%, rgba(255,255,255,0.65) 100%)",
            borderColor: "rgba(15,23,42,0.08)",
            boxShadow:
              "0 24px 64px rgba(15,23,42,0.08), 0 0 0 1px rgba(255,255,255,0.8) inset, 0 1px 0 rgba(255,255,255,0.9) inset",
          }}
        >
          <div className="flex flex-col gap-2 sm:gap-3">
            {faqs.map((faq, i) => (
              <FAQItem key={faq.question} faq={faq} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
