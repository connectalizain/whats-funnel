"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link2, Download, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Link2,
    title: "Connect Your Number",
    description:
      "Link your WhatsApp Business number to WhatsFunnels via the official Meta API. No technical skills required — we guide you every step of the way.",
  },
  {
    number: "02",
    icon: Download,
    title: "Import or Capture Leads",
    description:
      "Upload your contact list or deploy opt-in forms to grow your WhatsApp audience from your website and ads automatically.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Launch & Scale",
    description:
      "Create campaigns, send broadcasts, build funnels, and watch your revenue grow — all from one clean dashboard.",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="how-it-works" className="py-24 relative">
      {/* Subtle section separator */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(34,197,94,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 border"
            style={{
              backgroundColor: "var(--brand-glow)",
              color: "var(--brand)",
              borderColor: "rgba(34,197,94,0.25)",
            }}
          >
            How It Works
          </span>
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-balance"
            style={{ color: "var(--foreground)" }}
          >
            Up and running{" "}
            <span style={{ color: "var(--brand)" }}>in under 5 minutes</span>
          </h2>
          <p
            className="mt-4 text-lg max-w-xl mx-auto leading-relaxed"
            style={{ color: "var(--foreground-muted)" }}
          >
            From zero to sending your first broadcast in minutes — no technical skills needed.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line (desktop) */}
          <div
            className="hidden lg:block absolute top-12 left-[calc(16.66%+1.5rem)] right-[calc(16.66%+1.5rem)] h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, var(--brand), transparent)",
              opacity: 0.3,
            }}
          />

          <div className="grid lg:grid-cols-3 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.2 + i * 0.15, 
                    type: "spring",
                    stiffness: 100,
                    damping: 15
                  }}
                  whileHover={{ y: -6 }}
                  className="relative text-center group cursor-default"
                >
                  {/* Step number bubble */}
                  <div className="flex justify-center mb-6">
                    <motion.div 
                      className="relative"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    >
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:shadow-lg"
                        style={{
                          backgroundColor: "var(--surface)",
                          border: "1px solid rgba(34,197,94,0.35)",
                          boxShadow: "0 0 24px rgba(34,197,94,0.12)",
                        }}
                      >
                        <Icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" style={{ color: "var(--brand)" }} />
                      </div>
                      <motion.span
                        className="absolute -top-2 -right-2 w-5 h-5 rounded-full text-xs font-bold flex items-center justify-center"
                        style={{ backgroundColor: "var(--brand)", color: "#000" }}
                        whileHover={{ scale: 1.2 }}
                      >
                        {i + 1}
                      </motion.span>
                    </motion.div>
                  </div>

                  <div
                    className="text-xs font-bold tracking-widest mb-2"
                    style={{ color: "var(--brand)" }}
                  >
                    {step.number}
                  </div>
                  <h3
                    className="text-lg font-bold mb-3"
                    style={{ color: "var(--foreground)" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed max-w-xs mx-auto"
                    style={{ color: "var(--foreground-muted)" }}
                  >
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
