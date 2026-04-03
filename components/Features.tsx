"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Users,
  Bot,
  Radio,
  BrainCircuit,
  Reply,
  BarChart2,
} from "lucide-react";

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Users,
    title: "Unified Team Inbox",
    description:
      "Manage all conversations from a single dashboard. Real-time collaboration, conversation assignment, and internal notes.",
  },
  {
    icon: Bot,
    title: "Smart Chatbot Automation",
    description:
      "Build conversational workflows without code. Automated responses, info collection, and keyword routing.",
  },
  {
    icon: Radio,
    title: "Broadcast Campaigns",
    description:
      "Send targeted messages to thousands instantly. Approved templates, real-time tracking, and audience segmentation.",
  },
  {
    icon: BrainCircuit,
    title: "AI-Powered Assistance",
    description:
      "Train AI on your business docs & FAQs for smart reply suggestions, powered by a custom Knowledge Base.",
  },
  {
    icon: Reply,
    title: "Instant Auto-Replies",
    description:
      "Provide 24/7 customer support with keyword-triggered responses for common queries like 'pricing', 'hours', or 'help'.",
  },
  {
    icon: BarChart2,
    title: "Comprehensive Analytics",
    description:
      "Get reports on response times, conversation volumes, and customer satisfaction to optimize your communication strategy.",
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
            Core Features
          </span>
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-balance"
            style={{ color: "var(--foreground)" }}
          >
            A complete platform to{" "}
            <span style={{ color: "var(--brand)" }}>scale your business</span>
          </h2>
          <p
            className="mt-4 text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: "var(--foreground-muted)" }}
          >
            Manage customer conversations, automate responses, and grow your business with our all-in-one WhatsApp solution.
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
