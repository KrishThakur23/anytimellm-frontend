"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("anytimellm-token");
    setIsLoggedIn(!!token);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "/#features" },
    { name: "Pricing", href: "/pricing" },
    { name: "Use Cases", href: "/use-cases" },
    { name: "Demo", href: "/demo" },
    { name: "About", href: "/about" },
  ];

  return (
    <header
      className={`sticky top-0 w-full z-50 h-16 flex items-center justify-between px-6 md:px-12 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-slate-200/60 shadow-sm"
          : "bg-transparent"
      }`}
    >
      {/* Brand */}
      <Link href="/" className="flex items-center gap-2 group">
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-slate-900 group-hover:opacity-70 transition-opacity duration-300">
          <path d="M50 16 L22 66 C18 76 22 86 32 86 C42 86 48 78 50 74 C52 78 58 86 68 86 C78 86 82 76 78 66 Z" />
          <path d="M30 85 C42 85 58 67 70 67" />
          <path d="M70 85 C58 85 42 67 30 67" />
        </svg>
        <span className="text-[15px] font-extrabold tracking-[0.12em] text-slate-900 transition-colors duration-300 group-hover:opacity-70">
          ANYTIMELLM
        </span>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-7">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`text-[13px] font-medium transition-colors duration-300 hover:text-slate-900 ${
              pathname === link.href ? "text-slate-900 font-semibold" : "text-slate-500"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      {/* CTA Buttons */}
      <div className="hidden md:flex items-center gap-3">
        {isLoggedIn ? (
          <Link
            href="/dashboard"
            className="text-[13px] font-semibold text-slate-700 border border-slate-200 px-4 py-2 hover:bg-slate-50 transition-all duration-300 rounded-xl shadow-sm"
          >
            Dashboard
          </Link>
        ) : (
          <>
            <Link
              href="/login"
              className="text-[13px] font-medium text-slate-500 hover:text-slate-800 transition-colors duration-300"
            >
              Log in
            </Link>
            <Link
              href="/pricing"
              className="text-[13px] font-body font-semibold text-white bg-slate-900 px-5 py-2.5 hover:bg-slate-800 transition-all duration-300 flex items-center gap-1.5 group rounded-xl shadow-md hover:shadow-lg"
            >
              Start free
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </>
        )}
      </div>

      {/* Mobile Hamburger */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden text-slate-700 hover:text-[#128C7E] transition-colors focus:outline-none"
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white/95 backdrop-blur-xl border-b border-slate-200 flex flex-col p-6 gap-4 z-40 md:hidden shadow-lg">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm font-medium hover:text-slate-900 transition-colors ${
                  pathname === link.href ? "text-slate-900" : "text-slate-600"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="w-full h-[1px] bg-slate-200 my-1" />

          <div className="flex flex-col gap-3">
            {isLoggedIn ? (
              <Link
                href="/dashboard"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center text-sm font-semibold text-slate-700 border border-slate-200 py-2.5 rounded-xl shadow-sm"
              >
                Go to Dashboard
              </Link>
            ) : (
              <>
                <Link
                  href="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center text-sm text-slate-600 hover:text-slate-900 py-2"
                >
                  Log in
                </Link>
                <Link
                  href="/pricing"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center text-sm font-body font-semibold text-white bg-slate-900 py-2.5 flex items-center justify-center gap-1.5 rounded-xl shadow-md hover:shadow-lg transition-all"
                >
                  Start free
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
