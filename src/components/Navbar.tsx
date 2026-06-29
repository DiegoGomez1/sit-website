"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#f8f7f4]/90 backdrop-blur-md border-b border-[#0f1a14]/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/sit-logo.jpg"
            alt="SIT"
            width={60}
            height={48}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm tracking-wide transition-colors duration-200 ${
                pathname === l.href
                  ? "text-[#1c4a2e] font-medium"
                  : "text-[#0f1a14]/60 hover:text-[#1c4a2e]"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="text-sm px-5 py-2 bg-[#1c4a2e] text-white rounded-full hover:bg-[#2d6e44] transition-colors duration-200"
          >
            Get a Quote
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-0.5 bg-[#0f1a14] transition-transform duration-200 ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-[#0f1a14] transition-opacity duration-200 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-[#0f1a14] transition-transform duration-200 ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[#0f1a14]/10 bg-[#f8f7f4] px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`text-sm tracking-wide transition-colors ${
                pathname === l.href ? "text-[#1c4a2e] font-medium" : "text-[#0f1a14]/70 hover:text-[#1c4a2e]"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="text-sm px-5 py-2 bg-[#1c4a2e] text-white rounded-full text-center hover:bg-[#2d6e44] transition-colors"
          >
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
}
