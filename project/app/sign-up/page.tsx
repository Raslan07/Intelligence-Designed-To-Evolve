"use client";
// app/sign-up/page.tsx
// Sign Up page — "Access The Mesh"
// Centered auth card with GitHub/Google OAuth + email/password form

import { InnerNavbar } from "@/components/InnerNavbar";
import { PageFooter } from "@/components/PageFooter";
import { PageBadge } from "@/components/PageBadge";
import { FaGithub, FaGoogle } from "react-icons/fa6";
import { useState } from "react";

function EntropyBar({ value }: { value: string }) {
  const entropy = Math.min(Math.floor((value.length / 20) * 100), 100);
  const color =
    entropy < 30 ? "#ef4444" : entropy < 60 ? "#f59e0b" : entropy < 80 ? "#3b82f6" : "#22c55e";
  const label =
    entropy < 30 ? "WEAK" : entropy < 60 ? "FAIR" : entropy < 80 ? "GOOD" : "STRONG";

  return (
    <div className="flex items-center gap-2 text-xs" style={{ fontFamily: "var(--font-mono)" }}>
      <div className="flex-1 h-0.5 rounded-full" style={{ background: "var(--border-subtle)" }}>
        <div
          className="h-0.5 rounded-full transition-all duration-300"
          style={{ width: `${entropy}%`, background: color }}
        />
      </div>
      <span style={{ color }}>ENTROPY: {label}</span>
    </div>
  );
}

export default function SignUpPage() {
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [agreed, setAgreed] = useState(false);
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
          <PageBadge text="DEVELOPER PREVIEW v4.18.0" />
          <h1
            className="text-white leading-none"
            style={{
              fontFamily: display,
              fontSize: "clamp(30px, 5vw, 60px)",
              letterSpacing: "-0.04em",
              fontWeight: 400,
            }}
          >
            ACCESS THE MESH
          </h1>
          <p
            className="max-w-[400px]"
            style={{ color: "var(--text-secondary)", fontSize: 15, lineHeight: 1.6 }}
          >
            Provision your dedicated API keys, spin up autonomous worker threads,
            and deploy within minutes.
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
            <div className="flex items-center gap-2">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="4 17 10 11 4 5" />
                <line x1="12" y1="19" x2="20" y2="19" />
              </svg>
              INITIALIZE_CLUSTER_ID
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              SECURE CHANNEL 256
            </div>
          </div>

          {/* OAuth buttons */}
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
            <span
              className="text-xs"
              style={{ fontFamily: mono, color: "var(--muted)" }}
            >
              OR VIA ENTERPRISE CREDENTIALS
            </span>
            <div className="flex-1 h-px" style={{ background: "var(--border-subtle)" }} />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <label
                className="text-xs uppercase tracking-widest"
                style={{ fontFamily: mono, color: "var(--muted)" }}
              >
                Work Email Address
              </label>
              <span className="text-xs" style={{ fontFamily: mono, color: "var(--muted)" }}>
                PRIMARY KEY
              </span>
            </div>
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
            </div>
            <div className="relative">
              <input
                type={showPass ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••••••••"
                className="w-full rounded-full px-6 py-4 pr-10 text-sm text-white outline-none transition-all duration-200"
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
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs transition-opacity hover:opacity-70"
                style={{ color: "var(--muted)", fontFamily: mono }}
                aria-label={showPass ? "Hide password" : "Show password"}
              >
                {showPass ? "HIDE" : "SHOW"}
              </button>
            </div>
            <EntropyBar value={password} />
          </div>

          {/* Subdomain */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <label
                className="text-xs uppercase tracking-widest"
                style={{ fontFamily: mono, color: "var(--muted)" }}
              >
                Cluster Subdomain Handle
              </label>
              <span className="text-xs" style={{ fontFamily: mono, color: "var(--muted)" }}>
                DNS POOL
              </span>
            </div>
            <div
              className="flex items-center rounded-full overflow-hidden"
              style={{
                background: "#161617",
                border: "1px solid var(--border-subtle)",
              }}
            >
              <input
                type="text"
                placeholder="nexus-node-09"
                className="flex-1 px-6 py-4 text-sm text-white outline-none bg-transparent"
                style={{ fontFamily: mono }}
              />
              <span
                className="px-3 py-3 text-xs border-l"
                style={{
                  fontFamily: mono,
                  color: "var(--muted)",
                  borderColor: "var(--border-subtle)",
                  background: "var(--surface)",
                  whiteSpace: "nowrap",
                }}
              >
                .mesh.io
              </span>
            </div>
          </div>

          {/* Terms toggle */}
          <label className="flex items-start gap-3 cursor-pointer">
            <div className="relative mt-0.5 flex-shrink-0">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="sr-only"
              />
              <div
                className="w-9 h-5 rounded-full transition-colors duration-200"
                style={{ background: agreed ? "#ffffff" : "var(--pill-dark)", border: "1px solid var(--border-medium)" }}
              >
                <div
                  className="w-3.5 h-3.5 rounded-full mt-0.5 transition-transform duration-200"
                  style={{
                    background: agreed ? "#000" : "#555",
                    transform: agreed ? "translateX(18px)" : "translateX(2px)",
                  }}
                />
              </div>
            </div>
            <span className="text-xs leading-relaxed" style={{ color: "var(--muted)", fontFamily: mono }}>
              I agree to the{" "}
              <a href="#" className="text-white underline hover:no-underline">
                Enterprise Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-white underline hover:no-underline">
                Data Processing Agreement
              </a>
            </span>
          </label>

          {/* Submit */}
          <button
            type="submit"
            disabled={!agreed}
            className="w-full py-3.5 rounded-full bg-white text-black text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            style={{ boxShadow: agreed ? "var(--glow-white)" : "none" }}
          >
            Create Cluster Account →
          </button>

          {/* Sign in link */}
          <div
            className="text-center text-xs"
            style={{ fontFamily: mono, color: "var(--muted)" }}
          >
            Already running active workers?{" "}
            <a href="/sign-in" className="text-white hover:opacity-70 transition-opacity">
              Sign In →
            </a>
          </div>
        </div>

        {/* Trust strip */}
        <div
          className="flex flex-wrap items-center justify-center gap-6 mt-8 text-xs"
          style={{ fontFamily: mono, color: "var(--muted)" }}
        >
          {[
            "• Instant $500 Inference Credits",
            "• No Hardware Lock-in",
            "• SOC2 Type II Certified",
          ].map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        </div>
      </main>

      <PageFooter />
    </div>
  );
}
