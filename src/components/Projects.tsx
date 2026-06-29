const projects = [
  {
    name: 'Layer-4 Load Balancer',
    subtitle: 'MEng Thesis — Imperial College London',
    description:
      'A kernel-level load balancer written in C, Go, and eBPF that achieves request-level routing without breaking TCP connections. Manipulates packet headers in-kernel to eliminate sticky-session tail-latency penalties.',
    tags: ['C', 'Golang', 'eBPF', 'Networking', 'Linux'],
    link: 'https://github.com/moraru210',
    highlight: true,
  },
  {
    name: 'Donarity',
    subtitle: 'Personal Project',
    description:
      'A web app that allows users to quickly donate to charities via Stripe using QR codes — built during the pandemic to enable contactless giving. Features charity discovery and personalised donation history statistics.',
    tags: ['Next.js', 'PostgreSQL', 'Stripe', 'Jest', 'Vercel', 'TravisCI'],
    link: 'https://github.com/moraru210',
    highlight: false,
  },
  {
    name: 'AI-Ops Diagnostic Agent',
    subtitle: 'AWS RDS for Oracle',
    description:
      'Python AI agent that accesses internal AWS resources via MCP servers to automate diagnosis and SOP workflows. Reduced manual operator SSH accesses to customer instances by 80% within six months of deployment.',
    tags: ['Python', 'MCP', 'AI Agents', 'AWS', 'Automation'],
    link: null,
    highlight: false,
  },
  {
    name: 'Ironhide JDK Migration',
    subtitle: 'AWS Languages & Runtimes',
    description:
      'Owned the JDK migration workflow in an AI migration platform combining static code analysis with LLM-driven transforms. Automatically upgrades 20K+ Java services across Amazon with zero manual code changes.',
    tags: ['Python', 'LLMs', 'Static Analysis', 'Java', 'AWS'],
    link: null,
    highlight: false,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-slate-900/20">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-3">Portfolio</p>
          <h2 className="text-4xl font-bold text-white">Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.name}
              className={`relative rounded-xl p-6 border transition-all duration-200 group ${
                project.highlight
                  ? 'bg-cyan-500/5 border-cyan-500/30 hover:border-cyan-500/50'
                  : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
              }`}
            >
              {project.highlight && (
                <div className="absolute top-4 right-4 text-xs font-mono text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 px-2 py-0.5 rounded-full">
                  Thesis
                </div>
              )}

              <h3 className="text-lg font-semibold text-white mb-1 pr-16">{project.name}</h3>
              <p className="text-xs text-slate-500 font-mono mb-3">{project.subtitle}</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 bg-slate-800 text-slate-400 rounded border border-slate-700 font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  View on GitHub
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
