"use client";

import { fadeUp, stagger } from "@/lib/motion";
import { motion } from "framer-motion";
import { competitiveLinks } from "@/lib/site";
import { FileText, Github, Linkedin, Mail } from "lucide-react";

export function ContactCta() {
  return (
    <motion.section
      className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
      id="contact"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={stagger}
    >
      <motion.div variants={fadeUp} className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 via-slate-950 to-cyan-500/10 p-4 text-center shadow-glass backdrop-blur-xl sm:p-8 lg:p-12">
        <motion.div variants={fadeUp}>
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/60">Contact</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">Let&apos;s build something meaningful together.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-white/65">If you need a developer who can ship product surfaces, AI features, and systems that stay maintainable under pressure, this is where the conversation starts.</p>
          <p className="mt-4 text-sm text-white/50">Noida, India · +91 9369456727</p>
          <div className="mt-4 flex flex-wrap justify-center gap-2 text-xs text-white/60">
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
        </motion.div>

        <motion.div variants={fadeUp} className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <motion.a
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-slate-950"
            href="mailto:princeseth2611@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <Mail className="h-4 w-4" />
            Email
          </motion.a>
          <motion.a
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white/80"
            href="https://www.linkedin.com/in/prince43265/"
            rel="noreferrer"
            target="_blank"
            whileHover={{ scale: 1.05, borderColor: "rgba(56,189,248,0.55)" }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </motion.a>
          <motion.a
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white/80"
            href="https://github.com/prince5433"
            rel="noreferrer"
            target="_blank"
            whileHover={{ scale: 1.05, borderColor: "rgba(56,189,248,0.55)" }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <Github className="h-4 w-4" />
            GitHub
          </motion.a>
          <motion.a
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white/80"
            href="/resume/Prince-Seth-Resume.pdf"
            rel="noreferrer"
            target="_blank"
            whileHover={{ scale: 1.05, borderColor: "rgba(56,189,248,0.55)" }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <FileText className="h-4 w-4" />
            View Resume
          </motion.a>
        </motion.div>

        <motion.form
          variants={fadeUp}
          className="mx-auto mt-10 grid w-full max-w-3xl gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-4 text-left shadow-glass backdrop-blur-xl sm:p-6"
          action="https://formspree.io/f/mqenzzaa"
          method="POST"
        >
          <input type="hidden" name="_subject" value="New portfolio inquiry" />
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm text-white/70">
              Name
              <input
                className="h-11 rounded-xl border border-white/10 bg-slate-950/40 px-4 text-sm text-white outline-none transition focus:border-cyan-400/60"
                name="name"
                placeholder="Your name"
                required
                type="text"
              />
            </label>
            <label className="grid gap-2 text-sm text-white/70">
              Email
              <input
                className="h-11 rounded-xl border border-white/10 bg-slate-950/40 px-4 text-sm text-white outline-none transition focus:border-cyan-400/60"
                name="email"
                placeholder="you@company.com"
                required
                type="email"
              />
            </label>
          </div>
          <label className="grid gap-2 text-sm text-white/70">
            Company
            <input
              className="h-11 rounded-xl border border-white/10 bg-slate-950/40 px-4 text-sm text-white outline-none transition focus:border-cyan-400/60"
              name="company"
              placeholder="Company or team"
              type="text"
            />
          </label>
          <label className="grid gap-2 text-sm text-white/70">
            Message
            <textarea
              className="min-h-[140px] rounded-xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/60"
              name="message"
              placeholder="Tell me about the role, scope, and timeline."
              required
            />
          </label>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-xs text-white/50">You&apos;ll get a reply within 24-48 hours.</p>
            <button
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.03] disabled:cursor-not-allowed disabled:opacity-70"
              type="submit"
            >
              Send message
            </button>
          </div>
        </motion.form>
      </motion.div>
    </motion.section>
  );
}
