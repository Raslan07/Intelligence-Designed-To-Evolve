"use client";
// components/CTAButton.tsx
// "Get Started" white pill button with glow effect.
// Must be a Client Component because it uses onMouseEnter/Leave handlers.

interface CTAButtonProps {
  href?: string;
  label?: string;
}

export function CTAButton({ href = "/sign-up", label = "Get Started" }: CTAButtonProps) {
  return (
    <a
      href={href}
      className="inline-flex flex-shrink-0 items-center rounded-full bg-white text-black font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
      style={{
        padding: "clamp(10px,1.5vh,14px) clamp(24px,3vw,32px)",
        fontSize: "clamp(13px, 1.4vw, 15px)",
        fontFamily: "var(--font-mono)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "var(--glow-white-hover)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "var(--glow-white)";
      }}
    >
      {label}
    </a>
  );
}
