import Link from 'next/link'
import { ArrowRight, BadgeCheck, Package, ShieldCheck, Sparkles, Truck, Users } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import ProductCard from '@/components/ProductCard'
import { categories, products } from '@/data/products'

export default function Home() {
  const featuredProducts = products.slice(0, 8)

  return (
    <main className="app-shell">
      <Navbar />
      <HeroSection />

      <section id="categories" className="section-shell py-12 md:py-16">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-green-800 shadow-sm">
              <Sparkles size={16} />
              Explore the catalog
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold text-slate-950 md:text-5xl">
              Shop by category with a more focused layout
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">
              Each category is arranged for quick scanning so visitors can move from browsing to product detail without confusion.
            </p>
          </div>
          <Link href="/products" className="pill-button-secondary w-fit">
            View all products
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
          {categories.map((category, index) => {
            const accents = [
              'from-green-50 to-lime-100',
              'from-lime-50 to-green-100',
              'from-slate-50 to-slate-100',
              'from-lime-50 to-green-100',
              'from-green-50 to-lime-100',
              'from-lime-50 to-lime-100',
            ]
            return (
              <Link key={category} href={`/products?category=${encodeURIComponent(category)}`}>
                <div className={`glass-card group flex h-full flex-col justify-between bg-gradient-to-br ${accents[index % accents.length]} p-5 transition hover:-translate-y-1`}>
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-sm">
                      <Package size={18} />
                    </div>
                    <BadgeCheck size={18} className="text-green-800 opacity-70" />
                  </div>
                  <div className="mt-8">
                    <h3 className="text-lg font-semibold text-slate-950">{category}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Browse curated options built for everyday home living.
                    </p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      <section id="products" className="section-shell py-12 md:py-16">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full brand-gradient px-4 py-2 text-sm font-semibold text-white">
              <Sparkles size={16} />
              Featured collection
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold text-slate-950 md:text-5xl">
              Premium products styled to feel more professional
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">
              The product grid keeps the hardcoded catalog intact while making each card feel more confident, balanced, and easy to scan.
            </p>
          </div>
          <Link href="/products" className="pill-button-primary w-fit">
            Shop the full range
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="section-shell py-12 md:py-16">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="glass-card p-6 md:p-8">
            <p className="inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-sm font-semibold text-green-800">
              <ShieldCheck size={16} />
              Why HomeHub
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold text-slate-950">
              A more reliable and polished storefront experience
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              This version is tuned to feel calmer, more premium, and easier to use on mobile while keeping every existing content block intact.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                ['Quality first', 'Products feel curated instead of generic'],
                ['Responsive layout', 'Works cleanly on phone, tablet, and desktop'],
                ['Stronger visuals', 'Gradients, spacing, and hierarchy feel intentional'],
                ['Ready to expand', 'Hardcoded now, easy to extend later'],
              ].map(([title, text]) => (
                <div key={title} className="rounded-2xl border border-slate-200 bg-white/80 p-4">
                  <p className="font-semibold text-slate-950">{title}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              [Truck, 'Fast delivery', 'Reliable shipping flow and clear expectations.'],
              [Users, 'Customer focused', 'Support information is easy to find and use.'],
              [BadgeCheck, 'Trusted quality', 'A visual system that feels more authoritative.'],
              [Sparkles, 'Premium feel', 'A consistent gradient look throughout the app.'],
            ].map(([Icon, title, text]) => (
              <div key={title as string} className="glass-card p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                  <Icon size={18} />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-950">{title as string}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text as string}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
