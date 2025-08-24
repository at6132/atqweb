import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: '', email: '', company: '', message: '' })
      } else {
        const data = await response.json()
        setError(data.message || 'Something went wrong')
      }
    } catch (err) {
      setError('Network error. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Head>
        <title>Contact — ATQ</title>
        <meta name="description" content="Get in touch with ATQ." />
      </Head>
      
      <div className="min-h-screen bg-atq-white text-atq-black">
        {/* Header Bar */}
        <header className="relative">
          {/* Border line behind logo - moved up */}
          <div className="absolute top-16 left-0 right-0 border-b border-atq-border"></div>
          
          <div className="relative z-10 flex items-center justify-center px-6 py-6">
            <nav className="flex items-center gap-12">
              <Link href="/" className="atq-grotesk text-sm relative group no-underline">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-atq-black transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="/contact" className="atq-grotesk text-sm relative group no-underline">
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-atq-black transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </nav>
          </div>
        </header>

        <main className="mx-auto max-w-2xl px-6">
          <section className="text-center py-24">
            <h2 className="text-4xl atq-grotesk-wide mb-16">
              Contact
            </h2>
            
            {submitted ? (
              <div className="text-center">
                <p className="text-lg font-sans font-medium text-atq-gray mb-8">
                  Thank you for your message. We'll be in touch.
                </p>
                <Link href="/" className="atq-grotesk underline text-sm">
                  Return home
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="text-left">
                  <label htmlFor="name" className="block text-sm atq-grotesk mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-3 border-0 border-b border-atq-border bg-transparent focus:border-atq-black focus:outline-none transition-colors font-sans"
                  />
                </div>

                <div className="text-left">
                  <label htmlFor="email" className="block text-sm atq-grotesk mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-3 border-0 border-b border-atq-border bg-transparent focus:border-atq-black focus:outline-none transition-colors font-sans"
                  />
                </div>

                <div className="text-left">
                  <label htmlFor="company" className="block text-sm atq-grotesk mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-0 py-3 border-0 border-b border-atq-border bg-transparent focus:border-atq-black focus:outline-none transition-colors font-sans"
                  />
                </div>

                <div className="text-left">
                  <label htmlFor="message" className="block text-sm atq-grotesk mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-0 py-3 border-0 border-b border-atq-border bg-transparent focus:border-atq-black focus:outline-none transition-colors font-sans resize-none"
                  />
                </div>

                {error && (
                  <div className="text-center">
                    <p className="text-sm text-red-600">{error}</p>
                  </div>
                )}

                <div className="text-center pt-8">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="button-primary disabled:opacity-50"
                  >
                    {isSubmitting ? 'Sending...' : 'Send message'}
                  </button>
                </div>
              </form>
            )}
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-atq-border">
          <div className="mx-auto max-w-4xl px-6 py-16">
            <div className="text-center text-sm text-atq-gray space-y-6 font-medium">
              <div>
                <Link href="/" className="underline">Home</Link>
                <span className="mx-4">•</span>
                <Link href="/careers" className="underline">Careers</Link>
                <span className="mx-4">•</span>
                <Link href="/security" className="underline">Security</Link>
              </div>
              <p>
                For informational purposes only; not an offer to sell or a solicitation to buy any security or strategy.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
