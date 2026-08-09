import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ProductsPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#F7F5F1] pt-24">
      <section className="py-12 bg-white border-b border-[#E7E7E7]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="text-[#C49A62] text-[11px] font-bold uppercase tracking-[0.25em] mb-4">
                Our Catalog
              </p>
              <h1 className="text-4xl font-bold tracking-tight text-[#0B0B0B] mb-4">
                Packaging Solutions
              </h1>
              <p className="text-[#71717A] text-lg max-w-2xl">
                Industry-standard vessels and wraps ready for your branding. Explore our complete range of premium catering packaging.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F7F5F1] flex-1">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            <CatalogCard 
              title="Double Wall Coffee Cup"
              category="Hot Service"
              price="From £145 / 100 units"
              imageUrl="/images/beveragpackaging.png"
              href="/products/double-wall-cup"
            />
            <CatalogCard 
              title="Custom Salad Bowl"
              category="Cold Service"
              price="From £168 / 100 units"
              imageUrl="/images/ecomm.png"
              href="/products/salad-bowl"
            />
            <CatalogCard 
              title="Burger & Meal Box"
              category="Takeaway"
              price="From £182 / 100 units"
              imageUrl="/images/foodpackaging.png"
              href="/products/burger-box"
            />
            <CatalogCard 
              title="Luxury Carrier Bag"
              category="Transit"
              price="From £128 / 100 units"
              imageUrl="/images/retail.png"
              href="/products/carrier-bag"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

function CatalogCard({ title, category, price, imageUrl, href }: { title: string, category: string, price: string, imageUrl: string, href: string }) {
  return (
    <Link href={href} className="group block bg-white rounded-[16px] overflow-hidden border border-[#E7E7E7] hover:border-[#0B0B0B]/20 hover:shadow-md transition-all">
      <div className="relative aspect-[4/3] bg-[#E9E0D4] overflow-hidden border-b border-[#E7E7E7]">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
          unoptimized
        />
      </div>
      <div className="p-5">
        <div className="text-[#C49A62] text-[9px] font-bold uppercase tracking-[0.2em] mb-2">{category}</div>
        <h3 className="text-lg font-bold text-[#0B0B0B] mb-1 group-hover:text-[#C49A62] transition-colors line-clamp-1">{title}</h3>
        <p className="text-xs text-[#71717A] font-medium mb-4">{price}</p>
        <div className="flex items-center text-xs font-semibold text-[#0B0B0B] group-hover:text-[#C49A62] transition-colors">
          Configure <ArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}