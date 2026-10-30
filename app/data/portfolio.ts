export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string[];
  technologies: string[];
  github: string;
  demo: string | null;
  videoUrl: string | null;
  image: string;
}

export const personalInfo = {
  name: "Naval Kishor",
  title: "Software Engineer",
  tagline: "Building UPI payment systems, scalable backends, and AI debugging tools",
  email: "jangirnaval392003@gmail.com",
  phone: "+91-9697601000",
  location: "Bangalore, India",
  social: {
    github: "https://github.com/navaljangir",
    linkedin: "https://linkedin.com/in/nvl-kishor",
    leetcode: "https://leetcode.com/nvl_kishor",
  },
  about: `I'm a software engineer on the UPI team at KreditBee, building payment systems that run at scale. I built NPCI's UPI Tap & Pay end-to-end (Go backend, Android, React frontend, database schema) as an NPCI launch partner, shipped mandate interoperability, and implemented SIM-based silent mobile verification.

I enjoy the debugging side as much as the building side. I tracked down a primary-replica lag issue that had affected ~48,000 users, fixed a token-invalidation bug failing transactions for hundreds of users daily, and built AI/LLM tools that let AI agents investigate production issues, cutting my team's debugging time from ~2 hours to ~10 minutes. Previously at Frontpage (YC S21), I built an AI-powered equity research product across the stack.`,
};

export const skills = {
  languages: ["Go (Golang)", "C++", "TypeScript", "JavaScript", "SQL"],
  frontend: [
    "React",
    "React Router 7",
    "Next.js",
    "Zustand",
    "React Query",
    "shadcn/ui",
    "Radix UI",
    "TailwindCSS",
  ],
  backend: ["Node.js", "Express", "REST APIs", "WebSockets", "Microservices"],
  databases: ["PostgreSQL", "MySQL (Amazon Aurora)", "Redis", "ProxySQL"],
  devops: ["AWS (EKS, SQS, SNS)", "Docker", "Kubernetes", "CI/CD", "Prisma", "Amplitude Analytics"],
  ai: ["OpenAI APIs", "RAG", "Vector Embeddings", "MCP-style AI Tooling"],
};

export const experience = [
  {
    company: "KreditBee",
    badge: null,
    website: "https://www.kreditbee.in",
    role: "Software Engineer – UPI Team",
    location: "Bangalore, India",
    period: "January 2026 - Present",
    sections: [
      {
        title: "UPI Payments",
        website: null,
        highlights: [
          "Designed and built NPCI's UPI Tap & Pay end-to-end across Android, Go backend, React frontend and database schema, enabling NFC payments at POS terminals without internet on the user's phone. Shipped as an NPCI launch partner.",
          "Built Mandate Interoperability end-to-end, enabling users to transfer existing UPI mandates from other payment apps into KreditBee.",
          "Implemented Silent Mobile Verification using network-based SIM verification through a PSP and telecom aggregator, removing user action from verification, and refactored the onboarding experience to reduce drop-offs.",
          "Built the Dynamic Cohort engine for risk decisions, rewards and nudges, letting risk, rewards and marketing teams define cohort rules themselves instead of a custom engineering build for every new cohort.",
        ],
      },
      {
        title: "Debugging, Reliability & AI Tooling",
        website: null,
        highlights: [
          "Investigated logs and code to find and fix a primary-replica lag issue, where replica reads occurred before recent writes were replicated. The issue had affected approximately 48,000 users over 1.5 years. Built a ProxySQL simulator of the production Aurora writer/reader setup with configurable lag to reproduce these failures locally.",
          "Built MCP-style AI debugging tools (KubeSense and Redash CLIs over internal inspection and query APIs, plus a production proxy) that let AI agents investigate production issues, cutting debugging time for the 10-person UPI team from ~2 hours to ~10 minutes.",
          "Diagnosed and fixed a Google Ad ID token-invalidation bug that caused every transaction to fail for ~600–700 users per day, plus 300–400 daily UPI Lite registration failures.",
        ],
      },
    ],
  },
  {
    company: "Frontpage",
    badge: "YC S21",
    website: "https://front.page",
    role: "Software Engineer",
    location: "Bangalore, India",
    period: "April 2025 - January 2026",
    sections: [
      {
        title: "EQHQ – New Product Development",
        website: "https://eqhq.ai",
        highlights: [
          "Developed the EQHQ frontend using React Router 7 (SSR), Zustand, and React Query, achieving page loads of <300ms on core routes and <400ms on data-heavy views.",
          "Built responsive, accessible UI using shadcn/ui, Radix, and Tailwind, improving layout stability and mobile usability across breakpoints.",
          "Integrated Amplitude Analytics + Session Replay, reducing debugging time by 30–40% and enabling faster identification of UX drop-offs.",
        ],
      },
      {
        title: "Platform & Backend Engineering",
        website: null,
        highlights: [
          "Built a multi-turn conversational AI backend with thread-based message persistence, integrating OpenAI Chat Completion APIs with streaming and context management.",
          "Designed shareable URL system with access control and optimized price history pipeline via third-party provider integration, achieving significant cost savings.",
          "Developed data refresh pipelines with admin tooling for issue reporting and targeted regeneration, resolving ingestion issues to ensure data integrity.",
          "Configured Kubernetes infrastructure including namespaces, deployments, ConfigMaps, and CronJobs for automated pipeline execution and job alerting.",
        ],
      },
      {
        title: "FrontPage Platform Revamp",
        website: "https://front.page",
        highlights: [
          "Migrated the core platform to React Router 7 (SSR) with Redux and React Query, improving routing performance by ~35–40% and reducing bundle fragmentation.",
          "Optimized Core Web Vitals (LCP, FID, CLS), achieving 98+ Lighthouse scores and significantly improving first-render performance across key routes.",
        ],
      },
    ],
  },
];

