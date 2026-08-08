import { ProductCustomizer } from "@/components/product-customizer";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Box, RefreshCw, Zap, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Modern Hero Section */}
      <section className="relative pt-20 pb-32 px-6 lg:px-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 text-zinc-800 text-sm font-medium mb-8 self-start">
              <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
              Now accepting new B2B orders
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-zinc-950 mb-6 text-balance">
              Custom catering packaging, <span className="text-zinc-500">simplified.</span>
            </h1>
            <p className="text-lg text-zinc-600 leading-relaxed max-w-xl mb-10">
              Upload your brand assets, preview instantly in 3D-accurate space, and order direct from certified manufacturers. No middlemen, no proofing delays.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#customizer"
                className="inline-flex h-12 items-center justify-center rounded-md bg-zinc-900 px-8 text-sm font-medium text-zinc-50 shadow transition-colors hover:bg-zinc-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950"
              >
                Start Designing
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                href="#products"
                className="inline-flex h-12 items-center justify-center rounded-md border border-zinc-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950"
              >
                View Catalog
              </Link>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm text-zinc-500">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-zinc-900" /> Fast Turnaround
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-zinc-900" /> Premium Materials
              </div>
            </div>
          </div>

          <div className="relative aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-100 shadow-sm border border-zinc-200/50">
            <Image
              src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Clean%20modern%20ecommerce%20product%20photography%20of%20a%20blank%20white%20coffee%20cup%20and%20kraft%20takeaway%20box%20on%20a%20bright%20white%20studio%20background%2C%20soft%20natural%20lighting%2C%20high%20end%20retail%20style&image_size=landscape_4_3"
              alt="Premium catering packaging"
              fill
              className="object-cover object-center"
              priority
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* Clean Features Section */}
      <section className="py-24 px-6 lg:px-12 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-950 mb-4">
              Everything you need to scale
            </h2>
            <p className="text-zinc-600 text-lg">
              We've streamlined the entire packaging procurement process for modern food and beverage brands.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-zinc-100 flex items-center justify-center mb-6">
                <RefreshCw className="w-6 h-6 text-zinc-900" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-950 mb-3">Instant Previews</h3>
              <p className="text-zinc-600 leading-relaxed">
                Upload your logo and instantly see it mapped perfectly onto our products. What you see is what we print.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-zinc-100 flex items-center justify-center mb-6">
                <Box className="w-6 h-6 text-zinc-900" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-950 mb-3">Premium Finishes</h3>
              <p className="text-zinc-600 leading-relaxed">
                From unbleached kraft to double-walled insulation, we source only the highest quality materials.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-zinc-100 flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-zinc-900" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-950 mb-3">Direct Production</h3>
              <p className="text-zinc-600 leading-relaxed">
                Connect directly with certified manufacturers through our vendor portal. No brokers, better prices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Product Catalog */}
      <section id="products" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-950 mb-4">
                Our Catalog
              </h2>
              <p className="text-zinc-600 text-lg">
                Industry-standard vessels and wraps ready for your branding.
              </p>
            </div>
            <Link
              href="#customizer"
              className="text-sm font-medium text-zinc-900 hover:text-zinc-600 transition-colors flex items-center gap-1"
            >
              Customize Any Product <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <CatalogCard 
              title="Double Wall Cup"
              category="Hot Service"
              price="From £145 / 100 units"
              imagePrompt="Clean%20ecommerce%20product%20photography%20of%20a%20blank%20white%20double%20wall%20coffee%20cup%20with%20white%20lid%2C%20bright%20white%20background%2C%20soft%20lighting"
            />
            <CatalogCard 
              title="Kraft Salad Bowl"
              category="Cold Service"
              price="From £168 / 100 units"
              imagePrompt="Clean%20ecommerce%20product%20photography%20of%20a%20blank%20kraft%20paper%20salad%20bowl%20with%20clear%20lid%2C%20bright%20white%20background%2C%20soft%20lighting"
            />
            <CatalogCard 
              title="Premium Burger Box"
              category="Takeaway"
              price="From £182 / 100 units"
              imagePrompt="Clean%20ecommerce%20product%20photography%20of%20a%20blank%20kraft%20burger%20box%20clamshell%2C%20bright%20white%20background%2C%20soft%20lighting"
            />
            <CatalogCard 
              title="Twisted Handle Carrier"
              category="Transit"
              price="From £128 / 100 units"
              imagePrompt="Clean%20ecommerce%20product%20photography%20of%20a%20blank%20brown%20kraft%20paper%20bag%20with%20handles%2C%20bright%20white%20background%2C%20soft%20lighting"
            />
            <CatalogCard 
              title="Clear PET Cold Cup"
              category="Cold Drinks"
              price="From £135 / 100 units"
              imagePrompt="Clean%20ecommerce%20product%20photography%20of%20a%20clear%20plastic%20cold%20cup%20with%20dome%20lid%2C%20bright%20white%20background%2C%20soft%20lighting"
            />
            <CatalogCard 
              title="Greaseproof Wrap"
              category="Liners"
              price="From £85 / 100 units"
              imagePrompt="Clean%20ecommerce%20product%20photography%20of%20folded%20white%20greaseproof%20wrapping%20paper%2C%20bright%20white%20background%2C%20soft%20lighting"
            />
          </div>
        </div>
      </section>

      {/* Customizer Section */}
      <section id="customizer" className="py-24 px-6 lg:px-12 bg-zinc-50 border-t border-zinc-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-950 mb-4">
              Design your packaging
            </h2>
            <p className="text-zinc-600 text-lg">
              Select a product, upload your logo, and generate a production-ready brief.
            </p>
          </div>
          
          <ProductCustomizer />
        </div>
      </section>

      {/* Standard Footer */}
      <footer className="bg-white border-t border-zinc-200 py-16 px-6 lg:px-12">
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
              <li><Link href="#" className="hover:text-zinc-950 transition-colors">Hot Cups</Link></li>
              <li><Link href="#" className="hover:text-zinc-950 transition-colors">Cold Cups</Link></li>
              <li><Link href="#" className="hover:text-zinc-950 transition-colors">Bowls & Containers</Link></li>
              <li><Link href="#" className="hover:text-zinc-950 transition-colors">Bags & Carriers</Link></li>
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

function CatalogCard({ title, category, price, imagePrompt }: { title: string, category: string, price: string, imagePrompt: string }) {
  return (
    <Link href="#customizer" className="group block bg-white rounded-2xl overflow-hidden border border-zinc-200 hover:border-zinc-300 hover:shadow-md transition-all">
      <div className="relative aspect-[4/3] bg-zinc-100 overflow-hidden border-b border-zinc-100">
        <Image
          src={`https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${imagePrompt}&image_size=landscape_4_3`}
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
