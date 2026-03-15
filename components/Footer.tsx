"use client";

import { MessageCircle } from "lucide-react";

const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "How It Works", href: "#how-it-works" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
  Account: [
    { label: "Sign In", href: "/signin" },
    { label: "Sign Up", href: "/signup" },
  ],
};

export default function Footer() {
  return (
    <footer
      className="border-t pt-16 pb-8"
      style={{ borderColor: "var(--border-color)", backgroundColor: "var(--surface)" }}
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Top section: brand + links in one responsive row */}
        <div className="flex flex-col items-center gap-10 mb-12 sm:flex-row sm:items-start sm:justify-between">

          {/* Brand */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left shrink-0 max-w-xs">
            <a href="/" className="inline-flex items-center gap-2 mb-3">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "var(--brand)" }}
              >
                <MessageCircle className="w-4 h-4 text-black" />
              </div>
              <span className="font-bold text-lg" style={{ color: "var(--foreground)" }}>
                Whats<span style={{ color: "var(--brand)" }}>Funnels</span>
              </span>
            </a>
            <p className="text-sm leading-relaxed" style={{ color: "var(--foreground-muted)" }}>
              The most powerful WhatsApp marketing platform built on the official Meta Business API.
            </p>
          </div>

          {/* Link columns: single row on all screen sizes */}
          <div className="flex flex-row justify-center gap-10 sm:gap-16 flex-wrap">
            {Object.entries(footerLinks).map(([group, links]) => (
              <div key={group} className="flex flex-col items-center sm:items-start text-center sm:text-left min-w-[80px]">
                <h4
                  className="text-xs font-semibold uppercase tracking-widest mb-3"
                  style={{ color: "var(--foreground)" }}
                >
                  {group}
                </h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm transition-colors duration-200"
                        style={{ color: "var(--foreground-muted)" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--brand)")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--foreground-muted)")}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8 border-t text-center"
          style={{ borderColor: "var(--border-color)" }}
        >
          <p className="text-xs" style={{ color: "var(--foreground-muted)" }}>
            © {new Date().getFullYear()} WhatsFunnels. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-xs" style={{ color: "var(--foreground-muted)" }}>
            <span
              className="w-1.5 h-1.5 rounded-full inline-block"
              style={{ backgroundColor: "var(--brand)" }}
            />
            Official Meta WhatsApp Business API Partner
          </div>
        </div>
      </div>
    </footer>
  );
}
