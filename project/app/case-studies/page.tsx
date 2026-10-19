// app/case-studies/page.tsx
// Case Studies page — "Proven In Production"
// Features: stat strip, 3 case study cards, testimonial, CTA

import { InnerNavbar } from "@/components/InnerNavbar";
import { PageBadge } from "@/components/PageBadge";
import { PageFooter } from "@/components/PageFooter";

const STATS = [
  { label: "ACTIVE CLUSTER PODS", value: "128,400+" },
  { label: "INFERENCE P99", value: "11.8ms" },
  { label: "TOTAL VERIFIED TOKENS", value: "4.82 PB" },
  { label: "TELEMETRY UPTIME", value: "99.999%" },
];

const CASE_STUDIES = [
  {
    code: "CS_01 // SECURE_RUNTIME",
    company: "Global FinTech Consortium",
    headline: "Zero-Trust Inference at 340% Higher Throughput",
    metric1: "+340% Throughput",
    metric2: "14ms Median Latency",
    body: "A Tier-1 financial services consortium deployed Evolve's heterogeneous mesh across 14 data centers, eliminating tail latency spikes while maintaining strict regulatory audit trails via SHA-3 512 cryptographic signing.",
    tags: ["Finance", "Security", "High-Frequency"],
  },
  {
    code: "CS_02 // SYSTEM_FAILOVER",
    company: "HyperScale Cloud Diagnostics",
    headline: "99.999% SLA with Autonomous Failover",
    metric1: "99.999% SLA",
    metric2: "12M Events/sec",
    body: "A global cloud diagnostics platform leveraged Evolve's autonomous dispatch to achieve N+3 redundancy across 18 regions, processing 12 million telemetry events per second without operator intervention.",
    tags: ["Infrastructure", "Reliability", "Scale"],
  },
  {
    code: "CS_03 // NEURAL_SYNTHESIS",
    company: "Global BioInformatics Research",
    headline: "18x Iteration Speed on Protein Synthesis Models",
    metric1: "18x Iteration Speed",
    metric2: "2.4M Context Windows",
    body: "A leading bioinformatics research institute reduced protein structure prediction iteration time by 18x using Evolve's 2.4M token context window and parallel model topology routing.",
    tags: ["Research", "BioTech", "Long-Context"],
  },
];

