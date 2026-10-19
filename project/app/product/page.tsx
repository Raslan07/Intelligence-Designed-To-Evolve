// app/product/page.tsx
// Product page — "Modular Neural Architecture"
// Features: 6-card grid, YAML terminal panel, CTA row

import { InnerNavbar } from "@/components/InnerNavbar";
import { PageBadge } from "@/components/PageBadge";
import { PageFooter } from "@/components/PageFooter";

const FEATURES = [
  {
    glyph: "<",
    code: "MOD_01 DISPATCH",
    title: "Dynamic Neural Routing",
    body: "Context-aware model orchestration switching between lightweight distilled models and multi-billion parameter foundation architectures.",
    stat: "LATENCY IMPACT",
    statVal: "-84% RTT",
  },
  {
    glyph: "#",
    code: "MOD_02 MEMORY",
    title: "Distributed Memory Fabric",
    body: "Persistent vector state sync across nodes with zero-drift parity and sub-millisecond neural latency via a unified memory bus.",
    stat: "SYNC DRIFT",
    statVal: "<0.08ms",
  },
  {
    glyph: "*",
    code: "MOD_03 INTEGRITY",
    title: "Autonomous Guardrails",
    body: "Real-time deterministic token evaluation, cryptographic output verification, and zero-leak enterprise safety barriers embedded directly into the matrix.",
    stat: "SECURITY ATTESTATION",
    statVal: "SHA-3 512",
  },
  {
    glyph: "%",
    code: "MOD_04 OPTIMIZE",
    title: "Adaptive Fine-Tuning",
    body: "Continuous federated model optimization on demand without compromising raw privacy or leaving air-gapped zones.",
    stat: "LOSS CONVERGENCE",
    statVal: "CONTINUOUS",
  },
  {
    glyph: "<",
    code: "MOD_05 TELEMETRY",
    title: "Telemetry & Observability",
    body: "High-fidelity trace debugging, token economics tracking, and automated latency anomaly detection streamed directly to telemetry sinks.",
    stat: "SAMPLING FREQUENCY",
    statVal: "100,000 EPS",
  },
  {
    glyph: "#",
    code: "MOD_06 MESH",
    title: "Multi-Cloud Edge Mesh",
    body: "Bare-metal GPU orchestration spanning AWS, GCP, Azure, and private localized clusters with automated topology failover.",
    stat: "NODE REDUNDANCY",
    statVal: "N+3 REGIONS",
  },
];

const YAML = `# Neural Mesh Deployment Configuration
schemaVersion: 2026.4-preview
runtimeEngine: synapse-distributed-v2
nodes:
  - id: edge-cluster-us-east
    accelerators: [ H100-80GB-SXM, L40S ]
    routingStrategy: latency-first
    guardrailPolicy: strict-cryptographic
pipeline:
  embeddingEngine: hybrid-sparse-dense-v4
  fallbackPreparation: ensemble-distillation
  tokenVerification: deterministic-zkp

# Live Heartbeat Payload Injection
>> READY: [2.4M requests routed / 0 packet drops]`;

