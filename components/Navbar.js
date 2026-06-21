"use client";

import { useState } from "react";

const navLinks = [
  {
    label: "Backup Power",
    href: "/#backup-power",
  },
  {
    label: "Calculators",
    href: "/calculators",
  },
  {
    label: "Guides",
    href: "/guides",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-3" onClick={closeMenu}>
            <img
              src="/logo.svg"
              alt="Outage Ready Home logo"
              className="h-10 w-10 rounded-xl shadow-sm"
            />

            <span className="text-lg font-bold tracking-tight">
              Outage Ready Home
            </span>
          </a>

          <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-blue-600">
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="/#checklist"
            className="hidden rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-600 md:inline-flex"
          >
            Quick Start
          </a>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-2xl font-black text-slate-950 md:hidden"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? "×" : "☰"}
          </button>
        </div>

        {isOpen && (
          <div className="mt-4 grid gap-3 rounded-3xl border border-slate-200 bg-white p-4 shadow-xl md:hidden">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-2xl bg-slate-50 px-5 py-4 font-bold text-slate-700 hover:text-blue-600"
              >
                {link.label}
              </a>
            ))}

            <a
              href="/#checklist"
              onClick={closeMenu}
              className="rounded-2xl bg-blue-600 px-5 py-4 text-center font-black text-white"
            >
              Start Checklist
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}