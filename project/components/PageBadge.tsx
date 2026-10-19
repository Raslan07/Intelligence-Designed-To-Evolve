// components/PageBadge.tsx
// Telemetry-style section badge: • [ CORE CAPABILITIES ]
// Used at the top of each inner page hero section.

interface PageBadgeProps {
  text: string;
}

export function PageBadge({ text }: PageBadgeProps) {
  return (
    <div className="inline-flex items-center gap-2">
      <span
        className="inline-block w-2 h-2 rounded-full bg-white animate-pulse"
        aria-hidden="true"
      />
      <span
        className="text-xs tracking-widest uppercase"
        style={{
          color: "var(--muted)",
          fontFamily: "var(--font-mono)",
          letterSpacing: "0.18em",
        }}
      >
        [ {text} ]
      </span>
    </div>
  );
}
