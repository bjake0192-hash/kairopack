import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function IndustriesPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#F7F5F1] text-[#0B0B0B] pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/industries-hero.jpg"
            alt="Packaging across industries"
            fill
            className="object-cover brightness-[0.4]"
            priority
          />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 text-center text-white">
          <p className="text-[#C49A62] text-[11px] font-bold uppercase tracking-[0.25em] mb-4">
            Industries We Serve
          </p>
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 max-w-4xl mx-auto">
            Expertise across every sector.
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10 font-light">
            From high-barrier food packaging to luxury cosmetic unboxing experiences, we engineer solutions for the specific demands of your industry.
          </p>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-24">
          
          {/* Coffee & Beverage */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square lg:aspect-[4/3] bg-[#E7E7E7] overflow-hidden">
              <Image
                src="/images/industry-food.jpg"
                alt="Coffee Packaging"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-[#C49A62] text-[11px] font-bold uppercase tracking-[0.25em] mb-4">01 / Food & Beverage</p>
              <h2 className="text-4xl font-bold tracking-tight mb-6 text-[#0B0B0B]">Freshness guaranteed.</h2>
              <p className="text-[#71717A] text-lg mb-8 leading-relaxed">
                Our food and beverage packaging is designed with high-barrier materials to extend shelf life while maintaining a premium aesthetic. From coffee roasters to artisanal snacks, we provide FDA-compliant materials that protect your product&apos;s integrity.
              </p>
              <ul className="flex flex-col gap-4 mb-8">
                <li className="flex items-center text-sm font-semibold text-[#0B0B0B]">
                  <span className="w-1.5 h-1.5 bg-[#C49A62] mr-3"></span> High-barrier flexible pouches
                </li>
                <li className="flex items-center text-sm font-semibold text-[#0B0B0B]">
                  <span className="w-1.5 h-1.5 bg-[#C49A62] mr-3"></span> Retail-ready folding cartons
                </li>
                <li className="flex items-center text-sm font-semibold text-[#0B0B0B]">
                  <span className="w-1.5 h-1.5 bg-[#C49A62] mr-3"></span> Degassing valves & resealable zippers
                </li>
              </ul>
            </div>
          </div>

          {/* Cosmetics & Beauty */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center lg:flex-row-reverse">
            <div className="order-2 lg:order-1">
              <p className="text-[#C49A62] text-[11px] font-bold uppercase tracking-[0.25em] mb-4">02 / Health & Beauty</p>
              <h2 className="text-4xl font-bold tracking-tight mb-6 text-[#0B0B0B]">Luxury at first touch.</h2>
              <p className="text-[#71717A] text-lg mb-8 leading-relaxed">
                The beauty industry demands packaging that reflects the quality of the product inside. We specialize in premium finishes, custom inserts, and structural designs that elevate the consumer unboxing experience and drive brand loyalty.
              </p>
              <ul className="flex flex-col gap-4 mb-8">
                <li className="flex items-center text-sm font-semibold text-[#0B0B0B]">
                  <span className="w-1.5 h-1.5 bg-[#C49A62] mr-3"></span> Premium rigid set-up boxes
                </li>
                <li className="flex items-center text-sm font-semibold text-[#0B0B0B]">
                  <span className="w-1.5 h-1.5 bg-[#C49A62] mr-3"></span> Custom molded pulp & foam inserts
                </li>
                <li className="flex items-center text-sm font-semibold text-[#0B0B0B]">
                  <span className="w-1.5 h-1.5 bg-[#C49A62] mr-3"></span> Foil stamping, embossing, and spot UV
                </li>
              </ul>
            </div>
            <div className="relative aspect-square lg:aspect-[4/3] bg-[#E7E7E7] overflow-hidden order-1 lg:order-2">
              <Image
                src="/images/industry-beauty.jpg"
                alt="Cosmetics Packaging"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* E-commerce */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square lg:aspect-[4/3] bg-[#E7E7E7] overflow-hidden">
              <Image
                src="/images/industry-ecommerce.jpg"
                alt="E-commerce Packaging"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-[#C49A62] text-[11px] font-bold uppercase tracking-[0.25em] mb-4">03 / E-commerce</p>
              <h2 className="text-4xl font-bold tracking-tight mb-6 text-[#0B0B0B]">DTC unboxing mastery.</h2>
              <p className="text-[#71717A] text-lg mb-8 leading-relaxed">
                In the direct-to-consumer space, your packaging is your storefront. We engineer mailers and shipping boxes that are not only structurally sound for transit but also optimized for dimensional weight pricing and a memorable reveal.
              </p>
              <ul className="flex flex-col gap-4 mb-8">
                <li className="flex items-center text-sm font-semibold text-[#0B0B0B]">
                  <span className="w-1.5 h-1.5 bg-[#C49A62] mr-3"></span> Corrugated mailer boxes
                </li>
                <li className="flex items-center text-sm font-semibold text-[#0B0B0B]">
                  <span className="w-1.5 h-1.5 bg-[#C49A62] mr-3"></span> Custom tissue paper & branded tape
                </li>
                <li className="flex items-center text-sm font-semibold text-[#0B0B0B]">
                  <span className="w-1.5 h-1.5 bg-[#C49A62] mr-3"></span> Poly & kraft mailer bags
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-12 bg-[#0B0B0B] text-white">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-6">
            Don&apos;t see your industry?
          </h2>
          <p className="text-[#A1A1AA] mb-10 text-lg">
            We work across dozens of sectors. Contact us to see samples of our work in your specific vertical.
          </p>
          <Link
            href="/contact"
            className="inline-flex h-14 items-center justify-center bg-white text-[#0B0B0B] px-8 text-sm font-bold transition-colors hover:bg-[#C49A62] hover:text-white"
          >
            Request Samples <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
