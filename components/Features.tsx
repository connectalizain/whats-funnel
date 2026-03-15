"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Radio,
  Target,
  GitBranch,
  Users,
  CheckSquare,
  BarChart2,
} from "lucide-react";

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Radio,
    title: "Bulk Broadcasts",
    description:
      "Send personalized messages to thousands of contacts at once. Segment by tags, behavior, or custom fields for laser-targeted campaigns.",
  },
  {
    icon: Target,
    title: "Lead Capture Opt-ins",
    description:
      "Embed opt-in widgets on websites and ads to grow your WhatsApp subscriber list automatically. GDPR-compliant by design.",
  },
  {
    icon: GitBranch,
    title: "Marketing Funnels",
    description:
      "Build multi-step WhatsApp funnels that nurture leads from first touch to paying customer — all automated.",
  },
  {
    icon: Users,
    title: "Contact Management",
    description:
      "Import, tag, and segment contacts. Track every interaction and build rich customer profiles without extra CRM software.",
  },
  {
    icon: CheckSquare,
    title: "Template Approval",
    description:
      "Manage and submit WhatsApp message templates directly from WhatsFunnels. We handle the Meta approval process for you.",
  },
  {
    icon: BarChart2,
    title: "Campaign Analytics",
    description:
      "Track open rates, clicks, replies, and conversions in real-time. Know exactly which messages drive revenue.",
  },
];

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = feature.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1, 
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      whileHover={{ 
        y: -8, 
        scale: 1.03,
        transition: { type: "spring", stiffness: 400, damping: 25 }
      }}
      className="group relative p-6 rounded-2xl border cursor-default flex flex-col items-center text-center sm:items-start sm:text-left"
      style={{
        backgroundColor: "var(--surface)",
        borderColor: "var(--border-color)",
        transition: "box-shadow 0.3s ease, border-color 0.3s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(34,197,94,0.5)";
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 0 0 1px rgba(34,197,94,0.2), 0 20px 50px rgba(0,0,0,0.35), 0 0 40px rgba(34,197,94,0.1)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--border-color)";
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
      }}
    >
      <motion.div
        className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
        style={{ backgroundColor: "var(--brand-glow)", border: "1px solid rgba(34,197,94,0.25)" }}
        whileHover={{ scale: 1.15, rotate: 5 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      >
        <Icon className="w-5 h-5" style={{ color: "var(--brand)" }} />
      </motion.div>
      <h3 className="text-base font-semibold mb-2" style={{ color: "var(--foreground)" }}>
        {feature.title}
      </h3>
      <p className="text-sm leading-relaxed" style={{ color: "var(--foreground-muted)" }}>
        {feature.description}
      </p>
    </motion.div>
  );
}

export default function Features() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section id="features" className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
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
            Platform Features
          </span>
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-balance"
            style={{ color: "var(--foreground)" }}
          >
            Everything you need to{" "}
            <span style={{ color: "var(--brand)" }}>market on WhatsApp</span>
          </h2>
          <p
            className="mt-4 text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: "var(--foreground-muted)" }}
          >
            WhatsFunnels is built on the official WhatsApp Business API — so your
            messages always get delivered.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <FeatureCard key={f.title} feature={f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
