import React from 'react'
import { profile } from '../data/profile'

const Navbar: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-5 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-sky-300 to-green-400" />
          <div className="flex flex-col">
            <span className="text-sm font-semibold">{profile.name}</span>
            <span className="text-xs text-slate-500">{profile.title}</span>
          </div>
        </div>

        <nav className="flex gap-4 text-sm">
          <button 
            className="text-slate-500 hover:text-slate-900 transition-colors relative pb-1 bg-transparent border-none cursor-pointer" 
            onClick={() => scrollTo('home')}
          >
            Home
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-sky-300 to-green-400 transition-all duration-200 hover:w-full" />
          </button>
          <button 
            className="text-slate-500 hover:text-slate-900 transition-colors relative pb-1 bg-transparent border-none cursor-pointer" 
            onClick={() => scrollTo('about')}
          >
            About
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-sky-300 to-green-400 transition-all duration-200 hover:w-full" />
          </button>
          <button 
            className="text-slate-500 hover:text-slate-900 transition-colors relative pb-1 bg-transparent border-none cursor-pointer" 
            onClick={() => scrollTo('projects')}
          >
            Projects
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-sky-300 to-green-400 transition-all duration-200 hover:w-full" />
          </button>
          <button 
            className="text-slate-500 hover:text-slate-900 transition-colors relative pb-1 bg-transparent border-none cursor-pointer" 
            onClick={() => scrollTo('contact')}
          >
            Contact
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-sky-300 to-green-400 transition-all duration-200 hover:w-full" />
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Navbar

