import React from 'react'
import { profile } from '../data/profile'

const Hero: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <div>
        {/* <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 border border-sky-100 text-sky-500 text-xs uppercase tracking-widest">
          <span>Software Engineer Intern</span>
        </div> */}

        <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-2 tracking-tight">
          Hello, I&apos;m <span className="bg-gradient-to-r from-sky-300 to-green-400 bg-clip-text text-transparent">{profile.name}</span>
        </h1>
        <p className="text-xl text-slate-500 mb-4">{profile.title}</p>

        {/* <p className="text-slate-600 max-w-md mb-5">{profile.careerObjective}</p> */}

        <div className="flex flex-wrap gap-2.5 mb-4">
          <a
            href={profile.resumeUrl}
            download={profile.resumeUrl}
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full border-none bg-gradient-to-br from-sky-400 to-green-400 text-white font-semibold text-sm cursor-pointer no-underline shadow-lg shadow-sky-400/25 hover:-translate-y-0.5 hover:brightness-105 transition-all"
          >
            Download CV
          </a>

          <a
            href={profile.portfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full border border-slate-200 bg-white text-slate-900 font-medium text-sm cursor-pointer no-underline hover:border-sky-400 hover:bg-slate-50 transition-all"
          >
            Github
          </a>
        </div>

        <div className="flex flex-wrap gap-2 text-xs text-slate-500">
          <span>{profile.skills[0].items.join(' · ')}</span>
          <span>{profile.skills[1].items.join(' · ')}</span>
        </div>
      </div>

      <aside className="relative p-5 rounded-2xl border border-slate-200 bg-white flex flex-col gap-4 shadow-xl shadow-slate-900/5">
        <div className="">
<img src="/avatar.jpg" alt="avatar" className="w-120 h-120 rounded-2xl object-cover" />        </div>
        <div>
          <div className="font-semibold text-base">
            Building reliable web applications
          </div>
          <div className="text-xs text-slate-500">
            REST APIs · Databases · E-commerce · Problem solving
          </div>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-1.5">Currently</div>
          <p className="text-sm text-slate-500">
            Software Engineering student at Saigon University, focusing on web
            development, e-commerce systems, and backend services.
          </p>
        </div>
      </aside>
    </div>
  )
}

export default Hero

