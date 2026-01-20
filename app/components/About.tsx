import { motion } from "framer-motion";
import { MapPin, Briefcase, GraduationCap, ExternalLink } from "lucide-react";
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
          className="mb-6"
        >
          <p className="text-[var(--color-muted)] leading-relaxed whitespace-pre-line">
            {personalInfo.about}
          </p>
        </motion.div>

        {/* Info Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-4 text-sm text-[var(--color-muted)]"
        >
          <a
            href="https://front.page"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[var(--color-border)] hover:border-[var(--color-gradient-start)]/50 transition-colors group"
          >
            <Briefcase size={14} />
            <span>Frontpage</span>
            <span className="text-[var(--color-gradient-start)]">(YC S21)</span>
            <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[var(--color-border)]/50">
            <MapPin size={14} />
            <span>{personalInfo.location}</span>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[var(--color-border)]/50">
            <GraduationCap size={14} />
            <span>{education.institution}</span>
            <span className="hidden sm:inline">• {education.gpa} GPA</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
