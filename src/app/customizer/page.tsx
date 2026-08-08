import { ProductCustomizer } from "@/components/product-customizer";
import Link from "next/link";
import Image from "next/image";
import { Eye, ShieldCheck, Truck, Sparkles } from "lucide-react";

export default function CustomizerPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#F7F5F1] text-[#0B0B0B]">
      {/* CONFIGURATOR HERO */}
      <section className="relative h-[300px] lg:h-[400px] flex items-center bg-[#0B0B0B] text-white overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B] via-[#0B0B0B]/80 to-transparent z-10" />
          <Image
            src="/images/foodpackaging.png"
            alt="Premium custom packaging on dark studio surface"
            fill
            className="object-cover object-right opacity-60"
            priority
            unoptimized
          />
        </div>
        
        <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 lg:px-12">
          <p className="text-[#C49A62] text-[11px] font-bold uppercase tracking-[0.25em] mb-4">
            CREATE. PREVIEW. PRODUCE.
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Design your packaging.
          </h1>
          <p className="text-[#E7E7E7] text-lg leading-relaxed max-w-md font-light">
            Select a product, upload your logo, and create a production-ready packaging brief.
          </p>
        </div>
      </section>

      {/* PROGRESS INDICATOR */}
      <div className="border-b border-[#E7E7E7] bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex gap-8 py-5 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase whitespace-nowrap">
            <span className="text-[#C49A62]">01</span>
            <span className="text-[#0B0B0B]">PRODUCT</span>
          </div>
          <div className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase whitespace-nowrap opacity-60">
            <span className="text-[#0B0B0B]">02</span>
            <span className="text-[#0B0B0B]">CUSTOMISE</span>
          </div>
          <div className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase whitespace-nowrap opacity-60">
            <span className="text-[#0B0B0B]">03</span>
            <span className="text-[#0B0B0B]">QUOTE</span>
          </div>
          <div className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase whitespace-nowrap opacity-60">
            <span className="text-[#0B0B0B]">04</span>
            <span className="text-[#0B0B0B]">ORDER</span>
          </div>
        </div>
      </div>

      {/* MAIN WORKSPACE */}
      <section className="py-12 lg:py-16 px-6 lg:px-12 flex-1">
        <div className="max-w-[1400px] mx-auto">
          <ProductCustomizer />
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-t border-[#E7E7E7] bg-white py-16 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="border-l border-[#E7E7E7] pl-6">
            <Eye className="w-6 h-6 text-[#C49A62] mb-4" strokeWidth={1.5} />
            <h4 className="text-sm font-bold text-[#0B0B0B] mb-2 uppercase tracking-widest">Real-time Preview</h4>
            <p className="text-sm text-[#71717A] leading-relaxed">See your logo and design applied instantly.</p>
          </div>
          <div className="border-l border-[#E7E7E7] pl-6">
            <ShieldCheck className="w-6 h-6 text-[#C49A62] mb-4" strokeWidth={1.5} />
            <h4 className="text-sm font-bold text-[#0B0B0B] mb-2 uppercase tracking-widest">Expert Guidance</h4>
            <p className="text-sm text-[#71717A] leading-relaxed">Our team checks every detail before production.</p>
          </div>
          <div className="border-l border-[#E7E7E7] pl-6">
            <Truck className="w-6 h-6 text-[#C49A62] mb-4" strokeWidth={1.5} />
            <h4 className="text-sm font-bold text-[#0B0B0B] mb-2 uppercase tracking-widest">Fast Turnaround</h4>
            <p className="text-sm text-[#71717A] leading-relaxed">Quick lead times and reliable delivery.</p>
          </div>
          <div className="border-l border-[#E7E7E7] pl-6">
            <Sparkles className="w-6 h-6 text-[#C49A62] mb-4" strokeWidth={1.5} />
            <h4 className="text-sm font-bold text-[#0B0B0B] mb-2 uppercase tracking-widest">Premium Quality</h4>
            <p className="text-sm text-[#71717A] leading-relaxed">High-quality materials that elevate your brand.</p>
          </div>
        </div>
      </section>
    </main>
  );
}