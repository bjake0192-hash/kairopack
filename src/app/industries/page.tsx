import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function IndustriesPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#F7F5F1] text-[#0B0B0B] pt-24">
      <section className="py-24 lg:py-32 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto text-center">
          <p className="text-[#C49A62] text-[11px] font-bold uppercase tracking-[0.25em] mb-4">
            Industries We Serve
          </p>
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-8">
            Expertise across sectors.
          </h1>
          <p className="text-lg text-[#71717A] max-w-2xl mx-auto mb-12">
            Whether you are in food & beverage, retail, or e-commerce, we understand the unique demands of your industry.
          </p>
          <Link
            href="/customizer"
            className="inline-flex h-14 items-center justify-center bg-[#0B0B0B] px-8 text-sm font-semibold text-white transition-colors hover:bg-[#151515]"
          >
            Start a Custom Project <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}