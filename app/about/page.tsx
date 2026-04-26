import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Award, HeartHandshake, ShieldCheck, Truck, Users } from 'lucide-react'

export default function About() {
  return (
    <main className="app-shell">
      <Navbar />

      <section className="section-shell py-10 md:py-16">
        <div className="glass-card grid gap-8 overflow-hidden lg:grid-cols-[1.05fr_0.95fr]">
          <div className="p-6 md:p-10">
            <p className="inline-flex items-center gap-2 rounded-full brand-gradient px-4 py-2 text-sm font-semibold text-white">
              <ShieldCheck size={16} />
              About HomeHub
            </p>
            <h1 className="mt-5 font-display text-4xl font-bold text-slate-950 md:text-6xl">
              A home store experience that feels polished from start to finish
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
              HomeHub brings together home items, furniture, and appliances in a cleaner shopping experience.
              The goal is simple: help people find useful products faster and make the brand feel more reliable.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                ['15+', 'Years of experience'],
                ['5,000+', 'Satisfied customers'],
                ['4.8/5', 'Average rating'],
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl bg-white/80 p-4">
                  <p className="text-3xl font-bold text-slate-950">{value}</p>
                  <p className="mt-1 text-sm text-slate-600">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[320px] md:min-h-[520px]">
            <Image
              src="/images/hero-furniture.jpg"
              alt="HomeHub interior showcase"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-950/5 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 rounded-3xl border border-white/15 bg-white/10 p-5 text-white backdrop-blur">
              <p className="text-sm uppercase tracking-[0.24em] text-white/70">Designed for trust</p>
              <p className="mt-2 text-2xl font-semibold">Clear layouts, stronger hierarchy, and a more premium feel.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-10 md:py-16">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="glass-card p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-green-800">Our mission</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950">Make home shopping feel easier and more dependable</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              We want the app to feel easy to browse, easier to understand, and better suited for real customers on mobile and desktop.
            </p>
          </div>
          <div className="glass-card p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-green-800">Our vision</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950">Grow into a storefront that feels ready for real business</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              The long-term direction is a clean product experience with strong trust signals, clear content, and room to scale later.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell py-10 md:py-16">
        <div className="mb-8 max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-green-800 shadow-sm">
            <Award size={16} />
            What we stand for
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold text-slate-950">Core values that support a more trustworthy app</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            [HeartHandshake, 'Customer first', 'We keep the buying journey simple and friendly.'],
            [Award, 'Quality assurance', 'Products and presentation should feel carefully selected.'],
            [Truck, 'Reliable delivery', 'Shipping and contact details stay clear and visible.'],
            [Users, 'Helpful support', 'The experience should feel easy to trust and use.'],
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
      </section>

      <Footer />
    </main>
  )
}
