import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "~/data/portfolio";

const techStack = [
  "React",
  "TypeScript",
  "Node.js",
  "OpenAI",
  "PostgreSQL",
  "Kubernetes",
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center grid-pattern noise">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-gradient-start)] rounded-full blur-[128px] opacity-20" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--color-gradient-end)] rounded-full blur-[128px] opacity-20" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full border border-[var(--color-border)] bg-[var(--color-card)]/50 text-xs text-[var(--color-muted)]"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Open to opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4"
        >
          <span className="gradient-text">{personalInfo.name}</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-sm text-[var(--color-muted)] max-w-md mx-auto mb-6"
        >
          I craft <span className="text-[var(--color-foreground)]">fast</span>,{" "}
          <span className="text-[var(--color-foreground)]">scalable</span> web experiences
          with clean code and pixel-perfect design.
        </motion.p>

        {/* Tech Stack Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-8"
        >
          {techStack.map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
              className="px-3 py-1 text-xs font-medium rounded-full border border-[var(--color-border)] bg-[var(--color-card)]/50 text-[var(--color-muted)] hover:border-[var(--color-gradient-start)]/50 hover:text-[var(--color-foreground)] transition-colors cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <a
            href={personalInfo.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full border border-[var(--color-border)] hover:border-[var(--color-border-hover)] hover:bg-[var(--color-card)] transition-all"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href={personalInfo.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full border border-[var(--color-border)] hover:border-[var(--color-border-hover)] hover:bg-[var(--color-card)] transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="p-2.5 rounded-full border border-[var(--color-border)] hover:border-[var(--color-border-hover)] hover:bg-[var(--color-card)] transition-all"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10"
        >
          <a
            href="#projects"
            className="px-5 py-2.5 bg-[var(--color-foreground)] text-[var(--color-background)] font-medium rounded-md hover:opacity-90 transition-opacity text-sm"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-5 py-2.5 border border-[var(--color-border)] hover:border-[var(--color-border-hover)] hover:bg-[var(--color-card)] rounded-md transition-all text-sm"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Code Snippet Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-sm mx-auto"
        >
          <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-card)]/80 overflow-hidden text-left">
            <div className="flex items-center gap-1.5 px-3 py-2 border-b border-[var(--color-border)] bg-[var(--color-card)]">
              <div className="w-2 h-2 rounded-full bg-[#ff5f57]" />
              <div className="w-2 h-2 rounded-full bg-[#febc2e]" />
              <div className="w-2 h-2 rounded-full bg-[#28c840]" />
              <span className="ml-2 text-[10px] text-[var(--color-muted)]">api.ts</span>
            </div>
            <pre className="p-3 text-[10px] font-mono text-[var(--color-muted)] overflow-x-auto">
<code>{`const response = await openai.chat.completions.create({
  model: "gpt-4",
  messages: [{ role: "user", content: prompt }],
  stream: true,
});`}</code>
            </pre>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors z-10"
        aria-label="Scroll down"
      >
        <ArrowDown size={20} className="animate-bounce" />
      </motion.a>
    </section>
  );
}
