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
    name: "Strive Fitness Club",
    role: "Gym",
    avatar: "S",
    quote:
      "Using WhatsFunnels at Strive Fitness Club, we saw about a 3x increase in WhatsApp leads and around 40% more memberships within the first month. It’s simple to use and saves our team hours every day.",
    stars: 5,
  },
  {
    name: "Doha Gossip",
    role: "Event Company",
    avatar: "D",
    quote:
      "After using WhatsFunnels at DohaGossip, our event ticket sales increased noticeably through WhatsApp campaigns. We’re getting more inquiries, better responses, and converting more people into actual attendees without extra manual work",
    stars: 4.5,
  },
  {
    name: "Horizon Heights",
    role: "Real Estate",
    avatar: "H",
    quote:
      "At Al Noor Estates Dubai, using WhatsFunnels helped us turn property inquiries into real viewings. Our campaign responses improved, and we saw around a 30% increase in qualified leads within the first few weeks, all while saving hours of manual follow-ups",
    stars: 5,
  },
  {
    name: "Urban Bite",
    role: "Restaurant",
    avatar: "U",
    quote:
      "WhatsFunnels helped us turn WhatsApp messages into actual table bookings. Our campaign responses picked up fast and we saw around a 25% increase in reservations within a few weeks",
    stars: 5,
  },
  {
    name: "Glow Lounge Salon",
    role: "Salon & Spa",
    avatar: "G",
    quote:
      "WhatsFunnels made booking appointments so much easier. We saw nearly a 40% increase in bookings from WhatsApp campaigns and saved hours every day managing clients",
    stars: 5,
  },
  {
    name: "NovaTrend Store",
    role: "E-commerce Brand",
    avatar: "N",
    quote:
      "We boosted our campaign conversions and brought in about 2x more inquiries on WhatsApp with WhatsFunnels. We’re closing more orders now without needing to manually reply to everyone.",
    stars: 4.5,
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
        {Array.from({ length: Math.ceil(testimonial.stars) }).map((_, i) => {
          const isFull = i + 1 <= testimonial.stars;
          if (isFull) {
            return <Star key={i} className="w-4 h-4 fill-current" style={{ color: "var(--brand)" }} />;
          }
          return (
            <div key={i} className="relative">
              <Star className="w-4 h-4" style={{ color: "var(--brand)" }} />
              <div className="absolute inset-0 overflow-hidden w-[50%]">
                <Star className="w-4 h-4 fill-current" style={{ color: "var(--brand)" }} />
              </div>
            </div>
          );
        })}
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
            Join forward-thinking brands driving real growth with WhatsFunnels.
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
