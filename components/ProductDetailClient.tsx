'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, BadgeCheck, CheckCircle2, Heart, Package, ShieldCheck, Sparkles, Star, Truck, TrendingUp } from 'lucide-react'
import { Product, products } from '@/data/products'
import ContactModals from './ContactModals'

interface ProductDetailClientProps {
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

const categoryGallery: Record<string, string[]> = {
  Furniture: ['/images/furniture-sofa.jpg', '/images/furniture-dining.jpg', '/images/hero-furniture.jpg'],
  Electronics: ['/images/electronics-tv.jpg', '/images/hero-kitchen.jpg', '/images/hero-furniture.jpg'],
  'Kitchen Appliances': ['/images/kitchen-refrigerator.jpg', '/images/hero-kitchen.jpg', '/images/hero-bedroom.jpg'],
  Bedding: ['/images/bedding-comforter.jpg', '/images/hero-bedroom.jpg', '/images/hero-furniture.jpg'],
  'Home Decor': ['/images/decor-lamp.jpg', '/images/hero-furniture.jpg', '/images/hero-bedroom.jpg'],
  Lighting: ['/images/decor-lamp.jpg', '/images/hero-furniture.jpg', '/images/hero-kitchen.jpg'],
}

export default function ProductDetailClient({ product }: ProductDetailClientProps) {
  const [quantity, setQuantity] = useState(1)
  const [isFavorite, setIsFavorite] = useState(false)
  const [activeTab, setActiveTab] = useState<'description' | 'specifications' | 'reviews' | 'shipping'>('description')
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  const galleryImages = useMemo(() => {
    return categoryGallery[product.category] ?? [product.image, product.image, product.image]
  }, [product.category, product.image])

  const selectedImage = galleryImages[selectedImageIndex] ?? product.image
  const relatedProducts = products.filter((item) => item.category === product.category && item.id !== product.id).slice(0, 4)

  const highlights = Object.entries(product.specifications).slice(0, 4)

  return (
    <main className="pb-24 pt-6 md:pb-10">
      <div className="section-shell">
        <div className="mb-5 flex items-center justify-between gap-4">
          <nav className="flex items-center gap-2 text-sm text-slate-500">
            <Link href="/" className="inline-flex items-center gap-2 font-semibold hover:text-slate-950">
              <ArrowLeft size={16} />
              Back home
            </Link>
            <span className="text-slate-300">/</span>
            <Link href="/products" className="font-semibold hover:text-slate-950">
              Products
            </Link>
            <span className="text-slate-300">/</span>
            <span className="font-semibold text-slate-950">{product.category}</span>
          </nav>
          <span className="hidden rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-green-800 shadow-sm md:inline-flex">
            Premium product detail
          </span>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <section className="glass-card overflow-hidden">
            <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
              <Image
                src={selectedImage}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 52vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent" />
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/90 text-slate-950 shadow-lg transition hover:scale-105"
                aria-label="Toggle favorite"
              >
                <Heart size={20} className={isFavorite ? 'fill-rose-500 text-rose-500' : ''} />
              </button>
              <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-900 shadow-sm">
                  {product.category}
                </span>
                <span className="rounded-full bg-green-600 px-3 py-1 text-xs font-semibold text-white shadow-sm">
                  In stock
                </span>
              </div>
            </div>

            <div className="border-t border-slate-200/80 bg-white/75 p-4">
              <div className="flex gap-3 overflow-x-auto pb-1">
                {galleryImages.map((image, index) => (
                  <button
                    key={`${image}-${index}`}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-2xl border-2 transition ${
                      selectedImageIndex === index ? 'border-green-700 shadow-md' : 'border-slate-200'
                    }`}
                    aria-label={`Show image ${index + 1}`}
                  >
                    <Image src={image} alt={`${product.name} preview ${index + 1}`} fill className="object-cover" sizes="80px" />
                  </button>
                ))}
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <div className="glass-card p-6 md:p-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-3 py-1 text-xs font-semibold text-white">
                  <Sparkles size={14} />
                  Curated selection
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-800">
                  <BadgeCheck size={14} />
                  Trusted HomeHub product
                </span>
              </div>

              <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-slate-950 md:text-5xl">
                {product.name}
              </h1>

              <div className="mt-4 flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      size={18}
                      className={index < Math.floor(product.rating) ? 'fill-amber-400 text-amber-400' : 'text-amber-200'}
                    />
                  ))}
                </div>
                <span className="text-sm font-semibold text-slate-950">{product.rating.toFixed(1)}</span>
                <span className="text-sm text-slate-500">({product.reviews} reviews)</span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-600">
                  {product.inStock ? 'Ready to ship' : 'Out of stock'}
                </span>
              </div>

              <p className="mt-5 text-base leading-7 text-slate-600 md:text-lg">
                {product.description}
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl bg-gradient-to-br from-green-50 to-lime-100 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Price</p>
                  <p className="mt-2 text-3xl font-bold text-slate-950">{formatPrice(product.price)}</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Stock</p>
                  <p className="mt-2 text-lg font-bold text-slate-950">{product.inStock ? 'Available now' : 'Check later'}</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Reviews</p>
                  <p className="mt-2 text-lg font-bold text-slate-950">{product.reviews} verified buyers</p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-green-100 bg-green-50/70 p-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-green-800">Quantity</p>
                    <p className="mt-1 text-sm text-slate-600">Pick the amount before sending your order request.</p>
                  </div>
                  <div className="flex items-center rounded-2xl border border-green-200 bg-white">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-3 text-lg font-bold text-slate-700 transition hover:bg-slate-50"
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <span className="min-w-14 px-5 py-3 text-center text-lg font-bold text-slate-950">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 py-3 text-lg font-bold text-slate-700 transition hover:bg-slate-50"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <ContactModals
                  productName={product.name}
                  quantity={quantity}
                  price={product.price}
                  shopPhone="+94751234567"
                  shopEmail="shop@example.com"
                />
              </div>
            </div>

            <div className="glass-card p-6 md:p-8">
              <h2 className="text-lg font-semibold uppercase tracking-[0.24em] text-slate-500">Highlights</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {highlights.map(([label, value]) => (
                  <div key={label} className="rounded-2xl border border-slate-200 bg-white/80 p-4">
                    <p className="text-sm font-semibold text-slate-500">{label}</p>
                    <p className="mt-1 font-semibold text-slate-950">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        <section className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="glass-card p-6 md:p-8">
            <div className="mb-6 flex flex-wrap gap-2 border-b border-slate-200 pb-4">
              {(['description', 'specifications', 'reviews', 'shipping'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    activeTab === tab
                      ? 'bg-slate-950 text-white shadow-md'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {activeTab === 'description' && (
              <div className="space-y-5">
                <div>
                  <h3 className="text-2xl font-bold text-slate-950">Product overview</h3>
                  <p className="mt-4 leading-7 text-slate-600">{product.longDescription}</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  {[
                    ['Premium build', 'Carefully selected materials and finish'],
                    ['Better value', 'Designed to feel elevated without excess'],
                    ['Support ready', 'Help is available if you need it'],
                  ].map(([title, text]) => (
                    <div key={title} className="rounded-2xl bg-slate-50 p-4">
                      <p className="font-semibold text-slate-950">{title}</p>
                      <p className="mt-1 text-sm leading-6 text-slate-600">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'specifications' && (
              <div>
                <h3 className="text-2xl font-bold text-slate-950">Technical specifications</h3>
                <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-white">
                  {Object.entries(product.specifications).map(([label, value]) => (
                    <div key={label} className="grid grid-cols-1 gap-2 border-b border-slate-200 px-4 py-4 sm:grid-cols-[220px_1fr]">
                      <span className="font-semibold text-slate-950">{label}</span>
                      <span className="text-slate-600">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                <h3 className="text-2xl font-bold text-slate-950">Customer reviews</h3>
                <div className="mt-5 rounded-2xl border border-green-100 bg-green-50/80 p-5">
                  <div className="flex flex-wrap items-center gap-5">
                    <div>
                      <p className="text-5xl font-bold text-green-800">{product.rating.toFixed(1)}</p>
                      <p className="mt-1 text-sm text-slate-600">out of 5</p>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-1 text-amber-500">
                        {[...Array(5)].map((_, index) => (
                          <Star
                            key={index}
                            size={18}
                            className={index < Math.floor(product.rating) ? 'fill-amber-400 text-amber-400' : 'text-amber-200'}
                          />
                        ))}
                      </div>
                      <p className="mt-2 text-slate-600">{product.reviews} verified reviews</p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 space-y-4">
                  {[
                    {
                      name: 'John Doe',
                      rating: 5,
                      text: 'Excellent quality and the product presentation felt premium from the first look.',
                      date: '2 days ago',
                    },
                    {
                      name: 'Sarah Smith',
                      rating: 4,
                      text: 'Clean design, easy ordering flow, and the item looked exactly as expected.',
                      date: '1 week ago',
                    },
                  ].map((review) => (
                    <div key={review.name} className="rounded-2xl border border-slate-200 bg-white p-4">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="font-semibold text-slate-950">{review.name}</p>
                          <div className="mt-1 flex items-center gap-1 text-amber-500">
                            {[...Array(5)].map((_, index) => (
                              <Star
                                key={index}
                                size={14}
                                className={index < review.rating ? 'fill-amber-400 text-amber-400' : 'text-amber-200'}
                              />
                            ))}
                          </div>
                        </div>
                        <span className="text-sm text-slate-500">{review.date}</span>
                      </div>
                      <p className="mt-3 text-slate-600">{review.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'shipping' && (
              <div>
                <h3 className="text-2xl font-bold text-slate-950">Shipping and support</h3>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {[
                    {
                      icon: Truck,
                      title: 'Delivery time',
                      text: 'Standard delivery is 2 to 5 business days depending on the destination.',
                    },
                    {
                      icon: CheckCircle2,
                      title: 'Return policy',
                      text: 'Returns are handled within 7 days if the product remains in original condition.',
                    },
                    {
                      icon: ShieldCheck,
                      title: 'Warranty',
                      text: 'Manufacturer warranty support is available with proof of purchase.',
                    },
                    {
                      icon: Package,
                      title: 'Order support',
                      text: 'Message, call, or email the store using the contact buttons above.',
                    },
                  ].map(({ icon: Icon, title, text }) => (
                    <div key={title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-white">
                          <Icon size={18} />
                        </div>
                        <div>
                          <p className="font-semibold text-slate-950">{title}</p>
                          <p className="mt-1 text-sm leading-6 text-slate-600">{text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {relatedProducts.length > 0 && (
            <aside className="glass-card p-6 md:p-8">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-slate-950">Similar products</h2>
                  <p className="mt-1 text-sm text-slate-600">More items from the same category</p>
                </div>
                <TrendingUp size={18} className="text-green-800" />
              </div>

              <div className="space-y-4">
                {relatedProducts.map((relatedProduct) => (
                  <Link key={relatedProduct.id} href={`/products/${relatedProduct.id}`} className="block">
                    <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white transition hover:-translate-y-0.5 hover:shadow-lg">
                      <div className="relative h-36 overflow-hidden">
                        <Image
                          src={relatedProduct.image}
                          alt={relatedProduct.name}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          sizes="(max-width: 1024px) 100vw, 28vw"
                        />
                      </div>
                      <div className="p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-green-800">
                          {relatedProduct.category}
                        </p>
                          <h3 className="mt-2 line-clamp-2 font-semibold text-slate-950 group-hover:text-green-800">
                          {relatedProduct.name}
                        </h3>
                        <div className="mt-3 flex items-center justify-between">
                          <p className="text-lg font-bold text-slate-950">{formatPrice(relatedProduct.price)}</p>
                          <div className="flex items-center gap-1 text-amber-500">
                            {[...Array(5)].map((_, index) => (
                              <Star
                                key={index}
                                size={14}
                                className={index < Math.floor(relatedProduct.rating) ? 'fill-amber-400 text-amber-400' : 'text-amber-200'}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </aside>
          )}
        </section>
      </div>
    </main>
  )
}
