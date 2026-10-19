// components/PageFooter.tsx
// Inner page status bar footer.
// Shows system status + footer links.

export function PageFooter() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="w-full flex items-center justify-between px-6 py-4"
      style={{
        borderTop: "1px solid var(--border-subtle)",
        fontFamily: "var(--font-mono)",
        fontSize: "11px",
        color: "var(--muted)",
      }}
    >
      <div className="flex items-center gap-2">
        <span
          className="inline-block w-1.5 h-1.5 rounded-full bg-white animate-pulse"
          aria-hidden="true"
        />
        <span>Systems Operational — EvoRTM 1.0</span>
      </div>
      <div className="hidden md:flex items-center gap-6">
        <a href="#" className="hover:text-white transition-colors">Platform</a>
        <a href="#" className="hover:text-white transition-colors">Telemetry</a>
        <a href="#" className="hover:text-white transition-colors">Diagnostics</a>
        <span>© {year} Evolve Intelligence</span>
      </div>
    </footer>
  );
}
