"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle, Check } from "lucide-react";
import AuthPreview from "@/components/AuthPreview";

const benefits = [
  "7-day free trial, no credit card required",
  "Official WhatsApp Business API",
  "Unlimited team members",
  "24/7 priority support",
];

export default function SignUpContent() {
  return (
    <div className="min-h-screen flex">
      {/* Left side - Product preview */}
      <AuthPreview />

      {/* Right side - Sign up form */}
      <div
        className="flex-1 flex flex-col items-center justify-center px-6 py-12"
        style={{ backgroundColor: "#f8fafc" }}
      >
        {/* Mobile logo */}
        <Link href="/" className="lg:hidden flex items-center gap-2 mb-10">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: "var(--brand)" }}
          >
            <MessageCircle className="w-5 h-5 text-black" />
          </div>
          <span className="font-bold text-xl text-slate-900">
            Whats<span style={{ color: "var(--brand)" }}>Funnels</span>
          </span>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-md"
        >
          <h1 className="text-3xl font-bold text-center mb-2 text-slate-900">
            Get started for free
          </h1>
          <p className="text-center text-slate-600 mb-10">
            Create your account and start growing on WhatsApp
          </p>

          {/* Sign up card */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
            {/* Google Sign Up button */}
            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 py-3.5 rounded-xl font-semibold text-white transition-all duration-200 hover:opacity-90"
              style={{ backgroundColor: "var(--brand)" }}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Continue with Google
            </button>

            {/* Benefits list */}
            <div className="mt-8 space-y-3">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "var(--brand-glow)" }}
                  >
                    <Check className="w-3 h-3" style={{ color: "var(--brand)" }} />
                  </div>
                  <span className="text-sm text-slate-600">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Terms */}
          <p className="text-center text-sm text-slate-500 mt-8">
            By signing up, you agree to our{" "}
            <Link href="/terms" className="hover:underline" style={{ color: "var(--brand)" }}>
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="hover:underline" style={{ color: "var(--brand)" }}>
              Privacy Policy
            </Link>
          </p>

          {/* Sign in link */}
          <p className="text-center text-sm text-slate-600 mt-6">
            Already have an account?{" "}
            <Link href="/signin" className="font-semibold hover:underline" style={{ color: "var(--brand)" }}>
              Sign in
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
