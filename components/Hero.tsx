"use client";

import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, CheckCircle, Wifi, Shield, Zap } from "lucide-react";

const stats = [
  { value: "98%", label: "Message Open Rate" },
  { value: "45%", label: "Avg. Click-Through" },
  { value: "2B+", label: "WhatsApp Users" },
];

const trustedBadges = ["Official WhatsApp API", "No Credit Card"];

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
      className="absolute -bottom-6 -left-6 z-20 rounded-xl px-4 py-3 border hidden lg:flex items-center gap-3"
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
        backgroundColor: "rgba(255,255,255,0.9)",
        borderColor: "var(--border-color)",
        backdropFilter: "blur(8px)",
        boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
      }}
    >
      <Icon className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "var(--brand)" }} />
      <span className="text-xs font-medium whitespace-nowrap" style={{ color: "var(--brand)" }}>
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
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when messages or typing state change
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth"
      });
    }
  }, [visibleCount, showTyping]);

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
      className="relative min-h-screen flex items-center pt-20 pb-12 sm:pt-24 sm:pb-16 overflow-hidden"
      style={{
        background:
          "linear-gradient(165deg, #FFFFFF 0%, #F9FAFB 32%, #ECFDF5 68%, #FFFFFF 100%)",
      }}
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
              "radial-gradient(circle, rgba(34,197,94,0.15) 0%, rgba(34,197,94,0.08) 28%, rgba(16,185,129,0.04) 48%, rgba(56,189,248,0.02) 62%, transparent 78%)",
            filter: "blur(44px)",
            willChange: "left, top",
            transition: "opacity 0.4s ease",
            opacity: 1,
          }}
        />
      )}

      {/* Global subtle follower for rest of page */}
      <GlowFollower />

      {/* Mesh blobs — static depth */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div
          className="absolute -top-[20%] left-[10%] w-[min(520px,90vw)] h-[min(520px,90vw)] rounded-full opacity-50"
          style={{
            background:
              "radial-gradient(circle, rgba(34,197,94,0.18) 0%, rgba(34,197,94,0.06) 45%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <div
          className="absolute top-[35%] -right-[8%] w-[min(480px,85vw)] h-[min(480px,85vw)] rounded-full opacity-45"
          style={{
            background:
              "radial-gradient(circle, rgba(20,184,166,0.14) 0%, rgba(34,197,94,0.08) 40%, transparent 68%)",
            filter: "blur(44px)",
          }}
        />
        <div
          className="absolute -bottom-[15%] left-[30%] w-[min(600px,100vw)] h-[min(360px,50vh)] rounded-full opacity-40"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(34,197,94,0.12) 0%, transparent 65%)",
            filter: "blur(36px)",
          }}
        />
      </div>

      {/* Static top glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 90% 55% at 50% -8%, rgba(34,197,94,0.14) 0%, transparent 58%)",
        }}
      />

      {/* Subtle grid — tuned for light surfaces */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.3]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,23,42,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.03) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse 85% 70% at 50% 45%, black 15%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 85% 70% at 50% 45%, black 15%, transparent 75%)",
        }}
      />

      {/* Fine grain */}
      <div className="absolute inset-0 pointer-events-none section-noise opacity-70 mix-blend-overlay" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* --- Left: Text --- */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-3 mt-4 mb-6 justify-center lg:justify-start w-full whitespace-nowrap overflow-visible">
              <span
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] sm:text-[13px] font-medium border bg-white shadow-sm transition-transform hover:scale-105"
                style={{ color: "#475569", borderColor: "#e2e8f0" }}
              >
                <svg className="w-4 h-4 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.451-4.437 9.885-9.885 9.885m8.413-18.297A11.815 11.815 0 0 0 12.052 0C5.495 0 .16 5.333.158 11.892c0 2.098.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.332 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
                Powered by Official WhatsApp Business API
              </span>

              <span
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] sm:text-[13px] font-medium border bg-white shadow-sm transition-transform hover:scale-105"
                style={{ color: "#475569", borderColor: "#e2e8f0" }}
              >
                <svg className="w-5 h-5 text-[#0668E1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 12c-2-2.5-4-3-6-3a4 4 0 0 0 0 8c2 0 4-.5 6-3 2 2.5 4 3 6 3a4 4 0 0 0 0-8c-2 0-4 .5-6 3Z" />
                </svg>
                Meta Business Partners
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.1] tracking-tight w-full max-w-xl mx-auto lg:mx-0"
              style={{ color: "var(--foreground)" }}
            >
              #1 Official WhatsApp{" "}
              <span style={{ color: "var(--brand)" }}>Marketing Platform for Business</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-6 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0"
              style={{ color: "var(--foreground-muted)" }}
            >
              Use the Official WhatsApp API and never get banned for sending bulk messages. WhatsFunnels offers the lowest cost with 0% markup fees on Meta API, unlike others who add 20-25%.
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
              <Link
                href="https://app.whatsfunnels.io/login"
                className="group flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-600 hover:to-teal-500 transition-all duration-300 hover:scale-105 shadow-[0_4px_24px_rgba(34,197,94,0.3)] hover:shadow-[0_24px_32px_rgba(34,197,94,0.5)]"
              >
                Start Free — 14 Days
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
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
              className="-top-5 -right-4 hidden lg:flex"
            />
            <FloatingBadge
              icon={Zap}
              label="99.9% Delivery Rate"
              delay={2.4}
              className="top-20 -right-8 hidden lg:flex"
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
                  <div className="flex justify-center pt-2.5 pb-1 flex-shrink-0" style={{ backgroundColor: "#075e54" }}>
                    <div className="w-16 h-1 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.3)" }} />
                  </div>

                  {/* WhatsApp green chat header - Fixed height to prevent jumps */}
                  <div
                    className="flex items-center gap-3 px-4 h-[64px] flex-shrink-0"
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

                  {/* Chat messages area — fixed height with internal scroll to prevent layout shift */}
                  <div
                    ref={scrollRef}
                    className="flex flex-col gap-2 px-3 py-4 h-[350px] relative overflow-y-auto scrollbar-hide"
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

                  {/* Input bar - Fixed height */}
                  <div
                    className="flex items-center gap-2 px-3 h-[60px] flex-shrink-0"
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
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
      <div
        style={{
          position: "absolute",
          left: pos.x - 280,
          top: pos.y - 280,
          width: 560,
          height: 560,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(34,197,94,0.08) 0%, rgba(34,197,94,0.04) 38%, rgba(5,150,105,0.02) 58%, transparent 76%)",
          filter: "blur(36px)",
          willChange: "transform",
          opacity: 0.95,
        }}
      />
    </div>
  );
}
