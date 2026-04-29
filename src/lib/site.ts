export const navigation = [
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Activity", href: "#activity" },
  { label: "AI", href: "#ai" },
  { label: "Contact", href: "#contact" }
];

export const recruiterSignals = [
  {
    label: "Best fit",
    value: "Full-stack / AI product roles",
    detail: "Strongest when the job needs usable interfaces, clean APIs, and intelligent workflows."
  },
  {
    label: "Proof",
    value: "Impact-backed projects",
    detail: "RAG latency, accessibility scores, automation, encryption, and contest performance are surfaced upfront."
  },
  {
    label: "Working style",
    value: "Fast, structured, ownership-heavy",
    detail: "I move from problem framing to architecture, shipping, measurement, and iteration."
  }
];

export const quickWins = [
  "Production-minded Next.js + backend delivery",
  "AI/RAG systems with grounding and observability",
  "Competitive programming depth for complex logic",
  "Accessible UI systems built with reusable components"
];

export const heroStats = [
  { label: "LeetCode", value: "1868", detail: "Knight", href: "https://leetcode.com/u/sethjii/" },
  { label: "Codeforces", value: "1469", detail: "Specialist", href: "https://codeforces.com/profile/prince9369" },
  { label: "CodeChef", value: "1700", detail: "3 Star", href: "https://www.codechef.com/users/prince7452" }
];

export const competitiveLinks = [
  { label: "LeetCode", href: "https://leetcode.com/u/sethjii/", detail: "Knight 1868" },
  { label: "Codeforces", href: "https://codeforces.com/profile/prince9369", detail: "Specialist 1469" },
  { label: "CodeChef", href: "https://www.codechef.com/users/prince7452", detail: "3 Star 1700" }
];

export const projects = [
  {
    slug: "legalsaathi-ai",
    title: "LegalSaathi AI",
    summary: "AI-powered legal assistant with a production-grade RAG pipeline and knowledge graph grounding.",
    problem: "Legal information is fragmented, making retrieval slow and prone to hallucinations.",
    solution: "Built a RAG workflow with LangChain + LangGraph, Qdrant vector search, and a Neo4j knowledge graph.",
    impact: "Achieved sub-500ms retrieval latency and reduced hallucinations by 60% through graph grounding.",
    tech: ["FastAPI", "Next.js", "LangChain", "LangGraph", "Qdrant", "Neo4j", "AWS"],
    metrics: ["Sub-500ms retrieval", "60% fewer hallucinations", "Production-ready RAG"],
    accent: "from-sky-400/30 via-cyan-400/20 to-transparent",
    github: "https://github.com/prince5433/legasaathi",
    image: "/projects/legalsaathi.png"
  },
  {
    slug: "interviewx",
    title: "InterviewX",
    summary: "AI interview platform with real-time video, scheduling, and automated feedback workflows.",
    problem: "Interview prep is scattered and feedback loops are slow and manual.",
    solution: "Shipped a full-stack platform with Stream SDK, Supabase + Prisma, and Gemini-powered evaluation.",
    impact: "Automated 80% of manual review workflows and supported 100+ sessions/month.",
    tech: ["Next.js", "Supabase", "Prisma", "Gemini AI", "Stream SDK", "PostgreSQL"],
    metrics: ["100+ sessions/month", "80% review automation", "Role-based access"],
    accent: "from-indigo-400/30 via-sky-400/20 to-transparent",
    github: "https://github.com/prince5433/IntervueX.git",
    image: "/projects/intervuex.png"
  },
  {
    slug: "kawach",
    title: "Kawach",
    summary: "Secure document sharing with QR authentication and AES-encrypted expiring links.",
    problem: "Traditional file sharing exposes sensitive data to uncontrolled forwarding.",
    solution: "Built QR-based authentication, AES encryption, and self-destructing access workflows.",
    impact: "Delivered a zero-retention footprint with 60-second expiry and hardened access control.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "AES"],
    metrics: ["60-second expiry", "Zero data retention", "99% risk mitigation"],
    accent: "from-emerald-400/30 via-teal-400/20 to-transparent",
    github: "https://github.com/prince5433/kawach.git",
    live: "https://kawachh.vercel.app/",
    image: "/projects/kawach.png"
  }
];

export const skillGroups = [
  {
    name: "Languages",
    score: 90,
    items: ["C++", "JavaScript", "TypeScript", "Python", "SQL", "HTML5", "CSS3"]
  },
  {
    name: "Frameworks",
    score: 88,
    items: ["React", "Next.js", "Node.js", "Express", "FastAPI", "Redux Toolkit", "Tailwind CSS", "Storybook"]
  },
  {
    name: "Backend/DB",
    score: 85,
    items: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Prisma", "Supabase", "REST APIs"]
  },
  {
    name: "AI/Cloud",
    score: 87,
    items: [
      "LLMs",
      "RAG",
      "LangChain",
      "LangGraph",
      "LangSmith",
      "Prompt Engineering",
      "Qdrant",
      "Neo4j",
      "AWS EC2",
      "AWS S3",
      "Docker",
      "Nginx",
      "GitHub Actions"
    ]
  },
  {
    name: "Concepts",
    score: 86,
    items: ["DSA", "System Design", "OOP", "DBMS", "OS", "Agile", "Git/GitHub"]
  }
];

export const education = [
  {
    period: "2023 - Present",
    title: "B.Tech (IT), JSS Academy of Technical Education, Noida",
    detail: "SGPA 9.05/10"
  },
  {
    period: "2021",
    title: "Class 12th, CBSE Board",
    detail: "95.2%"
  },
  {
    period: "2019",
    title: "Class 10th, CBSE Board",
    detail: "93.8%"
  }
];

export const experience = [
  {
    period: "May 2025 - Jun 2025",
    title: "Uzence Design Studio - Frontend Developer Intern",
    description:
      "Spearheaded a 25+ component enterprise UI library in React, TypeScript, and Tailwind, accelerating delivery by 40%. Implemented WCAG 2.1 ARIA improvements that pushed Lighthouse Accessibility to 98+, and integrated Storybook to streamline the design-to-code handoff by 30%."
  },
  {
    period: "Impact",
    title: "System-level UI craft",
    description:
      "That internship reinforced a product mindset: ship faster through reuse, prioritize accessibility, and keep UI consistency aligned with design systems and real business outcomes."
  },
  {
    period: "Now",
    title: "Building production-grade AI products",
    description:
      "Applying the same rigor to AI products and full-stack platforms, focusing on latency, reliability, and measurable outcomes in real deployments."
  }
];

export const aiHighlights = [
  "RAG pipelines with LangChain, LangGraph, and LangSmith observability",
  "Hybrid vector + graph grounding with Qdrant and Neo4j",
  "Gemini AI evaluation systems for structured feedback",
  "Deployment workflows with Docker, Nginx, and GitHub Actions"
];
