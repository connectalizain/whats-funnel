"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Smartphone, CheckCircle } from "lucide-react";

const features = [
  {
    icon: Smartphone,
    title: "Use Your Number",
    description:
      "Keep your existing WhatsApp number or start fresh with a new one.",
  },
  {
    icon: Zap,
    title: "Connect in <60s",
    description:
      "Get connected to the official Meta Business API in under 60 seconds.",
  },
  {
    icon: CheckCircle,
    title: "No Downtime",
    description:
      "The switch is seamless, ensuring no migration headaches or downtime.",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="how-it-works" className="py-16 sm:py-24 relative">
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
            Seamless Integration
          </span>
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-balance"
            style={{ color: "var(--foreground)" }}
          >
            Connect Your WhatsApp{" "}
            <span style={{ color: "var(--brand)" }}>in One Click</span>
          </h2>
          <p
            className="mt-4 text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: "var(--foreground-muted)" }}
          >
            Whether you want to use your existing WhatsApp number or start fresh with a new one, get connected to the official Meta Business API in under 60 seconds. No migration, no downtime.
          </p>
        </motion.div>

        <div className="relative">
          <div className="grid lg:grid-cols-3 gap-8">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
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
                    </motion.div>
                  </div>

                  <h3
                    className="text-lg font-bold mb-3"
                    style={{ color: "var(--foreground)" }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed max-w-xs mx-auto"
                    style={{ color: "var(--foreground-muted)" }}
                  >
                    {feature.description}
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
