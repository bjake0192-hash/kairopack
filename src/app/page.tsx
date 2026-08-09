import Image from "next/image";
import Link from "next/link";
import { ArrowRight, PenTool, Settings, Package, Truck, Leaf, ShieldCheck, Users, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#F7F5F1] text-[#0B0B0B]">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[75vh] lg:min-h-[85vh] flex items-center bg-[#0B0B0B] text-white pt-20">
        <div className="absolute inset-0 z-0 flex">
          <div className="w-full lg:w-1/2 bg-[#0B0B0B]" />
          <div className="hidden lg:block w-1/2 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B] via-[#0B0B0B]/40 to-transparent z-10" />
            <Image
              src="/images/hero-packaging.png"
              alt="Premium custom packaging on dark studio surface"
              fill
              className="object-cover object-center opacity-90"
              priority
            />
          </div>
        </div>
        
        <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center py-20">
            <p className="text-[#C49A62] text-[11px] font-bold uppercase tracking-[0.25em] mb-6">
              Custom Packaging, Made Simple
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-bold tracking-tight mb-8 leading-[1.05] max-w-[95%]">
              Custom packaging<br />that elevates<br />your <span className="text-[#C49A62]">brand.</span>
            </h1>
            <p className="text-[#E7E7E7] text-lg leading-relaxed max-w-md mb-10 font-light opacity-90">
              Premium, sustainable packaging solutions built around your product, your brand and your goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 mb-12">
              <Link
                href="/products"
                className="inline-flex h-14 items-center justify-center bg-white px-8 text-sm font-semibold text-[#0B0B0B] transition-colors hover:bg-[#E7E7E7]"
              >
                Explore Solutions <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                href="/products"
                className="inline-flex h-14 items-center justify-center border border-white/20 bg-transparent px-8 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Get a Quote
              </Link>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 text-sm text-[#A1A1AA] font-medium">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C49A62]" /> Sustainable Materials
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C49A62]" /> Low Minimum Orders
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C49A62]" /> Fast Turnaround Times
              </div>
            </div>
          </div>
          
          {/* Mobile-only image fallback since desktop uses the split background */}
          <div className="lg:hidden relative h-[40vh] w-full rounded-2xl overflow-hidden mt-8">
             <Image
              src="/images/hero-packaging.png"
              alt="Premium custom packaging on dark studio surface"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      </section>

      {/* 2. SECTION: END-TO-END SOLUTIONS */}
      <section id="solutions" className="py-24 lg:py-32 px-6 lg:px-12 bg-[#F7F5F1]">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16 max-w-3xl">
            <p className="text-[#C49A62] text-[11px] font-bold uppercase tracking-[0.25em] mb-4">
              End-to-End Packaging Solutions
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-[#0B0B0B] mb-6">
              Everything you need to scale
            </h2>
            <p className="text-lg text-[#71717A] leading-relaxed">
              From design to delivery, we make custom packaging simple, reliable and built for your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SolutionCard 
              icon={<PenTool className="w-7 h-7" strokeWidth={1.5} />}
              title="Custom Design"
              description="Stand out with packaging that reflects your brand and connects with your customers."
            />
            <SolutionCard 
              icon={<Settings className="w-7 h-7" strokeWidth={1.5} />}
              title="Premium Quality"
              description="High-quality materials and finishes that protect your product and elevate the unboxing experience."
            />
            <SolutionCard 
              icon={<Package className="w-7 h-7" strokeWidth={1.5} />}
              title="Flexible Production"
              description="Scalable solutions for businesses of any size, with low minimum order quantities."
            />
            <SolutionCard 
              icon={<Truck className="w-7 h-7" strokeWidth={1.5} />}
              title="Fast & Reliable"
              description="Quick turnaround and dependable delivery so you can keep your business moving."
            />
          </div>
        </div>
      </section>

      {/* 3. SECTION: FEATURED PRODUCTS */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <p className="text-[#C49A62] text-[11px] font-bold uppercase tracking-[0.25em] mb-4">
                Featured Products
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-[#0B0B0B] mb-6">
                Packaging for every<br />product and purpose
              </h2>
              <p className="text-lg text-[#71717A] leading-relaxed">
                Whether you&apos;re serving street food or shipping luxury goods, we provide premium packaging across all categories.
              </p>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center text-sm font-semibold text-[#0B0B0B] hover:text-[#C49A62] transition-colors pb-1 border-b border-transparent hover:border-[#C49A62]"
            >
              View all products <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProductCard 
              category="FOOD PACKAGING"
              title="Food Packaging"
              description="Boxes, bowls, bags and more."
              image="/images/foodpackaging.png"
              href="/products/burger-box"
            />
            <ProductCard 
              category="BEVERAGE PACKAGING"
              title="Beverage Packaging"
              description="Cups, sleeves and carriers."
              image="/images/beveragpackaging.png"
              href="/products/double-wall-cup"
            />
            <ProductCard 
              category="RETAIL PACKAGING"
              title="Retail Packaging"
              description="Boxes and wraps that build brand value."
              image="/images/retail.png"
              href="/products/carrier-bag"
            />
            <ProductCard 
              category="E-COMMERCE PACKAGING"
              title="E-Commerce Packaging"
              description="Protective, durable packaging made to impress."
              image="/images/ecomm.png"
              href="/products/salad-bowl"
            />
          </div>
        </div>
      </section>

      {/* 4. TRUST STRIP */}
      <section className="py-16 px-6 lg:px-12 bg-[#E7E7E7]/40 border-y border-[#E7E7E7]">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/4">
            <h3 className="text-lg font-bold text-[#0B0B0B] leading-tight">
              PACKAGING BUILT FOR<br />GROWING BRANDS
            </h3>
          </div>
          <div className="lg:w-3/4 grid grid-cols-2 md:grid-cols-4 gap-8 w-full">
            <div className="border-l border-[#0B0B0B]/10 pl-6">
              <p className="text-3xl font-bold text-[#0B0B0B] mb-1">100%</p>
              <p className="text-sm text-[#71717A] font-medium">Customisable</p>
            </div>
            <div className="border-l border-[#0B0B0B]/10 pl-6">
              <p className="text-3xl font-bold text-[#0B0B0B] mb-1">Low</p>
              <p className="text-sm text-[#71717A] font-medium">Minimum Orders</p>
            </div>
            <div className="border-l border-[#0B0B0B]/10 pl-6">
              <p className="text-3xl font-bold text-[#0B0B0B] mb-1">Fast</p>
              <p className="text-sm text-[#71717A] font-medium">Turnaround</p>
            </div>
            <div className="border-l border-[#0B0B0B]/10 pl-6">
              <p className="text-3xl font-bold text-[#0B0B0B] mb-1">End-to-End</p>
              <p className="text-sm text-[#71717A] font-medium">Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECTION: WHY KAIROPACK */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-[#151515] text-white">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 items-center">
          <div>
            <p className="text-[#C49A62] text-[11px] font-bold uppercase tracking-[0.25em] mb-4">
              Why Choose KairoPack?
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-8 leading-[1.1]">
              More than packaging.<br />
              A partner in your<br />
              brand&apos;s <span className="text-[#C49A62]">success.</span>
            </h2>
            <p className="text-[#A1A1AA] text-lg leading-relaxed mb-12 max-w-md">
              We combine creativity, quality and sustainability to deliver packaging solutions that make an impact.
            </p>
            <Link
              href="/#about"
              className="inline-flex h-12 items-center justify-center bg-white px-8 text-sm font-semibold text-[#0B0B0B] transition-colors hover:bg-[#E7E7E7]"
            >
              Learn More About Us <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 gap-y-16 gap-x-12">
            <div className="relative border-l border-white/10 pl-8">
              <Leaf className="w-8 h-8 text-[#C49A62] mb-6" strokeWidth={1.5} />
              <h3 className="text-2xl font-bold tracking-tight mb-2">Sustainable<br />by design</h3>
            </div>
            <div className="relative border-l border-white/10 pl-8">
              <ShieldCheck className="w-8 h-8 text-[#C49A62] mb-6" strokeWidth={1.5} />
              <h3 className="text-2xl font-bold tracking-tight mb-2">Premium quality<br />guaranteed</h3>
            </div>
            <div className="relative border-l border-white/10 pl-8">
              <Users className="w-8 h-8 text-[#C49A62] mb-6" strokeWidth={1.5} />
              <h3 className="text-2xl font-bold tracking-tight mb-2">Trusted by<br />businesses</h3>
            </div>
            <div className="relative border-l border-white/10 pl-8">
              <TrendingUp className="w-8 h-8 text-[#C49A62] mb-6" strokeWidth={1.5} />
              <h3 className="text-2xl font-bold tracking-tight mb-2">Focused on your<br />brand&apos;s growth</h3>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SECTION: PROCESS */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <p className="text-[#C49A62] text-[11px] font-bold uppercase tracking-[0.25em] mb-4">
              How it works
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-[#0B0B0B] mb-6">
              From idea to finished packaging.
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-12 lg:gap-8 relative">
            <div className="hidden md:block absolute top-6 left-0 w-full h-[1px] bg-[#E7E7E7] z-0" />
            
            <ProcessStep 
              number="01"
              title="Tell us what you need"
              description="Share your vision, dimensions and product requirements."
            />
            <ProcessStep 
              number="02"
              title="Choose your packaging"
              description="Select from our premium range of sustainable materials."
            />
            <ProcessStep 
              number="03"
              title="Approve your design"
              description="Review 3D proofs and finalise your custom artwork."
            />
            <ProcessStep 
              number="04"
              title="We manufacture & deliver"
              description="Production begins and ships directly to your door."
            />
          </div>
        </div>
      </section>

      {/* 7. SECTION: CTA */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-[#F7F5F1]">
        <div className="max-w-[1400px] mx-auto bg-white overflow-hidden shadow-sm border border-[#E7E7E7] grid lg:grid-cols-2 rounded-[2rem] lg:rounded-none">
          <div className="p-12 lg:p-24 flex flex-col justify-center order-2 lg:order-1">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-[#0B0B0B] mb-6 leading-[1.1]">
              Ready to bring your packaging to the next level?
            </h2>
            <p className="text-lg text-[#71717A] leading-relaxed mb-10">
              Let&apos;s create something your customers won&apos;t forget.
            </p>
            <div>
              <Link
                href="/customizer"
                className="inline-flex h-14 items-center justify-center bg-[#0B0B0B] px-8 text-sm font-semibold text-white transition-colors hover:bg-[#151515]"
              >
                Get Your Custom Quote <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="relative h-[300px] lg:h-auto order-1 lg:order-2">
            <Image
              src="https://images.unsplash.com/photo-1605807646983-377bc5a76493?auto=format&fit=crop&q=80&w=1600"
              alt="Open premium custom packaging box"
              fill
              className="object-cover object-center"
              unoptimized
            />
          </div>
        </div>
      </section>
    </main>
  );
}

function SolutionCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="group bg-white p-10 border border-transparent transition-all duration-300 hover:-translate-y-1.5 hover:border-[#C49A62] shadow-sm hover:shadow-md">
      <div className="mb-8 text-[#0B0B0B] group-hover:text-[#C49A62] transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-[#0B0B0B] mb-3 tracking-tight">{title}</h3>
      <p className="text-[#71717A] leading-relaxed text-sm">
        {description}
      </p>
    </div>
  );
}

function ProductCard({ category, title, description, image, href = "/products" }: { category: string; title: string; description: string; image: string; href?: string }) {
  return (
    <Link href={href} className="group block bg-white rounded-[16px] overflow-hidden border border-[#E7E7E7] hover:border-[#0B0B0B]/20 hover:shadow-md transition-all">
      <div className="relative aspect-[4/5] bg-[#E9E0D4] overflow-hidden border-b border-[#E7E7E7]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
          unoptimized
        />
      </div>
      <div className="p-8">
        <div className="text-[#C49A62] text-[10px] font-bold uppercase tracking-[0.2em] mb-3">{category}</div>
        <h3 className="text-xl font-bold text-[#0B0B0B] mb-2 group-hover:text-[#C49A62] transition-colors">{title}</h3>
        <p className="text-[#71717A] text-sm leading-relaxed mb-6">{description}</p>
        <div className="flex items-center text-sm font-semibold text-[#0B0B0B] group-hover:text-[#C49A62] transition-colors">
          Configure <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}

function ProcessStep({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="relative z-10">
      <div className="w-12 h-12 rounded-full bg-white border border-[#E7E7E7] flex items-center justify-center text-sm font-bold text-[#C49A62] mb-6">
        {number}
      </div>
      <h3 className="text-xl font-bold text-[#0B0B0B] mb-3 tracking-tight">{title}</h3>
      <p className="text-[#71717A] leading-relaxed text-sm">
        {description}
      </p>
    </div>
  );
}