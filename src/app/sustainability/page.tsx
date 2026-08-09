import Link from "next/link";
import { ArrowRight, Leaf, Recycle, Droplets } from "lucide-react";
import Image from "next/image";

export default function SustainabilityPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#0B0B0B] text-white pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/sustain-hero.jpg"
            alt="Sustainable environment"
            fill
            className="object-cover brightness-[0.3]"
            priority
          />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <p className="text-[#C49A62] text-[11px] font-bold uppercase tracking-[0.25em] mb-4">
            Sustainability
          </p>
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 max-w-4xl mx-auto">
            Designed for the future.
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10 font-light">
            Premium packaging shouldn&apos;t compromise the planet. We engineer solutions that reduce environmental impact through circular materials and efficient manufacturing.
          </p>
        </div>
      </section>

      {/* The Three Pillars */}
      <section className="py-24 px-6 lg:px-12 bg-[#151515]">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-6">
              Our approach to circularity.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-[#0B0B0B] p-10 border border-white/10">
              <div className="w-12 h-12 bg-white/5 flex items-center justify-center mb-6">
                <Leaf className="w-5 h-5 text-[#C49A62]" />
              </div>
              <h3 className="text-xl font-bold mb-4 tracking-tight">Responsibly Sourced</h3>
              <p className="text-[#A1A1AA] text-sm leading-relaxed mb-6">
                We prioritize FSC-certified papers, post-consumer recycled (PCR) content, and rapidly renewable materials like bamboo and hemp to reduce reliance on virgin fibers.
              </p>
            </div>
            
            <div className="bg-[#0B0B0B] p-10 border border-white/10">
              <div className="w-12 h-12 bg-white/5 flex items-center justify-center mb-6">
                <Droplets className="w-5 h-5 text-[#C49A62]" />
              </div>
              <h3 className="text-xl font-bold mb-4 tracking-tight">Eco-friendly Inks</h3>
              <p className="text-[#A1A1AA] text-sm leading-relaxed mb-6">
                Our printing facilities utilize soy and water-based inks that contain fewer VOCs (Volatile Organic Compounds) compared to traditional petroleum-based alternatives.
              </p>
            </div>

            <div className="bg-[#0B0B0B] p-10 border border-white/10">
              <div className="w-12 h-12 bg-white/5 flex items-center justify-center mb-6">
                <Recycle className="w-5 h-5 text-[#C49A62]" />
              </div>
              <h3 className="text-xl font-bold mb-4 tracking-tight">Designed to Recyle</h3>
              <p className="text-[#A1A1AA] text-sm leading-relaxed mb-6">
                We engineer structural designs that eliminate the need for mixed materials or harsh adhesives, ensuring the end product is easily recyclable by the end consumer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Material Spotlight */}
      <section className="py-24 px-6 lg:px-12 bg-[#0B0B0B]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#C49A62] text-[11px] font-bold uppercase tracking-[0.25em] mb-4">Material Innovation</p>
              <h2 className="text-4xl font-bold tracking-tight mb-6">Post-Consumer Recycled Kraft.</h2>
              <p className="text-[#A1A1AA] text-lg mb-8 leading-relaxed">
                Our signature PCR Kraft material offers the perfect balance of premium tactile feel and environmental responsibility. Unbleached and highly durable, it provides an authentic, raw aesthetic while keeping waste out of landfills.
              </p>
              <Link
                href="/products"
                className="inline-flex h-12 items-center justify-center border border-white/20 px-6 text-sm font-bold transition-colors hover:bg-white hover:text-[#0B0B0B]"
              >
                Shop Eco-friendly Products
              </Link>
            </div>
            <div className="relative aspect-square lg:aspect-[4/3] bg-[#151515] overflow-hidden">
              <Image
                src="/images/sustain-kraft.jpg"
                alt="Recycled Kraft Cardboard"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-12 bg-[#F7F5F1] text-[#0B0B0B]">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-6">
            Audit your packaging footprint.
          </h2>
          <p className="text-[#71717A] mb-10 text-lg">
            Speak with our sustainability experts to identify areas where you can reduce material usage and transition to eco-friendly alternatives.
          </p>
          <Link
            href="/contact"
            className="inline-flex h-14 items-center justify-center bg-[#0B0B0B] text-white px-8 text-sm font-bold transition-colors hover:bg-[#C49A62]"
          >
            Request a Consultation <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
