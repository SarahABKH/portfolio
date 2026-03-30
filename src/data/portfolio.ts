import type { StaticImageData } from 'next/image';
import blogPipelinePreview from '@/assets/Gemini_Generated_Image_4hezjz4hezjz4hez.png';

export const personal = {
  name: "Sarah Abdul Khader",
  title: "Software Engineer",
  tagline: "I build interfaces that feel fast, intentional, and human.",
  subTagline: "Frontend-focused. Detail-obsessed. Quietly making things better.",
  bio: "Based in Bengaluru. Building at Capillary Technologies. Thinking about how software should feel, not just work.",
  email: "sarahabkh@gmail.com",
  location: "Bengaluru, India",
  github: "https://github.com/SarahABKH",
  linkedin: "https://www.linkedin.com/in/sarah-abdul-khader-6baa88205/",
  resume: "https://docs.google.com/document/d/1r3qMBS25STeSgGLd1_O1LrJWg01aRmMVjcudO41s5Is/edit?tab=t.0",
};

export const aboutStatements = [
  { label: "How I think", text: "I treat UI as a conversation. Every interaction is a question — does this feel right? Does it cost the user anything? If it does, it shouldn't." },
  { label: "How I work", text: "Iterative and thorough. I'll write the messy version first, then clean it until it feels inevitable. The code should read like it couldn't have been written any other way." },
  { label: "What I care about", text: "Performance is a feature. Accessibility is respect. Good state management is good thinking. I hold these as baseline, not bonus." },
  { label: "A quieter thing", text: "I'm building dear.di — a personal AI scrapbooking app. It started as something I wanted to exist, so I made it." },
];

export const skills = [
  {
    category: "Thinking",
    description: "How I approach problems",
    items: ["System design", "Performance debugging", "Component architecture", "Accessibility audits", "API contract design"],
  },
  {
    category: "Building",
    description: "What I reach for",
    items: ["React / Next.js", "TypeScript", "Redux / Zustand", "REST & GraphQL APIs", "Node.js", "Java / Spring Boot", "PostgreSQL"],
  },
  {
    category: "Quality",
    description: "How I ship with confidence",
    items: ["Jest + React Testing Library", "Code review culture", "CI/CD pipelines", "Bundle optimization", "Lighthouse audits"],
  },
];

export const experience = [
  {
    company: "Capillary Technologies",
    role: "Software Engineer (SDE-1)",
    period: "2024 — Present",
    location: "Bengaluru, India",
    type: "Full-time",
    points: [
      { label: "Performance", detail: "Improved perceived speed with lazy loading, code splitting, and careful render work — fewer wasted frames, snappier flows." },
      { label: "Systems", detail: "Contributed to a shared UI foundation so product teams ship with clearer patterns and less one-off UI drift." },
      { label: "Innovation", detail: "Helped introduce AI-assisted workflows that reduced repetitive engineering toil and made reviews more about intent than boilerplate." },
      { label: "Ownership", detail: "Shipped features used by enterprise retail clients across Southeast Asia — from edge cases to polish." },
    ],
  },
];

export type BlogPost = {
  id: string;
  title: string;
  publication: string;
  href: string;
  excerpt: string;
  readTime: string;
  credit: string;
  date: string;
  /** Optional hero thumbnail for the card */
  previewImage?: StaticImageData;
};

export const blogs: BlogPost[] = [
  {
    id: "dont-just-prompt-pipeline",
    title: "Don't Just Prompt, Pipeline: Turning AI into an Engineering Execution Engine",
    publication: "Capillary Technologies",
    href: "https://medium.com/capillary-tech/dont-just-prompt-pipeline-turning-ai-into-an-engineering-execution-engine-f548718c3a42",
    excerpt:
      "Co-authored on how we treated AI as an intelligence layer — mapping complexity, planning with data, and running repeatable migration pipelines with quality gates — instead of ad-hoc prompting alone.",
    readTime: "7 min read",
    credit: "With Yogesh Gaonkar & Keshav Agarwal",
    date: "Mar 2026",
    previewImage: blogPipelinePreview,
  },
];

