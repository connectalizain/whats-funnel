"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Zap } from "lucide-react";

interface Plan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  popular: boolean;
}

const plans: Plan[] = [
  {
    name: "Pro",
    price: "$20",
    period: "/month",
    description: "Professional plan for growing businesses",
    features: [
      "All platform features",
      "Unlimited conversations",
      "Team collaboration",
      "Advanced analytics",
      "API access",
      "Email support",
    ],
    cta: "Select Plan",
    popular: false,
  },
  {
    name: "Enterprise",
    price: "$35",
    period: "/month",
    description: "Enterprise solution with premium support",
    features: [
      "All platform features",
      "Unlimited conversations",
      "Team collaboration",
      "Advanced analytics",
      "API access",
      "Dedicated WhatsApp support agent",
      "Priority support",
      "Custom integrations",
    ],
    cta: "Select Plan",
    popular: true,
  },
];

function PricingCard({ plan, index }: { plan: Plan; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.12,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      whileHover={{ 
        y: -10, 
        scale: 1.02,
        transition: { type: "spring", stiffness: 400, damping: 25 }
      }}
      className="relative flex flex-col h-full w-full items-center text-center rounded-2xl border p-7"
      style={{
        backgroundColor: plan.popular ? "var(--surface-2)" : "var(--surface)",
        borderColor: plan.popular ? "var(--brand)" : "var(--border-color)",
        boxShadow: plan.popular
          ? "0 0 0 1px rgba(34,197,94,0.4), 0 24px 60px rgba(34,197,94,0.15), 0 0 60px rgba(34,197,94,0.08)"
          : "none",
        transition: "box-shadow 0.3s ease, border-color 0.3s ease",
      }}
      onMouseEnter={(e) => {
        if (!plan.popular) {
          (e.currentTarget as HTMLElement).style.borderColor = "rgba(34,197,94,0.4)";
          (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 50px rgba(0,0,0,0.3), 0 0 40px rgba(34,197,94,0.08)";
        }
      }}
      onMouseLeave={(e) => {
        if (!plan.popular) {
          (e.currentTarget as HTMLElement).style.borderColor = "var(--border-color)";
          (e.currentTarget as HTMLElement).style.boxShadow = "none";
        }
      }}
    >
      {plan.popular && (
        <div
          className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold"
          style={{ backgroundColor: "var(--brand)", color: "#000" }}
        >
          <Zap className="w-3 h-3" />
          Most Popular
        </div>
      )}

      <div className="mb-6 flex flex-col items-center">
        <div className="text-sm font-semibold mb-1" style={{ color: "var(--brand)" }}>
          {plan.name}
        </div>
        <div className="flex items-end justify-center gap-1 mb-2">
          <span className="text-4xl font-extrabold" style={{ color: "var(--foreground)" }}>
            {plan.price}
          </span>
          <span className="text-sm pb-1" style={{ color: "var(--foreground-muted)" }}>
            {plan.period}
          </span>
        </div>
        <p className="text-sm leading-relaxed" style={{ color: "var(--foreground-muted)" }}>
          {plan.description}
        </p>
      </div>

      <ul className="space-y-3 mb-8 flex-1 w-full">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start justify-center gap-2.5 text-sm" style={{ color: "var(--foreground-muted)" }}>
            <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "var(--brand)" }} />
            {f}
          </li>
        ))}
      </ul>

      <a
        href="#"
        className="w-full py-3 rounded-xl text-sm font-semibold text-center transition-all duration-200 hover:scale-105"
        style={
          plan.popular
            ? {
                backgroundColor: "var(--brand)",
                color: "#000",
                boxShadow: "0 4px 20px rgba(34,197,94,0.35)",
              }
            : {
                backgroundColor: "transparent",
                color: "var(--foreground)",
                border: "1px solid var(--border-color)",
              }
        }
        onMouseEnter={(e) => {
          if (!plan.popular) {
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(34,197,94,0.4)";
            (e.currentTarget as HTMLElement).style.color = "var(--brand)";
          }
        }}
        onMouseLeave={(e) => {
          if (!plan.popular) {
            (e.currentTarget as HTMLElement).style.borderColor = "var(--border-color)";
            (e.currentTarget as HTMLElement).style.color = "var(--foreground)";
          }
        }}
      >
        {plan.cta}
      </a>
    </motion.div>
  );
}

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="pricing" className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 border"
            style={{
              backgroundColor: "var(--brand-glow)",
              color: "var(--brand)",
              borderColor: "rgba(34,197,94,0.25)",
            }}
          >
            Simple Pricing
          </span>
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-balance"
            style={{ color: "var(--foreground)" }}
          >
            Start free.{" "}
            <span style={{ color: "var(--brand)" }}>Scale as you grow.</span>
          </h2>
          <p className="mt-4 text-base" style={{ color: "var(--foreground-muted)" }}>
            No hidden fees. No per-message charges. Cancel anytime.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto items-stretch">
          {plans.map((plan, i) => (
            <PricingCard key={plan.name} plan={plan} index={i} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center text-sm mt-8"
          style={{ color: "var(--foreground-muted)" }}
        >
          All plans include a 7-day free trial. No credit card required.
        </motion.p>
      </div>
    </section>
  );
}
