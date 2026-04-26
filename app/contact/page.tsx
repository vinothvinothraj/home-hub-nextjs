'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Mail, MapPin, Phone, Send, ShieldCheck } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', phone: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <main className="app-shell">
      <Navbar />

      <section className="section-shell py-10 md:py-16">
        <div className="glass-card overflow-hidden">
          <div className="brand-gradient px-6 py-10 text-white md:px-10 md:py-14">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white/90">
              <ShieldCheck size={16} />
              Contact HomeHub
            </p>
            <h1 className="mt-5 font-display text-4xl font-bold md:text-6xl">Get in touch with a more professional support layout</h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-white/80 md:text-lg">
              Use the form below to send a message, or contact us directly through phone, email, and map details.
            </p>
          </div>

          <div className="grid gap-8 p-6 md:p-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <h2 className="text-3xl font-bold text-slate-950">Send us a message</h2>
              <p className="mt-3 text-slate-600">
                The form is kept simple and mobile-friendly so it feels quick to use on any device.
              </p>

              {submitted && (
              <div className="mt-6 rounded-2xl border border-green-200 bg-green-50 p-4 text-green-800 shadow-sm">
                  Thank you for your message. We will get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                {[
                  ['name', 'Full name', 'John Doe', 'text'],
                  ['phone', 'Phone number', '+94 77 886 2111', 'tel'],
                  ['email', 'Email address', 'john@example.com', 'email'],
                ].map(([name, label, placeholder, type]) => (
                  <div key={name}>
                    <label htmlFor={name} className="mb-2 block text-sm font-semibold text-slate-700">
                      {label}
                    </label>
                    <input
                      type={type}
                      id={name}
                      name={name}
                      value={formData[name as keyof typeof formData]}
                      onChange={handleChange}
                      required
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-500/10"
                      placeholder={placeholder}
                    />
                  </div>
                ))}

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-semibold text-slate-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-500/10"
                    placeholder="Tell us what you need help with..."
                  />
                </div>

                <button type="submit" className="pill-button-primary w-full justify-center">
                  <Send size={18} />
                  Send message
                </button>
              </form>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-slate-950">Contact information</h2>

              {[
                [Phone, 'Phone', '+94 77 886 2111', 'Available 9 AM - 6 PM', 'tel:+94751234567', 'brand-gradient', true],
                [Mail, 'Email', 'shop@example.com', 'We respond within 24 hours', 'mailto:shop@example.com', 'bg-slate-950', true],
                [MapPin, 'Location', 'Negombo, Sri Lanka', 'Open Monday - Sunday', '', 'bg-lime-600', false],
              ].map(([Icon, title, value, support, href, toneClass, isLink]) => (
                <div
                  key={title as string}
                  className="rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-2xl text-white ${toneClass}`}>
                      <Icon size={22} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">{title as string}</p>
                      {isLink ? (
                        <a
                          href={href as string}
                          className="mt-1 block break-words text-xl font-bold text-slate-950 transition hover:text-green-800"
                        >
                          {value as string}
                        </a>
                      ) : (
                        <p className="mt-1 block break-words text-xl font-bold text-slate-950">
                          {value as string}
                        </p>
                      )}
                      <p className="mt-1 text-sm text-slate-600">{support as string}</p>
                    </div>
                  </div>
                </div>
              ))}

              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-200 shadow-sm">
                <iframe
                  width="100%"
                  height="360"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.2088359486854!2d79.83611647619047!3d7.142699692860645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2fd42a6a6a6a1%3A0x1a1a1a1a1a1a1a1a!2sNegombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1234567890"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
