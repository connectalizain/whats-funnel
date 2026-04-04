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
      className="border-t pt-12 pb-6 sm:pt-16 sm:pb-8"
      style={{ borderColor: "var(--border-color)", background: "linear-gradient(90deg, #ffffff 0%, #22c55e 100%)" }}
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Top section: brand + links in one responsive row */}
        <div className="flex flex-col items-center gap-10 mb-12 sm:flex-row sm:items-start sm:justify-between">

          {/* Brand */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left shrink-0 max-w-xs">
            <Link href="/" className="inline-flex items-center mb-4">
              <img src="/Whte svg.svg" alt="GoRespond Logo" className="h-10 w-auto" />
            </Link>
            <p className="text-sm leading-relaxed" style={{ color: "var(--foreground-muted)" }}>
              The complete platform to manage customer conversations, automate responses, and scale your business communication globally.
            </p>
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
                    e.currentTarget.style.color = "";
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
                        style={{ color: "#ffffff" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--brand)")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "#ffffff")}
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
          style={{ borderColor: "var(--border-color)" }}
        >
          <p className="text-xs" style={{ color: "var(--foreground-muted)" }}>
            © {new Date().getFullYear()} GoRespond. All rights reserved. A product of Uptech Sol Technologies W.L.L.
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
