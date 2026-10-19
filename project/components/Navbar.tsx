"use client";
// components/Navbar.tsx
// Desktop nav pill + sign in. Mobile: burger button with animated sheet menu.
// Matches exact design spec from DESIGN.md and preview screenshots.

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "./Logo";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Product", href: "/product" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact", href: "/contact" },
];

export function Navbar({ activePage = "Home" }: { activePage?: string }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  // Close on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) closeMenu();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen, closeMenu]);

  // Close on resize above 720px
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 720) closeMenu();
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [closeMenu]);

  return (
    <>
      {/* Header bar */}
      <motion.header
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 flex-shrink-0 flex items-center justify-between pt-[clamp(16px,2.4vh,28px)] w-full max-w-[1440px] mx-auto"
      >
        {/* Logo button */}
        <a
          href="/"
          aria-label="Home"
          className="flex-shrink-0 rounded-full bg-white flex items-center justify-center transition-transform duration-200 hover:scale-[1.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          style={{
            width: "clamp(40px, 4.4vw, 46px)",
            height: "clamp(40px, 4.4vw, 46px)",
            boxShadow: "var(--nav-shadow)",
          }}
        >
          <Logo size="72%" />
        </a>

        {/* Desktop nav pill */}
        <nav
          aria-label="Main navigation"
          className="hidden sm:flex items-center gap-1 rounded-full bg-white px-2 py-1 flex-1 max-w-[430px]"
          style={{
            height: "clamp(44px, 5.2vw, 48px)",
            boxShadow: "var(--nav-shadow)",
          }}
        >
          {NAV_LINKS.map((link) => {
            const isActive = link.label === activePage;
            return (
              <a
                key={link.label}
                href={link.href}
                className={`relative flex-1 text-center rounded-full px-3 py-2 transition-opacity duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-black ${
                  isActive ? "opacity-100 nav-link-active" : "opacity-50 hover:opacity-75"
                }`}
                style={{
                  color: "var(--nav-text)",
                  fontSize: "clamp(13px, 1.4vw, 15px)",
                  fontWeight: 500,
                  letterSpacing: "-0.01em",
                }}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-3">
          {/* Desktop sign in */}
          <a
            href="/sign-in"
            className="hidden sm:flex flex-shrink-0 items-center px-5 rounded-full transition-all duration-200 hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            style={{
              height: "clamp(44px, 5.2vw, 48px)",
              background: "var(--pill-dark)",
              color: "var(--sign-in-text)",
              fontSize: "clamp(13px, 1.4vw, 15px)",
              fontWeight: 500,
              boxShadow: "var(--nav-shadow)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--pill-dark-hover)";
              (e.currentTarget as HTMLElement).style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--pill-dark)";
              (e.currentTarget as HTMLElement).style.color = "var(--sign-in-text)";
            }}
          >
            Sign in
          </a>

          {/* Mobile burger — only visible ≤ sm */}
          <button
            className={`sm:hidden flex flex-col items-center justify-center gap-[5px] rounded-full w-12 h-12 flex-shrink-0 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
              menuOpen ? "bg-white burger-open" : "burger-btn"
            }`}
            style={{ background: menuOpen ? "#fff" : "var(--pill-dark)", boxShadow: "var(--nav-shadow)" }}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span className="burger-bar" />
            <span className="burger-bar" />
            <span className="burger-bar" />
          </button>
        </div>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28 }}
            className="fixed inset-0 z-20"
            style={{ background: "rgba(0,0,0,0.62)", backdropFilter: "blur(6px)" }}
            onClick={closeMenu}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* Mobile menu sheet */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-menu"
            key="menu"
            initial={{ opacity: 0, y: -12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.97 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            aria-label="Mobile navigation"
            className="fixed top-[80px] left-1/2 -translate-x-1/2 z-30 w-[90vw] max-w-[360px] rounded-[28px] bg-white p-[22px_18px_20px] flex flex-col gap-2"
            style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.45)" }}
          >
            {NAV_LINKS.map((link, i) => {
              const isActive = link.label === activePage;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  onClick={closeMenu}
                  className={`relative flex items-center justify-center py-3 rounded-2xl text-sm font-medium transition-colors duration-150 ${
                    isActive
                      ? "text-black bg-gray-100"
                      : "text-gray-600 hover:text-black hover:bg-gray-50"
                  }`}
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {link.label}
                  {isActive && (
                    <span
                      className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-[5px]"
                      aria-hidden="true"
                    >
                      {[0, 1, 2].map((d) => (
                        <span key={d} className="w-[3px] h-[3px] rounded-full bg-black" />
                      ))}
                    </span>
                  )}
                </motion.a>
              );
            })}
            <motion.a
              href="/sign-in"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: NAV_LINKS.length * 0.06, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={closeMenu}
              className="mt-1 flex items-center justify-center py-3 rounded-2xl bg-black text-white text-sm font-medium hover:bg-gray-900 transition-colors duration-150"
            >
              Sign in
            </motion.a>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
