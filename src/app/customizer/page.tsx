import { ProductCustomizer } from "@/components/product-customizer";
import Link from "next/link";

export default function CustomizerPage() {
  return (
    <main className="flex flex-col min-h-screen bg-zinc-50 pt-24">
      <section className="py-12 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-950 mb-4">
            Design your packaging
          </h1>
          <p className="text-zinc-600 text-lg">
            Select a product, upload your logo, and generate a production-ready brief.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-12 bg-zinc-50 flex-1">
        <div className="max-w-7xl mx-auto">
          <ProductCustomizer />
        </div>
      </section>
    </main>
  );
}