import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#F7F5F1] text-[#0B0B0B] pt-24">
      <section className="py-24 lg:py-32 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto text-center">
          <p className="text-[#C49A62] text-[11px] font-bold uppercase tracking-[0.25em] mb-4">
            Contact
          </p>
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-8">
            Let's build something.
          </h1>
          <p className="text-lg text-[#71717A] max-w-2xl mx-auto mb-12">
            Have a project in mind or need expert guidance on packaging solutions? Reach out to our team.
          </p>
          
          <div className="bg-white p-8 lg:p-12 rounded-2xl border border-[#E7E7E7] max-w-lg mx-auto shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Get in touch</h2>
            <p className="text-[#71717A] mb-8">hello@kairopack.com<br />+44 1234 567890</p>
            <Link
              href="/customizer"
              className="inline-flex w-full h-14 items-center justify-center bg-[#0B0B0B] px-8 text-sm font-semibold text-white transition-colors hover:bg-[#151515] rounded-xl"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}