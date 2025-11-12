import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1020] via-[#0B1125] to-[#0E142B]" />

      {/* Aurora gradient layers */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-32 -left-32 h-[60vh] w-[60vh] rounded-full bg-gradient-to-br from-indigo-600/25 via-violet-600/20 to-cyan-500/20 blur-3xl" />
        <div className="absolute top-1/3 -right-20 h-[50vh] w-[50vh] rounded-full bg-gradient-to-tr from-cyan-400/20 via-sky-500/20 to-indigo-600/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-[40vh] w-[40vh] rounded-full bg-gradient-to-tr from-indigo-400/10 via-blue-500/10 to-violet-500/10 blur-3xl" />
      </div>

      {/* Grain overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-soft-light" style={{ backgroundImage: 'url(https://grainy-gradients.vercel.app/noise.svg)' }} />

      {/* Spline Scene */}
      <div className="relative h-[60vh] sm:h-[70vh] md:h-[76vh]">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-12 gap-8 items-start">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="md:col-span-8"
            >
              <h1 className="text-[10vw] leading-[0.9] md:text-[7rem] font-[800] tracking-[-0.04em] bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
                Clause Sense
              </h1>
              <p className="mt-6 max-w-xl text-base md:text-lg text-white/70 leading-relaxed">
                An AI-powered legal companion that reads any agreement, surfaces risky clauses, and explains them in plain language — so you sign with clarity and confidence.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#demo" className="group inline-flex items-center gap-2 rounded-full px-5 py-2.5 bg-white text-slate-900 shadow-sm shadow-white/30 hover:shadow-white/50 transition-all">
                  Try the demo
                </a>
                <a href="#how" className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 bg-white/10 text-white/90 ring-1 ring-white/15 hover:bg-white/15 transition-all">
                  How it works
                </a>
              </div>
            </motion.div>
            <motion.ul
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
              className="md:col-span-4 space-y-3"
            >
              {[
                'Clause anomaly detection',
                'Instant summaries',
                'Negotiation-ready redlines',
                'Secure by default'
              ].map((item) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 backdrop-blur-md hover:bg-white/10 hover:border-white/15 transition-colors"
                >
                  <span>{item}</span>
                  <span className="h-2 w-2 rounded-full bg-gradient-to-br from-indigo-400 via-violet-400 to-cyan-400 shadow-inner shadow-white/20" />
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>

      {/* bottom gradient fade */}
      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-[#0E142B] to-transparent" />
    </section>
  )
}
