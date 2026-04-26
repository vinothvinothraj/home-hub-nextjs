import Link from 'next/link'
import { Mail, MapPin, Phone, Facebook, Instagram, Linkedin, Sparkles } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/60 bg-slate-950 text-white">
      <div className="section-shell py-14 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr_0.7fr_0.9fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl brand-gradient text-white shadow-lg">
                <Sparkles size={20} />
              </span>
              <div>
                <p className="font-display text-3xl font-bold">HomeHub</p>
                <p className="text-sm uppercase tracking-[0.24em] text-white/55">Premium home essentials</p>
              </div>
            </div>

            <p className="mt-5 max-w-md text-sm leading-7 text-white/70 md:text-base">
              A cleaner, more premium shopping experience for furniture, appliances, decor, bedding,
              and everyday home essentials.
            </p>

            <div className="mt-5 flex gap-3">
              {[
                [Facebook, '#facebook'],
                [Instagram, '#instagram'],
                [Linkedin, '#linkedin'],
              ].map(([Icon, href]) => (
                <a
                  key={href as string}
                  href={href as string}
                  aria-label={href as string}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:-translate-y-0.5 hover:bg-white/10"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Quick links</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li>
                <Link href="/" className="transition hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="transition hover:text-white">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Categories</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li>Furniture</li>
              <li>Electronics</li>
              <li>Kitchen Appliances</li>
              <li>Bedding</li>
              <li>Home Decor</li>
              <li>Lighting</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Contact</h3>
            <ul className="mt-5 space-y-4 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <Phone size={18} className="mt-0.5 text-lime-300" />
                <div>
                  <p className="text-white/45">Phone</p>
                  <a href="tel:+94751234567" className="font-semibold text-white transition hover:text-lime-300">
                    +94 77 886 2111
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="mt-0.5 text-lime-300" />
                <div>
                  <p className="text-white/45">Email</p>
                  <a href="mailto:shop@example.com" className="font-semibold text-white transition hover:text-lime-300">
                    shop@example.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 text-lime-300" />
                <div>
                  <p className="text-white/45">Location</p>
                  <p className="font-semibold text-white">Negombo, Sri Lanka</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-white/50">
          <p>&copy; 2026 HomeHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
