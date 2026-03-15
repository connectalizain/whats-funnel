"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, CheckCircle, Wifi, Shield, Zap } from "lucide-react";

const stats = [
  { value: "98%", label: "Message Open Rate" },
  { value: "45%", label: "Avg. Click-Through" },
  { value: "2B+", label: "WhatsApp Users" },
  { value: "1,200+", label: "Businesses Worldwide" },
];

const trustedBadges = ["Official WhatsApp API", "GDPR Compliant", "No Credit Card"];

const chatMessages = [
  { side: "left",  text: "Hey! I saw your ad for the flash sale 👀", time: "10:31" },
  { side: "right", text: "Hello! Welcome to WhatsFunnels. How can I help you today?", time: "10:32" },
  { side: "left",  text: "Do you offer WhatsApp automation?", time: "10:33" },
  { side: "right", text: "Yes! We offer chatbots, auto-replies, and broadcast campaigns. Would you like a demo?", time: "10:33" },
  { side: "left",  text: "That sounds great! 🎉", time: "10:35" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// --- Hero-scoped glow: tracks mouse relative to section bounds ---
function useHeroGlow(ref: React.RefObject<HTMLElement | null>) {
  const [pos, setPos] = useState({ x: -9999, y: -9999 });
  const [active, setActive] = useState(false);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const isTouchDevice =
      typeof window !== "undefined" && window.matchMedia("(hover: none)").matches;
    if (isTouchDevice) return;

    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      current.x = lerp(current.x, target.x, 0.1);
      current.y = lerp(current.y, target.y, 0.1);
      setPos({ x: current.x, y: current.y });
      rafRef.current = requestAnimationFrame(tick);
    };

    const handleMove = (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      // Only track when inside section
      if (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      ) {
        target.x = e.clientX - rect.left;
        target.y = e.clientY - rect.top;
        setActive(true);
      }
    };

    window.addEventListener("mousemove", handleMove);
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, [ref]);

  return { pos, active };
}

// --- WhatsApp-style typing indicator with staggered bouncing dots ---
function TypingDots() {
  return (
    <div className="flex items-center gap-1.5 px-4 py-2.5">
      <span
        className="w-2 h-2 rounded-full animate-bounce-dot animate-bounce-dot-1"
        style={{ backgroundColor: "var(--foreground-muted)" }}
      />
      <span
        className="w-2 h-2 rounded-full animate-bounce-dot animate-bounce-dot-2"
        style={{ backgroundColor: "var(--foreground-muted)" }}
      />
      <span
        className="w-2 h-2 rounded-full animate-bounce-dot animate-bounce-dot-3"
        style={{ backgroundColor: "var(--foreground-muted)" }}
      />
    </div>
  );
}

// --- Bot typing indicator (dark dots on green background) ---
function TypingDotsBot() {
  return (
    <div className="flex items-center gap-1.5 px-4 py-2.5">
      <span
        className="w-2 h-2 rounded-full animate-bounce-dot animate-bounce-dot-1"
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      />
      <span
        className="w-2 h-2 rounded-full animate-bounce-dot animate-bounce-dot-2"
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      />
      <span
        className="w-2 h-2 rounded-full animate-bounce-dot animate-bounce-dot-3"
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      />
    </div>
  );
}

