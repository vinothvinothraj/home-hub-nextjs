'use client'

import Link from 'next/link'
import Image from 'next/image'
import { BadgeCheck, Star } from 'lucide-react'
import { Product } from '@/data/products'

interface ProductCardProps {
  product: Product
}

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-LK', {
    style: 'currency',
    currency: 'LKR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`} className="block h-full">
      <article className="group flex h-full flex-col overflow-hidden rounded-[1.8rem] border border-white/70 bg-white/90 shadow-[0_18px_70px_-34px_rgba(0,36,17,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_90px_-32px_rgba(0,36,17,0.38)]">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/15 to-transparent" />

          <div className="absolute left-4 top-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-white/92 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-900 shadow-sm">
              {product.category}
            </span>
            <span className="rounded-full bg-[#bfff00] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#002411] shadow-sm">
              In stock
            </span>
          </div>

          <div className="absolute inset-x-4 bottom-4">
            <h3 className="max-w-[90%] text-2xl font-bold leading-tight text-white sm:text-[1.7rem]">
              {product.name}
            </h3>
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-4 p-5">
          <p className="line-clamp-2 text-sm leading-6 text-slate-600">{product.description}</p>

          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  size={14}
                  className={index < Math.floor(product.rating) ? 'fill-amber-400 text-amber-400' : 'text-amber-200'}
                />
              ))}
            </div>
            <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-800">
              <BadgeCheck size={14} />
              Trusted
            </span>
          </div>

          <div className="mt-auto rounded-[1.6rem] border border-green-100 bg-gradient-to-br from-[#eefad5] to-[#dff7a8] p-4 shadow-sm">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-slate-500">Starting at</p>
            <div className="mt-2 flex items-center justify-between gap-3">
              <p className="text-2xl font-bold text-slate-950 sm:text-[1.8rem]">
                {formatPrice(product.price)}
              </p>
            </div>
            <p className="mt-3 text-sm font-semibold text-[#003318] transition group-hover:translate-x-1">
              Click card to view details
            </p>
          </div>
        </div>
      </article>
    </Link>
  )
}
