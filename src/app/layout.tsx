import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { ShoppingCart, User, Search } from "lucide-react";
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
  title: "Kairo Pack | Modern Custom Packaging",
  description:
    "Premium custom catering packaging. Upload your logo for instant live previews and order direct from certified manufacturers.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans tracking-tight bg-[var(--background)] text-[var(--foreground)]">
        {/* Top Announcement Bar */}
        <div className="bg-zinc-950 text-zinc-50 py-2 px-4 text-center text-xs font-medium tracking-wide">
          <p>Free standard shipping on all UK orders over £250. <Link href="/products" className="underline underline-offset-2 hover:text-zinc-300">Shop now</Link></p>
        </div>

        {/* Global Navigation - Clean Modern */}
        <header className="sticky top-0 z-50 w-full bg-[var(--background)]/80 backdrop-blur-md border-b border-[var(--border)]">
          <div className="flex h-16 items-center justify-between px-6 lg:px-12 w-full max-w-7xl mx-auto">
            <div className="flex items-center gap-8">
              <Link href="/" className="text-[var(--foreground)] hover:opacity-70 transition-opacity duration-300">
                <Logo className="h-6 w-auto" />
              </Link>
              <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[var(--muted-foreground)]">
                <Link href="/products" className="hover:text-[var(--foreground)] transition-colors duration-300">Products</Link>
                <Link href="/customizer" className="hover:text-[var(--foreground)] transition-colors duration-300">Studio</Link>
                <Link href="/vendor" className="hover:text-[var(--foreground)] transition-colors duration-300">Vendor Portal</Link>
              </nav>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="hidden sm:flex items-center gap-4 text-[var(--muted-foreground)]">
                <button className="hover:text-[var(--foreground)] transition-colors" aria-label="Search">
                  <Search className="w-5 h-5" />
                </button>
                <Link href="/vendor" className="hover:text-[var(--foreground)] transition-colors" aria-label="Account">
                  <User className="w-5 h-5" />
                </Link>
                <button className="hover:text-[var(--foreground)] transition-colors relative" aria-label="Cart">
                  <ShoppingCart className="w-5 h-5" />
                  <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[var(--primary)] text-[10px] font-bold text-[var(--primary-foreground)]">
                    0
                  </span>
                </button>
              </div>
              <Link
                href="/customizer"
                className="inline-flex h-9 items-center justify-center rounded-md bg-[var(--primary)] px-5 text-sm font-medium text-[var(--primary-foreground)] shadow transition-colors hover:bg-[var(--primary)]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--primary)]"
              >
                Start Order
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
