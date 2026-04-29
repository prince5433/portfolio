"use client";

import { aiHighlights } from "@/lib/site";
import { fadeUp, stagger } from "@/lib/motion";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function AiShowcase() {
  return (
    <motion.section
      className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
      id="ai"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={stagger}
    >
      <div className="mx-auto max-w-7xl">
        <motion.div variants={fadeUp} className="rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 via-slate-950 to-fuchsia-500/10 p-4 shadow-glass backdrop-blur-xl sm:p-8 lg:p-10">
          <motion.div variants={fadeUp} className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-medium text-cyan-100">
              <Sparkles className="h-4 w-4" />
              AI Products I&apos;ve Built
            </p>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">AI products grounded in systems, not hype.</h2>
            <p className="mt-4 text-lg leading-8 text-white/65">From RAG pipelines to evaluation workflows, I build AI systems that are observable, fast, and aligned with real user outcomes.</p>
          </motion.div>

          <motion.div variants={stagger} className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {aiHighlights.map((item) => (
              <motion.article variants={fadeUp} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 shadow-glass backdrop-blur-xl" key={item}>
                <div className="mb-4 h-12 w-12 rounded-2xl border border-cyan-300/20 bg-cyan-300/10" />
                <p className="text-base leading-7 text-white/80">{item}</p>
              </motion.article>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8 rounded-[1.75rem] border border-white/10 bg-slate-950/60 p-5 text-sm text-white/70">
            Architecture lens: retrieval latency, observability, grounded answers, and deployment pipelines that survive real traffic.
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
