import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function SustainabilityPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#0B0B0B] text-white pt-24">
      <section className="py-24 lg:py-32 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto text-center">
          <p className="text-[#C49A62] text-[11px] font-bold uppercase tracking-[0.25em] mb-4">
            Sustainability
          </p>
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-8">
            Designed for the future.
          </h1>
          <p className="text-lg text-[#A1A1AA] max-w-2xl mx-auto mb-12">
            We are committed to reducing environmental impact through innovative materials, efficient manufacturing, and recyclable packaging.
          </p>
          <Link
            href="/customizer"
            className="inline-flex h-14 items-center justify-center bg-white px-8 text-sm font-semibold text-[#0B0B0B] transition-colors hover:bg-[#E7E7E7]"
          >
            Start a Custom Project <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}