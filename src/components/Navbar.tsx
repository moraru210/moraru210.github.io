import { useState, useEffect } from 'react'

const links = ['Experience', 'Projects', 'Skills', 'Education', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    setMenuOpen(false)
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0e1a]/95 backdrop-blur border-b border-slate-800' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-cyan-400 font-mono font-semibold text-lg hover:text-cyan-300 transition-colors"
        >
          alex.moraru
        </button>

        <ul className="hidden md:flex gap-8">
          {links.map(link => (
            <li key={link}>
              <button
                onClick={() => scrollTo(link)}
                className="text-slate-400 hover:text-cyan-400 transition-colors text-sm font-medium"
              >
                {link}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-slate-400 hover:text-cyan-400 transition-colors"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#0d1120] border-b border-slate-800 px-6 py-4">
          <ul className="flex flex-col gap-4">
            {links.map(link => (
              <li key={link}>
                <button
                  onClick={() => scrollTo(link)}
                  className="text-slate-300 hover:text-cyan-400 transition-colors text-base w-full text-left"
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
