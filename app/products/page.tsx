import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Suspense } from 'react'
import ProductsContent from '@/components/ProductsContent'

export const metadata = {
  title: 'Products - HomeHub',
  description: 'Browse our complete collection of home products across all categories',
}

export default function ProductsPage() {
  return (
    <main className="app-shell">
      <Navbar />
      <Suspense fallback={<ProductsLoadingState />}>
        <ProductsContent />
      </Suspense>
      <Footer />
    </main>
  )
}

function ProductsLoadingState() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
        <p className="text-gray-600 font-semibold">Loading products...</p>
      </div>
    </div>
  )
}
