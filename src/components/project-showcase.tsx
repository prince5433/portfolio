"use client";

import { projects } from "@/lib/site";
import { fadeUp, stagger } from "@/lib/motion";
import { ArrowUpRight, BadgeCheck, ExternalLink, Github, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

function ProductSurface({ image, title }: { image?: string; title: string }) {
  const [imageFailed, setImageFailed] = useState(false);

  if (image && !imageFailed) {
    return (
      <div className="relative h-24 overflow-hidden rounded-2xl border border-white/10 bg-slate-950/70 transition-transform duration-300 group-hover:scale-[1.03] xl:h-28">
        <Image
          alt={`${title} product screenshot`}
          className="object-cover object-top"
          fill
          sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 90vw"
          onError={() => setImageFailed(true)}
          src={image}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
      </div>
    );
  }

  return (
    <div className="relative h-24 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-cyan-300/10 to-fuchsia-300/10 transition-transform duration-300 group-hover:scale-[1.03] xl:h-28">
      <div className="absolute inset-x-4 top-4 h-3 rounded-full bg-white/10" />
      <div className="absolute bottom-4 left-4 right-16 h-12 rounded-2xl bg-cyan-300/15" />
      <div className="absolute bottom-4 right-4 h-12 w-10 rounded-2xl bg-violet-300/20" />
    </div>
  );
}

function ModalSurface({ image, title }: { image?: string; title: string }) {
  const [imageFailed, setImageFailed] = useState(false);

  if (image && !imageFailed) {
    return (
      <div className="relative h-56 overflow-hidden rounded-[1.25rem] border border-white/10 bg-slate-950/70">
        <Image
          alt={`${title} product screenshot`}
          className="object-cover object-top"
          fill
          sizes="(min-width: 1024px) 42rem, 90vw"
          onError={() => setImageFailed(true)}
          src={image}
        />
      </div>
    );
  }

  return <div className="h-56 rounded-[1.25rem] bg-gradient-to-br from-white/10 via-cyan-400/15 to-fuchsia-400/15" />;
}

export function ProjectShowcase() {
  const [active, setActive] = useState<(typeof projects)[number] | null>(null);

  useEffect(() => {
    if (!active) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActive(null);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [active]);

  return (
    <motion.section
      className="px-4 py-12 sm:px-6 lg:px-8 lg:py-20"
      id="work"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={stagger}
    >
      <div className="mx-auto max-w-[88rem]">
        <motion.div variants={fadeUp} className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/60">Proof of Work</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">Real Projects. Real Impact.</h2>
          <p className="mt-4 text-lg leading-8 text-white/60">Each case study captures the problem, the system design, and the measurable impact from the resume.</p>
        </motion.div>

        <motion.div variants={stagger} className="mt-10 grid auto-rows-fr gap-4 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              className="group h-full min-w-0 cursor-pointer text-left"
              key={project.slug}
              onClick={() => setActive(project)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setActive(project);
                }
              }}
              role="button"
              tabIndex={0}
              variants={fadeUp}
            >
              <motion.div
                className={`relative h-full overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-br ${project.accent} p-[1px] shadow-glass transition duration-300 group-hover:-translate-y-1 group-hover:shadow-glow`}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
              >
                <div className="pointer-events-none absolute inset-y-0 -left-1/2 z-10 w-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/18 to-transparent opacity-0 blur-sm transition duration-700 group-hover:left-full group-hover:opacity-100" />
                <div className="flex h-full min-w-0 flex-col rounded-[calc(1.5rem-1px)] border border-white/10 bg-[#07111f]/95 p-4 sm:p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-[0.28em] text-white/35">Case Study</p>
                      <h3 className="mt-3 min-h-[3rem] text-xl font-semibold leading-tight text-white xl:text-2xl">{project.title}</h3>
                    </div>
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/60 transition group-hover:border-cyan-400/40 group-hover:text-cyan-200">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>

                  <div className="mt-5 rounded-[1.25rem] border border-white/10 bg-slate-950/50 p-3">
                    <div className="flex items-center justify-between gap-3 text-xs text-white/35">
                      <span className="inline-flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.7)]" />
                        Product surface
                      </span>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                    </div>
                    <div className="mt-4 grid gap-2 overflow-hidden">
                      <ProductSurface image={project.image} title={project.title} />
                      <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3">
                        {project.metrics.map((metric) => (
                          <div className="flex min-h-14 items-center rounded-2xl border border-white/10 bg-white/5 p-2.5 transition-transform duration-300 group-hover:scale-[1.02]" key={metric}>
                            <p className="line-clamp-2 text-xs leading-5 text-white/58">{metric}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="mt-5 min-h-[5.25rem] text-base leading-7 text-white/65 line-clamp-3">{project.summary}</p>

                  <div className="mt-5 flex min-h-[4.25rem] flex-wrap content-start gap-2">
                    {project.tech.map((item) => (
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/65" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>

                  {(project.github || project.live) ? (
                    <div className="mt-5 flex min-h-7 flex-wrap gap-3 text-xs text-white/80">
                      {project.github ? (
                        <a
                          className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 font-semibold text-emerald-100 transition hover:border-emerald-300/60"
                          href={project.github}
                          onClick={(event) => event.stopPropagation()}
                          rel="noreferrer"
                          target="_blank"
                        >
                          <Github className="h-3.5 w-3.5" />
                          GitHub
                        </a>
                      ) : null}
                      {project.live ? (
                        <a
                          className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 font-semibold text-cyan-100 transition hover:border-cyan-300/60"
                          href={project.live}
                          onClick={(event) => event.stopPropagation()}
                          rel="noreferrer"
                          target="_blank"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                          Live demo
                        </a>
                      ) : null}
                    </div>
                  ) : <div className="mt-5 min-h-7" />}

                  <div className="mt-auto flex min-h-[2.5rem] items-center justify-between gap-3 pt-5 text-xs text-cyan-100/80">
                    <span className="font-semibold uppercase tracking-[0.24em] text-cyan-100/70">View case study</span>
                    <span className="hidden items-center gap-2 rounded-full border border-cyan-400/15 bg-cyan-400/10 px-3 py-1 xl:inline-flex">
                        <BadgeCheck className="h-3.5 w-3.5" />
                        Key result
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {active ? (
          <motion.div
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/75 px-4 py-8 backdrop-blur-sm"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
          >
            <motion.div
              animate={{ y: 0, opacity: 1 }}
              className="relative my-auto max-h-[calc(100vh-4rem)] w-full max-w-4xl overflow-y-auto rounded-[2rem] border border-white/10 bg-[#07111f] shadow-glass"
              exit={{ y: 24, opacity: 0 }}
              initial={{ y: 24, opacity: 0 }}
            >
              <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-4 sm:px-6">
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/35">Case study</p>
                  <h3 className="mt-2 text-xl font-semibold text-white sm:text-2xl">{active.title}</h3>
                </div>
                <button className="shrink-0 rounded-full border border-white/10 p-2 text-white/70 transition hover:bg-white/5 active:scale-[0.97]" type="button" onClick={() => setActive(null)}>
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="grid gap-6 p-4 sm:p-6 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                  <ModalSurface image={active.image} title={active.title} />
                  <div className="mt-5 grid gap-4 sm:grid-cols-3">
                    {active.metrics.map((metric) => (
                      <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4 text-sm text-white/70" key={metric}>
                        {metric}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4 text-white/70">
                  <p><span className="text-white">Problem:</span> {active.problem}</p>
                  <p><span className="text-white">Solution:</span> {active.solution}</p>
                  <p><span className="text-white">Impact:</span> {active.impact}</p>

                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-white/35">Tech stack</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {active.tech.map((item) => (
                        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs" key={item}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  {(active.github || active.live) ? (
                    <div>
                      <p className="text-sm uppercase tracking-[0.3em] text-white/35">Links</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {active.github ? (
                          <a
                            className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-100 transition hover:border-emerald-300/60"
                            href={active.github}
                            rel="noreferrer"
                            target="_blank"
                          >
                            <Github className="h-3.5 w-3.5" />
                            GitHub
                          </a>
                        ) : null}
                        {active.live ? (
                          <a
                            className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-100 transition hover:border-cyan-300/60"
                            href={active.live}
                            rel="noreferrer"
                            target="_blank"
                          >
                            <ExternalLink className="h-3.5 w-3.5" />
                            Live demo
                          </a>
                        ) : null}
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.section>
  );
}
