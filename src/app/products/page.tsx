import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ProductsPage() {
  return (
    <main className="flex flex-col min-h-screen bg-zinc-50 pt-24">
      <section className="py-12 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-zinc-950 mb-4">
                Our Catalog
              </h1>
              <p className="text-zinc-600 text-lg max-w-2xl">
                Industry-standard vessels and wraps ready for your branding. Explore our complete range of premium catering packaging.
              </p>
            </div>
            <Link
              href="/customizer"
              className="text-sm font-medium text-zinc-900 hover:text-zinc-600 transition-colors flex items-center gap-1"
            >
              Go to Customizer <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-zinc-50 flex-1">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <CatalogCard 
              title="Double Wall Cup"
              category="Hot Service"
              price="From £145 / 100 units"
              imageUrl="https://images.unsplash.com/photo-1512568400610-62da28bc8a13?auto=format&fit=crop&q=80&w=800"
            />
            <CatalogCard 
              title="Kraft Salad Bowl"
              category="Cold Service"
              price="From £168 / 100 units"
              imageUrl="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800"
            />
            <CatalogCard 
              title="Premium Burger Box"
              category="Takeaway"
              price="From £182 / 100 units"
              imageUrl="https://images.unsplash.com/photo-1626844131082-256783844137?auto=format&fit=crop&q=80&w=800"
            />
            <CatalogCard 
              title="Twisted Handle Carrier"
              category="Transit"
              price="From £128 / 100 units"
              imageUrl="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800"
            />
            <CatalogCard 
              title="Clear PET Cold Cup"
              category="Cold Drinks"
              price="From £135 / 100 units"
              imageUrl="https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=800"
            />
            <CatalogCard 
              title="Greaseproof Wrap"
              category="Liners"
              price="From £85 / 100 units"
              imageUrl="https://images.unsplash.com/photo-1585032226651-72462e0c2e2e?auto=format&fit=crop&q=80&w=800"
            />
          </div>
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

function CatalogCard({ title, category, price, imageUrl }: { title: string, category: string, price: string, imageUrl: string }) {
  return (
    <Link href="/customizer" className="group block bg-white rounded-2xl overflow-hidden border border-zinc-200 hover:border-zinc-300 hover:shadow-md transition-all">
      <div className="relative aspect-[4/3] bg-zinc-100 overflow-hidden border-b border-zinc-100">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
          unoptimized
        />
      </div>
      <div className="p-6">
        <div className="text-xs font-medium text-zinc-500 mb-2 uppercase tracking-wider">{category}</div>
        <h3 className="text-lg font-semibold text-zinc-950 mb-2 group-hover:text-zinc-700 transition-colors">{title}</h3>
        <p className="text-sm text-zinc-600 font-medium">{price}</p>
      </div>
    </Link>
  );
}