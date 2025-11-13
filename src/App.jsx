import React, { useEffect, useRef } from 'react'
import Spline from '@splinetool/react-spline'

const navItems = [
  { id: 'hero', label: 'Chapter 0' },
  { id: 'about', label: 'Chapter 1' },
  { id: 'principles', label: 'Chapter 2' },
  { id: 'projects', label: 'Chapter 3' },
  { id: 'process', label: 'Chapter 4' },
  { id: 'contact', label: 'Chapter 5' },
]

function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('in-view')
        })
      },
      { threshold: 0.15 }
    )

    const els = document.querySelectorAll('.reveal')
    els.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 backdrop-blur-md bg-[rgba(4,21,33,0.45)] border-b border-white/10">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <a href="#hero" className="font-pixel text-sm text-teal-200 tracking-wide">Hriday's Quest</a>
        <nav className="hidden md:flex gap-4">
          {navItems.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="text-xs font-semibold text-slate-200/90 hover:text-white transition-colors">
              {n.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="hidden md:inline-flex btn-cta font-pixel text-[10px] px-3 py-2 rounded glow-hover" style={{animation: 'pulseSoft 2.5s infinite'}}>
          Final Portal
        </a>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="hero" className="relative min-h-[100svh] w-full overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Jd4wcqFfe70N-TXP/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 hero-overlay pointer-events-none"></div>
      </div>

      {/* Foreground content */}
      <div className="relative z-10 w-full">
        <div className="max-w-6xl mx-auto px-4">
          <div className="reveal text-center pt-24">
            <p className="font-pixel text-xs text-teal-200 mb-4 tracking-wider">Chapter 0: The Beginning</p>
            <h1 className="font-pixel text-3xl sm:text-4xl md:text-5xl text-cream drop-shadow-[0_2px_0_rgba(0,0,0,0.35)]">
              Hriday's Quest
            </h1>
            <p className="mt-4 text-slate-200 max-w-2xl mx-auto">
              A story-driven journey into UI/UX design
            </p>
            <div className="mt-8">
              <a href="#about" className="inline-flex btn-cta font-pixel text-[12px] px-5 py-3 rounded glow-hover" style={{animation: 'pulseSoft 2.5s infinite'}}>
                Start Quest
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="relative py-24 sm:py-28 md:py-32 bg-[color:var(--navy)]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="reveal">
            <div className="w-48 h-48 sm:w-56 sm:h-56 mx-auto md:mx-0 pixel-card rounded-lg flex items-center justify-center">
              {/* Pixel avatar placeholder */}
              <div className="w-32 h-32 bg-gradient-to-br from-teal-300 to-pink-300 rounded-sm" style={{imageRendering:'pixelated'}} />
            </div>
          </div>
          <div className="reveal">
            <p className="font-pixel text-xs text-pink-200 mb-2">Chapter 1</p>
            <h2 className="font-pixel text-2xl text-cream mb-4">About Me</h2>
            <div className="dialogue p-5 rounded-md">
              <p className="text-slate-100 leading-relaxed">
                In a realm of pixels and possibilities, Hriday crafts interfaces that feel like adventures—intentional, intuitive, and imbued with warmth. With a love for game-inspired storytelling, each product unfolds as a quest: clear goals, rewarding feedback, and delightful moments along the way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Principles() {
  const principles = [
    { title: 'Clarity First', body: 'Every screen should explain itself—no manual required.' },
    { title: 'Rhythmic Flow', body: 'Motion guides attention; timing sets the mood.' },
    { title: 'Playable UI', body: 'Designs invite exploration with safe, reversible choices.' },
    { title: 'Accessible by Design', body: 'Inclusive interactions and readable contrast from the start.' },
    { title: 'Craft + Care', body: 'Small details shape trust and joy.' },
  ]
  return (
    <section id="principles" className="py-24 sm:py-28 md:py-32 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0))]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="reveal text-center mb-10">
          <p className="font-pixel text-xs text-pink-200 mb-2">Chapter 2</p>
          <h2 className="font-pixel text-2xl text-cream">The Ideology Scroll</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {principles.map((p, i) => (
            <article key={p.title} className="reveal pixel-card rounded-md p-5 glow-hover" style={{transitionDelay: `${i*60}ms`}}>
              <h3 className="font-pixel text-base text-teal-200 mb-3">{p.title}</h3>
              <p className="text-slate-200 text-sm leading-relaxed">{p.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  const projects = [
    { id: 'p1', title: 'Nebula Notes', desc: 'A calm note app with constellations', thumb: '' },
    { id: 'p2', title: 'QuestBoard', desc: 'Team tasks as RPG missions', thumb: '' },
    { id: 'p3', title: 'Aura Shop', desc: 'Pastel ecommerce microcopy', thumb: '' },
    { id: 'p4', title: 'Pixel FM', desc: 'Radio UI with cassette vibes', thumb: '' },
    { id: 'p5', title: 'Bloom Journal', desc: 'Mood-first journaling flow', thumb: '' },
    { id: 'p6', title: 'Lumen Docs', desc: 'Readable docs with rhythm', thumb: '' },
  ]

  const scrollToDetail = (id) => {
    const el = document.getElementById(`project-${id}`)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="projects" className="py-24 sm:py-28 md:py-32">
      <div className="max-w-6xl mx-auto px-4">
        <div className="reveal text-center mb-10">
          <p className="font-pixel text-xs text-pink-200 mb-2">Chapter 3</p>
          <h2 className="font-pixel text-2xl text-cream">Level Select</h2>
          <p className="text-slate-300 mt-2">Choose a level to view details</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <button
              key={p.id}
              onClick={() => scrollToDetail(p.id)}
              className="reveal pixel-card rounded-md p-4 text-left glow-hover group"
              style={{transitionDelay: `${i*50}ms`}}
            >
              <div className="w-full h-28 bg-gradient-to-br from-teal-300/60 to-pink-300/60 rounded-sm mb-3" style={{imageRendering:'pixelated'}} />
              <h3 className="font-pixel text-sm text-cream mb-1 group-hover:text-teal-200">{p.title}</h3>
              <p className="text-slate-300 text-sm">{p.desc}</p>
            </button>
          ))}
        </div>

        {/* Project details section */}
        <div className="mt-14 space-y-8">
          {projects.map((p) => (
            <div key={p.id} id={`project-${p.id}`} className="reveal pixel-card rounded-md p-6">
              <h4 className="font-pixel text-base text-teal-200 mb-2">{p.title}</h4>
              <p className="text-slate-200 text-sm mb-3">{p.desc} — Case study coming soon.</p>
              <div className="w-full h-40 bg-gradient-to-br from-teal-300/50 to-pink-300/50 rounded-sm" style={{imageRendering:'pixelated'}} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Process() {
  const steps = [
    { t: 'Discover', d: 'Understand goals, context, and constraints.' },
    { t: 'Define', d: 'Frame the problem and map success.' },
    { t: 'Design', d: 'Sketch, prototype, and iterate with feedback.' },
    { t: 'Develop', d: 'Partner with engineering for quality delivery.' },
    { t: 'Deliver', d: 'Ship, learn, and refine.' },
  ]
  return (
    <section id="process" className="py-24 sm:py-28 md:py-32 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0))]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="reveal text-center mb-10">
          <p className="font-pixel text-xs text-pink-200 mb-2">Chapter 4</p>
          <h2 className="font-pixel text-2xl text-cream">The Quest Path</h2>
        </div>
        <div className="relative timeline">
          <div className="space-y-6">
            {steps.map((s, i) => (
              <div key={s.t} className="reveal timeline-item pixel-card rounded-md p-5" style={{transitionDelay: `${i*80}ms`}}>
                <h3 className="font-pixel text-sm text-teal-200 mb-2">{s.t}</h3>
                <p className="text-slate-200 text-sm">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-28 md:py-32">
      <div className="max-w-6xl mx-auto px-4">
        <div className="reveal text-center mb-10">
          <p className="font-pixel text-xs text-pink-200 mb-2">Chapter 5</p>
          <h2 className="font-pixel text-2xl text-cream">Final Portal</h2>
          <p className="text-slate-300 mt-2">Send a message to open the portal.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="reveal">
            <div className="w-full h-56 pixel-card rounded-md flex items-center justify-center">
              {/* Pixel portal placeholder */}
              <div className="w-40 h-40 bg-gradient-to-br from-pink-300 to-teal-300 rounded-sm" style={{imageRendering:'pixelated'}} />
            </div>
            <a href="#contact-form" className="inline-flex mt-5 btn-cta font-pixel text-[12px] px-5 py-3 rounded glow-hover" style={{animation: 'pulseSoft 2.5s infinite'}}>
              Enter Portal
            </a>
          </div>

          <form id="contact-form" className="reveal pixel-card rounded-md p-6 space-y-4" onSubmit={(e)=>{e.preventDefault(); alert('Thanks! Your message has been sent.')}}>
            <div>
              <label className="font-pixel text-[11px] text-teal-200">Name</label>
              <input required type="text" className="mt-2 w-full rounded bg-white/5 border border-white/15 px-3 py-2 text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400/40" placeholder="Your name" />
            </div>
            <div>
              <label className="font-pixel text-[11px] text-teal-200">Email</label>
              <input required type="email" className="mt-2 w-full rounded bg-white/5 border border-white/15 px-3 py-2 text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400/40" placeholder="you@example.com" />
            </div>
            <div>
              <label className="font-pixel text-[11px] text-teal-200">Message</label>
              <textarea required rows="4" className="mt-2 w-full rounded bg-white/5 border border-white/15 px-3 py-2 text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400/40" placeholder="Tell me about your quest" />
            </div>
            <button type="submit" className="btn-cta font-pixel text-[12px] px-5 py-3 rounded glow-hover" style={{animation: 'pulseSoft 2.5s infinite'}}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default function App() {
  useReveal()

  // small parallax on mouse for hero foreground label
  const parallaxRef = useRef(null)
  useEffect(() => {
    const el = parallaxRef.current
    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 6
      const y = (e.clientY / window.innerHeight - 0.5) * 6
      if (el) el.style.transform = `translate3d(${x}px, ${y}px, 0)`
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <div className="min-h-screen bg-[color:var(--navy)]">
      <Navbar />
      <div ref={parallaxRef} className="parallax-layer">
        <Hero />
      </div>
      <About />
      <Principles />
      <Projects />
      <Process />
      <Contact />
      <footer className="py-10 text-center text-xs text-slate-400">© {new Date().getFullYear()} Hriday — Designed as a retro quest.</footer>
    </div>
  )
}
