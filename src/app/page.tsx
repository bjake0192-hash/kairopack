import { ProductCustomizer } from "@/components/product-customizer";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Box, RefreshCw, Zap } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[var(--background)]">
      {/* Avant-Garde Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-6 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#d9534f]/5 rounded-full blur-[120px]" />
        </div>
        
        <div className="relative z-10 w-full max-w-[1600px] grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-center">
          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center gap-3 mb-8">
              <span className="h-px w-8 bg-[#111111]" />
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#111111]/60">
                Industry Leading Packaging
              </p>
            </div>
            <h1 className="text-6xl sm:text-7xl lg:text-[7.5rem] font-semibold tracking-tighter-plus text-[#111111] leading-[0.9] text-balance mb-8">
              Shape.<br />
              Brand.<br />
              <span className="text-[#d9534f] italic pr-4">Deliver.</span>
            </h1>
            <p className="text-lg text-[#111111]/70 leading-relaxed max-w-md mb-12 font-medium">
              The professional standard for custom catering packaging. Preview your branding instantly in 3D-accurate space and order direct from certified manufacturers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#customizer"
                className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-[#111111] px-10 font-medium text-white transition-transform hover:scale-105 active:scale-95"
              >
                <span className="relative z-10 text-xs uppercase tracking-widest font-bold flex items-center gap-2">
                  Enter Studio <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 h-full w-full scale-0 rounded-full bg-[#d9534f] transition-all duration-300 ease-out group-hover:scale-100" />
              </Link>
            </div>
          </div>

          <div className="relative aspect-[4/5] lg:aspect-auto lg:h-[80vh] rounded-[2rem] overflow-hidden group">
            <Image
              src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Avant-garde%20architectural%20photography%20of%20floating%20blank%20matte%20black%20coffee%20cups%20and%20kraft%20boxes%2C%20harsh%20directional%20lighting%2C%20warm%20off-white%20background%2C%20surreal%20minimalism%2C%208k&image_size=portrait_4_3"
              alt="Avant-garde packaging concept"
              fill
              className="object-cover object-center scale-105 group-hover:scale-100 transition-transform duration-[1.5s] ease-out"
              priority
              unoptimized
            />
            <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
            
            {/* Floating UI Elements */}
            <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/90 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl flex items-center justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#111111]/50 mb-1">Live Render</p>
                <p className="text-sm font-semibold text-[#111111]">100% Scale Accuracy</p>
              </div>
              <div className="h-10 w-10 rounded-full bg-[#111111] flex items-center justify-center text-white">
                <Zap className="w-4 h-4 fill-current" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Features */}
      <section className="py-32 px-6 lg:px-12 bg-[#111111] text-[#f4f3ef] selection:bg-[#f4f3ef] selection:text-[#111111]">
        <div className="max-w-[1600px] mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl lg:text-6xl font-semibold tracking-tighter-plus mb-6 text-balance">
              Engineered for scale.<br />Designed for impact.
            </h2>
            <p className="text-lg text-white/60 max-w-xl">
              We eliminated the traditional proofing delays. What you see is exactly what hits the production line.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
            <div className="md:col-span-2 rounded-[2rem] bg-white/5 p-10 flex flex-col justify-between group hover:bg-white/10 transition-colors border border-white/5">
              <div className="w-12 h-12 rounded-full bg-[#d9534f] flex items-center justify-center mb-6">
                <RefreshCw className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 tracking-tight">Instant Preview Rendering</h3>
                <p className="text-white/60 leading-relaxed max-w-md">Upload vector or high-res PNG assets and see them mapped onto physical product dimensions immediately with accurate curve distortion.</p>
              </div>
            </div>
            
            <div className="rounded-[2rem] bg-white/5 p-10 flex flex-col justify-between group hover:bg-white/10 transition-colors border border-white/5">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6">
                <Box className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 tracking-tight">Premium Finishes</h3>
                <p className="text-white/60 leading-relaxed text-sm">Kraft, matte black, and sustainable PLA linings.</p>
              </div>
            </div>

            <div className="rounded-[2rem] bg-white/5 p-10 flex flex-col justify-between group hover:bg-white/10 transition-colors border border-white/5">
              <h3 className="text-xl font-semibold tracking-tight">Direct to Manufacturer</h3>
              <p className="text-white/60 leading-relaxed text-sm">Orders flow directly to certified facilities, cutting middlemen.</p>
            </div>

            <div className="md:col-span-2 rounded-[2rem] bg-white/5 p-10 flex flex-col justify-between group hover:bg-white/10 transition-colors border border-white/5 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-3 tracking-tight">Dedicated Support Chat</h3>
                <p className="text-white/60 leading-relaxed max-w-md">Clarify artwork specifications securely. Talk directly with production experts to ensure your branding is perfect before the run begins.</p>
              </div>
              <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none translate-x-1/4 translate-y-1/4">
                <svg width="300" height="300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Catalog Grid - Minimalist Re-design */}
      <section id="products" className="py-32 bg-[#f4f3ef]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 border-b border-[#111111]/10 pb-12">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#111111]/60 mb-4">The Collection</p>
              <h2 className="text-5xl lg:text-6xl font-semibold tracking-tighter-plus text-[#111111]">
                Vessels & Wraps
              </h2>
            </div>
            <Link
              href="#customizer"
              className="inline-flex h-12 items-center justify-center rounded-full border-2 border-[#111111] px-8 text-xs uppercase tracking-widest font-bold text-[#111111] transition hover:bg-[#111111] hover:text-[#f4f3ef]"
            >
              Customize Any
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            <CatalogCard 
              title="Double Wall Cup"
              category="Hot Service"
              description="Premium insulation. Available in 8oz, 12oz, and 16oz."
              imagePrompt="Photorealistic%20matte%20black%20double%20wall%20takeaway%20coffee%20cup%20with%20black%20lid%2C%20blank%20no%20logo%2C%20clean%20warm%20off-white%20studio%20background%2C%20dramatic%20shadows"
            />
            <CatalogCard 
              title="Kraft Salad Bowl"
              category="Cold Service"
              description="Unbleached kraft paper with secure PLA lids."
              imagePrompt="Photorealistic%20round%20unbleached%20kraft%20paper%20salad%20bowl%20with%20clear%20PET%20lid%2C%20blank%20no%20logo%2C%20clean%20warm%20off-white%20studio%20background%2C%20dramatic%20shadows"
            />
            <CatalogCard 
              title="Premium Burger Box"
              category="Takeaway"
              description="Vented corrugated board construction."
              imagePrompt="Photorealistic%20premium%20kraft%20corrugated%20cardboard%20burger%20clamshell%20box%2C%20closed%2C%20blank%20no%20logo%2C%20clean%20warm%20off-white%20studio%20background%2C%20dramatic%20shadows"
            />
            <CatalogCard 
              title="Twisted Handle Carrier"
              category="Transit"
              description="Heavy-duty 120gsm kraft paper bags."
              imagePrompt="Photorealistic%20premium%20brown%20kraft%20paper%20carrier%20bag%20with%20twisted%20paper%20handles%2C%20standing%20upright%2C%20blank%20no%20logo%2C%20clean%20warm%20off-white%20studio%20background"
            />
            <CatalogCard 
              title="Clear PET Cold Cup"
              category="Cold Drinks"
              description="Crystal clear shatter-resistant cups."
              imagePrompt="Photorealistic%20clear%20plastic%20PET%20cold%20drink%20cup%20with%20dome%20lid%20and%20straw%20hole%2C%20empty%2C%20clean%20warm%20off-white%20studio%20background%2C%20caustics"
            />
            <CatalogCard 
              title="Greaseproof Wrap"
              category="Liners"
              description="Custom printed food-safe wrapping paper."
              imagePrompt="Photorealistic%20stack%20of%20folded%20premium%20white%20greaseproof%20food%20wrapping%20paper%20sheets%2C%20blank%20no%20logo%2C%20clean%20warm%20off-white%20studio%20background"
            />
          </div>
        </div>
      </section>

      {/* Customizer Section */}
      <section id="customizer" className="py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-[1600px] mx-auto">
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#111111]/60 mb-4">The Studio</p>
            <h2 className="text-5xl lg:text-6xl font-semibold tracking-tighter-plus text-[#111111] mb-6">
              Configure your packaging
            </h2>
            <p className="text-lg text-[#111111]/70">
              Select a product, upload your brand assets, and generate a production-ready brief in seconds.
            </p>
          </div>
          
          <ProductCustomizer />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111111] pt-32 pb-12 px-6 lg:px-12 text-white/60">
        <div className="max-w-[1600px] mx-auto grid lg:grid-cols-[1.5fr_1fr] gap-16 lg:gap-24 border-b border-white/10 pb-20 mb-12">
          <div>
            <h3 className="text-3xl font-semibold text-white tracking-tight mb-6">Kairo Pack</h3>
            <p className="max-w-md leading-relaxed text-lg mb-8 text-white/70">
              The professional standard for custom catering packaging. We provide high-end, sustainable vessels with instant branding previews and direct-to-manufacturer pricing.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 lg:justify-end text-sm">
            <div>
              <p className="text-white font-semibold mb-6 tracking-widest uppercase text-[10px]">Company</p>
              <ul className="space-y-4">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="/vendor" className="hover:text-white transition-colors">Vendor Portal</a></li>
              </ul>
            </div>
            <div>
              <p className="text-white font-semibold mb-6 tracking-widest uppercase text-[10px]">Legal</p>
              <ul className="space-y-4">
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shipping & Returns</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium tracking-wide">
          <p>© {new Date().getFullYear()} Kairo Pack. All rights reserved.</p>
          <p>Engineered for the catering industry.</p>
        </div>
      </footer>
    </main>
  );
}

function CatalogCard({ title, category, description, imagePrompt }: { title: string; category: string; description: string; imagePrompt: string }) {
  return (
    <Link href="#customizer" className="group block">
      <div className="relative aspect-[4/5] bg-white rounded-[2rem] overflow-hidden mb-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
        <Image
          src={`https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${imagePrompt}&image_size=portrait_4_3`}
          alt={title}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
          unoptimized
        />
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-2xl font-semibold text-[#111111] tracking-tight group-hover:text-[#d9534f] transition-colors">
            {title}
          </h3>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#111111]/50">
            {category}
          </span>
        </div>
        <p className="text-[#111111]/70 leading-relaxed mb-4">
          {description}
        </p>
        <div className="flex items-center text-xs font-bold uppercase tracking-widest text-[#111111]">
          Configure <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-2" />
        </div>
      </div>
    </Link>
  );
}