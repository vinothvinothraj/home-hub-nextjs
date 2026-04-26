'use client'

import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { Search, SlidersHorizontal, Sparkles } from 'lucide-react'
import ProductCard from '@/components/ProductCard'
import { products, categories } from '@/data/products'

type SortMode = 'name' | 'price-low' | 'price-high' | 'rating'

export default function ProductsContent() {
  const searchParams = useSearchParams()
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState<SortMode>('name')

  useEffect(() => {
    const categoryParam = searchParams.get('category')
    if (categoryParam) {
      setSelectedCategory(decodeURIComponent(categoryParam))
    }
  }, [searchParams])

  const filteredProducts = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase()

    const filtered = products.filter((product) => {
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory
      const matchesSearch =
        !normalizedSearch ||
        product.name.toLowerCase().includes(normalizedSearch) ||
        product.description.toLowerCase().includes(normalizedSearch) ||
        product.longDescription.toLowerCase().includes(normalizedSearch)

      return matchesCategory && matchesSearch
    })

    return [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price
        case 'price-high':
          return b.price - a.price
        case 'rating':
          return b.rating - a.rating
        case 'name':
        default:
          return a.name.localeCompare(b.name)
      }
    })
  }, [selectedCategory, searchTerm, sortBy])

  const totalProducts = products.length

  return (
    <section className="py-10 md:py-16">
      <div className="section-shell">
        <div className="panel-surface overflow-hidden">
          <div className="border-b border-slate-200/70 bg-gradient-to-r from-green-50 via-white to-lime-50 px-5 py-6 sm:px-8 md:px-10 md:py-8">
            <div className="max-w-4xl">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full brand-gradient px-4 py-2 text-sm font-semibold text-white">
                <Sparkles size={16} />
                Home essentials catalog
              </div>
              <h1 className="font-display text-4xl font-bold text-slate-950 sm:text-5xl">
                Browse products with a cleaner, easier shopping flow
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 md:text-lg">
                Search, filter, and compare all of the home products in one polished view. The
                layout is designed to feel calmer on mobile and more premium on desktop.
              </p>
            </div>
          </div>

          <div className="grid gap-8 px-5 py-6 sm:px-8 md:px-10 lg:grid-cols-[320px_1fr] lg:gap-10 lg:py-10">
            <aside className="lg:sticky lg:top-28 lg:h-fit">
              <div className="rounded-[1.4rem] border border-slate-200/80 bg-white/90 p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                      Filters
                    </p>
                    <h2 className="mt-1 text-xl font-bold text-slate-950">Refine results</h2>
                  </div>
                  <SlidersHorizontal size={20} className="text-green-800" />
                </div>

                <div className="mt-5">
                  <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor="search">
                    Search products
                  </label>
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                      id="search"
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Search by name or description"
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-500/10"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-sm font-semibold text-slate-700">Categories</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {['All', ...categories].map((category) => {
                      const count =
                        category === 'All'
                          ? totalProducts
                          : products.filter((p) => p.category === category).length

                      return (
                        <button
                          key={category}
                          onClick={() => setSelectedCategory(category)}
                          className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                            selectedCategory === category
                              ? 'bg-slate-950 text-white shadow-md'
                              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                          }`}
                        >
                          {category}
                          <span className="ml-2 text-xs opacity-80">{count}</span>
                        </button>
                      )
                    })}
                  </div>
                </div>

                <div className="mt-6">
                  <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor="sort">
                    Sort by
                  </label>
                  <select
                    id="sort"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as SortMode)}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-800 outline-none transition focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-500/10"
                  >
                    <option value="name">Name (A to Z)</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                  </select>
                </div>
              </div>
            </aside>

            <div>
              <div className="mb-6 flex flex-col gap-4 rounded-[1.4rem] border border-slate-200/80 bg-white/85 p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">Showing results</p>
                  <p className="mt-1 text-lg font-bold text-slate-950">
                    {filteredProducts.length} products
                    {selectedCategory !== 'All' ? ` in ${selectedCategory}` : ''}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-green-50 px-4 py-2 text-sm font-semibold text-green-800">
                    {selectedCategory}
                  </span>
                  <span className="rounded-full bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-700">
                    {sortBy.replace('-', ' ')}
                  </span>
                </div>
              </div>

              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="glass-card flex flex-col items-center justify-center px-6 py-16 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-950 text-white">
                    <Search size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-950">No products matched your search</h3>
                  <p className="mt-3 max-w-md text-slate-600">
                    Try a different keyword, change the category filter, or reset the sort order.
                  </p>
                  <button
                    onClick={() => {
                      setSelectedCategory('All')
                      setSearchTerm('')
                      setSortBy('name')
                    }}
                    className="pill-button-primary mt-6"
                  >
                    Clear filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
