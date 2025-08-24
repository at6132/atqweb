import Head from 'next/head'
import Link from 'next/link'

export default function Careers() {
  return (
    <>
      <Head>
        <title>Careers — ATQ</title>
        <meta name="description" content="Join ATQ. We hire quietly for high-leverage roles in research, systems, and risk." />
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
        </header>

        <main className="mx-auto max-w-5xl px-6">
          <section className="pb-20">
            <h1 className="text-2xl font-bold tracking-tighter text-atq-snow mb-8">
              Careers
            </h1>
            
            <div className="max-w-3xl mb-12">
              <p className="text-base text-atq-text mb-6">
                We hire quietly for high-leverage roles. No "growth" team, no marketing. 
                Just research, systems, and risk.
              </p>
              <p className="text-sm text-atq-muted">
                <strong className="text-atq-snow">Hiring bar:</strong> ship velocity, code clarity, evidence of taste. 
                Short take-home or live pairing; no puzzles.
              </p>
            </div>

            <div className="space-y-8">
              <div className="card">
                <div className="flex items-start justify-between mb-4">
                  <h2 className="text-lg font-semibold text-atq-snow">Quant Researcher</h2>
                  <span className="text-sm text-atq-muted">microstructure / time-series</span>
                </div>
                <div className="space-y-4 text-sm text-atq-text">
                  <div>
                    <span className="text-atq-snow font-medium">You'll:</span> design hypotheses, build features, run large-N experiments, and ship models with measurable live impact.
                  </div>
                  <div>
                    <span className="text-atq-snow font-medium">You have:</span> strong Python, time-series intuition, stats/ML comfort, and taste for clean experiments.
                  </div>
                  <div>
                    <span className="text-atq-snow font-medium">Nice:</span> microstructure, order-book features, feature stores, A/B in prod.
                  </div>
                  <div>
                    <span className="text-atq-snow font-medium">Apply:</span> send a 1–2 page write-up of a signal you disproved (and why) to{' '}
                    <a href="mailto:careers@atq.local" className="text-atq-ion">careers@atq.local</a>
                  </div>
                </div>
                <div className="mt-6">
                  <Link href="/careers/quant-researcher" className="text-atq-ion hover:text-atq-snow transition-colors text-sm">
                    View details →
                  </Link>
                </div>
              </div>

              <div className="card">
                <div className="flex items-start justify-between mb-4">
                  <h2 className="text-lg font-semibold text-atq-snow">ML Engineer</h2>
                  <span className="text-sm text-atq-muted">production inference & drift</span>
                </div>
                <div className="space-y-4 text-sm text-atq-text">
                  <div>
                    <span className="text-atq-snow font-medium">You'll:</span> productionize models, own inference infra, drift detection, and rollback tooling.
                  </div>
                  <div>
                    <span className="text-atq-snow font-medium">You have:</span> Python, containers, queues, monitoring, and model registry experience.
                  </div>
                  <div>
                    <span className="text-atq-snow font-medium">Nice:</span> on-device featurization, low-latency IO, feature servers.
                  </div>
                  <div>
                    <span className="text-atq-snow font-medium">Apply:</span> send your background and a brief project walkthrough to{' '}
                    <a href="mailto:careers@atq.local" className="text-atq-ion">careers@atq.local</a>
                  </div>
                </div>
                <div className="mt-6">
                  <Link href="/careers/ml-engineer" className="text-atq-ion hover:text-atq-snow transition-colors text-sm">
                    View details →
                  </Link>
                </div>
              </div>

              <div className="card">
                <div className="flex items-start justify-between mb-4">
                  <h2 className="text-lg font-semibold text-atq-snow">Systems / Infra</h2>
                  <span className="text-sm text-atq-muted">low-latency Python + services</span>
                </div>
                <div className="space-y-4 text-sm text-atq-text">
                  <div>
                    <span className="text-atq-snow font-medium">You'll:</span> maintain data pipelines, backtester, and execution adapters; chase reliability.
                  </div>
                  <div>
                    <span className="text-atq-snow font-medium">You have:</span> Python, Linux, CI/CD, observability chops; bonus for exchange APIs & FIX.
                  </div>
                  <div>
                    <span className="text-atq-snow font-medium">Apply:</span> send your background and system design experience to{' '}
                    <a href="mailto:careers@atq.local" className="text-atq-ion">careers@atq.local</a>
                  </div>
                </div>
                <div className="mt-6">
                  <Link href="/careers/systems-infra" className="text-atq-ion hover:text-atq-snow transition-colors text-sm">
                    View details →
                  </Link>
                </div>
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
              <Link href="/security" className="hover:text-atq-text transition-colors">
                Security
              </Link>
              <span>•</span>
              <span>
                For informational purposes only; not an offer to sell or a solicitation to buy any security or strategy.
              </span>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
