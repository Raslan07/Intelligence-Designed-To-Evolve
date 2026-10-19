// components/InnerNavbar.tsx
// Shared navbar for inner pages — same as home Navbar but adds "Sign up" pill.
"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "./Logo";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Product", href: "/product" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact", href: "/contact" },
];

export function InnerNavbar({ activePage }: { activePage: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    const onResize = () => {
      if (window.innerWidth > 720) closeMenu();
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [closeMenu]);

  return (
    <>
      <header
        className="flex-shrink-0 flex items-center justify-between py-5 w-full max-w-[1440px] mx-auto"
        style={{
          paddingLeft: "clamp(14px, 3vw, 32px)",
          paddingRight: "clamp(14px, 3vw, 32px)",
        }}
      >
        {/* Logo */}
        <a
          href="/"
          aria-label="Home"
          className="flex-shrink-0 rounded-full bg-white flex items-center justify-center transition-transform duration-200 hover:scale-[1.04]"
          style={{ width: 44, height: 44, boxShadow: "var(--nav-shadow)" }}
        >
          <Logo size="72%" />
        </a>

        {/* Desktop nav pill */}
        <nav
          className="hidden md:flex items-center gap-1 rounded-full bg-white px-2 py-1 max-w-fit"
          style={{ height: 44, boxShadow: "var(--nav-shadow)" }}
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((link) => {
            const isActive = link.label === activePage;
            return (
              <a
                key={link.label}
                href={link.href}
                className={`relative flex-shrink-0 whitespace-nowrap text-center rounded-full px-4 py-2 text-sm font-medium transition-opacity duration-150 ${
                  isActive
                    ? "opacity-100 nav-link-active"
                    : "opacity-50 hover:opacity-75"
                }`}
                style={{ color: "var(--nav-text)" }}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-3">
          <div
            className="hidden sm:flex items-center gap-0.5 rounded-full p-1"
            style={{
              background: "var(--pill-dark)",
              boxShadow: "var(--nav-shadow)",
            }}
          >
            <a
              href="/sign-in"
              className="flex h-8 flex-shrink-0 items-center justify-center whitespace-nowrap rounded-full px-3 text-xs font-medium text-[var(--sign-in-text)] transition-all duration-200 hover:bg-[var(--pill-dark-hover)] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Sign in
            </a>
            <a
              href="/sign-up"
              className="flex h-8 flex-shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-white px-3 text-xs font-semibold text-black shadow-glow transition-all duration-200 hover:scale-[1.02] hover:shadow-[var(--glow-white-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Sign up
            </a>
          </div>

          {/* Mobile burger */}
          <button
            className={`sm:hidden flex flex-col items-center justify-center gap-[5px] rounded-full w-11 h-11 flex-shrink-0 transition-all duration-200 ${
              menuOpen ? "bg-white burger-open" : ""
            }`}
            style={{
              background: menuOpen ? "#fff" : "var(--pill-dark)",
              boxShadow: "var(--nav-shadow)",
            }}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((p) => !p)}
          >
            <span className="burger-bar" />
            <span className="burger-bar" />
            <span className="burger-bar" />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-20"
            style={{
              background: "rgba(0,0,0,0.7)",
              backdropFilter: "blur(8px)",
            }}
            onClick={closeMenu}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            key="menu"
            initial={{ opacity: 0, y: -10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-[72px] left-1/2 -translate-x-1/2 z-30 w-[88vw] max-w-[340px] rounded-[26px] bg-white p-5 flex flex-col gap-2"
            style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.45)" }}
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.28 }}
                onClick={closeMenu}
                className={`py-3 text-center rounded-xl text-sm font-medium ${
                  link.label === activePage
                    ? "bg-gray-100 text-black"
                    : "text-gray-600 hover:bg-gray-50 hover:text-black"
                }`}
              >
                {link.label}
              </motion.a>
            ))}
            <a
              href="/sign-up"
              onClick={closeMenu}
              className="mt-1 py-3 text-center rounded-xl bg-black text-white text-sm font-semibold"
            >
              Sign up
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
