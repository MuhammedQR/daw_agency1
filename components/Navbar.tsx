"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/Button";
import ThemeToggle from "@/components/ThemeToggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="container-app h-16 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2"
          aria-label="Go to homepage"
        >
          {/* Logo mark */}
          <span className="inline-flex h-8 w-8 rounded-lg bg-brand-primary text-white items-center justify-center font-bold">
            N
          </span>
          <span className="font-semibold">
            NexGen <span className="text-brand-primary">Solutions</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Primary">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-gray-700 hover:text-brand-primary"
            >
              {l.label}
            </Link>
          ))}
          <Button
            variant="cta"
            href="/contact"
            aria-label="Get a project quote"
          >
            Get Quote
          </Button>
        </nav>
        <ThemeToggle />

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((s) => !s)}
          className="md:hidden p-2 rounded-lg border border-gray-200"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          id="mobile-nav"
          className="md:hidden border-t border-gray-100 bg-white"
          aria-label="Mobile"
        >
          <div className="container-app py-4 flex flex-col gap-3">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-gray-800 hover:text-brand-primary"
              >
                {l.label}
              </Link>
            ))}
            <Button variant="cta" href="/contact">
              Get Quote
            </Button>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="cta" href="/contact">
              Get Quote
            </Button>
            <ThemeToggle />
          </div>
        </nav>
      )}
    </header>
  );
}
