import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200 py-4 px-5 text-xs text-slate-500">
      <div className="max-w-5xl mx-auto flex justify-between items-center gap-3">
        <span>© {new Date().getFullYear()} Minh Vi.</span>
        <div className="flex gap-2.5 items-center">
          <span>Built with React &amp; Vite.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer

