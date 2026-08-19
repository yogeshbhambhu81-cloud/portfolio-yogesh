import { useEffect, useRef, useState } from 'react'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Contact from './components/Contact'

export default function App() {
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const sections = ['about', 'skills', 'projects', 'achievements', 'contact']
    const targets = sections.map(id => document.getElementById(id)).filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    )
    targets.forEach(t => observer.observe(t))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="shell">
      <Sidebar activeSection={activeSection} />
      <main>
        <div className="topbar">
          <span>yogesh/portfolio</span>
          <span>main ●</span>
        </div>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
        <footer>© 2026 Yogesh Bhambhu · built with React, Vite &amp; a bit of terminal nostalgia</footer>
      </main>
    </div>
  )
}