// --- WhatsApp connection card ---
function ConnectionCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 2.8, duration: 0.5, ease: "easeOut" }}
      className="absolute -bottom-6 -left-6 z-20 rounded-xl px-4 py-3 border flex items-center gap-3"
      style={{
        backgroundColor: "var(--surface-2)",
        borderColor: "rgba(34,197,94,0.3)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(34,197,94,0.1)",
        backdropFilter: "blur(12px)",
        minWidth: "220px",
      }}
    >
      <div className="relative flex-shrink-0">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center"
          style={{ backgroundColor: "rgba(34,197,94,0.15)" }}
        >
          <Wifi className="w-4 h-4" style={{ color: "var(--brand)" }} />
        </div>
        {/* pulse ring */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{ border: "2px solid rgba(34,197,94,0.4)" }}
          animate={{ scale: [1, 1.6], opacity: [0.6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
        />
      </div>
      <div>
        <div className="text-xs font-semibold" style={{ color: "var(--foreground)" }}>
          WhatsApp Connected
        </div>
        <div className="text-xs" style={{ color: "var(--brand)" }}>
          Official Meta Business API
        </div>
      </div>
    </motion.div>
  );
}

// --- Floating feature badges ---
function FloatingBadge({
  icon: Icon,
  label,
  delay,
  className,
}: {
  icon: React.ElementType;
  label: string;
  delay: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.4, ease: "easeOut" }}
      className={`absolute z-20 flex items-center gap-2 rounded-lg px-3 py-2 border ${className}`}
      style={{
        backgroundColor: "rgba(15,23,42,0.9)",
        borderColor: "var(--border-color)",
        backdropFilter: "blur(8px)",
        boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
      }}
    >
      <Icon className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "var(--brand)" }} />
      <span className="text-xs font-medium whitespace-nowrap" style={{ color: "var(--foreground)" }}>
        {label}
      </span>
    </motion.div>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { pos: glowPos, active: glowActive } = useHeroGlow(sectionRef as React.RefObject<HTMLElement>);

  // Animate chat messages sequentially with typing indicator before bot (right) messages
  const [visibleCount, setVisibleCount] = useState(0);
  const [showTyping, setShowTyping] = useState(false);

  useEffect(() => {
    let timeouts: NodeJS.Timeout[] = [];
    
    const runConversation = () => {
      setVisibleCount(0);
      setShowTyping(false);
      
      let cumulativeDelay = 800; // Initial delay before first message
      
      chatMessages.forEach((msg, i) => {
        const isBot = msg.side === "right";
        const typingDuration = 900; // How long typing indicator shows
        const messageDelay = 1200; // Delay between messages
        
        if (isBot) {
          // Show typing indicator before bot reply
          timeouts.push(setTimeout(() => setShowTyping(true), cumulativeDelay));
          cumulativeDelay += typingDuration;
          // Then show the message and hide typing
          timeouts.push(setTimeout(() => {
            setShowTyping(false);
            setVisibleCount(i + 1);
          }, cumulativeDelay));
          cumulativeDelay += messageDelay;
        } else {
          // User messages appear directly
          timeouts.push(setTimeout(() => {
            setVisibleCount(i + 1);
          }, cumulativeDelay));
          cumulativeDelay += messageDelay;
        }
      });
      
      // Loop: restart conversation after all messages + pause
      const loopDelay = cumulativeDelay + 2500;
      timeouts.push(setTimeout(runConversation, loopDelay));
    };
    
    runConversation();
    
    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
      style={{ backgroundColor: "var(--background)" }}
    >
      {/* --- Hero-scoped mouse glow (prominent) --- */}
      {glowActive && (
        <div
          className="pointer-events-none absolute z-0"
          aria-hidden="true"
          style={{
            left: glowPos.x - 450,
            top: glowPos.y - 450,
            width: 900,
            height: 900,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(34,197,94,0.22) 0%, rgba(34,197,94,0.10) 30%, rgba(34,197,94,0.03) 60%, transparent 75%)",
            filter: "blur(48px)",
            willChange: "left, top",
            transition: "opacity 0.4s ease",
            opacity: 1,
          }}
        />
      )}

      {/* Global subtle follower for rest of page */}
      <GlowFollower />

      {/* Static top glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -5%, rgba(34,197,94,0.1) 0%, transparent 65%)",
        }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* --- Left: Text --- */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 mb-6">
              <span
                className="px-3 py-1.5 rounded-full text-xs font-semibold border"
                style={{
                  backgroundColor: "var(--brand-glow)",
                  color: "var(--brand)",
                  borderColor: "rgba(34,197,94,0.3)",
                }}
              >
                ✦ Official WhatsApp Business API
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-balance"
              style={{ color: "var(--foreground)" }}
            >
              Turn WhatsApp Into Your{" "}
              <span style={{ color: "var(--brand)" }}>Growth Engine</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0"
              style={{ color: "var(--foreground-muted)" }}
            >
              Broadcast campaigns, capture leads, and build marketing funnels directly on
              WhatsApp — the channel with 98% open rates that your customers actually use.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-3 mt-5 justify-center lg:justify-start"
            >
              {trustedBadges.map((b) => (
                <span
                  key={b}
                  className="flex items-center gap-1.5 text-sm"
                  style={{ color: "var(--foreground-muted)" }}
                >
                  <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: "var(--brand)" }} />
                  {b}
                </span>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-4 mt-8 justify-center lg:justify-start"
            >
              <a
                href="/signup"
                className="group flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-105"
                style={{
                  backgroundColor: "var(--brand)",
                  color: "#000",
                  boxShadow: "0 4px 24px rgba(34,197,94,0.3)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 32px rgba(34,197,94,0.55)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(34,197,94,0.3)";
                }}
              >
                Start Free — 14 Days
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border transition-all duration-200 hover:scale-105"
                style={{
                  borderColor: "var(--border-color)",
                  color: "var(--foreground)",
                  backgroundColor: "transparent",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(34,197,94,0.4)";
                  (e.currentTarget as HTMLElement).style.backgroundColor = "var(--brand-glow)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border-color)";
                  (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                }}
              >
                <Play className="w-4 h-4" style={{ color: "var(--brand)" }} />
                See how it works
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {stats.map((s) => (
                <div key={s.label} className="text-center lg:text-left">
                  <div className="text-2xl font-extrabold" style={{ color: "var(--brand)" }}>
                    {s.value}
                  </div>
                  <div className="text-xs mt-0.5" style={{ color: "var(--foreground-muted)" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* --- Right: Animated chat phone mockup --- */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="flex justify-center relative"
          >
            {/* Floating badges */}
            <FloatingBadge
              icon={Shield}
              label="End-to-End Encrypted"
              delay={2.0}
              className="-top-5 -right-4"
            />
            <FloatingBadge
              icon={Zap}
              label="99.9% Delivery Rate"
              delay={2.4}
              className="top-20 -right-8 hidden sm:flex"
            />

            {/* Phone shell — authentic WhatsApp look matching reference */}
            <div
              className="relative w-[270px] sm:w-[300px]"
              style={{ filter: "drop-shadow(0 32px 64px rgba(0,0,0,0.7)) drop-shadow(0 0 40px rgba(34,197,94,0.12))" }}
            >
              {/* Outer phone bezel */}
              <div
                className="rounded-[36px] p-[3px] overflow-hidden"
                style={{ backgroundColor: "#1a2332" }}
              >
                {/* Inner phone screen */}
                <div className="rounded-[33px] overflow-hidden flex flex-col" style={{ backgroundColor: "#0d1b2a" }}>

                  {/* Status bar (notch area) */}
                  <div className="flex justify-center pt-2.5 pb-1" style={{ backgroundColor: "#075e54" }}>
                    <div className="w-16 h-1 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.3)" }} />
                  </div>

                  {/* WhatsApp green chat header */}
                  <div
                    className="flex items-center gap-3 px-4 py-3"
                    style={{ backgroundColor: "#075e54" }}
                  >
                    {/* Avatar */}
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-base flex-shrink-0"
                      style={{ backgroundColor: "#25d366", color: "#fff" }}
                    >
                      W
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">WhatsFunnels</div>
                      <div className="flex items-center gap-1">
                        <motion.span
                          className="w-1.5 h-1.5 rounded-full inline-block bg-green-300"
                          animate={{ opacity: [1, 0.5, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <span className="text-xs text-green-200">Online</span>
                      </div>
                    </div>
                  </div>

                  {/* Chat messages area — dark navy like WhatsApp dark mode */}
                  <div
                    className="flex flex-col gap-2 px-3 py-3 min-h-[320px] relative overflow-hidden"
                    style={{
                      backgroundColor: "#0d1b2a",
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Ccircle cx='20' cy='20' r='10' stroke='%23ffffff' stroke-opacity='0.02' stroke-width='0.5'/%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                  >
                    <AnimatePresence>
                      {chatMessages.slice(0, visibleCount).map((msg, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          className={`flex ${msg.side === "right" ? "justify-end" : "justify-start"}`}
                        >
                          <div
                            className="max-w-[78%] px-3 py-2 text-[13px] leading-snug shadow-sm"
                            style={{
                              backgroundColor: msg.side === "right" ? "#25d366" : "#1e2d3d",
                              color: msg.side === "right" ? "#fff" : "#e5e7eb",
                              borderRadius: msg.side === "right"
                                ? "12px 12px 3px 12px"
                                : "12px 12px 12px 3px",
                            }}
                          >
                            <p>{msg.text}</p>
                            <div className={`text-[10px] mt-1 flex items-center gap-1 ${msg.side === "right" ? "justify-end" : "justify-start"}`}
                              style={{ color: msg.side === "right" ? "rgba(255,255,255,0.7)" : "#6b7280" }}
                            >
                              {msg.time}
                              {msg.side === "right" && (
                                <svg className="w-3 h-3 inline" viewBox="0 0 16 11" fill="none">
                                  <path d="M1 5.5L5.5 10L15 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                  <path d="M5 5.5L9.5 10L19 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
                                </svg>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>

                    {/* Typing indicator — shown on right (bot) side */}
                    <AnimatePresence>
                      {showTyping && (
                        <motion.div
                          key="typing"
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="flex justify-end"
                        >
                          <div
                            className="px-4 py-2.5 rounded-[12px] rounded-br-[3px]"
                            style={{ backgroundColor: "#25d366" }}
                          >
                            <TypingDotsBot />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Input bar */}
                  <div
                    className="flex items-center gap-2 px-3 py-2.5"
                    style={{ backgroundColor: "#0d1b2a", borderTop: "1px solid rgba(255,255,255,0.06)" }}
                  >
                    <div
                      className="flex-1 px-4 py-2 rounded-full text-xs"
                      style={{ backgroundColor: "#1e2d3d", color: "#6b7280" }}
                    >
                      Type a message...
                    </div>
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "#25d366" }}
                    >
                      {/* Paper plane send icon */}
                      <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                      </svg>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* WhatsApp Connection Card */}
            <ConnectionCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// --- Global subtle follower: light glow for the rest of the page ---
function GlowFollower() {
  const [pos, setPos] = useState({ x: -9999, y: -9999 });
  const [isVisible, setIsVisible] = useState(false);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const isTouchDevice =
      typeof window !== "undefined" && window.matchMedia("(hover: none)").matches;
    if (isTouchDevice) return;

    const target = { x: -9999, y: -9999 };
    let current = { x: -9999, y: -9999 };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      current.x = lerp(current.x, target.x, 0.08);
      current.y = lerp(current.y, target.y, 0.08);
      setPos({ x: current.x, y: current.y });
      rafRef.current = requestAnimationFrame(animate);
    };

    const handleMove = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMove);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0"
      style={{ mixBlendMode: "screen" }}
      aria-hidden="true"
    >
      <div
        style={{
          position: "absolute",
          left: pos.x - 250,
          top: pos.y - 250,
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(34,197,94,0.06) 0%, rgba(34,197,94,0.02) 50%, transparent 75%)",
          filter: "blur(30px)",
          willChange: "transform",
        }}
      />
    </div>
  );
}
