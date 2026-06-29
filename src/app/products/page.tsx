"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

const categories = ["All", "Chair", "Desk", "Sofa"];

function ProductsContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") ?? "All";
  const [active, setActive] = useState(
    categories.includes(initialCategory) ? initialCategory : "All"
  );

  useEffect(() => {
    const cat = searchParams.get("category") ?? "All";
    setActive(categories.includes(cat) ? cat : "All");
  }, [searchParams]);

  const filtered =
    active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-[#0f1a14] py-20 px-6 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-[#2d6e44] mb-3">Our Collection</p>
        <h1 className="text-4xl md:text-5xl font-semibold text-white mb-4">All Products</h1>
        <p className="text-white/50 max-w-md mx-auto text-sm leading-relaxed">
          Every piece designed to elevate your workspace. Built with precision, inspired by the future.
        </p>
      </section>

      {/* Filter tabs */}
      <section className="sticky top-16 z-40 bg-[#f8f7f4]/95 backdrop-blur border-b border-[#0f1a14]/10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center gap-3 overflow-x-auto">
          <span className="text-xs uppercase tracking-widest text-[#0f1a14]/40 mr-2 whitespace-nowrap">
            Filter:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`text-sm px-5 py-2 rounded-full whitespace-nowrap transition-colors duration-200 ${
                active === cat
                  ? "bg-[#1c4a2e] text-white"
                  : "bg-white border border-[#0f1a14]/10 text-[#0f1a14]/60 hover:border-[#1c4a2e]/40 hover:text-[#1c4a2e]"
              }`}
            >
              {cat}
              <span className="ml-1.5 text-xs opacity-60">
                ({cat === "All" ? products.length : products.filter((p) => p.category === cat).length})
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Product grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-[#0f1a14]/40 mb-8">
            Showing {filtered.length} product{filtered.length !== 1 ? "s" : ""}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 px-6 bg-[#e8f0eb] text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-[#1c4a2e] mb-3">Need help choosing?</p>
        <h2 className="text-2xl font-semibold text-[#0f1a14] mb-4">
          Our specialists are ready to assist.
        </h2>
        <a
          href="mailto:sales@highexport.com"
          className="inline-block px-7 py-3.5 bg-[#1c4a2e] text-white rounded-full hover:bg-[#2d6e44] transition-colors text-sm font-medium"
        >
          Contact Sales
        </a>
      </section>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense>
      <ProductsContent />
    </Suspense>
  );
}
