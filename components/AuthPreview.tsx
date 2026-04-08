"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle, BarChart3, Bot, Sparkles, Users } from "lucide-react";

// Left-side preview panel for auth pages - shows product features
export default function AuthPreview() {
  return (
    <div
      className="hidden lg:flex flex-col justify-between min-h-screen p-10"
      style={{ backgroundColor: "var(--surface)" }}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: "var(--brand)" }}
        >
          <MessageCircle className="w-5 h-5 text-black" />
        </div>
        <span className="font-bold text-xl" style={{ color: "var(--foreground)" }}>
          WhatsFunnels
        </span>
      </Link>

      {/* Headline */}
      <div className="flex-1 flex flex-col justify-center max-w-md">
        <h1 className="text-3xl font-bold leading-tight mb-2" style={{ color: "var(--foreground)" }}>
          WhatsApp Business
        </h1>
        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-br from-emerald-500 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
          Made Simple
        </h2>
        <p className="text-base leading-relaxed mb-10" style={{ color: "var(--foreground-muted)" }}>
          All-in-one platform for team inbox, chatbots, broadcasts & AI automation.
        </p>

        {/* Feature cards grid */}
        <div className="grid grid-cols-2 gap-3">
          {/* Chat preview card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="col-span-1 row-span-2 rounded-xl p-4 border"
            style={{ backgroundColor: "var(--surface-2)", borderColor: "var(--border-color)" }}
          >
            <div className="flex items-center gap-2 mb-3">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                style={{ backgroundColor: "var(--brand)", color: "#000" }}
              >
                W
              </div>
              <div>
                <div className="text-xs font-semibold" style={{ color: "var(--foreground)" }}>WhatsFunnels</div>
                <div className="text-[10px] font-bold bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">Online</div>
              </div>
            </div>
            <div className="space-y-2">
              <div
                className="text-xs px-2.5 py-1.5 rounded-lg rounded-bl-none max-w-[90%]"
                style={{ backgroundColor: "var(--surface)", color: "var(--foreground)" }}
              >
                Hi! I need help
              </div>
              <div
                className="text-xs px-2.5 py-1.5 rounded-lg rounded-br-none max-w-[90%] ml-auto"
                style={{ backgroundColor: "var(--brand)", color: "#000" }}
              >
                Hello! How can I assist?
              </div>
            </div>
          </motion.div>

          {/* Team Inbox card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-xl p-3 border"
            style={{ backgroundColor: "var(--surface-2)", borderColor: "var(--border-color)" }}
          >
            <div className="flex items-center gap-1.5 mb-2">
              <Users className="w-3.5 h-3.5" style={{ color: "var(--brand)" }} />
              <span className="text-xs font-semibold" style={{ color: "var(--foreground)" }}>Team Inbox</span>
            </div>
            <div className="space-y-1.5">
              {[
                { name: "Sarah J.", status: "new", color: "#22c55e" },
                { name: "Mike C.", status: "pending", color: "#f59e0b" },
              ].map((u) => (
                <div key={u.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div
                      className="w-5 h-5 rounded-full text-[9px] font-bold flex items-center justify-center"
                      style={{ backgroundColor: u.color, color: "#000" }}
                    >
                      {u.name[0]}
                    </div>
                    <span className="text-[10px]" style={{ color: "var(--foreground)" }}>{u.name}</span>
                  </div>
                  <span
                    className="text-[9px] px-1.5 py-0.5 rounded"
                    style={{ backgroundColor: `${u.color}20`, color: u.color }}
                  >
                    {u.status}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Analytics card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="rounded-xl p-3 border"
            style={{ backgroundColor: "var(--surface-2)", borderColor: "var(--border-color)" }}
          >
            <div className="flex items-center gap-1.5 mb-2">
              <BarChart3 className="w-3.5 h-3.5" style={{ color: "var(--brand)" }} />
              <span className="text-xs font-semibold" style={{ color: "var(--foreground)" }}>Analytics</span>
            </div>
            <div className="flex items-end gap-1 h-10">
              {[40, 65, 45, 80, 55, 70, 90].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm"
                  style={{ height: `${h}%`, backgroundColor: "var(--brand)" }}
                />
              ))}
            </div>
          </motion.div>

          {/* Chatbot card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="rounded-xl p-3 border"
            style={{ backgroundColor: "var(--surface-2)", borderColor: "var(--border-color)" }}
          >
            <div className="flex items-center gap-1.5 mb-2">
              <Bot className="w-3.5 h-3.5" style={{ color: "var(--brand)" }} />
              <span className="text-xs font-semibold" style={{ color: "var(--foreground)" }}>Chatbot</span>
            </div>
            <div className="space-y-1">
              {["Trigger", "Reply", "Assign"].map((action) => (
                <div
                  key={action}
                  className="text-[10px] px-2 py-1 rounded"
                  style={{ backgroundColor: "var(--brand-glow)", color: "var(--brand)" }}
                >
                  {action}
                </div>
              ))}
            </div>
          </motion.div>

          {/* AI Assistant card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="rounded-xl p-3 border"
            style={{ backgroundColor: "var(--surface-2)", borderColor: "var(--border-color)" }}
          >
            <div className="flex items-center gap-1.5 mb-2">
              <Sparkles className="w-3.5 h-3.5" style={{ color: "var(--brand)" }} />
              <span className="text-xs font-semibold" style={{ color: "var(--foreground)" }}>AI Assistant</span>
            </div>
            <div
              className="text-[10px] px-2 py-1.5 rounded"
              style={{ backgroundColor: "var(--surface)", color: "var(--foreground-muted)" }}
            >
              I recommend offering a 10%
              <span className="animate-pulse" style={{ color: "var(--brand)" }}>|</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom spacer */}
      <div />
    </div>
  );
}
