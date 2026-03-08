import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="max-w-5xl mx-auto px-5 pt-24 pb-12">
        <section id="home" className="py-5">
          <Hero />
        </section>
        <section id="about" className="py-5">
          <About />
        </section>
        <section id="projects" className="py-5">
          <Projects />
        </section>
        <section id="contact" className="py-5">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App

