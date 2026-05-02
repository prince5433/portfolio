"use client";

import { motion } from "framer-motion";

const rowOne = ["Next.js", "React", "TypeScript", "Node.js", "FastAPI", "PostgreSQL", "MongoDB", "Prisma"];
const rowTwo = ["LangChain", "LangGraph", "Qdrant", "Neo4j", "Docker", "AWS", "Nginx", "Storybook"];

function Row({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items, ...items, ...items];

  return (
    <div className="relative overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
      <div className={`flex w-max gap-3 will-change-transform ${reverse ? "animate-marqueeReverse" : "animate-marquee"}`}>
        {doubled.map((item, index) => (
          <span
            className="rounded-full border border-white/10 bg-[#0c162c] px-5 py-2 text-sm font-semibold text-white/62 transition hover:border-cyan-300/35 hover:text-white"
            key={`${item}-${index}`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export function StackMarquee() {
  return (
    <motion.section
      className="px-4 py-8 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] py-5 shadow-glass">
        <Row items={rowOne} />
        <Row items={rowTwo} reverse />
      </div>
    </motion.section>
  );
}
