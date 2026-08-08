import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { Logo } from "@/components/logo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kairo Pack | Avant-Garde Catering Packaging",
  description:
    "Premium custom catering packaging. Upload your logo for instant live previews and order direct from certified manufacturers.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans tracking-tight bg-[#f4f3ef] text-[#111111]">
        {/* Global Navigation - Ultra Minimal */}
        <header className="fixed top-0 z-50 w-full mix-blend-difference pointer-events-none">
          <div className="flex h-24 items-center justify-between px-6 lg:px-12 w-full mx-auto pointer-events-auto">
            <Link href="/" className="text-white hover:opacity-70 transition-opacity duration-300">
              <Logo className="h-8 w-auto" />
            </Link>
            
            <div className="flex items-center gap-8">
              <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/80">
                <Link href="/#products" className="hover:text-white transition-colors duration-300 uppercase tracking-widest text-[10px]">Collection</Link>
                <Link href="/#customizer" className="hover:text-white transition-colors duration-300 uppercase tracking-widest text-[10px]">Studio</Link>
                <Link href="/vendor" className="hover:text-white transition-colors duration-300 uppercase tracking-widest text-[10px]">Vendor</Link>
              </nav>
              <Link
                href="/#customizer"
                className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-white px-8 font-medium text-[#111111] transition-transform hover:scale-105 active:scale-95"
              >
                <span className="relative z-10 text-xs uppercase tracking-widest font-bold">Start Order</span>
                <div className="absolute inset-0 h-full w-full scale-0 rounded-full bg-[#111111] transition-all duration-300 ease-out group-hover:scale-100" />
                <span className="absolute z-10 text-xs uppercase tracking-widest font-bold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Start Order</span>
              </Link>
            </div>
          </div>
        </header>
        
        <div className="flex-1">
          {children}
        </div>
      </body>
    </html>
  );
}
