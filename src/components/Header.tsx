"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between py-5">
          {/* Logo */}
          <Link href="/" className="logo flex items-center gap-2">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L4 7V17L12 22L20 17V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z" fill="currentColor"/>
              <path d="M12 12V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span>Cape Flora Designs</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/portfolio" className="nav-link text-sm font-medium tracking-wider uppercase transition-colors hover:text-[hsl(var(--warm-tan))]">
              Portfolio
            </Link>
            <Link href="#services" className="nav-link text-sm font-medium tracking-wider uppercase transition-colors hover:text-[hsl(var(--warm-tan))]">
              Services
            </Link>
            <Link href="#about" className="nav-link text-sm font-medium tracking-wider uppercase transition-colors hover:text-[hsl(var(--warm-tan))]">
              About
            </Link>
            <Link href="/consultation" className="nav-link text-sm font-medium tracking-wider uppercase transition-colors hover:text-[hsl(var(--warm-tan))]">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-6 flex flex-col gap-4">
            <Link
              href="/portfolio"
              className="text-sm font-medium tracking-wider uppercase transition-colors hover:text-[hsl(var(--warm-tan))]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href="#services"
              className="text-sm font-medium tracking-wider uppercase transition-colors hover:text-[hsl(var(--warm-tan))]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium tracking-wider uppercase transition-colors hover:text-[hsl(var(--warm-tan))]"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/consultation"
              className="text-sm font-medium tracking-wider uppercase transition-colors hover:text-[hsl(var(--warm-tan))]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
