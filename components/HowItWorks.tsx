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

const cardBaseShadow =
  "0 10px 40px rgba(15,23,42,0.06), 0 0 0 1px rgba(255,255,255,0.85) inset, 0 1px 0 rgba(255,255,255,0.95) inset";
const cardHoverShadow =
  "0 22px 56px rgba(15,23,42,0.1), 0 0 0 1px rgba(34,197,94,0.18), 0 0 0 1px rgba(255,255,255,0.9) inset";

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="how-it-works"
      className="relative py-16 sm:py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(185deg, #f8fafc 0%, #f0fdf4 32%, #ecfdf5 58%, #e8f4fc 82%, #eef2f7 100%)",
      }}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div
          className="absolute -top-[12%] right-[5%] w-[min(440px,75vw)] h-[min(440px,75vw)] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(34,197,94,0.14) 0%, rgba(34,197,94,0.04) 48%, transparent 72%)",
            filter: "blur(38px)",
          }}
        />
        <div
          className="absolute top-[40%] -left-[12%] w-[min(380px,70vw)] h-[min(380px,70vw)] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(14,165,233,0.11) 0%, rgba(99,102,241,0.06) 45%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <div
          className="absolute -bottom-[18%] left-1/2 -translate-x-1/2 w-[min(720px,100vw)] h-[min(280px,35vh)] rounded-full opacity-80"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(34,197,94,0.1) 0%, transparent 68%)",
            filter: "blur(32px)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.45]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(15,23,42,0.038) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.038) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(ellipse 88% 72% at 50% 42%, black 18%, transparent 76%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 88% 72% at 50% 42%, black 18%, transparent 76%)",
          }}
        />
        <div className="absolute inset-0 section-noise opacity-55 mix-blend-overlay" aria-hidden="true" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span
            className="inline-block px-3 py-1.5 rounded-full text-xs font-semibold mb-4 border shadow-sm"
            style={{
              background:
                "linear-gradient(135deg, rgba(34,197,94,0.14) 0%, rgba(255,255,255,0.92) 100%)",
              color: "var(--brand)",
              borderColor: "rgba(34,197,94,0.22)",
              boxShadow: "0 2px 12px rgba(34,197,94,0.08)",
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
          {/* Soft connector line between cards (desktop) */}
          <div
            className="hidden lg:block absolute top-[5.5rem] left-[12%] right-[12%] h-px pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(34,197,94,0.2) 15%, rgba(14,165,233,0.15) 50%, rgba(34,197,94,0.2) 85%, transparent 100%)",
            }}
            aria-hidden="true"
          />

          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 40, boxShadow: cardBaseShadow }}
                  animate={
                    inView
                      ? { opacity: 1, y: 0, boxShadow: cardBaseShadow }
                      : { boxShadow: cardBaseShadow }
                  }
                  transition={{
                    duration: 0.6,
                    delay: 0.2 + i * 0.15,
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                  }}
                  whileHover={{ y: -8, boxShadow: cardHoverShadow }}
                  className="relative text-center group cursor-default rounded-3xl border p-8 sm:p-9 backdrop-blur-md transition-[border-color] duration-300 hover:border-[rgba(34,197,94,0.22)]"
                  style={{
                    background:
                      "linear-gradient(155deg, rgba(255,255,255,0.88) 0%, rgba(248,250,252,0.72) 45%, rgba(255,255,255,0.78) 100%)",
                    borderColor: "rgba(15,23,42,0.08)",
                  }}
                >
                  <div className="flex justify-center mb-6">
                    <motion.div
                      className="relative"
                      whileHover={{ scale: 1.06, rotate: 4 }}
                      transition={{ type: "spring", stiffness: 400, damping: 22 }}
                    >
                      <div
                        className="p-[1px] rounded-2xl"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(34,197,94,0.45) 0%, rgba(14,165,233,0.28) 50%, rgba(34,197,94,0.25) 100%)",
                          boxShadow: "0 8px 28px rgba(34,197,94,0.15)",
                        }}
                      >
                        <div
                          className="w-14 h-14 rounded-2xl flex items-center justify-center"
                          style={{
                            background:
                              "linear-gradient(180deg, #ffffff 0%, #f1f5f9 100%)",
                          }}
                        >
                          <Icon
                            className="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
                            style={{ color: "var(--brand)" }}
                          />
                        </div>
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
