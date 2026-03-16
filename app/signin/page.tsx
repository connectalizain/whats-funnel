import { Metadata } from "next";
import SignInContent from "./SignInContent";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to your WhatsFunnels account to manage your WhatsApp marketing campaigns and funnels.",
  alternates: {
    canonical: "/signin",
  },
  robots: {
    index: false, // Don't index auth pages
    follow: true,
  },
};

export default function SignInPage() {
  return <SignInContent />;
}
