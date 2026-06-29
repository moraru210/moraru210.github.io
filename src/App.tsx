import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import './index.css'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0e1a]">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <footer className="text-center py-8 text-slate-500 text-sm border-t border-slate-800">
        <p>Built with React · Deployed on GitHub Pages</p>
      </footer>
    </div>
  )
}
