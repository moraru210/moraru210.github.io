const jobs = [
  {
    company: 'Amazon Web Services',
    role: 'SDE — RDS for Oracle',
    location: 'Dublin, Ireland',
    period: 'March 2025 – Present',
    badge: 'Current',
    color: 'cyan',
    bullets: [
      'Core engineer on the Additional Storage Volumes initiative, scaling database storage from 64 TiB to 256 TiB (4×); announced at AWS re:Invent 2025 keynote.',
      'Built the Primary Endpoint feature using Java/Spring, Route 53, and SWF — automatically tracks the primary instance through switchovers, eliminating manual intervention.',
      'Developed a Python AI-Ops agent using MCP servers to automate diagnosis and SOP workflows, cutting manual operator SSH accesses by 80% in six months.',
      'Owned full-stack development of the cross-region option group feature (React console + Java/Postgres backend), directly enabling 500+ on-premises database migrations.',
      'Primary on-call for RDS Oracle\'s 100K+ instance production fleet across all AWS regions.',
    ],
  },
  {
    company: 'Amazon Web Services',
    role: 'SDE — Languages & Runtimes',
    location: 'Dublin, Ireland',
    period: 'August 2023 – March 2025',
    badge: null,
    color: 'blue',
    bullets: [
      'Owned the JDK migration workflow in Ironhide, an AI migration platform that combines static analysis with LLM-driven transforms to auto-upgrade 20K+ Java services across Amazon.',
      'Developed in-house JVM runtime layers enabling older bytecode to run on newer JVMs optimised for AWS Graviton, improving performance by 20% with zero code changes.',
      'Diagnosed a memory leak in the JVM\'s selector API using async-profiler; refactored socket registration to fix resource exhaustion for Kinesis Data Streams at scale.',
      'Designed the CI/CD infrastructure (TypeScript, AWS SDK) for Amazon\'s in-house JVM runtimes, reducing release SLAs by 50%.',
      'OpenJDK contributor — JDK Updates Project, maintaining long-term support branches.',
    ],
  },
  {
    company: 'BidFX',
    role: 'Software Engineer Intern',
    location: 'London, UK',
    period: 'April 2022 – Sep 2022',
    badge: null,
    color: 'violet',
    bullets: [
      'Built a Prometheus-based sidecar service (Python, Kubernetes) to monitor globally distributed federation servers with metrics and Slack alerting.',
      'Designed and shipped a multicast pricing protocol on the core trading platform using the Java Unsafe API, with real-time observability into pricing data flow.',
      'Fixed a race condition in the pricing audit system that silently skipped 50K+ price updates under peak load.',
    ],
  },
  {
    company: 'Willis Towers Watson',
    role: 'Software Developer Intern',
    location: 'Reigate, UK',
    period: 'July 2021 – Sep 2021',
    badge: null,
    color: 'emerald',
    bullets: [
      'Added Azure AD SSO with On-Behalf-Of auth flow to an internal metrics dashboard (C#, Angular), enforcing role-based access control for sensitive business data.',
    ],
  },
]

const colorMap: Record<string, { dot: string; badge: string; border: string }> = {
  cyan:    { dot: 'bg-cyan-400',    badge: 'bg-cyan-400/10 text-cyan-400 border-cyan-400/30',    border: 'border-cyan-400/20' },
  blue:    { dot: 'bg-blue-400',    badge: 'bg-blue-400/10 text-blue-400 border-blue-400/30',    border: 'border-blue-400/20' },
  violet:  { dot: 'bg-violet-400',  badge: 'bg-violet-400/10 text-violet-400 border-violet-400/30',  border: 'border-violet-400/20' },
  emerald: { dot: 'bg-emerald-400', badge: 'bg-emerald-400/10 text-emerald-400 border-emerald-400/30', border: 'border-emerald-400/20' },
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-3">Career</p>
          <h2 className="text-4xl font-bold text-white">Work Experience</h2>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-800 ml-2" />

          <div className="space-y-12">
            {jobs.map((job) => {
              const c = colorMap[job.color]
              return (
                <div key={job.role + job.company} className="relative pl-12">
                  <div className={`absolute left-0 top-1.5 w-5 h-5 rounded-full ${c.dot} ring-4 ring-[#0a0e1a] flex items-center justify-center`}>
                    <div className="w-2 h-2 bg-[#0a0e1a] rounded-full" />
                  </div>

                  <div className={`bg-slate-900/50 border ${c.border} rounded-xl p-6`}>
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <div className="flex items-center gap-3 flex-wrap">
                          <h3 className="text-xl font-semibold text-white">{job.role}</h3>
                          {job.badge && (
                            <span className={`text-xs px-2 py-0.5 rounded-full border font-mono ${c.badge}`}>
                              {job.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-slate-400 mt-0.5">
                          {job.company} · {job.location}
                        </p>
                      </div>
                      <span className="text-slate-500 text-sm font-mono shrink-0">{job.period}</span>
                    </div>

                    <ul className="space-y-2">
                      {job.bullets.map((b, i) => (
                        <li key={i} className="flex gap-3 text-slate-300 text-sm leading-relaxed">
                          <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${c.dot} shrink-0`} />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
