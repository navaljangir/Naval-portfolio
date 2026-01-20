import { motion } from "framer-motion";
import { MapPin, Briefcase, GraduationCap, Monitor, Server } from "lucide-react";
import { personalInfo, education } from "~/data/portfolio";

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-2">About</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-[var(--color-gradient-start)] to-[var(--color-gradient-end)] mb-8" />
        </motion.div>

        {/* Main About Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <p className="text-lg text-[var(--color-muted)] leading-relaxed whitespace-pre-line">
            {personalInfo.about}
          </p>
        </motion.div>

        {/* Highlight Cards - Full Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8"
        >
          <div className="p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] hover:border-[var(--color-gradient-start)]/50 transition-colors">
            <div className="flex items-center gap-2 mb-3">
              <Briefcase size={16} className="text-[var(--color-gradient-start)]" />
              <span className="text-xs text-[var(--color-muted-foreground)] uppercase tracking-wider">Current</span>
            </div>
            <p className="font-semibold">Software Engineer</p>
            <p className="text-sm text-[var(--color-muted)]">Frontpage <span className="text-[var(--color-gradient-end)]">(YC S21)</span></p>
          </div>

          <div className="p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] hover:border-[var(--color-gradient-start)]/50 transition-colors">
            <div className="flex items-center gap-2 mb-3">
              <Monitor size={16} className="text-[var(--color-gradient-end)]" />
              <span className="text-xs text-[var(--color-muted-foreground)] uppercase tracking-wider">Frontend</span>
            </div>
            <p className="font-semibold">React, SSR, Performance</p>
            <p className="text-sm text-[var(--color-muted)]">&lt;300ms loads, 98+ Lighthouse</p>
          </div>

          <div className="p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] hover:border-[var(--color-gradient-start)]/50 transition-colors">
            <div className="flex items-center gap-2 mb-3">
              <Server size={16} className="text-emerald-400" />
              <span className="text-xs text-[var(--color-muted-foreground)] uppercase tracking-wider">Backend</span>
            </div>
            <p className="font-semibold">APIs, AI, Infrastructure</p>
            <p className="text-sm text-[var(--color-muted)]">Node.js, K8s, Pipelines</p>
          </div>
        </motion.div>

        {/* Lower Priority - Location & Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4"
        >
          {/* Location */}
          <div className="flex-1 flex items-center gap-3 p-4 rounded-xl border border-[var(--color-border)]/50 bg-[var(--color-card)]/30">
            <MapPin size={16} className="text-[var(--color-muted)]" />
            <span className="text-sm text-[var(--color-muted)]">{personalInfo.location}</span>
          </div>

          {/* Education */}
          <div className="flex-[2] flex items-center gap-3 p-4 rounded-xl border border-[var(--color-border)]/50 bg-[var(--color-card)]/30">
            <GraduationCap size={16} className="text-[var(--color-muted)]" />
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-[var(--color-muted)]">
              <span>{education.institution}</span>
              <span className="hidden sm:inline">•</span>
              <span>{education.degree}</span>
              <span className="hidden sm:inline">•</span>
              <span>{education.gpa} GPA</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
