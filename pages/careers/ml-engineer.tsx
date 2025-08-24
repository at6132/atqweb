import Head from 'next/head'
import Link from 'next/link'

export default function MLEngineer() {
  return (
    <>
      <Head>
        <title>ML Engineer — ATQ</title>
        <meta name="description" content="Join ATQ as an ML Engineer. Productionize models, own inference infra, drift detection, and rollback tooling." />
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
                ML Engineer
              </h1>
              <span className="text-sm text-atq-muted">production inference & drift</span>
            </div>
            
            <div className="max-w-3xl space-y-8">
              <div className="card">
                <h2 className="text-lg font-semibold text-atq-snow mb-4">What You'll Do</h2>
                <p className="text-sm text-atq-text">
                  Productionize models, own inference infrastructure, drift detection, and rollback tooling. 
                  You'll bridge the gap between research and production, ensuring models perform reliably at scale.
                </p>
              </div>

              <div className="card">
                <h2 className="text-lg font-semibold text-atq-snow mb-4">What You Have</h2>
                <ul className="text-sm text-atq-text space-y-2">
                  <li>• Strong Python programming and software engineering skills</li>
                  <li>• Experience with containers and orchestration</li>
                  <li>• Message queues and distributed systems knowledge</li>
                  <li>• Monitoring and observability experience</li>
                  <li>• Model registry and MLOps tooling familiarity</li>
                  <li>• Production ML deployment experience</li>
                </ul>
              </div>

              <div className="card">
                <h2 className="text-lg font-semibold text-atq-snow mb-4">Nice to Have</h2>
                <ul className="text-sm text-atq-text space-y-2">
                  <li>• On-device featurization experience</li>
                  <li>• Low-latency I/O optimization</li>
                  <li>• Feature server architectures</li>
                  <li>• Real-time model serving at scale</li>
                  <li>• Financial markets or trading systems experience</li>
                </ul>
              </div>

              <div className="card">
                <h2 className="text-lg font-semibold text-atq-snow mb-4">How to Apply</h2>
                <p className="text-sm text-atq-text mb-4">
                  Send your background and a brief project walkthrough to{' '}
                  <a href="mailto:careers@atq.local" className="text-atq-ion">careers@atq.local</a>
                </p>
                <p className="text-sm text-atq-muted">
                  Include a description of a production ML system you've built or maintained. 
                  We're interested in your approach to reliability, monitoring, and handling model drift.
                </p>
              </div>

              <div className="card">
                <h2 className="text-lg font-semibold text-atq-snow mb-4">Our Process</h2>
                <ul className="text-sm text-atq-text space-y-2">
                  <li>• Initial review of your submission</li>
                  <li>• Technical discussion about ML infrastructure</li>
                  <li>• System design or live coding session</li>
                  <li>• Final conversation with the team</li>
                </ul>
                <p className="text-sm text-atq-muted mt-4">
                  We focus on practical system design and your approach to building reliable ML infrastructure.
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
