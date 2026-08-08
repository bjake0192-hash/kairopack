import Image from "next/image";
import Link from "next/link";
import { ArrowRight, PenTool, Settings, Package, Truck, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#F7F5F1] text-[#0B0B0B]">
      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center bg-[#0B0B0B] text-white overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B] via-[#0B0B0B]/80 to-transparent z-10" />
          <Image
            src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Dark%20studio%20photography%20of%20a%20premium%20matte%20black%20takeaway%20food%20box%20with%20subtle%20gold%20branding%2C%20soft%20directional%20lighting%2C%20premium%20food%20photography%20aesthetic&image_size=landscape_16_9"
            alt="Premium custom packaging"
            fill
            className="object-cover object-right opacity-70"
            priority
            unoptimized
          />
        </div>
        
        <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center max-w-2xl py-20">
            <p className="text-[#C49A62] text-[11px] font-bold uppercase tracking-[0.25em] mb-6">
              Custom Packaging, Made Simple
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
              Custom packaging<br />that elevates<br />your <span className="text-[#C49A62]">brand.</span>
            </h1>
            <p className="text-[#E7E7E7] text-lg lg:text-xl leading-relaxed max-w-lg mb-10 font-light">
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
                href="/customizer"
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
        </div>
      </section>

      {/* SECTION 2: END-TO-END SOLUTIONS */}
      <section id="solutions" className="py-32 px-6 lg:px-12 bg-[#F7F5F1]">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-20 max-w-3xl">
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
              icon={<PenTool className="w-6 h-6" />}
              title="Custom Design"
              description="Stand out with packaging that reflects your brand and connects with your customers."
            />
            <SolutionCard 
              icon={<Settings className="w-6 h-6" />}
              title="Premium Quality"
              description="High-quality materials and finishes that protect your product and elevate the unboxing experience."
            />
            <SolutionCard 
              icon={<Package className="w-6 h-6" />}
              title="Flexible Production"
              description="Scalable solutions for businesses of any size, with low minimum order quantities."
            />
            <SolutionCard 
              icon={<Truck className="w-6 h-6" />}
              title="Fast & Reliable"
              description="Quick turnaround and dependable delivery so you can keep your business moving."
            />
          </div>
        </div>
      </section>

      {/* SECTION 3: FEATURED PRODUCTS */}
      <section className="py-32 px-6 lg:px-12 bg-white">
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
                Whether you're serving street food or shipping luxury goods, we provide premium packaging across all categories.
              </p>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center text-sm font-semibold text-[#0B0B0B] hover:text-[#C49A62] transition-colors pb-2 border-b-2 border-transparent hover:border-[#C49A62]"
            >
              View all products <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProductCard 
              title="Food Packaging"
              description="Boxes, bowls, bags and more."
              image="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Premium%20kraft%20burger%20box%2C%20clean%20dark%20studio%20photography%2C%20soft%20shadows&image_size=square"
            />
            <ProductCard 
              title="Beverage Packaging"
              description="Cups, sleeves and carriers."
              image="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Premium%20branded%20matte%20black%20takeaway%20coffee%20cup%2C%20dark%20studio%20photography&image_size=square"
            />
            <ProductCard 
              title="Retail Packaging"
              description="Boxes and wraps that build brand value."
              image="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Premium%20matte%20black%20retail%20boxes%2C%20dark%20studio%20photography&image_size=square"
            />
            <ProductCard 
              title="E-Commerce Packaging"
              description="Protective, durable packaging made to impress."
              image="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Premium%20branded%20corrugated%20shipping%20box%20mailer%2C%20dark%20studio%20photography&image_size=square"
            />
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY KAIROPACK */}
      <section className="py-32 px-6 lg:px-12 bg-[#151515] text-white">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 items-center">
          <div>
            <p className="text-[#C49A62] text-[11px] font-bold uppercase tracking-[0.25em] mb-4">
              Why Choose KairoPack?
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-8 leading-[1.1]">
              More than packaging.<br />
              A partner in your<br />
              brand's <span className="text-[#C49A62]">success.</span>
            </h2>
            <p className="text-[#A1A1AA] text-lg leading-relaxed mb-12">
              We combine creativity, quality and sustainability to deliver packaging solutions that make a real commercial impact.
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
              <div className="w-12 h-12 rounded-full border border-[#C49A62]/30 flex items-center justify-center mb-6 text-[#C49A62]">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight mb-2">Sustainable<br />by design</h3>
            </div>
            <div className="relative border-l border-white/10 pl-8">
              <div className="w-12 h-12 rounded-full border border-[#C49A62]/30 flex items-center justify-center mb-6 text-[#C49A62]">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight mb-2">Premium quality<br />guaranteed</h3>
            </div>
            <div className="relative border-l border-white/10 pl-8">
              <div className="w-12 h-12 rounded-full border border-[#C49A62]/30 flex items-center justify-center mb-6 text-[#C49A62]">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight mb-2">Trusted by<br />businesses</h3>
            </div>
            <div className="relative border-l border-white/10 pl-8">
              <div className="w-12 h-12 rounded-full border border-[#C49A62]/30 flex items-center justify-center mb-6 text-[#C49A62]">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight mb-2">Focused on your<br />brand's growth</h3>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CTA */}
      <section className="py-32 px-6 lg:px-12 bg-[#F7F5F1]">
        <div className="max-w-[1400px] mx-auto bg-white rounded-none overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] grid lg:grid-cols-2">
          <div className="p-12 lg:p-24 flex flex-col justify-center">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-[#0B0B0B] mb-6">
              Ready to bring your packaging to the next level?
            </h2>
            <p className="text-lg text-[#71717A] leading-relaxed mb-10">
              Let's create something your customers won't forget.
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
          <div className="relative min-h-[400px] lg:min-h-full bg-[#E9E0D4]">
            <Image
              src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Premium%20custom%20packaging%20box%20on%20off-white%20background%2C%20studio%20lighting&image_size=square"
              alt="Custom packaging box"
              fill
              className="object-cover"
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
    <div className="group bg-white p-10 border border-[#E7E7E7] transition-all duration-300 hover:-translate-y-2 hover:border-[#C49A62] hover:shadow-lg">
      <div className="w-12 h-12 rounded-full bg-[#F7F5F1] flex items-center justify-center mb-8 text-[#0B0B0B] group-hover:text-[#C49A62] group-hover:bg-[#C49A62]/10 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-[#0B0B0B] mb-4 tracking-tight">{title}</h3>
      <p className="text-[#71717A] leading-relaxed text-sm">
        {description}
      </p>
    </div>
  );
}

function ProductCard({ title, description, image }: { title: string; description: string; image: string }) {
  return (
    <Link href="/products" className="group block">
      <div className="relative aspect-[4/5] bg-[#E9E0D4] overflow-hidden mb-6">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.2,1,0.2,1)]"
          unoptimized
        />
      </div>
      <div>
        <p className="text-[#C49A62] text-[10px] font-bold uppercase tracking-[0.2em] mb-2">{title}</p>
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-[#0B0B0B] tracking-tight">{title}</h3>
          <ArrowRight className="w-5 h-5 text-[#0B0B0B] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
        </div>
        <p className="text-[#71717A] text-sm mt-2">{description}</p>
      </div>
    </Link>
  );
}