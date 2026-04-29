"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { PageTransition } from "@/components/page-transition";
import { FloatingNav } from "@/components/floating-nav";

export function SiteShell({ children }: { children: ReactNode }) {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      setCursor({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty("--cursor-x", `${cursor.x}px`);
    document.documentElement.style.setProperty("--cursor-y", `${cursor.y}px`);
  }, [cursor]);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 bg-hero-glow opacity-90" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.08)_1px,transparent_0)] [background-size:24px_24px] opacity-20" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_var(--cursor-x)_var(--cursor-y),rgba(56,189,248,0.18),transparent_14rem)] transition-[opacity]" />
      <div className="pointer-events-none fixed inset-[-18%] opacity-55 blur-3xl">
        <div className="absolute left-[8%] top-[8%] h-72 w-72 animate-aurora rounded-full bg-teal-400/20" />
        <div className="absolute right-[10%] top-[18%] h-80 w-80 animate-aurora rounded-full bg-violet-500/20 [animation-delay:-5s]" />
        <div className="absolute bottom-[5%] left-[35%] h-72 w-72 animate-aurora rounded-full bg-sky-400/16 [animation-delay:-9s]" />
      </div>
      <div className="pointer-events-none fixed inset-0 overflow-hidden opacity-30">
        <div className="absolute top-[16%] h-px w-[42rem] animate-beam bg-gradient-to-r from-transparent via-cyan-200 to-transparent" />
        <div className="absolute top-[58%] h-px w-[36rem] animate-beam bg-gradient-to-r from-transparent via-violet-300 to-transparent [animation-delay:-4s]" />
      </div>

      <FloatingNav />

      <main>
        <PageTransition>{children}</PageTransition>
      </main>

      <footer className="border-t border-white/5 py-8 text-center text-sm text-white/40">
        Built for recruiters, founders, and product teams who want speed without sacrificing craft.
      </footer>
    </div>
  );
}
