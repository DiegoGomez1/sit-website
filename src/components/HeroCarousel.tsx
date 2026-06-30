"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  { id: "m750bk",    src: "/products/chairs/m750bk.jpg",   name: "SIT-M750 Black",      category: "Chair" },
  { id: "m900bk",    src: "/products/chairs/m900bk.jpg",   name: "SIT-M900 Black",      category: "Chair" },
  { id: "d450",      src: "/products/desks/d450.jpg",      name: "SIT-D450",            category: "Desk"  },
  { id: "electric",  src: "/products/desks/electric.jpg",  name: "SIT Electric Height", category: "Desk"  },
  { id: "aura-bg",   src: "/products/sofas/aura-bg.jpg",   name: "SIT-AURA Beige",      category: "Sofa"  },
  { id: "elisse-bl", src: "/products/sofas/elisse-bl.jpg", name: "SIT-ELISSE Blue",     category: "Sofa"  },
  { id: "m350bk",    src: "/products/chairs/m350bk.jpg",   name: "SIT-M350 Black",      category: "Chair" },
];

const INTERVAL = 3500;

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % slides.length), INTERVAL);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <div className="hidden lg:flex items-center justify-center">
      <div className="relative w-80 h-80">
        {/* Decorative borders */}
        <div className="absolute inset-0 border border-[#2d6e44]/30 rounded-3xl rotate-6" />
        <div className="absolute inset-4 border border-[#2d6e44]/20 rounded-2xl -rotate-3" />

        {/* Image stack */}
        <div className="absolute inset-8 bg-[#1c4a2e]/20 rounded-xl overflow-hidden">
          {slides.map((s, i) => (
            <div
              key={s.id}
              className="absolute inset-0"
              style={{
                opacity: i === current ? 1 : 0,
                transition: "opacity 900ms ease-in-out",
                willChange: "opacity",
              }}
            >
              <Image
                src={s.src}
                alt={s.name}
                fill
                className="object-contain p-3"
                style={{ filter: "drop-shadow(0 16px 32px rgba(0,0,0,0.5))" }}
                sizes="256px"
                priority={i === 0}
              />
            </div>
          ))}

          {/* Dot indicators — overlaid inside the frame */}
          <div className="absolute bottom-2.5 left-0 right-0 flex justify-center gap-1.5 z-10">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Slide ${i + 1}`}
                className="rounded-full"
                style={{
                  width: i === current ? 18 : 6,
                  height: 4,
                  background: i === current ? "#2d6e44" : "rgba(255,255,255,0.3)",
                  transition: "all 400ms ease-in-out",
                }}
              />
            ))}
          </div>
        </div>

        {/* Arrows */}
        <button
          onClick={() => setCurrent((c) => (c - 1 + slides.length) % slides.length)}
          aria-label="Previous"
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-8 h-8 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
        >
          <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
            <path d="M9 2L4 7L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          onClick={() => setCurrent((c) => (c + 1) % slides.length)}
          aria-label="Next"
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-8 h-8 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
        >
          <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
            <path d="M5 2L10 7L5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Product name — bottom of frame, outside */}
        <div className="absolute -bottom-10 left-0 right-0 text-center">
          <Link
            href={`/products/${slide.id}`}
            className="text-xs text-white/40 hover:text-white/70 transition-colors"
          >
            {slide.name} →
          </Link>
        </div>
      </div>
    </div>
  );
}
