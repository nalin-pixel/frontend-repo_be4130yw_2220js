import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function DemoPanel() {
  const fileRef = useRef(null)
  const [fileName, setFileName] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)

  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const onSelect = (e) => {
    const f = e.target.files?.[0]
    if (!f) return
    setFileName(f.name)
    setLoading(true)

    const form = new FormData()
    form.append('file', f)

    // Demo: we just simulate a response to keep frontend functional without a real endpoint
    // You can wire this to a backend later.
    setTimeout(() => {
      setResult({
        summary: 'This NDA includes mutual confidentiality, 2-year survival, and a broad definition of Confidential Information. Review the carve-outs for compliance disclosures.',
        risks: [
          'Termination requires 60 days notice — confirm acceptable risk.',
          'Injunctive relief clause lacks mutuality.',
          'Governing law defaults to Delaware; consider your jurisdiction.',
        ],
      })
      setLoading(false)
    }, 1400)
  }

  return (
    <section id="demo" className="relative py-24 md:py-32 bg-[#0E142B]">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-32 -left-24 h-72 w-72 rounded-full bg-gradient-to-br from-indigo-400/20 via-violet-400/20 to-cyan-400/20 blur-3xl" />
          </div>

          <div className="p-6 md:p-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h3 className="text-white font-semibold text-xl tracking-tight">Try it on a document</h3>
                <p className="text-white/70 text-sm mt-1">Upload a contract to generate a summary and detect clause anomalies.</p>
              </div>
              <div className="flex items-center gap-3">
                <input ref={fileRef} type="file" accept=".pdf,.doc,.docx,.txt" className="hidden" onChange={onSelect} />
                <button onClick={() => fileRef.current?.click()} className="px-4 py-2 rounded-full bg-white text-slate-900 shadow-sm shadow-white/30 hover:shadow-white/50 transition-all">
                  Upload document
                </button>
                {fileName && <span className="text-white/70 text-sm">{fileName}</span>}
              </div>
            </div>

            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2 rounded-2xl border border-white/10 bg-black/20 p-5 min-h-[180px]">
                <p className="text-white/70 text-sm">{loading ? 'Analyzing…' : result ? result.summary : 'Your AI summary will appear here.'}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-5 min-h-[180px]">
                <p className="text-white/70 text-sm font-medium">Risks</p>
                <ul className="mt-3 list-disc list-inside space-y-2 text-white/70 text-sm">
                  {loading && <li>Scanning clauses…</li>}
                  {!loading && result && result.risks.map((r) => <li key={r}>{r}</li>)}
                  {!loading && !result && <li>Flagged clauses will appear here.</li>}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
