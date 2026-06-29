export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-3">Say Hello</p>
          <h2 className="text-4xl font-bold text-white">Get in Touch</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-slate-400 leading-relaxed mb-8">
              I'm always open to interesting conversations — whether it's about distributed systems,
              AI tooling, career opportunities, or just a good engineering discussion.
              Feel free to reach out.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:alexandrucristianmoraru@gmail.com"
                className="flex items-center gap-4 p-4 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-cyan-500/30 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-mono">Email</div>
                  <div className="text-slate-300 text-sm">alexandrucristianmoraru@gmail.com</div>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/alexandrumor"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-blue-500/30 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-mono">LinkedIn</div>
                  <div className="text-slate-300 text-sm">linkedin.com/in/alexandrumor</div>
                </div>
              </a>

              <a
                href="https://github.com/moraru210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-slate-600 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-700/50 border border-slate-700 flex items-center justify-center group-hover:bg-slate-700 transition-colors">
                  <svg className="w-5 h-5 text-slate-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-mono">GitHub</div>
                  <div className="text-slate-300 text-sm">github.com/moraru210</div>
                </div>
              </a>
            </div>
          </div>

          <div className="flex items-center">
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 w-full">
              <p className="text-slate-500 text-xs font-mono mb-4">// availability</p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-slate-300 text-sm">Based in Dublin, Ireland</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span className="text-slate-300 text-sm">Open to interesting conversations</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-slate-600" />
                  <span className="text-slate-400 text-sm">Currently @ AWS — not actively job seeking</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-800">
                <p className="text-slate-500 text-xs font-mono mb-2">// interests</p>
                <p className="text-slate-400 text-sm">
                  Swimming (former coach, gold medals) · Basketball (co-ran club at Amazon Dublin)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
