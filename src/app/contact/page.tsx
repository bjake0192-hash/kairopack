import { ArrowRight, MapPin, Mail, Phone } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#F7F5F1] text-[#0B0B0B] pt-20">
      <section className="py-24 lg:py-32 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Left: Info & Locations */}
            <div>
              <p className="text-[#C49A62] text-[11px] font-bold uppercase tracking-[0.25em] mb-4">
                Get in touch
              </p>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-8">
                Let&apos;s talk packaging.
              </h1>
              <p className="text-lg text-[#71717A] max-w-xl mb-16 leading-relaxed">
                Whether you&apos;re launching a new product line or auditing your current supply chain, our structural engineers and packaging experts are ready to assist.
              </p>

              <div className="flex flex-col gap-12">
                <div>
                  <h3 className="text-xl font-bold mb-6 tracking-tight flex items-center">
                    <Mail className="w-5 h-5 mr-3 text-[#C49A62]" /> Direct Contact
                  </h3>
                  <div className="space-y-4 text-[#71717A]">
                    <p className="flex items-center"><span className="w-24 font-semibold text-[#0B0B0B]">Sales:</span> sales@kairopack.com</p>
                    <p className="flex items-center"><span className="w-24 font-semibold text-[#0B0B0B]">Support:</span> help@kairopack.com</p>
                    <p className="flex items-center"><span className="w-24 font-semibold text-[#0B0B0B]">Phone:</span> +1 (800) 555-0199</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-6 tracking-tight flex items-center">
                    <MapPin className="w-5 h-5 mr-3 text-[#C49A62]" /> Global Offices
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <p className="font-bold text-[#0B0B0B] mb-2">New York (HQ)</p>
                      <p className="text-[#71717A] text-sm leading-relaxed">
                        100 Packaging Way<br />
                        Brooklyn, NY 11201<br />
                        United States
                      </p>
                    </div>
                    <div>
                      <p className="font-bold text-[#0B0B0B] mb-2">London</p>
                      <p className="text-[#71717A] text-sm leading-relaxed">
                        25 Design Street<br />
                        Clerkenwell, London<br />
                        United Kingdom
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: B2B Form */}
            <div className="bg-white p-8 lg:p-12 border border-[#E7E7E7]">
              <h2 className="text-2xl font-bold mb-8 tracking-tight">Project Inquiry</h2>
              <form className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="firstName" className="text-xs font-bold uppercase tracking-widest text-[#0B0B0B]">First Name</label>
                    <input type="text" id="firstName" className="h-12 border border-[#E7E7E7] px-4 bg-[#F7F5F1] focus:outline-none focus:border-[#0B0B0B] focus:bg-white transition-colors" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="lastName" className="text-xs font-bold uppercase tracking-widest text-[#0B0B0B]">Last Name</label>
                    <input type="text" id="lastName" className="h-12 border border-[#E7E7E7] px-4 bg-[#F7F5F1] focus:outline-none focus:border-[#0B0B0B] focus:bg-white transition-colors" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="company" className="text-xs font-bold uppercase tracking-widest text-[#0B0B0B]">Company Name</label>
                  <input type="text" id="company" className="h-12 border border-[#E7E7E7] px-4 bg-[#F7F5F1] focus:outline-none focus:border-[#0B0B0B] focus:bg-white transition-colors" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-[#0B0B0B]">Work Email</label>
                    <input type="email" id="email" className="h-12 border border-[#E7E7E7] px-4 bg-[#F7F5F1] focus:outline-none focus:border-[#0B0B0B] focus:bg-white transition-colors" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="volume" className="text-xs font-bold uppercase tracking-widest text-[#0B0B0B]">Est. Annual Volume</label>
                    <select id="volume" className="h-12 border border-[#E7E7E7] px-4 bg-[#F7F5F1] focus:outline-none focus:border-[#0B0B0B] focus:bg-white transition-colors text-[#71717A]">
                      <option value="">Select volume...</option>
                      <option value="under_5k">Under 5,000 units</option>
                      <option value="5k_25k">5,000 - 25,000 units</option>
                      <option value="25k_100k">25,000 - 100,000 units</option>
                      <option value="100k_plus">100,000+ units</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-[#0B0B0B]">Project Details</label>
                  <textarea id="message" rows={5} placeholder="Tell us about your product, timeline, and structural requirements..." className="border border-[#E7E7E7] p-4 bg-[#F7F5F1] focus:outline-none focus:border-[#0B0B0B] focus:bg-white transition-colors resize-none"></textarea>
                </div>

                <button
                  type="button"
                  className="mt-4 h-14 bg-[#0B0B0B] text-white font-bold text-sm tracking-wide transition-colors hover:bg-[#C49A62] flex items-center justify-center"
                >
                  Submit Inquiry <ArrowRight className="ml-2 w-4 h-4" />
                </button>
                <p className="text-xs text-[#71717A] text-center mt-2">
                  By submitting this form, you agree to our privacy policy.
                </p>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Image Banner */}
      <section className="h-[40vh] min-h-[300px] relative">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop"
          alt="Modern architecture"
          fill
          className="object-cover"
        />
      </section>
    </main>
  );
}
