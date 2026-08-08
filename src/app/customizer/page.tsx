import { ProductCustomizer } from "@/components/product-customizer";
import Link from "next/link";

export default function CustomizerPage() {
  return (
    <main className="flex flex-col min-h-screen bg-zinc-50 pt-24">
      <section className="py-12 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-950 mb-4">
            Design your packaging
          </h1>
          <p className="text-zinc-600 text-lg">
            Select a product, upload your logo, and generate a production-ready brief.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-12 bg-zinc-50 flex-1">
        <div className="max-w-7xl mx-auto">
          <ProductCustomizer />
        </div>
      </section>

      {/* Standard Footer */}
      <footer className="bg-white border-t border-zinc-200 py-16 px-6 lg:px-12 mt-auto">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[2fr_1fr_1fr] gap-12 mb-16">
          <div>
            <h3 className="text-xl font-bold text-zinc-950 mb-4">Kairo Pack</h3>
            <p className="text-zinc-600 max-w-sm">
              The modern standard for custom catering packaging. Direct-to-manufacturer pricing with instant visual proofing.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-zinc-950 mb-4">Products</h4>
            <ul className="space-y-3 text-sm text-zinc-600">
              <li><Link href="/products" className="hover:text-zinc-950 transition-colors">Hot Cups</Link></li>
              <li><Link href="/products" className="hover:text-zinc-950 transition-colors">Cold Cups</Link></li>
              <li><Link href="/products" className="hover:text-zinc-950 transition-colors">Bowls & Containers</Link></li>
              <li><Link href="/products" className="hover:text-zinc-950 transition-colors">Bags & Carriers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-zinc-950 mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-zinc-600">
              <li><Link href="#" className="hover:text-zinc-950 transition-colors">About</Link></li>
              <li><Link href="#" className="hover:text-zinc-950 transition-colors">Contact</Link></li>
              <li><Link href="/vendor" className="hover:text-zinc-950 transition-colors">Vendor Login</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-8 border-t border-zinc-100 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <p>© {new Date().getFullYear()} Kairo Pack. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-zinc-950 transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-zinc-950 transition-colors">Terms</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}