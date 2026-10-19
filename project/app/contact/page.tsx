"use client";
// app/contact/page.tsx
// Contact page — "Initiate Contact"
// 2-column layout: left info panels | right form

import { InnerNavbar } from "@/components/InnerNavbar";
import { PageBadge } from "@/components/PageBadge";
import { PageFooter } from "@/components/PageFooter";
import { useState } from "react";

const GPU_OPTIONS = [
  "< 500 H100 hrs/month",
  "500 – 5,000 H100 hrs/month",
  "5,000 – 50,000 H100 hrs/month",
  "> 50,000 H100 hrs/month",
];

const TOPOLOGY_OPTIONS = [
  "Single-Region Deployment",
  "Multi-Region Active-Active",
  "Multi-Cloud Mesh Architecture",
  "Hybrid On-Premise + Cloud",
  "Edge + Core Distributed",
];

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const mono = "var(--font-mono)";

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
        <span
          className="text-4xl"
          style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
        >
          *
        </span>
        <p className="text-white text-lg font-semibold">Transmission received.</p>
        <p className="text-sm" style={{ color: "var(--muted)", fontFamily: mono }}>
          Our engineering team will respond within 2 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label
            className="text-xs uppercase tracking-widest"
            style={{ fontFamily: mono, color: "var(--muted)" }}
          >
            Full Name
          </label>
          <input
            type="text"
            placeholder="Elena Rostova"
            required
            className="w-full rounded-xl px-4 py-3 text-sm text-white outline-none transition-all duration-200"
            style={{
              background: "#161617",
              border: "1px solid var(--border-subtle)",
              fontFamily: mono,
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)";
              e.currentTarget.style.boxShadow = "0 0 12px rgba(255,255,255,0.1)";
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = "var(--border-subtle)";
              e.currentTarget.style.boxShadow = "none";
            }}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label
            className="text-xs uppercase tracking-widest"
            style={{ fontFamily: mono, color: "var(--muted)" }}
          >
            Work Email
          </label>
          <input
            type="email"
            placeholder="elena@enterprise.io"
            required
            className="w-full rounded-xl px-4 py-3 text-sm text-white outline-none transition-all duration-200"
            style={{
              background: "#161617",
              border: "1px solid var(--border-subtle)",
              fontFamily: mono,
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)";
              e.currentTarget.style.boxShadow = "0 0 12px rgba(255,255,255,0.1)";
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = "var(--border-subtle)";
              e.currentTarget.style.boxShadow = "none";
            }}
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          className="text-xs uppercase tracking-widest"
          style={{ fontFamily: mono, color: "var(--muted)" }}
        >
          Organization / Enterprise
        </label>
        <input
          type="text"
          placeholder="Synthetix Labs"
          className="w-full rounded-xl px-4 py-3 text-sm text-white outline-none transition-all duration-200"
          style={{
            background: "#161617",
            border: "1px solid var(--border-subtle)",
            fontFamily: mono,
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)";
            e.currentTarget.style.boxShadow = "0 0 12px rgba(255,255,255,0.1)";
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = "var(--border-subtle)";
            e.currentTarget.style.boxShadow = "none";
          }}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label
            className="text-xs uppercase tracking-widest"
            style={{ fontFamily: mono, color: "var(--muted)" }}
          >
            Est. Monthly GPU Hours
          </label>
          <select
            className="w-full rounded-xl px-4 py-3 text-sm text-white outline-none transition-all duration-200 appearance-none cursor-pointer"
            style={{
              background: "#161617",
              border: "1px solid var(--border-subtle)",
              fontFamily: mono,
            }}
          >
            {GPU_OPTIONS.map((o) => (
              <option key={o} value={o} style={{ background: "#1c1c1f" }}>
                {o}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-1.5">
          <label
            className="text-xs uppercase tracking-widest"
            style={{ fontFamily: mono, color: "var(--muted)" }}
          >
            Deployment Topology
          </label>
          <select
            className="w-full rounded-xl px-4 py-3 text-sm text-white outline-none transition-all duration-200 appearance-none cursor-pointer"
            style={{
              background: "#161617",
              border: "1px solid var(--border-subtle)",
              fontFamily: mono,
            }}
          >
            {TOPOLOGY_OPTIONS.map((o) => (
              <option key={o} value={o} style={{ background: "#1c1c1f" }}>
                {o}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          className="text-xs uppercase tracking-widest"
          style={{ fontFamily: mono, color: "var(--muted)" }}
        >
          Project Architecture & Requirements
        </label>
        <textarea
          placeholder="Detail custom latency requirements, topology constraints, compliance needs..."
          rows={5}
          className="w-full rounded-xl px-4 py-3 text-sm text-white outline-none transition-all duration-200 resize-none"
          style={{
            background: "#161617",
            border: "1px solid var(--border-subtle)",
            fontFamily: mono,
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)";
            e.currentTarget.style.boxShadow = "0 0 12px rgba(255,255,255,0.1)";
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = "var(--border-subtle)";
            e.currentTarget.style.boxShadow = "none";
          }}
        />
      </div>

      {/* Security note */}
      <div
        className="flex items-center gap-2 text-xs"
        style={{ fontFamily: mono, color: "var(--muted)" }}
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
        Zero-retention ephemeral routing — AES-GCM-256 encrypted
      </div>

      <button
        type="submit"
        className="mt-2 w-full py-3.5 rounded-xl bg-white text-black text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.01]"
        style={{ boxShadow: "var(--glow-white)" }}
      >
        Transmit Request →
      </button>
    </form>
  );
}

export default function ContactPage() {
  const mono = "var(--font-mono)";
  const display = "var(--font-display)";

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: "var(--bg)", color: "var(--text)" }}
    >
      <InnerNavbar activePage="Contact" />

      <main
        className="flex-1 w-full max-w-[1440px] mx-auto pb-16 pt-6"
        style={{ paddingLeft: "clamp(14px, 3vw, 32px)", paddingRight: "clamp(14px, 3vw, 32px)" }}
      >

        {/* Hero */}
        <section className="flex flex-col gap-4 mb-12">
          <PageBadge text="DIRECT COMM LINK" />
          <h1
            className="text-white leading-none"
            style={{
              fontFamily: display,
              fontSize: "clamp(30px, 5vw, 66px)",
              letterSpacing: "-0.04em",
              fontWeight: 400,
            }}
          >
            INITIATE CONTACT
          </h1>
          <p
            className="max-w-[480px]"
            style={{ color: "var(--text-secondary)", fontSize: "clamp(15px, 1.4vw, 17px)", lineHeight: 1.6 }}
          >
            Engage our systems engineering team for architecture consultation,
            cluster provisioning, or enterprise SLA discussions.
          </p>
        </section>

        {/* 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* LEFT: Status + contact info */}
          <div className="flex flex-col gap-4">

            {/* Cluster status card */}
            <div
              className="rounded-[20px] p-5"
              style={{ background: "var(--surface-container)", border: "1px solid var(--border-subtle)" }}
            >
              <div
                className="text-xs uppercase tracking-widest mb-4 flex items-center gap-2"
                style={{ fontFamily: mono, color: "var(--muted)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                CLUSTER STATUS
              </div>
              {[
                { label: "Telemetry Ping", value: "12.4ms" },
                { label: "Global Compute", value: "99.98% UP" },
                { label: "Nodes Active", value: "128 / 128" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="flex items-center justify-between py-2.5"
                  style={{ borderBottom: "1px solid var(--border-subtle)" }}
                >
                  <span className="text-sm" style={{ fontFamily: mono, color: "var(--muted)" }}>
                    {s.label}
                  </span>
                  <span className="text-sm text-white" style={{ fontFamily: mono }}>
                    {s.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Enterprise inquiries */}
            <div
              className="rounded-[20px] p-5"
              style={{ background: "var(--surface-container)", border: "1px solid var(--border-subtle)" }}
            >
              <div
                className="text-xs uppercase tracking-widest mb-4"
                style={{ fontFamily: mono, color: "var(--muted)" }}
              >
                ENTERPRISE INQUIRIES
              </div>
              {["engineering@evolve.ai", "infra-mesh@evolve.ai"].map((email) => (
                <a
                  key={email}
                  href={`mailto:${email}`}
                  className="block text-sm text-white hover:opacity-70 transition-opacity mb-2"
                  style={{ fontFamily: mono }}
                >
                  {email}
                </a>
              ))}
              <div
                className="mt-3 text-xs"
                style={{ fontFamily: mono, color: "var(--muted)" }}
              >
                San Francisco · Zurich · Tokyo
              </div>
            </div>

            {/* Compliance */}
            <div
              className="rounded-[20px] p-5"
              style={{ background: "var(--surface-container)", border: "1px solid var(--border-subtle)" }}
            >
              <div
                className="text-xs uppercase tracking-widest mb-4"
                style={{ fontFamily: mono, color: "var(--muted)" }}
              >
                COMPLIANCE CERTIFICATIONS
              </div>
              <div className="flex flex-wrap gap-2 mb-3">
                {["SOC2 Type II", "ISO 27001", "HIPAA"].map((cert) => (
                  <span
                    key={cert}
                    className="text-xs px-3 py-1.5 rounded-full text-white"
                    style={{
                      fontFamily: mono,
                      background: "var(--pill-dark)",
                      border: "1px solid var(--border-medium)",
                    }}
                  >
                    {cert}
                  </span>
                ))}
              </div>
              <div className="text-xs" style={{ fontFamily: mono, color: "var(--muted)" }}>
                &lt; 2-hour enterprise response SLA
              </div>
            </div>

            {/* Map image */}
            <div 
              className="rounded-[20px] overflow-hidden relative min-h-[160px] flex items-end p-4"
              style={{ border: "1px solid var(--border-subtle)", marginTop: "1rem" }}
            >
              <img 
                src="/sf_map_dark_1790380799115.jpg" 
                alt="San Francisco Core Hub Map" 
                className="absolute inset-0 w-full h-full object-cover opacity-80"
              />
              <div className="relative z-10 text-xs font-bold uppercase tracking-widest bg-black/60 px-3 py-1.5 rounded-md backdrop-blur-sm" style={{ fontFamily: mono }}>
                CORE HUB: SFO-01
              </div>
            </div>
          </div>

          {/* RIGHT: Form */}
          <div
            className="rounded-[22px] p-7"
            style={{ background: "var(--surface-container)", border: "1px solid var(--border-subtle)" }}
          >
            <div
              className="flex items-center justify-between mb-6 text-xs"
              style={{ fontFamily: mono, color: "var(--muted)" }}
            >
              <span>TRANSMISSION PAYLOAD</span>
              <span>SEC-V4.2</span>
            </div>
            <ContactForm />
          </div>
        </div>
      </main>

      <PageFooter />
    </div>
  );
}
