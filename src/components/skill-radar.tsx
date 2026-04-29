"use client";

import { skillGroups } from "@/lib/site";
import { fadeUp, stagger } from "@/lib/motion";
import { motion } from "framer-motion";

const positions = [
  { left: 50, top: 10, transform: "translate(-50%, -50%)" },
  { left: 98, top: 45, transform: "translate(-100%, -50%)" },
  { left: 75, top: 90, transform: "translate(-50%, -50%)" },
  { left: 25, top: 90, transform: "translate(-50%, -50%)" },
  { left: 2, top: 45, transform: "translate(0, -50%)" }
];

export function SkillRadar() {
  return (
    <motion.section
      className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
      id="skills"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={stagger}
    >
      <div className="mx-auto max-w-7xl">
        <motion.div variants={fadeUp} className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/60">Interactive Skills</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">Skills as a system, not a list.</h2>
        </motion.div>

        <motion.div variants={stagger} className="mt-10 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <motion.div variants={fadeUp} className="rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-glass backdrop-blur-xl sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-2 text-sm text-white/50">
              <span>Capability Radar</span>
              <span>Balanced across product layers</span>
            </div>
            <div className="mt-6 grid place-items-center overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#07111f] p-3 sm:p-6">
              <div className="relative h-[300px] w-full max-w-[420px] sm:h-[360px]">
                <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full text-cyan-300/25">
                  <polygon points="50,10 90,45 75,90 25,90 10,45" fill="none" stroke="currentColor" strokeWidth="0.7" />
                  <polygon points="50,25 78,45 68,78 32,78 22,45" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  <polygon points="50,38 69,45 62,68 38,68 31,45" fill="none" stroke="currentColor" strokeWidth="0.4" />
                  <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="0.4" />
                  <line x1="90" y1="45" x2="10" y2="45" stroke="currentColor" strokeWidth="0.4" />
                </svg>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative h-[220px] w-[220px] rounded-full border border-cyan-400/10 bg-cyan-400/5 blur-0 sm:h-[290px] sm:w-[290px]">
                    <div className="absolute inset-10 rounded-full border border-white/10 bg-white/5" />
                    <div className="absolute inset-20 rounded-full border border-white/10 bg-white/5 sm:inset-24" />
                    <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300 shadow-[0_0_30px_rgba(125,211,252,0.8)]" />
                    <div className="absolute inset-0 animate-pulseSoft rounded-full border border-cyan-300/20" />
                  </div>
                </div>

                {skillGroups.map((group, index) => (
                  <div
                    className="absolute min-w-[7.5rem] rounded-2xl border border-white/10 bg-slate-950/75 px-2.5 py-2 text-[11px] text-white/75 shadow-glass backdrop-blur sm:min-w-[8.5rem] sm:px-4 sm:py-3 sm:text-xs"
                    key={group.name}
                    style={{
                      left: `${positions[index].left}%`,
                      top: `${positions[index].top}%`,
                      transform: positions[index].transform
                    }}
                  >
                    <p className="whitespace-nowrap font-semibold text-white">{group.name}</p>
                    <p className="whitespace-nowrap text-cyan-200">{group.score}% strength</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div variants={stagger} className="grid gap-4">
            {skillGroups.map((group) => (
              <motion.article variants={fadeUp} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 shadow-glass backdrop-blur-xl" key={group.name}>
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold text-white">{group.name}</h3>
                  <span className="text-sm text-cyan-200">{group.score}%</span>
                </div>
                <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-sky-300 to-fuchsia-400" style={{ width: `${group.score}%` }} />
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span className="rounded-full border border-white/10 bg-slate-950/60 px-3 py-1 text-xs text-white/70" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
