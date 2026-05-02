"use client";

import { competitiveLinks } from "@/lib/site";
import { fadeUp, stagger } from "@/lib/motion";
import { motion } from "framer-motion";

const leetCodeHeatmap = "https://leetcard.jacoblin.cool/sethjii?theme=dark&font=Fira%20Code&ext=heatmap";
const githubChart = "https://ghchart.rshah.org/22c55e/prince5433";

export function ActivityShowcase() {
  return (
    <motion.section
      className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
      id="activity"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={stagger}
    >
      <div className="mx-auto max-w-7xl">
        <motion.div variants={fadeUp} className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/60">Activity</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">Consistency you can verify.</h2>
          <p className="mt-4 text-lg leading-8 text-white/60">Live snapshots from LeetCode and GitHub show momentum, not just milestones.</p>
        </motion.div>

        <motion.div variants={stagger} className="mt-10 grid gap-6 lg:grid-cols-2">
          <motion.article variants={fadeUp} className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-glass backdrop-blur-xl">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/40">LeetCode</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">Submission heatmap</h3>
                <p className="mt-2 text-sm text-white/60">Daily DSA reps, accepted submissions, and consistency over the last year.</p>
              </div>
              <a
                className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold text-cyan-100 transition hover:border-cyan-300/60"
                href="https://leetcode.com/u/sethjii/"
                rel="noreferrer"
                target="_blank"
              >
                View profile
              </a>
            </div>

            <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0b1323] p-3">
              <img
                alt="LeetCode submission heatmap"
                className="h-auto w-full"
                loading="lazy"
                referrerPolicy="no-referrer"
                src={leetCodeHeatmap}
              />
            </div>
          </motion.article>

          <motion.article variants={fadeUp} className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-glass backdrop-blur-xl">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/40">GitHub</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">Contribution heatmap</h3>
                <p className="mt-2 text-sm text-white/60">Open-source work, feature pushes, and daily velocity.</p>
              </div>
              <a
                className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold text-cyan-100 transition hover:border-cyan-300/60"
                href="https://github.com/prince5433"
                rel="noreferrer"
                target="_blank"
              >
                View profile
              </a>
            </div>

            <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0b1323] p-3">
              <img
                alt="GitHub contribution activity"
                className="h-auto w-full"
                loading="lazy"
                referrerPolicy="no-referrer"
                src={githubChart}
              />
            </div>
          </motion.article>
        </motion.div>

        <div className="mt-6 flex flex-wrap gap-2 text-xs text-white/60">
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
        <motion.p variants={fadeUp} className="mt-4 text-xs uppercase tracking-[0.3em] text-white/35">
          Activity widgets update live from public profiles.
        </motion.p>
      </div>
    </motion.section>
  );
}
