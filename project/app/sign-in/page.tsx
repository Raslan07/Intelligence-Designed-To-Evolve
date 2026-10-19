"use client";
// app/sign-in/page.tsx
// Sign In page — returning users, existing cluster operators

import { InnerNavbar } from "@/components/InnerNavbar";
import { PageFooter } from "@/components/PageFooter";
import { PageBadge } from "@/components/PageBadge";
import { FaGithub, FaGoogle } from "react-icons/fa6";
import { useState } from "react";

export default function SignInPage() {
  const [showPass, setShowPass] = useState(false);
  const mono = "var(--font-mono)";
  const display = "var(--font-display)";

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: "var(--bg)", color: "var(--text)" }}
    >
      <InnerNavbar activePage="Home" />

      <main
        className="flex-1 flex flex-col items-center py-12"
        style={{ paddingLeft: "clamp(14px, 3vw, 32px)", paddingRight: "clamp(14px, 3vw, 32px)" }}
      >
        <div className="w-full flex flex-col items-center my-auto">
        {/* Hero */}
        <div className="text-center mb-8 flex flex-col items-center gap-4">
          <PageBadge text="OPERATOR ACCESS" />
          <h1
            className="text-white leading-none"
            style={{
              fontFamily: display,
              fontSize: "clamp(30px, 5vw, 60px)",
              letterSpacing: "-0.04em",
              fontWeight: 400,
            }}
          >
            RESUME SESSION
          </h1>
          <p
            className="max-w-[360px]"
            style={{ color: "var(--text-secondary)", fontSize: 15, lineHeight: 1.6 }}
          >
            Authenticate to your cluster environment and restore active worker threads.
          </p>
        </div>

        {/* Auth card */}
        <div
          className="w-full max-w-[460px] rounded-[32px] p-8 sm:p-10 flex flex-col gap-6"
          style={{
            background: "var(--surface-container)",
            border: "1px solid var(--border-subtle)",
            boxShadow: "0 24px 64px rgba(0,0,0,0.4)",
          }}
        >
          {/* Card header */}
          <div
            className="flex items-center justify-between text-xs"
            style={{ fontFamily: mono, color: "var(--muted)" }}
          >
            <span>AUTHENTICATE_NODE_OPERATOR</span>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              SECURE
            </div>
          </div>

          {/* OAuth */}
          <div className="grid grid-cols-2 gap-3">
            {[
              { Icon: FaGithub, label: "GitHub" },
              { Icon: FaGoogle, label: "Google" },
            ].map(({ Icon, label }) => (
              <button
                key={label}
                className="flex items-center justify-center gap-2 py-3 rounded-full text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border-medium)",
                  fontFamily: mono,
                }}
              >
                <Icon size={15} />
                {label}
              </button>
            ))}
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px" style={{ background: "var(--border-subtle)" }} />
            <span className="text-xs" style={{ fontFamily: mono, color: "var(--muted)" }}>
              OR VIA CREDENTIALS
            </span>
            <div className="flex-1 h-px" style={{ background: "var(--border-subtle)" }} />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label
              className="text-xs uppercase tracking-widest"
              style={{ fontFamily: mono, color: "var(--muted)" }}
            >
              Cluster Email
            </label>
            <input
              type="email"
              placeholder="operator@system.mesh.io"
              className="w-full rounded-full px-6 py-4 text-sm text-white outline-none transition-all duration-200"
              style={{
                background: "#161617",
                border: "1px solid var(--border-subtle)",
                fontFamily: mono,
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)";
                e.currentTarget.style.boxShadow = "0 0 12px rgba(255,255,255,0.08)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = "var(--border-subtle)";
                e.currentTarget.style.boxShadow = "none";
              }}
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <label
                className="text-xs uppercase tracking-widest"
                style={{ fontFamily: mono, color: "var(--muted)" }}
              >
                Access Secret
              </label>
              <a
                href="#"
                className="text-xs hover:opacity-70 transition-opacity"
                style={{ fontFamily: mono, color: "var(--muted)" }}
              >
                Forgot?
              </a>
            </div>
            <div className="relative">
              <input
                type={showPass ? "text" : "password"}
                placeholder="••••••••••••••••••"
                className="w-full rounded-full px-6 py-4 pr-14 text-sm text-white outline-none transition-all duration-200"
                style={{
                  background: "#161617",
                  border: "1px solid var(--border-subtle)",
                  fontFamily: mono,
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)";
                  e.currentTarget.style.boxShadow = "0 0 12px rgba(255,255,255,0.08)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-subtle)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
              <button
                type="button"
                onClick={() => setShowPass((p) => !p)}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-xs font-bold transition-opacity hover:opacity-70"
                style={{ color: "var(--muted)", fontFamily: mono }}
              >
                {showPass ? "HIDE" : "SHOW"}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-4 mt-2 rounded-full bg-white text-black text-sm font-bold transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.01]"
            style={{ boxShadow: "var(--glow-white)", fontFamily: mono }}
          >
            Authenticate →
          </button>

          {/* Sign up link */}
          <div
            className="text-center text-xs"
            style={{ fontFamily: mono, color: "var(--muted)" }}
          >
            No cluster yet?{" "}
            <a href="/sign-up" className="text-white hover:opacity-70 transition-opacity">
              Create Account →
            </a>
          </div>
        </div>

        {/* Cipher strip */}
        <div
          className="flex flex-wrap items-center justify-center gap-6 mt-8 text-xs"
          style={{ fontFamily: mono, color: "var(--muted)" }}
        >
          <span>CIPHER: AES-GCM-256</span>
          <span>•</span>
          <span>TOKEN: 0x9AF4B8E1</span>
          <span>•</span>
          <span>VERIFIED AGENT</span>
        </div>
        </div>
      </main>

      <PageFooter />
    </div>
  );
}
