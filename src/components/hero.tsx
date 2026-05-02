"use client";

import { heroStats } from "@/lib/site";
import { fadeUp, motionSettings, stagger } from "@/lib/motion";
import { ArrowRight, BadgeCheck, FileText } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const roles = ["Full Stack Developer", "AI Builder", "Competitive Programmer"];

const HeroParticles = dynamic(() => import("@/components/hero-particles").then((mod) => mod.HeroParticles), {
  ssr: false
});

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, 80]);
  const opacity = useTransform(scrollY, [0, 260], [1, 0.72]);
  const [roleIndex, setRoleIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const nameRef = useRef<HTMLParagraphElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const current = roles[roleIndex];
    let position = 0;
    setTyped("");

    const interval = window.setInterval(() => {
      position += 1;
      setTyped(current.slice(0, position));

      if (position >= current.length) {
        window.clearInterval(interval);
        window.setTimeout(() => setRoleIndex((index) => (index + 1) % roles.length), 1100);
      }
    }, 85);

    return () => window.clearInterval(interval);
  }, [roleIndex]);

  useEffect(() => {
    if (!nameRef.current || !titleRef.current) {
      return;
    }

    gsap.fromTo(
      nameRef.current,
      { opacity: 0, scale: 0.98, filter: "blur(6px)" },
      { opacity: 1, scale: 1, filter: "blur(0px)", duration: 0.8, ease: "power3.out" }
    );

    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 24, filter: "blur(8px)" },
      { opacity: 1, y: 0, filter: "blur(0px)", duration: 1, ease: "power3.out", delay: 0.15 }
    );
  }, []);

  return (
    <section
      className="relative isolate overflow-hidden px-4 pb-14 pt-[calc(var(--nav-offset,120px)+20px)] sm:px-6 sm:pb-16 lg:px-8 lg:pb-24 lg:pt-[calc(var(--nav-offset,140px)+40px)]"
      id="top"
    >
      <div className="pointer-events-none absolute inset-0 bg-hero-grid opacity-20 animate-shimmer" />
      <HeroParticles />
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div style={{ y, opacity }} className="relative z-10">
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.div variants={fadeUp} className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-medium text-cyan-100 backdrop-blur">
              <BadgeCheck className="h-4 w-4" />
              <span className="min-w-0">Available for high-impact product teams</span>
            </motion.div>

            <motion.div variants={fadeUp} className="group block text-left">
              <p ref={nameRef} className="mb-4 text-base uppercase tracking-[0.28em] text-white/45 sm:text-xl sm:tracking-[0.35em]">Prince Seth</p>
              <h1 ref={titleRef} className="max-w-4xl text-[clamp(2.45rem,13vw,4rem)] font-semibold leading-[0.98] tracking-[-0.035em] text-white sm:text-7xl sm:tracking-[-0.06em] lg:text-8xl">
                I build scalable systems, AI products, and interfaces people remember.
              </h1>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-6 flex flex-wrap items-center gap-3 text-base text-white/75 sm:text-xl">
              <span className="max-w-full rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">{typed}<span className="ml-1 inline-block h-6 w-[2px] translate-y-1 bg-cyan-300 align-middle" /></span>
              <span>with product taste, systems depth, and fast execution.</span>
            </motion.div>

            <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
              Full-stack execution with production-grade AI systems, competitive programming depth, and UI craft that makes technical work feel effortless.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <motion.a
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-slate-950 shadow-[0_14px_34px_rgba(255,255,255,0.16)] transition"
                href="/resume/Prince-Seth-Resume.pdf"
                rel="noreferrer"
                target="_blank"
                whileHover={{ scale: 1.04, boxShadow: "0 0 28px rgba(255,255,255,0.24)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: motionSettings.hoverDuration, ease: motionSettings.easeOut }}
              >
                <FileText className="h-4 w-4" />
                View Resume
              </motion.a>
              <motion.a
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-teal-300 to-violet-500 px-6 py-3 font-semibold text-slate-950 shadow-[0_14px_34px_rgba(45,212,191,0.22)] transition"
                href="#work"
                whileHover={{ scale: 1.04, boxShadow: "0 0 28px rgba(45,212,191,0.42)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: motionSettings.hoverDuration, ease: motionSettings.easeOut }}
              >
                Explore Work
                <ArrowRight className="h-4 w-4" />
              </motion.a>
              <motion.a
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white/85 backdrop-blur"
                href="#contact"
                whileHover={{ scale: 1.04, borderColor: "rgba(56,189,248,0.55)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: motionSettings.hoverDuration, ease: motionSettings.easeOut }}
              >
                Hire Me
              </motion.a>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10 grid gap-4 sm:grid-cols-3">
              {heroStats.map((item) => (
                <motion.a
                  key={item.label}
                  variants={fadeUp}
                  className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-glass backdrop-blur-xl transition hover:border-cyan-400/40"
                  href={item.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-white/35">{item.label}</p>
                  <p className="mt-3 text-3xl font-semibold text-white">{item.value}</p>
                  <p className="mt-1 text-sm text-white/55">{item.detail}</p>
                </motion.a>
              ))}
            </motion.div>

          </motion.div>
        </motion.div>

        <motion.div style={{ y: useTransform(scrollY, [0, 400], [0, -20]) }} className="relative">
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-radial from-cyan-500/10 to-transparent" />
          <div className="pointer-events-none absolute -inset-8 hidden rounded-[2.5rem] border border-cyan-300/15 lg:block">
            <div className="absolute inset-0 animate-orbit will-change-transform">
              <span className="absolute -top-3 left-1/2 rounded-full border border-cyan-300/25 bg-[#0a1220] px-3 py-1 text-xs font-semibold text-cyan-100 shadow-glow">
                RAG
              </span>
              <span className="absolute bottom-10 -left-4 rounded-full border border-violet-300/25 bg-[#0a1220] px-3 py-1 text-xs font-semibold text-violet-100 shadow-glow">
                UX
              </span>
            </div>
            <div className="absolute inset-4 animate-reverseOrbit rounded-[2rem] border border-violet-300/10 will-change-transform">
              <span className="absolute -right-4 top-1/3 rounded-full border border-teal-300/25 bg-[#0a1220] px-3 py-1 text-xs font-semibold text-teal-100 shadow-glow">
                APIs
              </span>
            </div>
          </div>
          <div className="relative mx-auto max-w-lg overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a1220] p-3 shadow-glass sm:p-4 lg:max-w-none">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white/10 to-transparent" />
            <div className="mb-4 overflow-hidden rounded-[1.6rem] border border-white/10 bg-gradient-to-br from-cyan-500/20 via-transparent to-fuchsia-500/20 p-[1px]">
              <div className="rounded-[1.5rem] bg-[#07111f] p-3">
                <div className="overflow-hidden rounded-[1.2rem]">
                  <Image
                    alt="Prince Seth"
                    className="h-auto w-full object-cover"
                    height={520}
                    priority
                    src="/images/prince.png"
                    width={520}
                  />
                </div>
              </div>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-[#07111f] p-4">
              <div className="flex items-center gap-2 border-b border-white/10 pb-4 text-xs text-white/40">
                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                <span className="ml-2">dev-environment.tsx</span>
              </div>

              <div className="mt-4 space-y-3 font-mono text-xs leading-6 text-white/80 sm:text-sm">
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <span className="text-teal-200">build</span>(&quot;scalable systems&quot;, &quot;AI workflows&quot;)
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <span className="text-violet-200">optimize</span>(&quot;latency&quot;, &quot;accessibility&quot;, &quot;trust&quot;)
                </div>
                <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-cyan-400/20 via-white/5 to-fuchsia-400/20 px-4 py-3">
                  <span className="text-cyan-200">ship</span>(&quot;real product impact&quot;)
                </div>
              </div>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-white/35">LeetCode</p>
                <p className="mt-2 text-2xl font-semibold text-white">1868 Knight</p>
                <p className="mt-1 text-sm text-white/55">1500+ problems solved, optimized patterns, fast execution.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-white/35">CodeVita</p>
                <p className="mt-2 text-2xl font-semibold text-white">Global Rank 1775</p>
                <p className="mt-1 text-sm text-white/55">Round 2 performance in a global contest.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
