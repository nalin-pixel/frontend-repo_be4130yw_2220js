import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl/50 border-b border-white/10 bg-white/5">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-indigo-400 via-violet-400 to-cyan-400 shadow-inner shadow-white/10 ring-1 ring-white/20" />
          <span className="text-white/90 tracking-tight font-semibold text-lg group-hover:text-white transition-colors">Clause Sense</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#how" className="hover:text-white transition-colors">How it works</a>
          <a href="#demo" className="hover:text-white transition-colors">Demo</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a href="#demo" className="px-4 py-2 rounded-full text-sm text-white/80 hover:text-white transition-colors">Sign in</a>
          <a href="#demo" className="px-4 py-2 rounded-full text-sm bg-white/90 text-slate-900 hover:bg-white transition-all shadow-sm shadow-white/30">Try the demo</a>
        </div>
        <button aria-label="Toggle Menu" onClick={() => setOpen(!open)} className="md:hidden text-white/80 hover:text-white">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/30 backdrop-blur-xl">
          <div className="px-6 py-4 flex flex-col gap-3 text-white/80">
            <a href="#features" onClick={() => setOpen(false)} className="hover:text-white">Features</a>
            <a href="#how" onClick={() => setOpen(false)} className="hover:text-white">How it works</a>
            <a href="#demo" onClick={() => setOpen(false)} className="hover:text-white">Demo</a>
            <a href="#pricing" onClick={() => setOpen(false)} className="hover:text-white">Pricing</a>
          </div>
        </div>
      )}
    </header>
  )
}
