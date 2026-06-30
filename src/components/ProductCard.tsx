import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";

export type { Product };

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="group bg-white rounded-2xl overflow-hidden border border-[#0f1a14]/8 hover:border-[#1c4a2e]/30 hover:shadow-xl transition-all duration-300 flex flex-col"
    >
      <div className="aspect-square relative overflow-hidden bg-[#f0f4f1]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {product.tag && (
          <span className="absolute top-3 left-3 text-xs px-2.5 py-1 bg-[#1c4a2e] text-white rounded-full z-10">
            {product.tag}
          </span>
        )}
        <span className="absolute bottom-3 right-3 text-xs px-3 py-1.5 bg-white/80 backdrop-blur-sm text-[#1c4a2e] rounded-full border border-[#1c4a2e]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          View details →
        </span>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <p className="text-xs uppercase tracking-widest text-[#1c4a2e]/60 mb-1">{product.category}</p>
        <h3 className="font-semibold text-[#0f1a14] mb-1">{product.name}</h3>
        <p className="text-sm text-[#0f1a14]/60 mb-4 line-clamp-2 flex-1">{product.description}</p>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-sm text-[#0f1a14]/50">{product.price}</span>
          <span className="text-xs px-4 py-1.5 border border-[#1c4a2e] text-[#1c4a2e] rounded-full group-hover:bg-[#1c4a2e] group-hover:text-white transition-colors duration-200">
            Inquire
          </span>
        </div>
      </div>
    </Link>
  );
}
