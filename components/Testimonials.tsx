"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  quote: string;
  stars: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Rania K.",
    role: "eCommerce Store Owner",
    avatar: "R",
    quote:
      "WhatsFunnels completely changed how we do promotions. Our last broadcast hit a 94% open rate and drove $8k in sales in 2 hours. No other channel comes close.",
    stars: 5,
  },
  {
    name: "Marcus T.",
    role: "Digital Marketing Agency",
    avatar: "M",
    quote:
      "The funnel builder is incredible. We capture leads from our Facebook ads directly into WhatsApp and have a full nurture sequence running on autopilot. Game changer.",
    stars: 5,
  },
  {
    name: "Sofia A.",
    role: "Online Coach",
    avatar: "S",
    quote:
      "We switched from email to WhatsApp broadcasts and our conversion rate tripled. WhatsFunnels made the whole setup so easy — we were live in 15 minutes.",
    stars: 5,
  },
  {
    name: "James L.",
    role: "SaaS Founder",
    avatar: "J",
    quote:
      "The contact segmentation is next level. We send hyper-targeted messages and see real engagement. The official API access means zero risk to our account.",
    stars: 5,
  },
  {
    name: "Priya M.",
    role: "Head of Growth, Retail Brand",
    avatar: "P",
    quote:
      "Setup took under 10 minutes and the results were immediate. WhatsApp open rates are insane compared to email. This is now our #1 marketing channel.",
    stars: 5,
  },
  {
    name: "Alex B.",
    role: "Lead Generation Consultant",
    avatar: "A",
    quote:
      "The opt-in widgets are seamlessly integrated with our ad funnels. Leads flow straight into WhatsApp sequences automatically. ROI is through the roof.",
    stars: 5,
  },
];

function TestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ 
        duration: 0.55, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      whileHover={{ 
        y: -8, 
        scale: 1.02,
        transition: { type: "spring", stiffness: 400, damping: 25 }
      }}
      className="p-6 rounded-2xl border flex flex-col items-center text-center gap-4"
      style={{
        backgroundColor: "var(--surface)",
        borderColor: "var(--border-color)",
        transition: "box-shadow 0.3s ease, border-color 0.3s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(16, 185, 129, 0.4)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 40px rgba(0,0,0,0.1), 0 0 30px rgba(16,185,129,0.05)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--border-color)";
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
      }}
    >
      {/* Stars */}
      <div className="flex gap-0.5">
        {Array.from({ length: testimonial.stars }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-current" style={{ color: "var(--brand)" }} />
        ))}
      </div>

      {/* Quote */}
      <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--foreground)" }}>
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center justify-center gap-3">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
          style={{ backgroundColor: "var(--brand-glow)", color: "var(--brand)", border: "1px solid rgba(16, 185, 129, 0.2)" }}
        >
          {testimonial.avatar}
        </div>
        <div>
          <div className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
            {testimonial.name}
          </div>
          <div className="text-xs font-semibold" style={{ color: "var(--foreground)" }}>
            {testimonial.role}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-16 sm:py-24 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(16,185,129,0.04) 0%, transparent 70%)",
        }}
      />
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
              borderColor: "rgba(16, 185, 129, 0.2)",
            }}
          >
            Testimonials
          </span>
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-balance"
            style={{ color: "var(--foreground)" }}
          >
            Loved by marketers{" "}
            <span className="bg-gradient-to-br from-emerald-500 via-emerald-400 to-teal-400 bg-clip-text text-transparent drop-shadow-sm">
              around the world
            </span>
          </h2>
          <p className="mt-4 text-base font-medium" style={{ color: "var(--foreground)" }}>
            Join 1,200+ businesses driving revenue with WhatsFunnels.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
