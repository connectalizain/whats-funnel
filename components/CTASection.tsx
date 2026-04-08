"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-16 sm:py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden p-8 sm:p-12 text-center"
          style={{
            background: "linear-gradient(180deg, #065F46 0%, #064E3B 100%)",
            border: "1px solid #047857",
            boxShadow: "0 20px 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
          }}
        >
          {/* Background radial glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(34,197,94,0.1) 0%, transparent 65%)",
            }}
          />

          <div className="relative z-10">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6 border"
              style={{
                backgroundColor: "rgba(16, 185, 129, 0.15)",
                color: "#6EE7B7",
                borderColor: "rgba(16, 185, 129, 0.3)",
              }}
            >
              <MessageCircle className="w-3 h-3" />
              Ready to grow?
            </div>

            <h2
              className="text-3xl sm:text-5xl font-extrabold text-balance mb-5"
              style={{ color: "#FFFFFF" }}
            >
              WhatsApp Business{" "}
              <span style={{ color: "#34D399" }}>Made Simple</span>
            </h2>

            <p
              className="text-lg max-w-xl mx-auto leading-relaxed mb-10"
              style={{ color: "#D1FAE5" }}
            >
              The complete platform to manage customer conversations, automate responses, and scale your business communication globally.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <motion.a
                href="https://app.whatsfunnels.io/login"
                className="group flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-emerald-500 to-teal-400 border border-transparent"
                style={{
                  boxShadow: "0 4px 24px rgba(34,197,94,0.35)",
                }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 8px 40px rgba(34,197,94,0.5)",
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                Create Free Account
                <motion.span
                  className="inline-block"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
              </motion.a>
              <motion.a
                href="#"
                className="px-8 py-3.5 rounded-xl font-semibold text-sm border"
                style={{
                  borderColor: "rgba(255,255,255,0.2)",
                  color: "#FFFFFF",
                  backgroundColor: "rgba(255,255,255,0.05)",
                }}
                whileHover={{ 
                  scale: 1.05,
                  borderColor: "rgba(255,255,255,0.4)",
                  backgroundColor: "rgba(255,255,255,0.1)",
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                Try Live Demo
              </motion.a>
            </div>

            <p className="mt-8 text-xs" style={{ color: "rgba(209,250,229,0.7)" }}>
              Enterprise-grade security · Official WhatsApp Business API
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
