const skillGroups = [
  {
    category: 'Languages',
    icon: '< >',
    skills: ['Java (Spring Boot)', 'Python (FastAPI)', 'TypeScript', 'Golang', 'C / C++', 'SQL'],
  },
  {
    category: 'Cloud & Infrastructure',
    icon: '☁',
    skills: ['AWS (RDS, Route 53, Lambda, EC2, SWF)', 'Kubernetes', 'Docker', 'Terraform', 'Linux'],
  },
  {
    category: 'Systems & Performance',
    icon: '⚡',
    skills: ['eBPF', 'JVM Internals', 'Distributed Systems', 'Networking', 'async-profiler'],
  },
  {
    category: 'Frontend & Data',
    icon: '◻',
    skills: ['React', 'Next.js', 'Angular', 'PostgreSQL', 'Databases'],
  },
  {
    category: 'AI & Automation',
    icon: '◎',
    skills: ['MCP Servers', 'LLM Tooling', 'AI Agents', 'Static Code Analysis', 'CI/CD'],
  },
  {
    category: 'Open Source',
    icon: '⬡',
    skills: ['OpenJDK Contributor', 'JDK Updates Project', 'Long-term Support Branches'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-3">Toolkit</p>
          <h2 className="text-4xl font-bold text-white">Skills</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="bg-slate-900/50 border border-slate-800 rounded-xl p-5 hover:border-slate-700 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-cyan-400 font-mono text-sm w-6 text-center">{group.icon}</span>
                <h3 className="text-sm font-semibold text-slate-200 uppercase tracking-wide">{group.category}</h3>
              </div>
              <ul className="space-y-2">
                {group.skills.map(skill => (
                  <li key={skill} className="flex items-center gap-2 text-sm text-slate-400">
                    <span className="w-1 h-1 rounded-full bg-cyan-400/50 shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