export default function CaseStudiesPage() {
  const mono = "var(--font-mono)";
  const display = "var(--font-display)";

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: "var(--bg)", color: "var(--text)" }}
    >
      <InnerNavbar activePage="Case Studies" />

      <main
        className="flex-1 w-full max-w-[1440px] mx-auto pb-16 pt-6"
        style={{ paddingLeft: "clamp(14px, 3vw, 32px)", paddingRight: "clamp(14px, 3vw, 32px)" }}
      >

        {/* Hero */}
        <section className="flex flex-col items-center text-center gap-5 mb-14">
          <PageBadge text="ENTERPRISE VERIFICATION" />

          <h1
            className="text-white leading-none"
            style={{
              fontFamily: display,
              fontSize: "clamp(30px, 5.2vw, 68px)",
              letterSpacing: "-0.04em",
              fontWeight: 400,
            }}
          >
            PROVEN IN<br />PRODUCTION
            <span
              className="text-xs align-top ml-2 mt-4 inline-block"
              style={{ fontFamily: mono, color: "var(--muted)", fontSize: "clamp(10px, 1vw, 13px)" }}
            >
              [91]
            </span>
          </h1>

          <p
            className="max-w-[560px]"
            style={{ color: "var(--text-secondary)", fontSize: "clamp(15px, 1.4vw, 17px)", lineHeight: 1.6 }}
          >
            How Fortune 500 enterprises, hyperscalers, and autonomous engineering
            teams scale mission-critical AI systems.
          </p>
        </section>

        {/* Stat strip */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-px mb-12 rounded-[20px] overflow-hidden"
          style={{ background: "var(--border-subtle)" }}
        >
          {STATS.map((s) => (
            <div
              key={s.label}
              className="flex flex-col gap-1 p-5"
              style={{ background: "var(--surface)" }}
            >
              <span
                className="text-xs uppercase tracking-widest"
                style={{ fontFamily: mono, color: "var(--muted)" }}
              >
                {s.label}
              </span>
              <span
                className="text-2xl font-bold text-white"
                style={{ fontFamily: mono }}
              >
                {s.value}
              </span>
            </div>
          ))}
        </div>

        {/* Case study cards */}
        <section className="flex flex-col gap-5 mb-12">
          {CASE_STUDIES.map((cs) => (
            <article
              key={cs.code}
              className="rounded-[22px] p-7 transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: "var(--surface-container)",
                border: "1px solid var(--border-subtle)",
              }}
            >
              <div className="flex flex-col md:flex-row md:items-stretch gap-6">
                <div className="flex-1 flex flex-col gap-3 py-1">
                  {/* Code badge */}
                  <span
                    className="text-xs"
                    style={{ fontFamily: mono, color: "var(--muted)" }}
                  >
                    {cs.code}
                  </span>

                  {/* Company */}
                  <span
                    className="text-xs font-medium"
                    style={{ fontFamily: mono, color: "var(--text-secondary)" }}
                  >
                    {cs.company}
                  </span>

                  {/* Headline */}
                  <h2
                    className="text-white font-bold leading-snug"
                    style={{ fontFamily: mono, fontSize: "clamp(15px, 1.5vw, 19px)" }}
                  >
                    {cs.headline}
                  </h2>

                  {/* Metrics */}
                  <div className="flex flex-wrap gap-4 mt-1">
                    {[cs.metric1, cs.metric2].map((m) => (
                      <span
                        key={m}
                        className="text-xs px-3 py-1.5 rounded-full font-medium"
                        style={{
                          background: "var(--pill-dark)",
                          color: "var(--text-secondary)",
                          fontFamily: mono,
                          border: "1px solid var(--border-medium)",
                        }}
                      >
                        {m}
                      </span>
                    ))}
                  </div>

                  {/* Body */}
                  <p
                    className="text-sm leading-relaxed mt-2"
                    style={{ color: "var(--muted)" }}
                  >
                    {cs.body}
                  </p>

                  {/* Tags + Link row */}
                  <div className="flex flex-wrap items-center gap-3 pt-2 mt-auto">
                    {cs.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs"
                        style={{ fontFamily: mono, color: "var(--muted)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right side image / graphic placeholder */}
                <div 
                  className="w-full md:w-1/2 flex-shrink-0 rounded-[16px] overflow-hidden flex flex-col justify-end relative min-h-[300px] md:min-h-[420px]"
                  style={{ background: "#111113", border: "1px solid var(--border-subtle)" }}
                >
                   {/* In a real scenario, an <img> would go here. For now we use the CSS layout to fix ratios */}
                   {cs.code.includes("01") && (
                     <img src="/server_rack_mesh_1790380399631.jpg" alt="Mesh Interception" className="absolute inset-0 w-full h-full object-cover opacity-60" />
                   )}
                   {cs.code.includes("02") && (
                     <img src="/network_mesh_nodes_1790380410379.jpg" alt="Nodes Active" className="absolute inset-0 w-full h-full object-cover opacity-60" />
                   )}
                   {cs.code.includes("03") && (
                     <img src="/dna_synthesis_glow_1790380421310.jpg" alt="Synthesized Cycle" className="absolute inset-0 w-full h-full object-cover opacity-60" />
                   )}
                   <div className="relative z-10 flex justify-between items-end p-4 bg-gradient-to-t from-black/80 to-transparent">
                      <span className="text-xs font-bold uppercase" style={{ fontFamily: mono, color: "var(--text)" }}>
                        {cs.code.includes("01") ? "MESH_INTERCEPTION_99.8%" : cs.code.includes("02") ? "NODES_ACTIVE_45,000" : "SYNTHESIZED_72H_CYCLE"}
                      </span>
                      <a
                        href="#"
                        className="text-xs text-white hover:opacity-70 transition-opacity whitespace-nowrap bg-black/50 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-md"
                        style={{ fontFamily: mono }}
                      >
                        Read Full Report →
                      </a>
                   </div>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* Testimonial */}
        <section
          className="rounded-[22px] p-8 mb-10"
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border-subtle)",
          }}
        >
          <div
            className="text-xs uppercase tracking-widest mb-6"
            style={{ fontFamily: mono, color: "var(--muted)" }}
          >
            BENCHMARK EVALUATION // PRODUCTION AUDIT
          </div>
          <blockquote
            className="text-white mb-6 leading-relaxed"
            style={{
              fontFamily: display,
              fontSize: "clamp(18px, 2.2vw, 28px)",
              letterSpacing: "-0.02em",
            }}
          >
            "Deploying Evolve eliminated our cluster tail latency spikes overnight.
            It is the only computational layer we trust with high-load
            mission-critical pipelines."
          </blockquote>
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
              style={{ background: "var(--pill-dark)", color: "var(--text-secondary)", fontFamily: mono }}
            >
              DR
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-white">David Rostova</span>
              <span
                className="text-xs"
                style={{ color: "var(--muted)", fontFamily: mono }}
              >
                Lead Infrastructure Architect
              </span>
            </div>
          </div>
        </section>

        {/* Validated by */}
        <div
          className="flex flex-wrap items-center gap-6 mb-10 text-sm font-medium"
          style={{ color: "var(--muted)", fontFamily: mono }}
        >
          <span className="text-xs uppercase tracking-widest">VALIDATED ACROSS HYPERSCALERS:</span>
          {["Microsoft", "Amazon", "Google Cloud"].map((b) => (
            <span key={b} className="text-white">{b}</span>
          ))}
        </div>

        {/* CTA */}
        <a
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.02]"
          style={{ boxShadow: "var(--glow-white)" }}
        >
          Schedule Architecture Audit →
        </a>
      </main>

      <PageFooter />
    </div>
  );
}
