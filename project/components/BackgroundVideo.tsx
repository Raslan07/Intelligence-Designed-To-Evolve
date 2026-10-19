// components/BackgroundVideo.tsx
// Full-bleed looping video layer — sits at z-0 behind all page content.
// Video is self-hosted in public/videos/hero-loop.mp4 (re-hosted from CloudFront).

export function BackgroundVideo() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      <video
        className="absolute inset-0 h-full w-full object-cover pointer-events-none"
        style={{ zIndex: 0 }}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      >
        <source src="/videos/hero-loop.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
