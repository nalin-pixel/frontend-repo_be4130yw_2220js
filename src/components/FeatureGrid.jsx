import { motion } from 'framer-motion'
import { ShieldCheck, FileSearch, Sparkles, ScrollText } from 'lucide-react'

const features = [
  {
    title: 'Clause anomaly detection',
    desc: 'Spot risky, missing, or unusual language instantly across NDAs, MSAs, and SaaS agreements.',
    icon: ShieldCheck,
  },
  {
    title: 'Explain in plain language',
    desc: 'Translate legalese into clear, concise explanations tailored to business context.',
    icon: Sparkles,
  },
  {
    title: 'Deep clause search',
    desc: 'Ask natural questions like "What are the termination terms?" and get exact citations.',
    icon: FileSearch,
  },
  {
    title: 'Structured outputs',
    desc: 'Summaries, risk reports, and suggested redlines ready to share or negotiate.',
    icon: ScrollText,
  },
]

export default function FeatureGrid() {
  return (
    <section id="features" className="relative py-24 md:py-32 bg-[#0E142B]">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ title, desc, icon: Icon }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-5 backdrop-blur-xl"
            >
              <div className="absolute -top-16 right-0 h-36 w-36 rounded-full bg-gradient-to-br from-indigo-500/10 via-violet-500/10 to-cyan-500/10 blur-2xl transition-transform duration-500 group-hover:scale-125" />
              <div className="flex items-center gap-3">
                <span className="h-9 w-9 grid place-content-center rounded-xl bg-white/10 ring-1 ring-white/15 text-white">
                  <Icon size={18} />
                </span>
                <h3 className="text-white font-semibold tracking-tight">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/70 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