export default function ProductPage() {
  const mono = "var(--font-mono)";
  const display = "var(--font-display)";

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: "var(--bg)", color: "var(--text)" }}
    >
      <InnerNavbar activePage="Product" />

      <main
        className="flex-1 w-full max-w-[1440px] mx-auto pb-16 pt-6"
        style={{
          paddingLeft: "clamp(14px, 3vw, 32px)",
          paddingRight: "clamp(14px, 3vw, 32px)",
        }}
      >
        {/* Hero */}
        <section className="flex flex-col items-center text-center gap-5 mb-14">
          <PageBadge text="CORE CAPABILITIES" />

          <h1
            className="text-white leading-none"
            style={{
              fontFamily: display,
              fontSize: "clamp(32px, 5.5vw, 72px)",
              letterSpacing: "-0.04em",
              fontWeight: 400,
            }}
          >
            Modular Neural
            <br />
            Architecture
          </h1>

          <h4
            className="max-w-[560px]"
            style={{
              color: "var(--text-secondary)",
              fontSize: "clamp(15px, 1.4vw, 17px)",
              lineHeight: 1.6,
            }}
          >
            Composable model topologies, autonomous runtime workers, and
            sub-100ms inference pipelines built for mission-critical enterprise
            scale.
          </h4>

          {/* Status bar */}
          <div
            className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-xs mt-2"
            style={{ fontFamily: mono, color: "var(--muted)" }}
          >
            <span>
              KERNEL: <span className="text-white">v4.19-RT-SYNAPSE</span>
            </span>
            <span>•</span>
            <span>
              STATUS:{" "}
              <span className="text-white">AUTONOMOUS DISPATCH ACTIVE</span>
            </span>
            <span>•</span>
            <span>
              TOPOLOGY: <span className="text-white">HETEROGENEOUS MESH</span>
            </span>
          </div>
        </section>

        {/* Feature cards grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {FEATURES.map((f) => (
            <div
              key={f.code}
              className="flex min-h-[280px] flex-col gap-3 rounded-3xl p-6 transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: "var(--surface-container)",
                border: "1px solid var(--border-subtle)",
              }}
            >
              <div className="flex-1 flex flex-col gap-3">
                {/* Card header */}
                <div className="flex items-center justify-between">
                  <span
                    className="flex size-9 shrink-0 items-center justify-center rounded-full"
                    style={{
                      background: "var(--pill-dark)",
                      border: "1px solid var(--border-subtle)",
                    }}
                    aria-hidden="true"
                  >
                    <span
                      className="leading-none text-white"
                      style={{ fontFamily: display, fontSize: 16 }}
                    >
                      {f.glyph}
                    </span>
                  </span>
                  <span
                    className="text-xs"
                    style={{ fontFamily: mono, color: "var(--muted)" }}
                  >
                    {f.code}
                  </span>
                </div>

                {/* Title */}
                <h2
                  className="text-white font-bold text-base leading-snug"
                  style={{ fontFamily: mono }}
                >
                  {f.title}
                </h2>

                {/* Body */}
                <h4
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {f.body}
                </h4>
              </div>

              {/* Footer stat */}
              <div
                className="flex items-center justify-between pt-4 mt-auto"
                style={{ borderTop: "1px solid var(--border-subtle)" }}
              >
                <span
                  className="text-xs uppercase tracking-widest"
                  style={{ fontFamily: mono, color: "var(--muted)" }}
                >
                  {f.stat}
                </span>
                <span
                  className="text-sm font-bold text-white"
                  style={{ fontFamily: mono }}
                >
                  {f.statVal}
                </span>
              </div>
            </div>
          ))}
        </section>

        {/* Terminal + metrics panel */}
        <section
          aria-label="Runtime configuration and telemetry"
          className="mb-12 rounded-[22px] p-4 sm:p-5"
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border-subtle)",
          }}
        >
          <div className="mb-4 flex flex-wrap items-center justify-between gap-x-5 gap-y-3">
            <div className="flex min-w-0 items-center gap-3">
              <span
                className="flex shrink-0 items-center gap-1.5"
                aria-hidden="true"
              >
                <span className="size-2 rounded-full bg-white/20" />
                <span className="size-2 rounded-full bg-white/20" />
                <span className="size-2 rounded-full bg-white/20" />
              </span>
              <span
                className="truncate text-xs"
                style={{ fontFamily: mono, color: "var(--text-secondary)" }}
              >
                neural-topology.orchestrator.yaml
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-end gap-3">
              <span
                className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white"
                style={{ fontFamily: mono }}
              >
                • SYNCED // 120ms INFERENCE
              </span>
              <span
                className="text-xs"
                style={{ fontFamily: mono, color: "var(--muted)" }}
              >
                NODE POOLS: 128 / ACTIVE
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.15fr_0.9fr]">
            <div
              className="min-w-0 rounded-[18px] p-4"
              style={{
                background: "var(--surface-container)",
                border: "1px solid var(--border-subtle)",
              }}
            >
              <pre
                className="overflow-x-auto text-xs leading-relaxed sm:text-sm"
                style={{ fontFamily: mono, color: "var(--text-secondary)" }}
              >
                {YAML}
              </pre>
            </div>

            <div className="grid content-start gap-3">
              <article
                className="rounded-[18px] p-4"
                style={{
                  background: "var(--surface-container)",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                <div className="flex items-center justify-between gap-3">
                  <h2
                    className="text-xs font-medium uppercase tracking-widest"
                    style={{ fontFamily: mono, color: "var(--muted)" }}
                  >
                    Latency Envelope
                  </h2>
                  <p
                    className="whitespace-nowrap text-sm font-bold text-white"
                    style={{ fontFamily: mono }}
                  >
                    120ms{" "}
                    <span className="text-xs font-normal text-white/60">
                      P99
                    </span>
                  </p>
                </div>
                <div
                  className="mt-3 h-1 overflow-hidden rounded-full bg-white/10"
                  aria-hidden="true"
                >
                  <div className="h-full w-[92%] rounded-full bg-white" />
                </div>
                <div
                  className="mt-2 flex flex-wrap justify-between gap-x-3 gap-y-1 text-xs uppercase"
                  style={{ fontFamily: mono, color: "var(--muted)" }}
                >
                  <span>MIN: 40ms</span>
                  <span>MEDIAN: 80ms</span>
                  <span>TARGET: 400ms</span>
                </div>
              </article>

              <article
                className="rounded-[18px] p-4"
                style={{
                  background: "var(--surface-container)",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                <div className="flex items-center justify-between gap-3">
                  <h2
                    className="text-xs font-medium uppercase tracking-widest"
                    style={{ fontFamily: mono, color: "var(--muted)" }}
                  >
                    Uptime Reliability
                  </h2>
                  <p
                    className="whitespace-nowrap text-sm font-bold text-white"
                    style={{ fontFamily: mono }}
                  >
                    99.999%
                  </p>
                </div>
                <div
                  className="mt-3 h-1 overflow-hidden rounded-full bg-white/10"
                  aria-hidden="true"
                >
                  <div className="h-full w-[98%] rounded-full bg-white" />
                </div>
                <div
                  className="mt-2 flex flex-wrap justify-between gap-x-3 gap-y-1 text-xs uppercase"
                  style={{ fontFamily: mono, color: "var(--muted)" }}
                >
                  <span>QUORUM CONSENSUS: OPTIMAL</span>
                  <span>ZERO DRIFT</span>
                </div>
              </article>

              <article
                className="rounded-[18px] p-4"
                style={{
                  background: "var(--surface-container)",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                <div className="flex items-center justify-between gap-3">
                  <h2
                    className="text-xs font-medium uppercase tracking-widest"
                    style={{ fontFamily: mono, color: "var(--muted)" }}
                  >
                    System Throughput Density
                  </h2>
                  <p
                    className="whitespace-nowrap text-sm font-bold text-white"
                    style={{ fontFamily: mono }}
                  >
                    4.8k T/s
                  </p>
                </div>
                <svg
                  className="mt-3 block h-11 w-full text-white"
                  viewBox="0 0 520 70"
                  preserveAspectRatio="none"
                  role="img"
                  aria-label="Steady recent system throughput trend"
                >
                  <path
                    d="M4 42 L40 35 L76 48 L112 24 L148 34 L184 14 L220 25 L256 9 L292 19 L328 12 L364 22 L400 8 L436 17 L472 3 L516 13"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p
                  className="mt-2 text-xs uppercase"
                  style={{ fontFamily: mono, color: "var(--muted)" }}
                >
                  Stream telemetry synced with global distributed runtime
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* CTA row */}
        <div className="flex flex-wrap gap-4">
          <a
            href="/sign-up"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.02]"
            style={{ boxShadow: "var(--glow-white)" }}
          >
            Deploy Cluster
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: "var(--pill-dark)",
              border: "1px solid var(--border-medium)",
            }}
          >
            Explore Documentation →
          </a>
        </div>
      </main>

      <PageFooter />
    </div>
  );
}
