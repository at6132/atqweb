import Head from 'next/head'
import Link from 'next/link'

export default function Security() {
  return (
    <>
      <Head>
        <title>Security — ATQ</title>
        <meta name="description" content="Security practices and policies at ATQ." />
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
              Security at ATQ
            </h1>
            
            <div className="max-w-3xl space-y-8">
              <div className="card">
                <h2 className="text-lg font-semibold text-atq-snow mb-4">Access Control</h2>
                <p className="text-sm text-atq-text">
                  Least-privilege access; hardware keys for prod; audit logs on admin actions.
                </p>
              </div>

              <div className="card">
                <h2 className="text-lg font-semibold text-atq-snow mb-4">Secrets Management</h2>
                <p className="text-sm text-atq-text">
                  Secrets in vault; per-service identities; zero shared creds.
                </p>
              </div>

              <div className="card">
                <h2 className="text-lg font-semibold text-atq-snow mb-4">Data Handling</h2>
                <p className="text-sm text-atq-text">
                  Data handling: immutable research snapshots, PII minimized, no third-party trackers.
                </p>
              </div>

              <div className="card">
                <h2 className="text-lg font-semibold text-atq-snow mb-4">Incident Response</h2>
                <p className="text-sm text-atq-text">
                  Incident response: 24/7 on-call, post-mortems within 72h, partner notices when applicable.
                </p>
              </div>

              <div className="card">
                <h2 className="text-lg font-semibold text-atq-snow mb-4">Contact</h2>
                <p className="text-sm text-atq-text">
                  Security concerns: <a href="mailto:security@atq.local" className="text-atq-ion">security@atq.local</a>
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
              <span>
                For informational purposes only; not an offer to sell or a solicitation to buy any security or strategy.
              </span>
            </div>
            <div className="mt-4 text-xs text-atq-muted">
              <p>Past performance is not indicative of future results. ATQ does not solicit or accept capital via this website.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
