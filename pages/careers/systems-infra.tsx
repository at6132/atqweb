import Head from 'next/head'
import Link from 'next/link'

export default function SystemsInfra() {
  return (
    <>
      <Head>
        <title>Systems / Infra — ATQ</title>
        <meta name="description" content="Join ATQ as a Systems/Infrastructure Engineer. Maintain data pipelines, backtester, and execution adapters." />
      </Head>
      
      <div className="min-h-screen bg-atq-black text-atq-text">
        {/* Header */}
        <header className="mx-auto max-w-5xl px-6 py-10">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="h-8 w-8 bg-atq-ion rounded-lg flex items-center justify-center">
                <span className="text-atq-snow font-bold text-sm">ATQ</span>
              </div>
              <span className="text-xl font-semibold tracking-tight">ATQ</span>
            </Link>
          </div>
          <nav className="mt-6">
            <Link href="/careers" className="text-sm text-atq-muted hover:text-atq-text transition-colors">
              ← Back to Careers
            </Link>
          </nav>
        </header>

        <main className="mx-auto max-w-5xl px-6">
          <section className="pb-20">
            <div className="flex items-start justify-between mb-8">
              <h1 className="text-2xl font-bold tracking-tighter text-atq-snow">
                Systems / Infra
              </h1>
              <span className="text-sm text-atq-muted">low-latency Python + services</span>
            </div>
            
            <div className="max-w-3xl space-y-8">
              <div className="card">
                <h2 className="text-lg font-semibold text-atq-snow mb-4">What You'll Do</h2>
                <p className="text-sm text-atq-text">
                  Maintain data pipelines, backtester, and execution adapters; chase reliability. 
                  You'll build and maintain the critical infrastructure that powers our trading systems, 
                  with a focus on performance, reliability, and correctness.
                </p>
              </div>

              <div className="card">
                <h2 className="text-lg font-semibold text-atq-snow mb-4">What You Have</h2>
                <ul className="text-sm text-atq-text space-y-2">
                  <li>• Strong Python programming and systems experience</li>
                  <li>• Linux system administration and performance tuning</li>
                  <li>• CI/CD pipeline design and implementation</li>
                  <li>• Observability and monitoring expertise</li>
                  <li>• Experience with high-performance, low-latency systems</li>
                  <li>• Database design and optimization skills</li>
                </ul>
              </div>

              <div className="card">
                <h2 className="text-lg font-semibold text-atq-snow mb-4">Nice to Have</h2>
                <ul className="text-sm text-atq-text space-y-2">
                  <li>• Exchange API integration experience</li>
                  <li>• FIX protocol knowledge</li>
                  <li>• Financial markets data handling</li>
                  <li>• Network programming and optimization</li>
                  <li>• Time-series database experience</li>
                  <li>• Trading systems or fintech background</li>
                </ul>
              </div>

              <div className="card">
                <h2 className="text-lg font-semibold text-atq-snow mb-4">How to Apply</h2>
                <p className="text-sm text-atq-text mb-4">
                  Send your background and system design experience to{' '}
                  <a href="mailto:careers@atq.local" className="text-atq-ion">careers@atq.local</a>
                </p>
                <p className="text-sm text-atq-muted">
                  Include examples of systems you've built or maintained, especially those requiring 
                  high reliability or performance. We're interested in your approach to system design 
                  and operational excellence.
                </p>
              </div>

              <div className="card">
                <h2 className="text-lg font-semibold text-atq-snow mb-4">Our Process</h2>
                <ul className="text-sm text-atq-text space-y-2">
                  <li>• Initial review of your submission</li>
                  <li>• Technical discussion about systems and architecture</li>
                  <li>• System design exercise or live troubleshooting</li>
                  <li>• Final conversation with the team</li>
                </ul>
                <p className="text-sm text-atq-muted mt-4">
                  We focus on practical system design, debugging skills, and your approach to building reliable infrastructure.
                </p>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-atq-border">
          <div className="mx-auto max-w-5xl px-6 py-8">
            <div className="flex flex-wrap gap-6 text-xs text-atq-muted">
              <Link href="/" className="hover:text-atq-text transition-colors">
                Home
              </Link>
              <span>•</span>
              <Link href="/careers" className="hover:text-atq-text transition-colors">
                Careers
              </Link>
              <span>•</span>
              <Link href="/security" className="hover:text-atq-text transition-colors">
                Security
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
