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
  title: "Kairo Pack | Custom Catering Packaging",
  description:
    "Custom catering packaging storefront with upload-based logo previews, vendor order routing, Supabase chat, and Resend email notifications.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans tracking-tight bg-white">
        {/* Global Navigation */}
        <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md">
          <div className="flex h-16 items-center justify-between px-6 lg:px-12 max-w-[1600px] mx-auto">
            <div className="flex items-center gap-8">
              <Link href="/" className="text-zinc-950 transition hover:opacity-80">
                <Logo className="h-7 w-auto" />
              </Link>
              <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-600">
                <Link href="/#products" className="hover:text-zinc-950 transition">Products</Link>
                <Link href="/#customizer" className="hover:text-zinc-950 transition">Customizer</Link>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/vendor"
                className="hidden md:inline-flex text-sm font-medium text-zinc-600 hover:text-zinc-950 transition"
              >
                Vendor Login
              </Link>
              <Link
                href="/#customizer"
                className="inline-flex h-9 items-center justify-center rounded-full bg-zinc-950 px-5 text-sm font-medium text-white transition hover:bg-zinc-800"
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
