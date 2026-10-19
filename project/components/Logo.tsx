// components/Logo.tsx
// Inline SVG brand mark — circular face mark.
// Used inside the circular white logo button in the navbar.

interface LogoProps {
  size?: number | string;
}

export function Logo({ size = "72%" }: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width={size}
      height={size}
      fill="none"
      aria-hidden="true"
    >
      <circle cx="50" cy="50" r="48" fill="#ffffff" />
      <circle cx="50" cy="50" r="38" fill="#111113" />
      <ellipse cx="40" cy="42" rx="4" ry="5.5" fill="#ffffff" />
      <ellipse cx="60" cy="42" rx="4" ry="5.5" fill="#ffffff" />
      <path
        d="M37 60 C 42 70, 58 70, 63 60"
        stroke="#ffffff"
        strokeWidth="4.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
