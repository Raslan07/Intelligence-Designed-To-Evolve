// lib/gsap.ts — Client-only GSAP + ScrollTrigger registration
// Import from this module instead of gsap directly to ensure the plugin
// is registered before any component uses ScrollTrigger.

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };
