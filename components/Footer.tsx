"use client";

import Link from "next/link";

const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "Team Inbox", href: "#features" },
    { label: "Chatbots", href: "#features" },
    { label: "Broadcasts", href: "#features" },
  ],
  Resources: [
    { label: "Blog", href: "#" },
    { label: "Contact", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export default function Footer() {
  return (
    <footer
      className="relative text-white bg-gradient-to-br from-black via-[#064e3b] to-[#042f2e] border-t pt-12 pb-6 sm:pt-16 sm:pb-8"
      style={{ borderColor: "transparent" }}
    >
      <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      <div className="max-w-6xl mx-auto px-6">

        {/* Top section: brand + links in one responsive row */}
        <div className="flex flex-col items-center gap-10 mb-12 sm:flex-row sm:items-start sm:justify-between">

          {/* Brand */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left shrink-0 max-w-xs">
            <Link href="/" className="inline-flex items-center mb-4">
              <img src="/Whte svg.svg" alt="WhatsFunnels Logo" className="h-10 w-auto" />
            </Link>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255, 255, 255, 0.7)" }}>
              Automate WhatsApp, grow faster, and deliver seamless customer experiences.
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="text-xs" style={{ color: "rgba(255, 255, 255, 0.7)" }}>
                  Powered by
                </span>
                <a 
                  href="https://konversation.io/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block transition-opacity hover:opacity-100"
                >
                  <img 
                    src="/konversation_logo.svg" 
                    alt="Konversation" 
                    className="h-7 w-auto opacity-80 cursor-pointer" 
                  />
                </a>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs" style={{ color: "rgba(255, 255, 255, 0.7)" }}>
                  Partnership with
                </span>
                <div className="flex items-center gap-1.5 opacity-90">
                  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-white/20">
                    <rect width="40" height="40" rx="12" fill="currentColor"></rect>
                    <path d="M10 14C10 11.2386 12.2386 9 15 9H25C27.7614 9 30 11.2386 30 14V22C30 24.7614 27.7614 27 25 27H17L12 32V27H15C12.2386 27 10 24.7614 10 22V14Z" fill="white" fillOpacity="0.95"></path>
                    <circle cx="15" cy="18" r="2" fill="currentColor"></circle>
                    <circle cx="20" cy="18" r="2" fill="currentColor"></circle>
                    <circle cx="25" cy="18" r="2" fill="currentColor"></circle>
                  </svg>
                  <span className="text-white font-semibold tracking-wide text-sm">GoRespond</span>
                </div>
              </div>
            </div>
          </div>

          {/* Link columns: single row on all screen sizes */}
          <div className="flex flex-row justify-center gap-10 sm:gap-16 flex-wrap">
            {Object.entries(footerLinks).map(([group, links]) => (
              <div key={group} className="flex flex-col items-center sm:items-start text-center sm:text-left min-w-[80px]">
                <h4
                  className="mb-3 text-base font-bold uppercase tracking-widest text-white transition-colors duration-200"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--brand)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "rgba(255, 255, 255, 0.7)";
                  }}
                >
                  {group}
                </h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm transition-colors duration-200"
                        style={{ color: "rgba(255, 255, 255, 0.7)" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--brand)")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255, 255, 255, 0.7)")}
                      >
                        {link.label}
                      </Link>
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
          style={{ borderColor: "rgba(255,255,255,0.1)" }}
        >
          <p className="text-xs" style={{ color: "rgba(255, 255, 255, 0.6)" }}>
            © {new Date().getFullYear()} WhatsFunnels. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-xs" style={{ color: "#ffffff" }}>
            <span
              className="w-1.5 h-1.5 rounded-full inline-block"
              style={{ backgroundColor: "var(--brand)" }}
            />
            Official Meta WhatsApp Business API
          </div>
        </div>
      </div>
    </footer>
  );
}
