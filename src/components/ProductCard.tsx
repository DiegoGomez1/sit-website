import Image from "next/image";
import type { Product } from "@/lib/products";

export type { Product };

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-[#0f1a14]/8 hover:border-[#1c4a2e]/30 hover:shadow-xl transition-all duration-300">
      <div className="aspect-[4/3] relative overflow-hidden bg-[#e8f0eb]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {product.tag && (
          <span className="absolute top-3 left-3 text-xs px-2.5 py-1 bg-[#1c4a2e] text-white rounded-full z-10">
            {product.tag}
          </span>
        )}
      </div>

      <div className="p-5">
        <p className="text-xs uppercase tracking-widest text-[#1c4a2e]/60 mb-1">{product.category}</p>
        <h3 className="font-semibold text-[#0f1a14] mb-1">{product.name}</h3>
        <p className="text-sm text-[#0f1a14]/60 mb-4 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-[#0f1a14]/50">{product.price}</span>
          <a
            href="mailto:sales@highexport.com"
            className="text-xs px-4 py-1.5 border border-[#1c4a2e] text-[#1c4a2e] rounded-full hover:bg-[#1c4a2e] hover:text-white transition-colors duration-200"
          >
            Inquire
          </a>
        </div>
      </div>
    </div>
  );
}
