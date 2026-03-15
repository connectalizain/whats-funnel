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
      className="border-b group"
      style={{ borderColor: "var(--border-color)" }}
    >
      <motion.button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
        aria-expanded={open}
        whileHover={{ x: 4 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        <span
          className="text-sm font-semibold pr-2 transition-colors duration-200"
          style={{ color: open ? "var(--brand)" : "var(--foreground)" }}
        >
          {faq.question}
        </span>
        <motion.span
          className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
          style={{
            backgroundColor: open ? "var(--brand)" : "var(--surface-2)",
            color: open ? "#000" : "var(--foreground-muted)",
          }}
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {open ? <Minus className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
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
            <p className="pb-5 text-sm leading-relaxed" style={{ color: "var(--foreground-muted)" }}>
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
    <section id="faq" className="py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 border"
            style={{
              backgroundColor: "var(--brand-glow)",
              color: "var(--brand)",
              borderColor: "rgba(34,197,94,0.25)",
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
          <p className="mt-4 text-base" style={{ color: "var(--foreground-muted)" }}>
            Everything you need to know before getting started.
          </p>
        </motion.div>

        <div>
          {faqs.map((faq, i) => (
            <FAQItem key={faq.question} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
