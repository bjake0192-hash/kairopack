import { ProductCustomizer } from "@/components/product-customizer";

const highlights = [
  "Upload a real logo file and preview it directly on cups, bowls, boxes, and bags.",
  "Keep vendors hidden on the storefront while routing each order into a vendor-side pending queue.",
  "Use Supabase Realtime for order chat and Resend for confirmations plus new-message alerts.",
];

const workflow = [
  {
    title: "1. Buyer customises the pack",
    description:
      "Customers choose the product, upload their logo, set the logo position, and optionally add a one-off branded design service.",
  },
  {
    title: "2. Order enters the vendor queue",
    description:
      "Each order becomes a pending vendor job with the product spec, quantity, branding choices, shipping name, and shipping address.",
  },
  {
    title: "3. Vendor asks follow-up questions",
    description:
      "A Supabase Realtime thread gives the vendor a secure way to request artwork clarifications without exposing extra buyer information.",
  },
];

const backendNotes = [
  "Vendor name stays hidden on the product page and customer-facing checkout.",
  "Vendor-side view only exposes the shipping contact, shipping address, and production brief needed to fulfil the order.",
  "Buyer and vendor confirmation emails are sent via Resend, with optional chat notification emails for unread messages.",
];

export default function Home() {
  return (
    <main className="bg-[#f6f1eb] text-stone-950">
      <section className="border-b border-stone-200">
        <div className="mx-auto flex max-w-7xl flex-col gap-16 px-6 py-8 sm:px-10 lg:px-12">
          <header className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-stone-500">Kairo Pack</p>
              <h1 className="mt-3 max-w-3xl text-5xl font-semibold tracking-tight text-balance sm:text-6xl">
                Custom catering packaging with instant logo previews
              </h1>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="#customizer"
                className="rounded-full bg-stone-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-stone-800"
              >
                Start customising
              </a>
              <a
                href="/vendor"
                className="rounded-full border border-stone-300 px-5 py-3 text-sm font-semibold text-stone-700 transition hover:border-stone-950 hover:text-stone-950"
              >
                View vendor workspace
              </a>
            </div>
          </header>

          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="max-w-2xl text-lg leading-8 text-stone-700">
                This storefront is built around a packaging-first buying journey. Customers can upload their logo from
                their device, see it positioned on the product, and request branded catering packaging without seeing
                which vendor will manufacture it.
              </p>

              <div className="mt-8 grid gap-4">
                {highlights.map((highlight) => (
                  <div key={highlight} className="rounded-3xl border border-stone-200 bg-white/70 px-5 py-4">
                    <p className="text-sm leading-6 text-stone-700">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-stone-200 bg-stone-950 p-6 text-white shadow-[0_30px_80px_rgba(19,17,14,0.18)]">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-500">Built for Catering</p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <Metric value="4" label="Pack types ready for preview" />
                <Metric value="£50" label="One-off custom branding upsell" />
                <Metric value="Realtime" label="Vendor chat workflow" />
                <Metric value="Hidden" label="Vendor identity on storefront" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-10 lg:px-12">
        <ProductCustomizer />
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 pb-12 sm:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:px-12">
        <div className="rounded-[2rem] border border-stone-200 bg-white p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-500">Operational Flow</p>
          <div className="mt-5 space-y-4">
            {workflow.map((item) => (
              <article key={item.title} className="rounded-[1.5rem] border border-stone-200 bg-stone-50 p-5">
                <h2 className="text-lg font-semibold text-stone-950">{item.title}</h2>
                <p className="mt-2 text-sm leading-6 text-stone-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-stone-200 bg-[#151311] p-6 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-500">Backend Notes</p>
          <h2 className="mt-3 text-3xl font-semibold">The commerce flow works differently on purpose</h2>
          <div className="mt-6 space-y-4">
            {backendNotes.map((note) => (
              <div key={note} className="rounded-[1.5rem] border border-stone-800 bg-stone-900 px-5 py-4">
                <p className="text-sm leading-6 text-stone-300">{note}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-[1.5rem] border border-stone-800 bg-stone-900 px-5 py-5">
            <p className="text-sm font-medium text-stone-300">Recommended technical shape</p>
            <p className="mt-2 text-sm leading-6 text-stone-400">
              Next.js powers the storefront and vendor workspace, Supabase handles auth, order tables, Storage, and
              Realtime chat, and Resend delivers transactional email for order events and message notifications.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-[1.5rem] border border-stone-800 bg-stone-900 px-5 py-5">
      <p className="text-3xl font-semibold text-white">{value}</p>
      <p className="mt-2 text-sm leading-6 text-stone-400">{label}</p>
    </div>
  );
}
