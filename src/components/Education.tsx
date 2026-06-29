export default function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-slate-900/20">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-3">Background</p>
          <h2 className="text-4xl font-bold text-white">Education</h2>
        </div>

        <div className="bg-slate-900/50 border border-cyan-500/20 rounded-xl p-8">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
            <div>
              <h3 className="text-2xl font-bold text-white">MEng Computing</h3>
              <p className="text-slate-400 mt-1 text-lg">Imperial College London</p>
            </div>
            <div className="text-right">
              <div className="text-cyan-400 font-mono text-sm">Sep 2019 – Jun 2023</div>
              <div className="text-white font-semibold mt-1">London, UK</div>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 bg-cyan-400/10 border border-cyan-400/30 rounded-lg px-4 py-2 mb-6">
            <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
            <span className="text-cyan-400 font-semibold">First Class Honours — 77.7%</span>
          </div>

          <div className="mb-6">
            <h4 className="text-slate-300 font-semibold mb-3">Thesis</h4>
            <p className="text-slate-400 leading-relaxed">
              Developed a <span className="text-slate-200">layer-4 load balancer</span> in C, Golang, and eBPF that achieves
              request-level routing without breaking TCP connections. By manipulating packet headers in-kernel,
              it eliminates sticky-session tail-latency penalties inherent in traditional load balancers.
            </p>
          </div>

          <div>
            <h4 className="text-slate-300 font-semibold mb-3">Relevant Modules</h4>
            <div className="flex flex-wrap gap-2">
              {['Distributed Algorithms', 'Advanced Databases', 'Performance Engineering', 'Operating Systems'].map(mod => (
                <span
                  key={mod}
                  className="text-sm px-3 py-1 bg-slate-800 text-slate-300 rounded-lg border border-slate-700 font-mono"
                >
                  {mod}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
