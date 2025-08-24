import Head from 'next/head'
import Link from 'next/link'

export default function QuantResearcher() {
  return (
    <>
      <Head>
        <title>Quant Researcher — ATQ</title>
        <meta name="description" content="Join ATQ as a Quant Researcher. Design hypotheses, build features, and ship models with measurable live impact." />
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
                Quant Researcher
              </h1>
              <span className="text-sm text-atq-muted">microstructure / time-series</span>
            </div>
            
            <div className="max-w-3xl space-y-8">
              <div className="card">
                <h2 className="text-lg font-semibold text-atq-snow mb-4">What You'll Do</h2>
                <p className="text-sm text-atq-text">
                  Design hypotheses, build features, run large-N experiments, and ship models with measurable live impact. 
                  You'll work directly with production trading systems, turning research insights into profitable strategies.
                </p>
              </div>

              <div className="card">
                <h2 className="text-lg font-semibold text-atq-snow mb-4">What You Have</h2>
                <ul className="text-sm text-atq-text space-y-2">
                  <li>• Strong Python programming skills</li>
                  <li>• Time-series intuition and statistical modeling experience</li>
                  <li>• Stats/ML comfort with practical application experience</li>
                  <li>• Taste for clean experiments and rigorous methodology</li>
                  <li>• Track record of hypothesis-driven research</li>
                </ul>
              </div>

              <div className="card">
                <h2 className="text-lg font-semibold text-atq-snow mb-4">Nice to Have</h2>
                <ul className="text-sm text-atq-text space-y-2">
                  <li>• Experience with market microstructure</li>
                  <li>• Order-book feature engineering</li>
                  <li>• Feature store architectures</li>
                  <li>• A/B testing in production environments</li>
                  <li>• Academic or industry research publications</li>
                </ul>
              </div>

              <div className="card">
                <h2 className="text-lg font-semibold text-atq-snow mb-4">How to Apply</h2>
                <p className="text-sm text-atq-text mb-4">
                  Send a 1–2 page write-up of a signal you disproved (and why) to{' '}
                  <a href="mailto:careers@atq.local" className="text-atq-ion">careers@atq.local</a>
                </p>
                <p className="text-sm text-atq-muted">
                  We're looking for evidence of systematic thinking, experimental rigor, and the intellectual honesty 
                  to abandon ideas that don't work. Include your reasoning process and what you learned.
                </p>
              </div>

              <div className="card">
                <h2 className="text-lg font-semibold text-atq-snow mb-4">Our Process</h2>
                <ul className="text-sm text-atq-text space-y-2">
                  <li>• Initial review of your submission</li>
                  <li>• Technical conversation about your research approach</li>
                  <li>• Short take-home project or live pairing session</li>
                  <li>• Final conversation with the team</li>
                </ul>
                <p className="text-sm text-atq-muted mt-4">
                  No brain teasers, no whiteboard puzzles. We focus on how you think about real problems.
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