export const projects: Project[] = [
  {
    id: "cinestream",
    title: "CineStream",
    subtitle: "Curated Movie Platform",
    description:
      "A curated movie and series platform offering Mubi-style film discovery with related content. Features HLS adaptive streaming and secure video access.",
    longDescription: [
      "Created a curated movie and series platform offering Mubi-style film discovery with related content.",
      "Processed videos using FFmpeg and converted them to HLS for adaptive and reliable streaming.",
      "Built the full stack using React Router 7, Node.js, PostgreSQL, and Cloudflare R2 for CDN delivery.",
      "Implemented JWT authentication with time-limited signed URLs (R2 presigned URLs) for secure video access, preventing unauthorized streaming.",
    ],
    technologies: [
      "React Router 7",
      "Node.js",
      "FFmpeg",
      "HLS",
      "PostgreSQL",
      "Cloudflare R2",
    ],
    github: "https://github.com/navaljangir/CineCircle-web-app",
    demo: null,
    videoUrl: null, // Add YouTube video URL here when available
    image: "/images/cinestream.svg",
  },
  {
    id: "wallet-app",
    title: "Wallet App",
    subtitle: "Digital Payment Solution",
    description:
      "A comprehensive wallet application with simulated netbanking integration, CI/CD pipeline, and containerized deployment.",
    longDescription: [
      "Streamlined development workflow with Turborepo, enabling parallel execution of tasks for faster build times.",
      "Implemented a CI/CD pipeline to automate build testing and ensure deployment reliability.",
      "Replicated bank server functionality, allowing users to add money to wallets via simulated netbanking (HDFC and Axis), built using Express.js.",
      "Ensured portability and consistency by packaging the application into a Docker container.",
    ],
    technologies: [
      "React.js",
      "Express.js",
      "Next.js",
      "Prisma",
      "Docker",
      "NextAuth",
      "Turborepo",
      "Zod",
    ],
    github: "https://github.com/navaljangir/wallet-app",
    demo: null,
    videoUrl: null,
    image: "/images/wallet.svg",
  },
  {
    id: "web-scraper",
    title: "WebScraper & Notifications",
    subtitle: "Real-time News Aggregator",
    description:
      "A scalable web scraping application with real-time WebSocket notifications for Hacker News updates.",
    longDescription: [
      "Designed and implemented a scalable web scraping application using Puppeteer to extract and store data from Hacker News.",
      "Developed real-time notification features using WebSocket integration for instant updates set to every 2 minutes.",
      "Leveraged MySQL for structured data storage and Redis for efficient in-memory operations, ensuring high performance.",
    ],
    technologies: ["Puppeteer", "WebSockets", "Express.js", "Docker", "Redis", "MySQL"],
    github: "https://github.com/navaljangir/newsWebScrapAndNotification",
    demo: null,
    videoUrl: null,
    image: "/images/scraper.svg",
  },
  {
    id: "code-review-ai",
    title: "Code Review AI",
    subtitle: "AI-Powered Code Analysis",
    description:
      "An intelligent code review tool that leverages AI to analyze and provide feedback on code quality.",
    longDescription: [
      "Built an AI-powered code review tool using OpenAI APIs for intelligent code analysis.",
      "Provides automated feedback on code quality, best practices, and potential improvements.",
    ],
    technologies: ["TypeScript", "React", "OpenAI APIs", "Node.js"],
    github: "https://github.com/navaljangir/Code-Review-AI",
    demo: "https://code-review-ai-tau.vercel.app",
    videoUrl: null,
    image: "/images/code-review.svg",
  },
  {
    id: "crypto-weather",
    title: "Crypto Weather Nexus",
    subtitle: "Crypto & Weather Dashboard",
    description:
      "A unique dashboard combining cryptocurrency market data with weather information in a single interface.",
    longDescription: [
      "Built a dashboard combining real-time cryptocurrency prices with weather data.",
      "Implemented data visualization and responsive design for optimal user experience.",
    ],
    technologies: ["TypeScript", "React", "APIs", "TailwindCSS"],
    github: "https://github.com/navaljangir/Crypto-weather-nexus",
    demo: "https://crypto-weather-nexus-lemon.vercel.app",
    videoUrl: null,
    image: "/images/crypto.svg",
  },
];

export const education = {
  institution: "Vellore Institute of Technology",
  degree: "Bachelor of Technology",
  branch: "Computer Science and Engineering",
  gpa: "8.87",
  period: "Sept 2021 - July 2025",
};
