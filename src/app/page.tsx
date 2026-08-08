import { ProductCustomizer } from "@/components/product-customizer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* 50/50 Hero Section */}
      <section className="grid lg:grid-cols-2 min-h-[90vh] border-b border-zinc-200">
        {/* Left: Copy & CTA */}
        <div className="flex flex-col justify-center px-8 py-20 lg:px-16 xl:px-24">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-6">
            Kairo Pack B2B
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tighter text-zinc-950 leading-[1.1] text-balance mb-8">
            Upload your logo.<br />
            See it instantly.<br />
            Ship to your kitchen.
          </h1>
          <p className="text-lg text-zinc-600 leading-relaxed max-w-xl mb-12">
            The professional standard for custom catering packaging. Preview your branding directly on cups, bowls, and boxes before you order. No generic mockups, no hidden vendor friction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#customizer"
              className="inline-flex justify-center items-center h-14 rounded-full bg-zinc-950 px-8 text-sm font-semibold text-white transition hover:bg-zinc-800 active:scale-[0.98]"
            >
              Start Customising
            </a>
            <a
              href="/vendor"
              className="inline-flex justify-center items-center h-14 rounded-full border border-zinc-200 bg-white px-8 text-sm font-semibold text-zinc-900 transition hover:border-zinc-400 hover:bg-zinc-50 active:scale-[0.98]"
            >
              Vendor Workspace
            </a>
          </div>
        </div>

        {/* Right: Immersive Image */}
        <div className="relative hidden lg:block bg-zinc-100 border-l border-zinc-200">
          <Image
            src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=High-end%20minimal%20catering%20packaging%2C%20matte%20black%20coffee%20cup%20and%20craft%20paper%20bag%20on%20a%20concrete%20counter%2C%20professional%20studio%20lighting%2C%20realistic&image_size=portrait_4_3"
            alt="High-end minimal catering packaging"
            fill
            className="object-cover object-center"
            priority
            unoptimized
          />
        </div>
      </section>

      {/* Feature Grid */}
      <section className="border-b border-zinc-200 bg-zinc-50/50">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-zinc-200">
          <FeatureCard 
            number="01"
            title="Instant Preview"
            description="Upload your vector or PNG and see it mapped onto physical product dimensions immediately."
          />
          <FeatureCard 
            number="02"
            title="Premium Finishes"
            description="Access exclusive materials. Select from kraft paper, matte black, or unbleached sustainable bases."
          />
          <FeatureCard 
            number="03"
            title="Blind Routing"
            description="Orders flow directly to certified manufacturers. The supply chain remains completely invisible to buyers."
          />
          <FeatureCard 
            number="04"
            title="Realtime Chat"
            description="Clarify artwork specifications securely. Talk directly with production without exposing contact details."
          />
        </div>
      </section>

      {/* Customizer Section */}
      <section id="customizer" className="py-24 lg:py-32 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-950 mb-4">
              Configure your packaging
            </h2>
            <p className="text-zinc-600">
              Select a product, upload your brand assets, and generate a production-ready brief in seconds.
            </p>
          </div>
          
          <ProductCustomizer />
        </div>
      </section>

      {/* Footer / Backend Notes */}
      <footer className="border-t border-zinc-200 bg-zinc-950 py-20 px-8 lg:px-16 text-zinc-400 text-sm">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-24">
          <div>
            <p className="text-zinc-50 font-semibold mb-4 tracking-tight">Kairo Pack Architecture</p>
            <p className="max-w-md leading-relaxed">
              This storefront runs on Next.js 16, utilizing React Server Components. Supabase manages the secure vendor routing, Row Level Security (RLS) policies, and Realtime WebSocket connections for the hidden chat. Resend triggers all transactional order and message events.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 lg:justify-end">
            <div>
              <p className="text-zinc-50 font-semibold mb-4 tracking-tight">Stack</p>
              <ul className="space-y-3">
                <li>Next.js App Router</li>
                <li>Tailwind CSS v4</li>
                <li>Supabase Auth & DB</li>
                <li>Resend Email API</li>
              </ul>
            </div>
            <div>
              <p className="text-zinc-50 font-semibold mb-4 tracking-tight">Workflows</p>
              <ul className="space-y-3">
                <li><a href="#customizer" className="hover:text-white transition">Product Customizer</a></li>
                <li><a href="/vendor" className="hover:text-white transition">Vendor Dashboard</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

function FeatureCard({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="p-8 lg:p-12 hover:bg-white transition-colors duration-300">
      <p className="text-xs font-mono text-zinc-400 mb-6">{number}</p>
      <h3 className="text-lg font-semibold text-zinc-950 mb-3 tracking-tight">{title}</h3>
      <p className="text-sm text-zinc-600 leading-relaxed">{description}</p>
    </div>
  );
}