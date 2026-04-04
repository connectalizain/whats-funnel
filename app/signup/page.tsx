import { Metadata } from "next";
import SignUpContent from "./SignUpContent";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Create your WhatsFunnels account and start building powerful WhatsApp marketing funnels. 7-day free trial, no credit card required.",
  alternates: {
    canonical: "/signup",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function SignUpPage() {
  return <SignUpContent />;
}
