import React from 'react'
import { profile } from '../data/profile'

const Contact: React.FC = () => {
  const email = profile.email

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
      <div className="max-w-xl rounded-2xl border border-slate-200 bg-white p-5">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 border border-sky-100 text-sky-500 text-xs uppercase tracking-widest mb-2">
          <span>Open to opportunities</span>
        </div>

        <h3 className="text-2xl font-semibold mb-2">Let&apos;s work together.</h3>
        <p className="text-slate-500 text-sm mb-1">
          I&apos;m looking for an Intern Software Engineer role to apply my skills
          with PHP, JavaScript, Java, and modern web frameworks. If you have a
          project where I can contribute and grow, feel free to reach out.
        </p>

        <p className="text-slate-500 text-sm mb-1">
          Preferred contact:{' '}
          <a className="text-sky-600 no-underline hover:underline" href={`mailto:${email}`}>
            {email}
          </a>
        </p>

        <div className="flex gap-2.5 mt-3.5">
          <a
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full border border-slate-200 bg-white text-slate-900 font-medium text-sm cursor-pointer no-underline hover:border-sky-400 hover:bg-slate-50 transition-all"
            href={profile.portfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Github / Portfolio
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact

