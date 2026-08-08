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
      <body className="min-h-full flex flex-col font-sans tracking-tight bg-[var(--background)] text-[var(--foreground)]">
        {/* Global Navigation - Clean Modern */}
        <header className="sticky top-0 z-50 w-full bg-[var(--background)]/80 backdrop-blur-md border-b border-[var(--border)]">
          <div className="flex h-16 items-center justify-between px-6 lg:px-12 w-full max-w-7xl mx-auto">
            <Link href="/" className="text-[var(--foreground)] hover:opacity-70 transition-opacity duration-300">
              <Logo className="h-6 w-auto" />
            </Link>
            
            <div className="flex items-center gap-8">
              <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--muted-foreground)]">
                <Link href="/#products" className="hover:text-[var(--foreground)] transition-colors duration-300">Products</Link>
                <Link href="/#customizer" className="hover:text-[var(--foreground)] transition-colors duration-300">Customizer</Link>
                <Link href="/vendor" className="hover:text-[var(--foreground)] transition-colors duration-300">Vendor</Link>
              </nav>
              <Link
                href="/#customizer"
                className="inline-flex h-10 items-center justify-center rounded-md bg-[var(--primary)] px-6 text-sm font-medium text-[var(--primary-foreground)] shadow transition-colors hover:bg-[var(--primary)]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--primary)]"
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
