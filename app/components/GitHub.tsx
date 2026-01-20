import { motion } from "framer-motion";
import { Github, GitFork, Star, Code2 } from "lucide-react";
import { personalInfo } from "~/data/portfolio";

const GITHUB_USERNAME = "navaljangir";

export function GitHub() {
  return (
    <section id="github" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-2">GitHub Activity</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-[var(--color-gradient-start)] to-[var(--color-gradient-end)] mb-8" />
        </motion.div>

        {/* GitHub Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <a
            href={personalInfo.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] hover:border-[var(--color-border-hover)] transition-all group"
          >
            <div className="w-16 h-16 rounded-full bg-[var(--color-background)] border border-[var(--color-border)] flex items-center justify-center overflow-hidden">
              <img
                src={`https://github.com/${GITHUB_USERNAME}.png`}
                alt={GITHUB_USERNAME}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <Github size={18} className="text-[var(--color-muted)]" />
                <span className="font-semibold group-hover:text-[var(--color-foreground)] transition-colors">
                  @{GITHUB_USERNAME}
                </span>
              </div>
              <p className="text-sm text-[var(--color-muted)] mt-1">
                View my repositories and contributions
              </p>
            </div>
            <div className="text-[var(--color-muted)] group-hover:translate-x-1 transition-transform">
              →
            </div>
          </a>
        </motion.div>

        {/* Contribution Graph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="p-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] overflow-hidden"
        >
          <h3 className="text-sm font-medium text-[var(--color-muted)] mb-4 flex items-center gap-2">
            <Code2 size={16} />
            Contribution Graph
          </h3>

          {/* GitHub Contribution Chart - day-wise grid (green & dark) */}
          <div className="overflow-x-auto pb-2 rounded-lg bg-[#161b22] p-3">
            <img
              src={`https://ghchart.rshah.org/40c463/${GITHUB_USERNAME}`}
              alt={`${GITHUB_USERNAME}'s GitHub contribution chart`}
              className="min-w-[700px] w-full h-auto invert brightness-[0.85] hue-rotate-180"
            />
          </div>

          <p className="text-xs text-[var(--color-muted-foreground)] mt-4 text-center">
            Contributions in the last year
          </p>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6"
        >
          <a
            href={`${personalInfo.social.github}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] hover:border-[var(--color-border-hover)] transition-all text-center group"
          >
            <Code2 size={20} className="mx-auto mb-2 text-[var(--color-muted)] group-hover:text-violet-500 transition-colors" />
            <p className="text-xs text-[var(--color-muted)]">Repositories</p>
          </a>
          <a
            href={`${personalInfo.social.github}?tab=stars`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] hover:border-[var(--color-border-hover)] transition-all text-center group"
          >
            <Star size={20} className="mx-auto mb-2 text-[var(--color-muted)] group-hover:text-yellow-500 transition-colors" />
            <p className="text-xs text-[var(--color-muted)]">Stars</p>
          </a>
          <a
            href={`${personalInfo.social.github}?tab=followers`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] hover:border-[var(--color-border-hover)] transition-all text-center group"
          >
            <Github size={20} className="mx-auto mb-2 text-[var(--color-muted)] group-hover:text-blue-500 transition-colors" />
            <p className="text-xs text-[var(--color-muted)]">Followers</p>
          </a>
          <a
            href={`${personalInfo.social.github}?tab=following`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] hover:border-[var(--color-border-hover)] transition-all text-center group"
          >
            <GitFork size={20} className="mx-auto mb-2 text-[var(--color-muted)] group-hover:text-green-500 transition-colors" />
            <p className="text-xs text-[var(--color-muted)]">Following</p>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
