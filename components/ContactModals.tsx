'use client'

import { useState } from 'react'
import { Check, Copy, Mail, MessageCircle, Phone, Send, X } from 'lucide-react'

interface ContactModalsProps {
  productName: string
  quantity: number
  price: number
  shopPhone: string
  shopEmail: string
}

const formatPrice = (value: number) => {
  return new Intl.NumberFormat('en-LK', {
    style: 'currency',
    currency: 'LKR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value)
}

export default function ContactModals({ productName, quantity, price, shopPhone, shopEmail }: ContactModalsProps) {
  const [emailModalOpen, setEmailModalOpen] = useState(false)
  const [callModalOpen, setCallModalOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const [emailForm, setEmailForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEmailForm({ ...emailForm, [e.target.name]: e.target.value })
  }

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const subject = `Order request - ${productName}`
    const body = `Name: ${emailForm.name}\nEmail: ${emailForm.email}\nPhone: ${emailForm.phone}\n\nProduct: ${productName}\nQuantity: ${quantity}\nPrice per unit: ${formatPrice(price)}\nTotal: ${formatPrice(price * quantity)}\n\nMessage: ${emailForm.message}`

    window.location.href = `mailto:${shopEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setEmailModalOpen(false)
    setEmailForm({ name: '', email: '', phone: '', message: '' })
  }

  const copyPhoneToClipboard = () => {
    navigator.clipboard.writeText(shopPhone)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const total = price * quantity

  return (
    <>
      <div className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white/90 p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Place your order</p>
          <p className="mt-1 text-sm text-slate-600">Choose your preferred way to contact the store.</p>
        </div>

        <div className="flex flex-wrap gap-2">
          <a
            href={`https://wa.me/${shopPhone.replace(/\D/g, '')}?text=Hi! I am interested in ordering ${productName} (Qty: ${quantity}). Total price: ${formatPrice(total)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-green-700 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-green-950/10 transition hover:-translate-y-0.5 hover:bg-green-800"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>

          <button
            onClick={() => setCallModalOpen(true)}
            className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-slate-800"
          >
            <Phone size={18} />
            Call
          </button>

          <button
            onClick={() => setEmailModalOpen(true)}
            className="inline-flex items-center gap-2 rounded-full bg-lime-600 px-4 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-lime-950/10 transition hover:-translate-y-0.5 hover:bg-lime-500"
          >
            <Mail size={18} />
            Email
          </button>
        </div>
      </div>

      {emailModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content max-w-lg overflow-hidden">
            <div className="flex items-center justify-between brand-gradient px-6 py-5 text-white">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/75">Email order</p>
                <h2 className="mt-1 text-2xl font-bold">Send a request</h2>
              </div>
              <button
                onClick={() => setEmailModalOpen(false)}
                className="rounded-full bg-white/10 p-2 transition hover:bg-white/20"
                aria-label="Close email modal"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleEmailSubmit} className="space-y-4 p-6">
              <div className="rounded-2xl border border-green-100 bg-green-50/80 p-4 text-sm text-slate-700">
                <p className="font-semibold text-slate-950">Order summary</p>
                <p className="mt-1">
                  {productName} x {quantity} = <span className="font-bold text-green-800">{formatPrice(total)}</span>
                </p>
              </div>

              {[
                ['name', 'Full name', 'John Doe', 'text'],
                ['email', 'Email address', 'john@example.com', 'email'],
                ['phone', 'Phone number', '+94 77 886 2111', 'tel'],
              ].map(([name, label, placeholder, type]) => (
                <div key={name}>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">{label}</label>
                  <input
                    type={type}
                    name={name}
                    value={emailForm[name as keyof typeof emailForm]}
                    onChange={handleEmailChange}
                    required
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-500/10"
                    placeholder={placeholder}
                  />
                </div>
              ))}

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">Additional message</label>
                <textarea
                  name="message"
                  value={emailForm.message}
                  onChange={handleEmailChange}
                  rows={4}
                  className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-500/10"
                  placeholder="Any special requests or questions..."
                />
              </div>

              <button type="submit" className="pill-button-primary w-full justify-center">
                <Send size={18} />
                Send order request
              </button>
            </form>
          </div>
        </div>
      )}

      {callModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content max-w-lg overflow-hidden">
            <div className="flex items-center justify-between bg-gradient-to-r from-slate-950 to-slate-800 px-6 py-5 text-white">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">Call order</p>
                <h2 className="mt-1 text-2xl font-bold">Speak to the team</h2>
              </div>
              <button
                onClick={() => setCallModalOpen(false)}
                className="rounded-full bg-white/10 p-2 transition hover:bg-white/20"
                aria-label="Close call modal"
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-5 p-6 text-center">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Order summary</p>
                <p className="mt-3 text-slate-700">{productName}</p>
                <p className="mt-2 text-xl font-bold text-slate-950">
                  Quantity: {quantity} | Total: {formatPrice(total)}
                </p>
              </div>

              <div className="rounded-3xl border border-green-100 bg-green-50 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-green-800">Phone number</p>
                <p className="mt-2 break-all font-display text-4xl font-bold text-slate-950">{shopPhone}</p>
                <button
                  onClick={copyPhoneToClipboard}
                  className="pill-button-secondary mt-4 w-full justify-center border-green-200 text-green-800 hover:border-green-300"
                >
                  {copied ? (
                    <>
                      <Check size={18} />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy size={18} />
                      Copy number
                    </>
                  )}
                </button>
              </div>

              <a
                href={`tel:${shopPhone}`}
                className="pill-button-primary w-full justify-center"
              >
                <Phone size={18} />
                Call now
              </a>

              <p className="text-xs text-slate-500">Available Monday to Sunday, 9 AM to 6 PM</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
