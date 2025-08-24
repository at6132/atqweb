import Head from 'next/head'
import Link from 'next/link'

export default function Contact() {

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
            
            <p className="text-lg atq-grotesk text-atq-gray">
              Coming Soon
            </p>
          </section>
        </main>


      </div>
    </>
  )
}
