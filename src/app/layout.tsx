import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { Menu } from "lucide-react";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kairo Pack | Premium Custom Packaging",
  description:
    "Premium custom packaging solutions that elevate your brand. From design to delivery, we make custom packaging simple and reliable.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans tracking-tight bg-[var(--background)] text-[var(--foreground)]">
        {/* Premium Navigation */}
        <header className="fixed top-0 z-50 w-full transition-all duration-300 bg-[#0B0B0B]/80 backdrop-blur-md border-b border-white/5 text-white">
          <div className="flex h-20 items-center justify-between px-6 lg:px-12 w-full mx-auto">
            <div className="flex items-center">
              <Link href="/" className="hover:opacity-70 transition-opacity duration-300">
                <Logo className="h-8 w-[160px]" />
              </Link>
            </div>
            
            <nav className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide">
              <Link href="/products" className="hover:text-[#C49A62] transition-colors duration-300">Products</Link>
              <Link href="/solutions" className="hover:text-[#C49A62] transition-colors duration-300">Solutions</Link>
              <Link href="/industries" className="hover:text-[#C49A62] transition-colors duration-300">Industries</Link>
              <Link href="/sustainability" className="hover:text-[#C49A62] transition-colors duration-300">Sustainability</Link>
              <Link href="/about" className="hover:text-[#C49A62] transition-colors duration-300">About Us</Link>
              <Link href="/contact" className="hover:text-[#C49A62] transition-colors duration-300">Contact</Link>
            </nav>
            
            <div className="flex items-center gap-6">
              <Link
                href="/customizer"
                className="hidden md:inline-flex h-11 items-center justify-center rounded-none bg-white px-8 text-sm font-semibold text-[#0B0B0B] transition-colors hover:bg-[#E7E7E7]"
              >
                Get a Quote
              </Link>
              <button className="lg:hidden p-2 -mr-2 text-white hover:text-[#C49A62] transition-colors">
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </header>
        
        <div className="flex-1 w-full">
          {children}
        </div>

        {/* Premium Footer */}
        <footer className="bg-[#0B0B0B] text-white pt-24 pb-12 px-6 lg:px-12 border-t border-white/10">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-20">
            <div className="lg:col-span-2">
              <Logo className="h-8 w-[160px] mb-6" />
              <p className="text-[#E7E7E7] text-sm leading-relaxed max-w-sm mb-8">
                Custom packaging solutions that elevate your brand. We combine creativity, quality and sustainability to deliver packaging that makes an impact.
              </p>
              <div className="flex gap-4">
                {/* Social placeholders */}
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-[#C49A62] hover:text-[#C49A62] transition-colors cursor-pointer">In</div>
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-[#C49A62] hover:text-[#C49A62] transition-colors cursor-pointer">Tw</div>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold tracking-widest text-[#E7E7E7] mb-6 uppercase">Products</h4>
              <ul className="space-y-4 text-sm text-[#A1A1AA]">
                <li><Link href="/products" className="hover:text-white transition-colors">Food Packaging</Link></li>
                <li><Link href="/products" className="hover:text-white transition-colors">Beverage Packaging</Link></li>
                <li><Link href="/products" className="hover:text-white transition-colors">Retail Packaging</Link></li>
                <li><Link href="/products" className="hover:text-white transition-colors">E-Commerce Packaging</Link></li>
                <li><Link href="/customizer" className="hover:text-[#C49A62] transition-colors">Custom Solutions</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold tracking-widest text-[#E7E7E7] mb-6 uppercase">Solutions</h4>
              <ul className="space-y-4 text-sm text-[#A1A1AA]">
                <li><Link href="/industries" className="hover:text-white transition-colors">By Industry</Link></li>
                <li><Link href="/sustainability" className="hover:text-white transition-colors">Sustainability</Link></li>
                <li><Link href="/solutions" className="hover:text-white transition-colors">Design Support</Link></li>
                <li><Link href="/solutions" className="hover:text-white transition-colors">Production & Quality</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold tracking-widest text-[#E7E7E7] mb-6 uppercase">Company</h4>
              <ul className="space-y-4 text-sm text-[#A1A1AA]">
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">Our Process</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">Case Studies</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>

          <div className="max-w-[1400px] mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-6 text-sm text-[#E7E7E7]">
              <span>hello@kairopack.com</span>
              <span className="hidden sm:inline text-white/20">|</span>
              <span>+44 1234 567890</span>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-6 text-xs text-[#A1A1AA]">
              <p>© {new Date().getFullYear()} KairoPack. All rights reserved.</p>
              <div className="flex gap-6">
                <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="#" className="hover:text-white transition-colors">Terms & Conditions</Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}