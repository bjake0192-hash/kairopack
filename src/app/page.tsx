import { ProductCustomizer } from "@/components/product-customizer";
import Image from "next/image";
import Link from "next/link";

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
            <Link
              href="#products"
              className="inline-flex justify-center items-center h-14 rounded-full bg-zinc-950 px-8 text-sm font-semibold text-white transition hover:bg-zinc-800 active:scale-[0.98]"
            >
              View Catalog
            </Link>
            <Link
              href="#customizer"
              className="inline-flex justify-center items-center h-14 rounded-full border border-zinc-200 bg-white px-8 text-sm font-semibold text-zinc-900 transition hover:border-zinc-400 hover:bg-zinc-50 active:scale-[0.98]"
            >
              Start Customising
            </Link>
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

      {/* Product Catalog Grid */}
      <section id="products" className="py-24 border-b border-zinc-200 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-950 mb-4">
                Packaging Catalog
              </h2>
              <p className="text-zinc-600 max-w-xl">
                Browse our complete range of premium catering vessels. Everything is fully customizable with your branding and ships direct from our certified vendors.
              </p>
            </div>
            <Link
              href="#customizer"
              className="inline-flex h-10 items-center justify-center rounded-full border border-zinc-200 bg-white px-6 text-sm font-medium text-zinc-900 transition hover:border-zinc-400 hover:bg-zinc-50"
            >
              Customize Any Product
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <CatalogCard 
              title="Double Wall Coffee Cup"
              category="Hot Drinks"
              description="Premium insulation with a matte finish. Available in 8oz, 12oz, and 16oz sizes."
              imagePrompt="Minimalist%20matte%20black%20double%20wall%20paper%20coffee%20cup%2C%20clean%20studio%20lighting%2C%20white%20background"
            />
            <CatalogCard 
              title="Kraft Salad Bowl"
              category="Food Containers"
              description="Sustainable unbleached kraft paper with secure PLA lids. Perfect for cold or warm dishes."
              imagePrompt="Kraft%20paper%20salad%20bowl%20with%20clear%20lid%2C%20minimalist%20presentation%2C%20studio%20lighting%2C%20white%20background"
            />
            <CatalogCard 
              title="Premium Burger Box"
              category="Takeaway"
              description="Vented corrugated board construction prevents sogginess. Secure tab closure."
              imagePrompt="Premium%20corrugated%20burger%20box%20packaging%2C%20closed%2C%20clean%20modern%20aesthetic%2C%20white%20background"
            />
            <CatalogCard 
              title="Twisted Handle Carrier"
              category="Bags"
              description="Heavy-duty 120gsm kraft paper bags with reinforced twisted handles."
              imagePrompt="Brown%20kraft%20paper%20carrier%20bag%20with%20twisted%20handles%2C%20standing%20upright%2C%20minimalist%20studio%20lighting"
            />
            <CatalogCard 
              title="Clear PET Cold Cup"
              category="Cold Drinks"
              description="Crystal clear shatter-resistant cups for iced coffees, smoothies, and juices."
              imagePrompt="Clear%20plastic%20cold%20cup%20with%20dome%20lid%2C%20empty%2C%20clean%20minimalist%20studio%20photography"
            />
            <CatalogCard 
              title="Greaseproof Wrap"
              category="Wraps & Liners"
              description="Custom printed food-safe wrapping paper. Ideal for sandwiches, burgers, and basket liners."
              imagePrompt="Stack%20of%20premium%20greaseproof%20food%20wrapping%20paper%20sheets%2C%20minimal%20clean%20composition%2C%20white%20background"
            />
          </div>
        </div>
      </section>

      {/* Customizer Section */}
      <section id="customizer" className="py-24 lg:py-32 px-6 lg:px-12 bg-zinc-50">
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

function CatalogCard({ title, category, description, imagePrompt }: { title: string; category: string; description: string; imagePrompt: string }) {
  return (
    <Link href="#customizer" className="group block rounded-[2rem] border border-zinc-200 bg-white overflow-hidden transition hover:border-zinc-300 hover:shadow-xl hover:shadow-zinc-200/50">
      <div className="relative aspect-square bg-zinc-100 border-b border-zinc-200 overflow-hidden">
        <Image
          src={`https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${imagePrompt}&image_size=square`}
          alt={title}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          unoptimized
        />
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center rounded-full border border-zinc-200 bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-900">
            {category}
          </span>
        </div>
      </div>
      <div className="p-6 sm:p-8">
        <h3 className="text-lg font-semibold text-zinc-950 mb-2 tracking-tight group-hover:text-zinc-700 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-zinc-600 leading-relaxed mb-6">
          {description}
        </p>
        <div className="flex items-center text-xs font-semibold text-zinc-900 tracking-tight">
          Customize & Order
          <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </Link>
  );
}