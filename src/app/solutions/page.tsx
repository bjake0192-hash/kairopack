import Link from "next/link";
import { ArrowRight, Package, Truck, PenTool, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function SolutionsPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#F7F5F1] text-[#0B0B0B] pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2000&auto=format&fit=crop"
            alt="Premium custom packaging solutions"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 text-center text-white">
          <p className="text-[#C49A62] text-[11px] font-bold uppercase tracking-[0.25em] mb-4">
            Our Solutions
          </p>
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 max-w-4xl mx-auto">
            Packaging built for your brand&apos;s physical presence.
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10 font-light">
            From structural engineering to global fulfillment, we provide end-to-end packaging solutions tailored to your operational needs and brand identity.
          </p>
          <Link
            href="/products"
            className="inline-flex h-14 items-center justify-center bg-white text-[#0B0B0B] px-8 text-sm font-bold transition-colors hover:bg-[#C49A62] hover:text-white"
          >
            Explore Catalog <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div>
              <div className="w-12 h-12 bg-[#F7F5F1] flex items-center justify-center rounded-none mb-6">
                <PenTool className="w-5 h-5 text-[#C49A62]" />
              </div>
              <h3 className="text-xl font-bold mb-3 tracking-tight">Structural Design</h3>
              <p className="text-[#71717A] text-sm leading-relaxed">
                Our engineering team develops bespoke structural designs that protect your product while creating a memorable unboxing experience.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-[#F7F5F1] flex items-center justify-center rounded-none mb-6">
                <Package className="w-5 h-5 text-[#C49A62]" />
              </div>
              <h3 className="text-xl font-bold mb-3 tracking-tight">Premium Materials</h3>
              <p className="text-[#71717A] text-sm leading-relaxed">
                Access an extensive library of sustainable, high-end materials including textured krafts, soft-touch coatings, and rigid boards.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-[#F7F5F1] flex items-center justify-center rounded-none mb-6">
                <Truck className="w-5 h-5 text-[#C49A62]" />
              </div>
              <h3 className="text-xl font-bold mb-3 tracking-tight">Supply Chain Management</h3>
              <p className="text-[#71717A] text-sm leading-relaxed">
                We handle the logistics from manufacturing facilities to your distribution centers, ensuring consistent quality and timely delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Formats Section */}
      <section className="py-24 px-6 lg:px-12 bg-[#F7F5F1]">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16">
            <p className="text-[#C49A62] text-[11px] font-bold uppercase tracking-[0.25em] mb-4">
              Formats
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-[#0B0B0B]">
              Engineered for every application.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group relative aspect-[4/3] overflow-hidden bg-[#E7E7E7]">
              <Image
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop"
                alt="Rigid Boxes"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-2">Rigid Set-up Boxes</h3>
                <p className="text-white/80 text-sm">Luxury packaging for premium consumer goods.</p>
              </div>
            </div>
            
            <div className="group relative aspect-[4/3] overflow-hidden bg-[#E7E7E7]">
              <Image
                src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1200&auto=format&fit=crop"
                alt="Folding Cartons"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-2">Folding Cartons</h3>
                <p className="text-white/80 text-sm">Versatile, high-volume retail packaging.</p>
              </div>
            </div>

            <div className="group relative aspect-[4/3] overflow-hidden bg-[#E7E7E7]">
              <Image
                src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1200&auto=format&fit=crop"
                alt="Mailers"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-2">E-commerce Mailers</h3>
                <p className="text-white/80 text-sm">Durable, brand-forward shipping solutions.</p>
              </div>
            </div>

            <div className="group relative aspect-[4/3] overflow-hidden bg-[#E7E7E7]">
              <Image
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop"
                alt="Flexible Packaging"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-2">Flexible Pouches</h3>
                <p className="text-white/80 text-sm">Barrier protection for food and cosmetics.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-12 bg-[#0B0B0B] text-white">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-6">
            Ready to elevate your packaging?
          </h2>
          <p className="text-[#A1A1AA] mb-10 text-lg">
            Connect with our packaging specialists to discuss your custom requirements.
          </p>
          <Link
            href="/contact"
            className="inline-flex h-14 items-center justify-center bg-white text-[#0B0B0B] px-8 text-sm font-bold transition-colors hover:bg-[#C49A62] hover:text-white"
          >
            Contact Sales <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
