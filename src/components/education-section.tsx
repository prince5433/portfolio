"use client";

import { education } from "@/lib/site";
import { fadeUp, stagger } from "@/lib/motion";
import { motion } from "framer-motion";

export function EducationSection() {
  return (
    <motion.section
      className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
      id="education"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={stagger}
    >
      <div className="mx-auto max-w-7xl">
        <motion.div variants={fadeUp} className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/60">Education</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">Academic foundation</h2>
          <p className="mt-4 text-lg leading-8 text-white/60">A timeline that shows consistency, discipline, and upward trajectory.</p>
        </motion.div>

        <motion.div variants={stagger} className="mt-10 grid gap-5">
          {education.map((item) => (
            <motion.article
              variants={fadeUp}
              className="grid gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-glass backdrop-blur-xl lg:grid-cols-[220px_1fr]"
              key={item.title}
            >
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-200/55">{item.period}</p>
                <p className="mt-2 text-2xl font-semibold text-white">{item.detail}</p>
              </div>
              <div className="relative pl-0 lg:pl-6">
                <span className="absolute left-0 top-3 hidden h-full w-px bg-gradient-to-b from-cyan-400/70 via-white/20 to-transparent lg:block" />
                <p className="max-w-4xl text-base leading-8 text-white/70">{item.title}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}