export const projects = [
  {
    id: "dear-di",
    name: "dear.di",
    tagline: "The AI scrapbook I always wanted to exist.",
    problem: "Journaling apps are either too rigid or too empty. I wanted something that felt personal, visual, and smart.",
    approach: "Building an AI-powered digital scrapbook where memories, notes, and media live together — and the AI helps you reflect, not just store.",
    result: "A private, ongoing personal project that keeps evolving as I learn what 'a good memory space' really means.",
    tech: ["React", "TypeScript", "AI/LLM APIs", "Node.js"],
    github: null,
    demo: null,
    featured: true,
    private: true,
    year: "2026",
  },
  {
    id: "ransomware-detection",
    name: "Ransomware Detection",
    tagline: "ML meets cybersecurity, wrapped in a web interface.",
    problem: "Detecting ransomware typically requires deep technical knowledge. Making it accessible needed a clean interface over a powerful backend.",
    approach: "Built a Flask web app that takes Windows executables, extracts PE header features, and runs them through a trained Random Forest classifier.",
    result: "A working ML pipeline that classifies files as ransomware or clean with solid accuracy, wrapped in an interface anyone can use.",
    tech: ["Python", "Flask", "scikit-learn", "pandas", "pefile"],
    github: "https://github.com/SarahABKH/Ransomware-Detection-using-ML-WEBAPP",
    demo: null,
    featured: true,
    private: false,
    year: "2024",
  },
  {
    id: "language-translator",
    name: "Language Translator App",
    tagline: "Breaking language barriers, one tap at a time.",
    problem: "Most translation apps either do too much or feel clunky. Building one meant thinking hard about the 3-second use case.",
    approach: "Native Android app with Google Translate + Dictionary API integration, speech I/O, Firebase-backed history, and a UI focused on speed.",
    result: "A clean, fast translator supporting 10+ language pairs with voice input, text-to-speech, and saved history.",
    tech: ["Java", "Android Studio", "Google Translate API", "Firebase"],
    github: "https://github.com/SarahABKH/Language-Translator",
    demo: null,
    featured: true,
    private: false,
    year: "2023",
  },
  {
    id: "hacktofuture",
    name: "Sansar — HackToFuture",
    tagline: "A hackathon. A waste problem. A weekend.",
    problem: "Urban waste disposal is fragmented and invisible. People don't know where to take things or how to dispose responsibly.",
    approach: "Built Sansar in a hackathon — a web platform connecting users to proper disposal points with community features and tracking.",
    result: "Shipped in 48 hours. Full stack, live, and actually functional. Reminded me that constraints make you better.",
    tech: ["JavaScript", "PHP", "MySQL", "HTML/CSS"],
    github: "https://github.com/SarahABKH/HackToFuture",
    demo: null,
    featured: false,
    private: false,
    year: "2023",
  },
];

export const thoughts = [
  { id: 1, thought: "Good UI is invisible until it's broken.", category: "Design" },
  { id: 2, thought: "State management is a design problem, not just a code problem.", category: "Architecture" },
  { id: 3, thought: "The best performance optimization is not rendering what doesn't need to render.", category: "Performance" },
  { id: 4, thought: "If I have to explain why the code is structured this way, it probably needs to be restructured.", category: "Code quality" },
  { id: 5, thought: "Accessibility is empathy at scale.", category: "Craft" },
  { id: 6, thought: "A component that does one thing really well is worth ten that do many things okay.", category: "Architecture" },
  { id: 7, thought: "The user never sees your clever abstraction. They see the result.", category: "Product" },
  { id: 8, thought: "Technical debt is future you paying interest on past you's shortcuts.", category: "Engineering" },
];
