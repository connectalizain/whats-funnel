"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl border-b border-white/8 py-3"
          : "py-5"
      }`}
      style={{ backgroundColor: scrolled ? "rgba(10,15,30,0.9)" : "transparent" }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: "var(--brand)" }}>
            <MessageCircle className="w-4 h-4 text-black" />
          </div>
          <span className="font-bold text-lg tracking-tight" style={{ color: "var(--foreground)" }}>
            Whats<span style={{ color: "var(--brand)" }}>Funnels</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium transition-colors duration-200 hover:opacity-100"
              style={{ color: "var(--foreground-muted)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--foreground)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--foreground-muted)")}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/signin"
            className="text-sm font-medium transition-colors duration-200"
            style={{ color: "var(--foreground-muted)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--foreground)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--foreground-muted)")}
          >
            Sign in
          </a>
          <a
            href="/signup"
            className="px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg"
            style={{
              backgroundColor: "var(--brand)",
              color: "#000",
              boxShadow: "0 0 0 0 var(--brand-glow)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px var(--brand-glow)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            Get Started Free
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-lg"
          style={{ color: "var(--foreground)" }}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-t overflow-hidden"
            style={{ borderColor: "var(--border-color)", backgroundColor: "var(--surface)" }}
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium py-1"
                  style={{ color: "var(--foreground-muted)" }}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/signin"
                className="text-sm font-medium py-1"
                style={{ color: "var(--foreground-muted)" }}
                onClick={() => setMobileOpen(false)}
              >
                Sign in
              </a>
              <a
                href="/signup"
                className="mt-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-center"
                style={{ backgroundColor: "var(--brand)", color: "#000" }}
              >
                Get Started Free
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
