import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/lib/products";

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  if (!product) return {};
  return { title: `${product.name} — SIT` };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) notFound();

  return (
    <div className="pt-16 min-h-screen bg-[#f8f7f4]">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <nav className="flex items-center gap-2 text-sm text-[#0f1a14]/40">
          <Link href="/" className="hover:text-[#1c4a2e] transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/products" className="hover:text-[#1c4a2e] transition-colors">
            Products
          </Link>
          <span>/</span>
          <span className="text-[#0f1a14]/70">{product.name}</span>
        </nav>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Image */}
          <div className="sticky top-24">
            <div className="relative aspect-square bg-white rounded-3xl overflow-hidden border border-[#0f1a14]/8 shadow-sm">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain p-8"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              {product.tag && (
                <span className="absolute top-5 left-5 text-xs px-3 py-1.5 bg-[#1c4a2e] text-white rounded-full">
                  {product.tag}
                </span>
              )}
            </div>
          </div>

          {/* Details */}
          <div className="py-2">
            <p className="text-xs uppercase tracking-[0.3em] text-[#2d6e44] mb-3">
              {product.category}
            </p>
            <h1 className="text-3xl md:text-4xl font-semibold text-[#0f1a14] mb-4">
              {product.name}
            </h1>
            <p className="text-[#0f1a14]/60 leading-relaxed text-base mb-8">
              {product.description}
            </p>

            {/* Features */}
            {product.features && product.features.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xs uppercase tracking-[0.25em] text-[#0f1a14]/40 mb-4">
                  Features
                </h2>
                <ul className="space-y-2.5">
                  {product.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#0f1a14]/70">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#2d6e44] flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Dimensions */}
            {product.dimensions && product.dimensions.length > 0 && (
              <div className="mb-10">
                <h2 className="text-xs uppercase tracking-[0.25em] text-[#0f1a14]/40 mb-4">
                  Dimensions
                </h2>
                <div className="rounded-2xl border border-[#0f1a14]/8 overflow-hidden">
                  {product.dimensions.map((d, i) => (
                    <div
                      key={i}
                      className={`flex justify-between items-center px-5 py-3 text-sm ${
                        i % 2 === 0 ? "bg-white" : "bg-[#f8f7f4]"
                      }`}
                    >
                      <span className="text-[#0f1a14]/50">{d.label}</span>
                      <span className="font-medium text-[#0f1a14]">{d.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Price & CTA */}
            <div className="border-t border-[#0f1a14]/8 pt-8">
              <p className="text-xs uppercase tracking-[0.25em] text-[#0f1a14]/40 mb-1">
                Pricing
              </p>
              <p className="text-[#0f1a14]/60 text-sm mb-6">{product.price}</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`mailto:sales@highexport.com?subject=Inquiry: ${product.name}`}
                  className="flex-1 text-center px-7 py-4 bg-[#1c4a2e] text-white rounded-full hover:bg-[#2d6e44] transition-colors text-sm font-medium"
                >
                  Request a Quote
                </a>
                <Link
                  href="/contact"
                  className="flex-1 text-center px-7 py-4 border border-[#1c4a2e] text-[#1c4a2e] rounded-full hover:bg-[#1c4a2e] hover:text-white transition-colors text-sm font-medium"
                >
                  Talk to a Specialist
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Back to catalog */}
        <div className="mt-16 pt-10 border-t border-[#0f1a14]/8 text-center">
          <Link
            href={`/products?category=${product.category}`}
            className="inline-flex items-center gap-2 text-sm text-[#1c4a2e] hover:underline"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M9 2L4 7L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to {product.category}s
          </Link>
        </div>
      </div>
    </div>
  );
}
