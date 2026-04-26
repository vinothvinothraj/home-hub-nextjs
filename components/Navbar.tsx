'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X, Home, Grid3x3, Info, Phone, ShoppingBag, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <>
      <nav className="fixed left-0 right-0 top-0 z-50 hidden border-b border-white/60 bg-white/80 backdrop-blur-xl md:block">
        <div className="section-shell flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl brand-gradient text-white shadow-lg shadow-green-950/15">
              <Sparkles size={20} />
            </span>
            <span>
              <span className="block font-display text-2xl font-bold text-slate-950">HomeHub</span>
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-slate-500">
                Home essentials curated
              </span>
            </span>
          </Link>

          <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 p-1 shadow-sm">
            {[
              ['/', 'Home'],
              ['/products', 'Products'],
              ['/about', 'About'],
              ['/contact', 'Contact'],
            ].map(([href, label]) => (
              <Link
                key={href}
                href={href}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                  isActive(href)
                    ? 'bg-slate-950 text-white shadow-md'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          <Link href="/products" className="pill-button-primary">
            <ShoppingBag size={18} />
            Browse Products
          </Link>
        </div>
      </nav>

      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/60 bg-white/85 backdrop-blur-xl md:hidden">
        <div className="section-shell flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl brand-gradient text-white shadow-lg shadow-green-950/15">
              <Sparkles size={18} />
            </span>
            <span className="font-display text-xl font-bold text-slate-950">HomeHub</span>
          </Link>

          <button
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-sm"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {isOpen && (
          <div className="border-t border-slate-200 bg-white/95 px-4 pb-4">
            <div className="section-shell grid gap-2 pt-4">
              {[
                ['/', 'Home'],
                ['/products', 'Products'],
                ['/about', 'About'],
                ['/contact', 'Contact'],
              ].map(([href, label]) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                    isActive(href)
                      ? 'bg-slate-950 text-white'
                      : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Mobile Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/60 bg-white/90 backdrop-blur-xl md:hidden shadow-[0_-12px_40px_-20px_rgba(15,23,42,0.35)]">
        <div className="flex items-center justify-around px-2">
          <Link
            href="/"
            className={`flex-1 flex flex-col items-center justify-center py-3 transition ${
              isActive('/') ? 'text-green-700' : 'text-slate-500 hover:text-slate-950'
            }`}
          >
            <Home size={24} />
            <span className="text-xs font-semibold mt-1">Home</span>
          </Link>

          <Link
            href="/products"
            className={`flex-1 flex flex-col items-center justify-center py-3 transition ${
              isActive('/products') ? 'text-green-700' : 'text-slate-500 hover:text-slate-950'
            }`}
          >
            <ShoppingBag size={24} />
            <span className="text-xs font-semibold mt-1">Products</span>
          </Link>

          <Link
            href="/about"
            className={`flex-1 flex flex-col items-center justify-center py-3 transition ${
              isActive('/about') ? 'text-green-700' : 'text-slate-500 hover:text-slate-950'
            }`}
          >
            <Info size={24} />
            <span className="text-xs font-semibold mt-1">About</span>
          </Link>

          <Link
            href="/contact"
            className={`flex-1 flex flex-col items-center justify-center py-3 transition ${
              isActive('/contact') ? 'text-green-700' : 'text-slate-500 hover:text-slate-950'
            }`}
          >
            <Phone size={24} />
            <span className="text-xs font-semibold mt-1">Contact</span>
          </Link>
        </div>
      </div>

      {/* Spacer for mobile bottom nav */}
      <div className="h-20 md:h-0"></div>
    </>
  )
}
