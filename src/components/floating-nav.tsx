"use client";

import { navigation } from "@/lib/site";
import { ArrowUpRight, FileText, Menu, X } from "lucide-react";
import { motion, useMotionValueEvent, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

export function FloatingNav() {
  const [activeId, setActiveId] = useState<string>("#top");
  const [isCompact, setIsCompact] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lastScroll = useRef(0);
  const navRef = useRef<HTMLElement | null>(null);
  const { scrollY, scrollYProgress } = useScroll();

  const paddingX = useTransform(scrollY, [0, 160], [28, 22]);
  const paddingY = useTransform(scrollY, [0, 160], [12, 9]);
  const blur = useTransform(scrollY, [0, 160], [16, 24]);
  const shadowOpacity = useTransform(scrollY, [0, 160], [0.28, 0.46]);
  const scale = useTransform(scrollY, [0, 160], [1, 0.975]);
  const smoothPaddingX = useSpring(paddingX, { stiffness: 120, damping: 20 });
  const smoothPaddingY = useSpring(paddingY, { stiffness: 120, damping: 20 });
  const smoothBlur = useSpring(blur, { stiffness: 120, damping: 20 });
  const smoothShadow = useSpring(shadowOpacity, { stiffness: 120, damping: 20 });
  const smoothScale = useSpring(scale, { stiffness: 120, damping: 20 });
  const boxShadow = useTransform(
    smoothShadow,
    (value) => `0 18px 48px rgba(0,0,0,${value}), 0 0 36px rgba(45,212,191,0.12)`
  );
  const backdrop = useTransform(smoothBlur, (value) => `blur(${value}px)`);
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.2 });

  const sections = useMemo(() => navigation.map((item) => item.href).filter((href) => href.startsWith("#")), []);

  useEffect(() => {
    const targets = sections
      .map((href) => document.querySelector<HTMLElement>(href))
      .filter((target): target is HTMLElement => Boolean(target));

    if (targets.length === 0) {
      return;
    }

    const updateActiveSection = () => {
      const navHeight = navRef.current?.getBoundingClientRect().height ?? 72;
      const activationLine = navHeight + 96;
      const pageBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 12;
      let current = targets[0];

      for (const target of targets) {
        if (target.getBoundingClientRect().top <= activationLine) {
          current = target;
        } else {
          break;
        }
      }

      if (pageBottom) {
        current = targets[targets.length - 1];
      }

      setActiveId(`#${current.id}`);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [sections]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsCompact(latest > 100);
    lastScroll.current = latest;
  });

  useEffect(() => {
    if (!navRef.current) {
      return;
    }

    const updateNavMetrics = () => {
      if (!navRef.current) {
        return;
      }
      const rect = navRef.current.getBoundingClientRect();
      const totalOffset = rect.height + 32;
      document.documentElement.style.setProperty("--nav-height", `${rect.height}px`);
      document.documentElement.style.setProperty("--nav-offset", `${totalOffset}px`);
    };

    updateNavMetrics();
    const observer = new ResizeObserver(updateNavMetrics);
    observer.observe(navRef.current);
    window.addEventListener("resize", updateNavMetrics);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateNavMetrics);
    };
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }
    const close = () => setIsMenuOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, [isMenuOpen]);

  return (
    <motion.header
      className="fixed inset-x-0 top-4 z-[60] flex flex-col items-center px-4"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <motion.nav
        aria-label="Primary"
        ref={navRef}
        className="relative mx-auto grid w-full max-w-xl grid-cols-[1fr_auto] items-center gap-3 rounded-full border border-white/10 bg-zinc-950/55 text-white shadow-[0_18px_48px_rgba(0,0,0,0.42),0_0_36px_rgba(45,212,191,0.12)] ring-1 ring-white/5 backdrop-blur-2xl lg:w-[92vw] lg:max-w-[1440px] lg:grid-cols-[auto_1fr_auto] lg:gap-4 xl:w-[82vw] xl:gap-5"
        style={{
          paddingLeft: smoothPaddingX,
          paddingRight: smoothPaddingX,
          paddingTop: smoothPaddingY,
          paddingBottom: smoothPaddingY,
          boxShadow: boxShadow,
          backdropFilter: backdrop,
          scale: smoothScale
        }}
      >
        <div className="flex min-w-max items-center gap-3 whitespace-nowrap">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-teal-300 to-violet-500 text-xs font-bold text-slate-950 shadow-[0_0_20px_rgba(45,212,191,0.28)]">
            PS
          </span>
          <span className="hidden text-sm font-semibold text-cyan-200 sm:inline">Prince Seth</span>
        </div>

        <div className="hidden items-center justify-center gap-1 text-[13px] font-semibold lg:flex">
          {navigation.map((item) => (
            <a
              className="relative rounded-full px-3 py-2 leading-none text-white/55 transition hover:bg-white/[0.07] hover:text-white xl:px-4"
              href={item.href}
              key={item.label}
              onClick={() => setActiveId(item.href)}
            >
              {activeId === item.href ? (
                <motion.span
                  className="absolute inset-0 rounded-full border border-white/10 bg-white/[0.11] shadow-inner shadow-white/5"
                  layoutId="nav-active"
                  transition={{ type: "spring", stiffness: 260, damping: 24 }}
                />
              ) : null}
              <span className="relative z-10">{item.label}</span>
            </a>
          ))}
        </div>

        <div className="flex items-center justify-end gap-2">
          <a
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition hover:border-cyan-400/40 hover:text-cyan-100 lg:inline-flex"
            href="/resume/Prince-Seth-Resume.pdf"
            rel="noreferrer"
            target="_blank"
            aria-label="View resume"
          >
            <FileText className="h-4 w-4" />
          </a>

          <a
            className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-teal-300 to-violet-500 px-5 py-3 text-sm font-semibold leading-none text-slate-950 shadow-[0_10px_24px_rgba(45,212,191,0.22)] transition hover:scale-[1.025] hover:shadow-[0_12px_30px_rgba(139,92,246,0.28)] lg:inline-flex xl:px-6"
            href="#contact"
          >
            Hire Me
            <ArrowUpRight className="h-4 w-4" />
          </a>

          <button
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition hover:border-cyan-400/40 lg:hidden"
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </motion.nav>

      {isMenuOpen ? (
        <motion.div
          className="mx-auto mt-3 w-full max-w-xl rounded-3xl border border-white/10 bg-black/70 p-4 text-white shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-xl lg:hidden"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <div className="grid gap-2">
            {navigation.map((item) => (
              <a
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 transition hover:border-cyan-400/40"
                href={item.href}
                key={`${item.label}-mobile`}
                onClick={() => {
                  setActiveId(item.href);
                  setIsMenuOpen(false);
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
          <a
            className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/85"
            href="/resume/Prince-Seth-Resume.pdf"
            rel="noreferrer"
            target="_blank"
            onClick={() => setIsMenuOpen(false)}
          >
            View Resume
            <FileText className="h-4 w-4" />
          </a>
          <a
            className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-950"
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
          >
            Hire Me
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.div>
      ) : null}

      <motion.div
        aria-hidden
        className="pointer-events-none mx-auto mt-2 h-[2px] w-full max-w-xl origin-left rounded-full bg-gradient-to-r from-teal-300 via-sky-300 to-violet-500 lg:w-[92vw] lg:max-w-[1440px] xl:w-[82vw]"
        style={{ scaleX: progress }}
      />

      <motion.div
        aria-hidden
        className="pointer-events-none mx-auto mt-4 h-[1px] w-full max-w-xl bg-white/10 lg:w-[92vw] lg:max-w-[1440px] xl:w-[82vw]"
        style={{ opacity: isCompact ? 1 : 0 }}
      />
    </motion.header>
  );
}
