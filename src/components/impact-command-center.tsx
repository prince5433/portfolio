"use client";

import { fadeUp, stagger } from "@/lib/motion";
import { motion } from "framer-motion";
import { ArrowUpRight, BrainCircuit, Code2, Gauge, GitBranch, ShieldCheck, Sparkles } from "lucide-react";

const signals = [
  { label: "AI/RAG systems", value: "Graph-grounded", icon: BrainCircuit },
  { label: "Delivery velocity", value: "40% faster UI shipping", icon: Gauge },
  { label: "Problem solving", value: "1500+ DSA problems", icon: Code2 },
  { label: "Reliability lens", value: "Security + observability", icon: ShieldCheck }
];

const pipeline = [
  { label: "Discover", detail: "User problem, constraints, success metric", progress: 92 },
  { label: "Architect", detail: "Data model, APIs, retrieval, infra", progress: 88 },
  { label: "Ship", detail: "Accessible UI, tests, deployment", progress: 94 },
  { label: "Improve", detail: "Latency, feedback, analytics", progress: 86 }
];

export function ImpactCommandCenter() {
  return (
    <motion.section
      className="relative px-4 py-10 sm:px-6 lg:px-8"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.22 }}
      variants={stagger}
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 shadow-[0_24px_90px_rgba(0,0,0,0.42)] ring-1 ring-cyan-300/10 backdrop-blur-2xl"
          variants={fadeUp}
        >
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="border-b border-white/10 p-6 sm:p-8 lg:border-b-0 lg:border-r">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-xs font-semibold text-cyan-100">
                <Sparkles className="h-3.5 w-3.5" />
                Engineering command center
              </div>

              <h2 className="mt-5 max-w-xl text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                Not just a portfolio. A proof-of-execution interface.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-8 text-white/62">
                The first screen now tells the whole story: product thinking, AI systems, competitive depth, and a habit of shipping measurable work.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {signals.map((signal) => {
                  const Icon = signal.icon;

                  return (
                    <motion.div
                      className="group rounded-2xl border border-white/10 bg-white/[0.055] p-4 transition hover:-translate-y-0.5 hover:border-cyan-300/30 hover:bg-white/[0.075]"
                      key={signal.label}
                      variants={fadeUp}
                    >
                      <Icon className="h-5 w-5 text-cyan-200" />
                      <p className="mt-4 text-xs uppercase tracking-[0.24em] text-white/36">{signal.label}</p>
                      <p className="mt-2 text-sm font-semibold text-white">{signal.value}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="relative p-4 sm:p-6 lg:p-8">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent" />
              <div className="rounded-[1.5rem] border border-white/10 bg-[#060b14]/95 shadow-inner shadow-white/5">
                <div className="pointer-events-none absolute inset-x-8 top-20 h-24 animate-scan bg-gradient-to-b from-transparent via-cyan-300/10 to-transparent blur-sm" />
                <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-300/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/80" />
                  </div>
                  <div className="flex items-center gap-2 text-xs text-white/42">
                    <GitBranch className="h-3.5 w-3.5" />
                    prince/main
                  </div>
                </div>

                <div className="grid gap-4 p-4 sm:grid-cols-[1fr_0.8fr]">
                  <div className="space-y-3">
                    {pipeline.map((item) => (
                      <motion.div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4" key={item.label} variants={fadeUp}>
                        <div className="flex items-center justify-between gap-3">
                          <p className="text-sm font-semibold text-white">{item.label}</p>
                          <p className="text-xs text-cyan-100">{item.progress}%</p>
                        </div>
                        <p className="mt-1 text-xs leading-5 text-white/48">{item.detail}</p>
                        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                          <motion.div
                            className="h-full rounded-full bg-gradient-to-r from-teal-300 via-cyan-200 to-violet-400"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${item.progress}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="grid gap-3">
                    <div className="rounded-2xl border border-cyan-300/15 bg-cyan-300/10 p-4">
                      <p className="text-xs uppercase tracking-[0.26em] text-cyan-100/70">Current edge</p>
                      <p className="mt-3 text-3xl font-semibold text-white">RAG + UX</p>
                      <p className="mt-2 text-xs leading-5 text-white/55">I connect retrieval quality, product clarity, and fast interfaces into one usable system.</p>
                    </div>

                    <a
                      className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.055] p-4 text-sm font-semibold text-white transition hover:border-violet-300/35 hover:bg-white/[0.075]"
                      href="#work"
                    >
                      View proof of work
                      <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>

                    <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4 font-mono text-xs leading-6 text-white/62">
                      <p><span className="text-teal-200">ship</span>(idea)</p>
                      <p><span className="text-violet-200">measure</span>(impact)</p>
                      <p><span className="text-cyan-200">iterate</span>(with users)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
