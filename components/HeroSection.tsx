'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { ArrowRight, ChevronLeft, ChevronRight, ShieldCheck, Sparkles, Star, Truck } from 'lucide-react'

const heroSlides = [
  {
    image: '/images/hero-furniture.jpg',
    eyebrow: 'Premium living',
    title: 'Furniture that makes every room feel considered',
    description:
      'A smoother browsing experience for carefully chosen home pieces, designed to feel upscale and practical at the same time.',
    cta: 'Shop furniture',
  },
  {
    image: '/images/hero-kitchen.jpg',
    eyebrow: 'Modern kitchen',
    title: 'Refined appliances with a cleaner visual rhythm',
    description:
      'Give the kitchen section a more dependable, polished feel with layouts that make important details easy to spot.',
    cta: 'Browse appliances',
  },
  {
    image: '/images/hero-bedroom.jpg',
    eyebrow: 'Soft comfort',
    title: 'Calm bedroom essentials with a better sense of balance',
    description:
      'Bedding and comfort products are framed with softer spacing, warmer gradients, and more thoughtful presentation.',
    cta: 'Explore bedding',
  },
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000)

    return () => clearInterval(timer)
  }, [])

  const slide = heroSlides[currentSlide]

  return (
    <section className="section-shell py-6 md:py-10">
      <div className="relative overflow-hidden rounded-[2.4rem] bg-[#002411] text-white shadow-[0_30px_100px_-40px_rgba(0,36,17,0.7)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(191,255,0,0.18),transparent_25%),radial-gradient(circle_at_85%_15%,rgba(0,204,95,0.22),transparent_30%),linear-gradient(135deg,#002411_0%,#003318_42%,#006630_100%)]" />
        <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:72px_72px]" />

        <div className="relative grid items-center gap-8 px-5 pb-0 pt-8 sm:px-8 md:px-10 lg:grid-cols-[1.02fr_0.98fr] lg:px-14 lg:pt-14">
          <div className="relative z-10 py-2 lg:py-10">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-lime-100 backdrop-blur">
              <Sparkles size={16} />
              Elevated home shopping
            </div>

            <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[0.94] tracking-[-0.05em] text-white sm:text-5xl lg:text-7xl">
              {slide.title}
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-white/78 md:text-lg">
              {slide.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#bfff00] px-6 py-3.5 text-sm font-extrabold text-[#002411] transition hover:-translate-y-0.5 hover:bg-[#ccff33]"
              >
                {slide.cta}
                <ArrowRight size={18} />
              </button>
              <button
                onClick={() => document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/15 hover:-translate-y-0.5"
              >
                View categories
              </button>
            </div>

            <div className="mt-9 grid gap-3 sm:grid-cols-3">
              {[
                ['Curated range', '24 hardcoded products'],
                ['Fast browsing', 'Cleaner product pathways'],
                ['Trusted service', 'Visible support details'],
              ].map(([title, text]) => (
                <div key={title} className="rounded-3xl border border-white/12 bg-white/8 p-4 backdrop-blur-sm">
                  <p className="font-semibold text-white">{title}</p>
                  <p className="mt-1 text-sm leading-6 text-white/70">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[420px] lg:min-h-[660px]">
            <div className="absolute inset-x-[-8%] bottom-[-2%] h-[34%] bg-[#f6fbef]" style={{ clipPath: 'polygon(0 40%, 12% 68%, 30% 86%, 52% 100%, 72% 90%, 86% 68%, 100% 44%, 100% 100%, 0 100%)' }} />

            <div className="absolute right-0 top-6 hidden w-44 rounded-[1.7rem] border border-white/15 bg-white/10 p-4 text-white/92 shadow-lg backdrop-blur md:block animate-float">
              <div className="flex items-center gap-2 text-lime-200">
                <ShieldCheck size={16} />
                <span className="text-xs font-semibold uppercase tracking-[0.24em]">Verified quality</span>
              </div>
              <p className="mt-2 text-sm leading-6 text-white/70">
                A storefront layout built to feel trustworthy, modern, and easy to browse on mobile.
              </p>
            </div>

            <div className="absolute bottom-8 left-0 hidden w-48 rounded-[1.7rem] border border-white/15 bg-white/10 p-4 text-white shadow-lg backdrop-blur md:block animate-float">
              <div className="flex items-center gap-2 text-lime-300">
                <Star size={16} className="fill-lime-300 text-lime-300" />
                <span className="text-xs font-semibold uppercase tracking-[0.24em]">4.8 rating</span>
              </div>
              <p className="mt-2 text-sm leading-6 text-white/70">
                Premium presentation with smoother scanning and stronger visual hierarchy.
              </p>
            </div>

            <div className="absolute inset-x-0 bottom-0 z-10 flex justify-center px-1 sm:px-4">
              <div className="relative w-full max-w-[660px]">
                <div className="absolute inset-x-0 bottom-0 h-[22%] rounded-t-[3rem] bg-[#bfff00]" />
                <div className="relative overflow-hidden rounded-t-[2.6rem] rounded-b-[1.4rem] shadow-[0_28px_80px_-28px_rgba(0,0,0,0.7)]">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    width={1200}
                    height={1200}
                    priority={currentSlide === 0}
                    className="h-[380px] w-full object-cover sm:h-[460px] lg:h-[560px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 px-5 py-5 text-white sm:px-6">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-lime-100/80">
                        {slide.eyebrow}
                      </p>
                      <p className="mt-1 max-w-md text-sm leading-6 text-white/80">
                        Refined layout with deeper contrast and a more premium first impression.
                      </p>
                    </div>
                    <div className="hidden rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur sm:inline-flex">
                      Smooth browsing
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
              className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/15 bg-white/10 p-3 text-white backdrop-blur transition hover:bg-white/15"
              aria-label="Previous slide"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
              className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/15 bg-white/10 p-3 text-white backdrop-blur transition hover:bg-white/15"
              aria-label="Next slide"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        <div className="relative z-20 -mt-1 flex justify-center pb-5">
          <div className="flex gap-2 rounded-full border border-white/10 bg-white/8 px-3 py-2 backdrop-blur">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2.5 rounded-full transition-all ${
                  index === currentSlide ? 'w-8 bg-[#bfff00]' : 'w-2.5 bg-white/35 hover:bg-white/60'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-4 py-5 sm:grid-cols-3">
        {[
          ['Elegant layout', 'Built to feel like a real premium storefront.'],
          ['Mobile ready', 'Spacing, type, and cards scale better on small screens.'],
          ['Expandable catalog', 'Still hardcoded, but structured for growth.'],
        ].map(([title, text]) => (
          <div key={title} className="panel-surface px-5 py-4">
            <p className="font-semibold text-slate-950">{title}</p>
            <p className="mt-1 text-sm leading-6 text-slate-600">{text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
