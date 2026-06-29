import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

export default function HomePage() {
  const featured = products.filter((p) => p.tag === "Bestseller").slice(0, 3);

  const categories = [
    { label: "Chairs", href: "/products?category=Chair", count: products.filter((p) => p.category === "Chair").length },
    { label: "Desks", href: "/products?category=Desk", count: products.filter((p) => p.category === "Desk").length },
    { label: "Sofas", href: "/products?category=Sofa", count: products.filter((p) => p.category === "Sofa").length },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center bg-[#0f1a14] overflow-hidden pt-16">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(#2d6e44 1px, transparent 1px), linear-gradient(90deg, #2d6e44 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1c4a2e] rounded-full blur-[120px] opacity-30 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#2d6e44] mb-6">
              Office Furniture · Redesigned
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.05] mb-6">
              Elegance that{" "}
              <span className="text-[#2d6e44]">combines</span>{" "}
              with the future.
            </h1>
            <p className="text-base md:text-lg text-white/60 max-w-md leading-relaxed mb-10">
              SIT crafts workspace furniture grounded in ergonomic research and
              forward-thinking design — for professionals who demand both beauty
              and performance.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/products"
                className="px-7 py-3.5 bg-[#1c4a2e] text-white rounded-full hover:bg-[#2d6e44] transition-colors duration-200 text-sm font-medium"
              >
                Explore Collection
              </Link>
              <Link
                href="/about"
                className="px-7 py-3.5 border border-white/20 text-white/80 rounded-full hover:border-white/50 hover:text-white transition-colors duration-200 text-sm"
              >
                Our Story
              </Link>
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 border border-[#2d6e44]/30 rounded-3xl rotate-6" />
              <div className="absolute inset-4 border border-[#2d6e44]/20 rounded-2xl -rotate-3" />
              <div className="absolute inset-8 bg-[#1c4a2e]/20 rounded-xl flex items-center justify-center">
                <span className="text-8xl">🪑</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs text-white/30 tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </section>

      {/* Stats banner */}
      <section className="bg-[#1c4a2e] py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "15+", label: "Years of Design" },
            { value: "200+", label: "Products" },
            { value: "50+", label: "Countries" },
            { value: "100K+", label: "Workspaces" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-semibold text-white mb-1">{stat.value}</p>
              <p className="text-xs uppercase tracking-widest text-white/50">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured products */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#1c4a2e] mb-2">Collection</p>
              <h2 className="text-4xl font-semibold text-[#0f1a14]">Bestsellers</h2>
            </div>
            <Link
              href="/products"
              className="text-sm text-[#1c4a2e] border-b border-[#1c4a2e]/40 hover:border-[#1c4a2e] transition-colors pb-0.5 self-start md:self-auto"
            >
              View all products →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 px-6 bg-[#e8f0eb]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-[#1c4a2e] mb-2">Browse by category</p>
            <h2 className="text-4xl font-semibold text-[#0f1a14]">Every workspace, covered.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.label}
                href={cat.href}
                className="group relative bg-[#0f1a14] rounded-2xl p-10 flex flex-col items-center text-center hover:bg-[#1c4a2e] transition-colors duration-300 overflow-hidden"
              >
                <div
                  className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity"
                  style={{
                    backgroundImage: "radial-gradient(circle at 50% 50%, #2d6e44 0%, transparent 70%)",
                  }}
                />
                <p className="text-white font-semibold text-xl mb-2 relative">{cat.label}</p>
                <p className="text-white/40 text-sm relative">{cat.count} products</p>
                <span className="mt-4 text-xs px-4 py-1.5 border border-white/20 text-white/60 rounded-full group-hover:border-white/40 group-hover:text-white/80 transition-colors relative">
                  Browse →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#1c4a2e] mb-4">About SIT</p>
            <h2 className="text-4xl font-semibold text-[#0f1a14] mb-6 leading-tight">
              Built on research.<br />Refined by design.
            </h2>
            <p className="text-[#0f1a14]/70 leading-relaxed mb-6">
              SIT was founded on a single belief: the furniture you work in shapes the work you
              produce. Our pieces are developed through rigorous ergonomic research and refined
              by a team of industrial designers passionate about the modern workspace.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm px-7 py-3.5 bg-[#1c4a2e] text-white rounded-full hover:bg-[#2d6e44] transition-colors"
              >
                Our Story
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm px-7 py-3.5 border border-[#0f1a14]/20 text-[#0f1a14]/70 rounded-full hover:border-[#1c4a2e] hover:text-[#1c4a2e] transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { emoji: "🔬", title: "Research-Backed", desc: "Every design starts in our ergonomics lab." },
              { emoji: "🌿", title: "Sustainable", desc: "Materials sourced with the environment in mind." },
              { emoji: "⚙️", title: "Precision Built", desc: "Crafted to exacting tolerances for lasting quality." },
              { emoji: "🎨", title: "Award-Winning", desc: "Recognized internationally for design excellence." },
            ].map((item) => (
              <div key={item.title} className="bg-[#f8f7f4] border border-[#0f1a14]/8 p-6 rounded-2xl">
                <span className="text-2xl mb-3 block">{item.emoji}</span>
                <p className="font-medium text-[#0f1a14] mb-1 text-sm">{item.title}</p>
                <p className="text-xs text-[#0f1a14]/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 px-6 bg-[#0f1a14]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[#2d6e44] mb-4">Get in touch</p>
          <h2 className="text-4xl font-semibold text-white mb-5">
            Ready to transform your workspace?
          </h2>
          <p className="text-white/60 mb-8 leading-relaxed">
            Our team of workspace specialists is here to help you find the perfect furniture
            for your team — from individual pieces to full office fit-outs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3.5 bg-[#1c4a2e] text-white rounded-full hover:bg-[#2d6e44] transition-colors text-sm font-medium"
            >
              Contact Us
            </Link>
            <a
              href="tel:+13055978641"
              className="px-7 py-3.5 border border-white/20 text-white/80 rounded-full hover:border-white/50 hover:text-white transition-colors text-sm"
            >
              +1 (305) 597-8641
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
