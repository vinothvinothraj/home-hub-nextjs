import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProductDetailClient from '@/components/ProductDetailClient'
import { products } from '@/data/products'

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const product = products.find((p) => p.id === id)

  if (!product) {
    return {
      title: 'Product Not Found',
      description: 'The product you are looking for does not exist.',
    }
  }

  return {
    title: `${product.name} | HomeHub - Buy Online`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [
        {
          url: product.image,
          width: 800,
          height: 600,
          alt: product.name,
        },
      ],
    },
  }
}

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product = products.find((p) => p.id === id)

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="section-shell flex min-h-[60vh] items-center justify-center py-16">
          <div className="glass-card max-w-lg p-8 text-center">
            <h1 className="font-display text-3xl font-bold text-slate-950 md:text-4xl">Product not found</h1>
            <p className="mt-4 text-slate-600">Sorry, we could not find the product you were looking for.</p>
            <a href="/products" className="pill-button-primary mt-8">
              Back to products
            </a>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <ProductDetailClient product={product} />
      <Footer />
    </>
  )
}
