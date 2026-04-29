"use client";

import { fadeUp, stagger } from "@/lib/motion";
import { competitiveLinks } from "@/lib/site";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const targets = [1868, 1469, 1700];

export function ProgrammingStats() {
  const [values, setValues] = useState([0, 0, 0]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setValues(targets);
    }, 180);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <motion.section
      className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={stagger}
    >
      <motion.div variants={fadeUp} className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-950 via-[#081122] to-slate-950 p-4 shadow-glass sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div variants={fadeUp}>
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/60">Competitive Programming</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">A differentiator recruiters can understand fast.</h2>
            <p className="mt-4 text-lg leading-8 text-white/60">Depth in algorithms signals speed under pressure, stronger debugging, and better tradeoff judgment in product systems.</p>
          </motion.div>

          <motion.div variants={stagger} className="grid gap-4 sm:grid-cols-3">
            <motion.div variants={fadeUp} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-white/35">LeetCode Knight</p>
              <p className="mt-3 text-4xl font-semibold text-white">{values[0]}</p>
              <p className="mt-2 text-xs text-white/45">1500+ problems solved</p>
            </motion.div>
            <motion.div variants={fadeUp} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-white/35">Codeforces</p>
              <p className="mt-3 text-4xl font-semibold text-white">{values[1]}</p>
              <p className="mt-2 text-xs text-white/45">Specialist rank</p>
            </motion.div>
            <motion.div variants={fadeUp} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-white/35">CodeChef</p>
              <p className="mt-3 text-4xl font-semibold text-white">{values[2]}</p>
              <p className="mt-2 text-xs text-white/45">3 Star rating</p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div variants={fadeUp} className="mt-8 rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
          <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-white/50">
            <span>Achievements</span>
            <span>Signal: consistency, speed, precision</span>
          </div>
          <div className="mt-4 flex flex-wrap gap-2 text-xs text-white/60">
            {competitiveLinks.map((link) => (
              <a
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 transition hover:border-cyan-400/40"
                href={link.href}
                key={link.label}
                rel="noreferrer"
                target="_blank"
              >
                {link.label} · {link.detail}
              </a>
            ))}
          </div>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/40 p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-white/40">CodeVita</p>
              <p className="mt-3 text-lg font-semibold text-white">Global Rank 1775</p>
              <p className="mt-2 text-sm text-white/55">Round 2 performance in a global contest.</p>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/40 p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-white/40">CodeForge</p>
              <p className="mt-3 text-lg font-semibold text-white">Hackathon Winner</p>
              <p className="mt-2 text-sm text-white/55">Microsoft, Noida · Led a 4-member team.</p>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/40 p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-white/40">CodeWizards</p>
              <p className="mt-3 text-lg font-semibold text-white">Top 10 Finalist</p>
              <p className="mt-2 text-sm text-white/55">SRM competition recognition.</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
