"use client";

import { quickWins, recruiterSignals } from "@/lib/site";
import { fadeUp, stagger } from "@/lib/motion";
import { motion } from "framer-motion";
import { BriefcaseBusiness, CheckCircle2, FileText, TimerReset } from "lucide-react";

const outcomes = [
  { label: "UI delivery", value: "40% faster", icon: TimerReset },
  { label: "Accessibility", value: "98+ Lighthouse", icon: CheckCircle2 },
  { label: "Resume", value: "PDF ready", icon: FileText }
];

export function RecruiterBrief() {
  return (
    <motion.section
      className="px-4 py-10 sm:px-6 lg:px-8"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={stagger}
    >
      <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-[0.92fr_1.08fr]">
        <motion.div
          className="rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-5 shadow-glass backdrop-blur-xl sm:p-6"
          variants={fadeUp}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1.5 text-xs font-semibold text-emerald-100">
            <BriefcaseBusiness className="h-3.5 w-3.5" />
            Recruiter snapshot
          </div>
          <h2 className="mt-5 text-2xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">
            A fast read for teams deciding who to interview.
          </h2>
          <p className="mt-4 text-base leading-8 text-white/62">
            I present the work like a product surface: outcomes first, then the architecture and implementation depth behind them.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {outcomes.map((item) => {
              const Icon = item.icon;

              return (
                <div className="rounded-2xl border border-white/10 bg-slate-950/45 p-4" key={item.label}>
                  <Icon className="h-5 w-5 text-cyan-200" />
                  <p className="mt-3 text-xs uppercase tracking-[0.22em] text-white/36">{item.label}</p>
                  <p className="mt-2 text-sm font-semibold text-white">{item.value}</p>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div className="grid gap-4" variants={stagger}>
          <div className="grid gap-4 md:grid-cols-3">
            {recruiterSignals.map((signal) => (
              <motion.article
                className="rounded-[1.5rem] border border-white/10 bg-[#07111f]/90 p-5 shadow-glass backdrop-blur-xl"
                key={signal.label}
                variants={fadeUp}
              >
                <p className="text-xs uppercase tracking-[0.26em] text-cyan-100/45">{signal.label}</p>
                <h3 className="mt-3 text-lg font-semibold leading-6 text-white">{signal.value}</h3>
                <p className="mt-3 text-sm leading-6 text-white/56">{signal.detail}</p>
              </motion.article>
            ))}
          </div>

          <motion.div
            className="rounded-[1.5rem] border border-cyan-300/15 bg-cyan-300/[0.07] p-4 shadow-glass backdrop-blur-xl sm:p-5"
            variants={fadeUp}
          >
            <div className="grid gap-3 sm:grid-cols-2">
              {quickWins.map((item) => (
                <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.045] p-3" key={item}>
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-200" />
                  <p className="text-sm leading-6 text-white/72">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
