import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#F7F5F1] text-[#0B0B0B] pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1541628951107-a5af53bdc8d4?q=80&w=2000&auto=format&fit=crop"
            alt="Printing press machinery"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 text-center text-white">
          <p className="text-[#C49A62] text-[11px] font-bold uppercase tracking-[0.25em] mb-4">
            Our Story
          </p>
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 max-w-4xl mx-auto">
            Design-led packaging.
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10 font-light">
            Born from Kairo Studio, we bridge the gap between world-class brand identity and physical manufacturing.
          </p>
        </div>
      </section>

      {/* The Story Section */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-8 text-[#0B0B0B]">
                The agency advantage.
              </h2>
              <p className="text-[#71717A] text-lg mb-6 leading-relaxed">
                Most packaging manufacturers understand logistics, but struggle with design. Most design agencies understand aesthetics, but fail at structural engineering and cost-effective production.
              </p>
              <p className="text-[#71717A] text-lg mb-6 leading-relaxed">
                KairoPack was built to solve this disconnect. By integrating our award-winning design team from Kairo Studio directly with our global manufacturing network, we eliminate the friction between concept and reality.
              </p>
              <p className="text-[#71717A] text-lg leading-relaxed">
                The result? Packaging that looks like it belongs in a gallery, engineered to survive the supply chain.
              </p>
            </div>
            <div className="relative aspect-[4/3] bg-[#E7E7E7] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1587324438673-56c808f921d2?q=80&w=1200&auto=format&fit=crop"
                alt="Craftsmanship and production"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 px-6 lg:px-12 bg-[#F7F5F1]">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16">
            <p className="text-[#C49A62] text-[11px] font-bold uppercase tracking-[0.25em] mb-4">
              Our Principles
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-[#0B0B0B]">
              How we operate.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-[#0B0B0B]/10 pt-12">
            <div>
              <span className="text-[#C49A62] text-xl font-bold mb-4 block">01</span>
              <h3 className="text-xl font-bold mb-3 tracking-tight">Tactile Excellence</h3>
              <p className="text-[#71717A] text-sm leading-relaxed">
                We believe packaging is the most intimate touchpoint a brand has with its customer. Every texture, weight, and finish is selected with intention.
              </p>
            </div>
            
            <div>
              <span className="text-[#C49A62] text-xl font-bold mb-4 block">02</span>
              <h3 className="text-xl font-bold mb-3 tracking-tight">Radical Transparency</h3>
              <p className="text-[#71717A] text-sm leading-relaxed">
                No hidden setup fees. No surprise tooling costs. We provide clear, itemized quotes from the initial prototype to full-scale production.
              </p>
            </div>

            <div>
              <span className="text-[#C49A62] text-xl font-bold mb-4 block">03</span>
              <h3 className="text-xl font-bold mb-3 tracking-tight">Scalable Systems</h3>
              <p className="text-[#71717A] text-sm leading-relaxed">
                Whether you need 500 units for a PR mailer or 500,000 for global retail distribution, our supply chain flexes to meet your volume.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-12 bg-[#0B0B0B] text-white">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-6">
            Ready to build something tangible?
          </h2>
          <p className="text-[#A1A1AA] mb-10 text-lg">
            Join the world&apos;s leading brands who trust KairoPack with their physical presence.
          </p>
          <Link
            href="/contact"
            className="inline-flex h-14 items-center justify-center bg-white text-[#0B0B0B] px-8 text-sm font-bold transition-colors hover:bg-[#C49A62] hover:text-white"
          >
            Start the Conversation <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
