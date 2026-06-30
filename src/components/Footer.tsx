import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0f1a14] text-white/70">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <Image
            src="/sit-logo.jpg"
            alt="SIT"
            width={80}
            height={64}
            className="h-12 w-auto object-contain mb-4"
            style={{ filter: "invert(1)", mixBlendMode: "screen" }}
          />
          <p className="text-sm leading-relaxed max-w-xs">
            Designing and manufacturing inspiring office furniture for modern
            professional workspaces. Elegance that combines with the future.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-white/40 mb-4">Navigation</p>
          <ul className="space-y-2 text-sm">
            {[
              { href: "/", label: "Home" },
              { href: "/products", label: "Products" },
              { href: "/about", label: "About" },
              { href: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-white/40 mb-4">Contact</p>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="mailto:sales@highexport.com" className="hover:text-white transition-colors">
                sales@highexport.com
              </a>
            </li>
            <li>
              <a href="tel:+13055978641" className="hover:text-white transition-colors">
                +1 (305) 597-8641
              </a>
            </li>
            <li className="pt-2">
              <p className="text-xs text-white/30">Part of the High Export portfolio</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-5 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/30">
        <p>© {new Date().getFullYear()} SIT. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/products" className="hover:text-white/60 transition-colors">Products</Link>
          <Link href="/about" className="hover:text-white/60 transition-colors">About</Link>
          <Link href="/contact" className="hover:text-white/60 transition-colors">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
