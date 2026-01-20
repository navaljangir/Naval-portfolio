import { motion } from "framer-motion";
import { Calendar, MapPin, ExternalLink } from "lucide-react";
import { experience } from "~/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Experience</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-[var(--color-gradient-start)] to-[var(--color-gradient-end)] mb-8" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-4 top-0 bottom-0 w-px bg-[var(--color-border)]" />

          {experience.map((exp, expIndex) => (
            <motion.div
              key={expIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: expIndex * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-12 pb-12 last:pb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-4 top-1 w-2 h-2 rounded-full bg-[var(--color-foreground)] transform -translate-x-1/2" />

              {/* Company header */}
              <div className="mb-6">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <a
                    href={exp.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-semibold hover:text-[var(--color-gradient-start)] transition-colors flex items-center gap-2 group"
                  >
                    {exp.company}
                    <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                  {exp.badge && (
                    <span className="px-2 py-0.5 text-xs font-medium bg-orange-500/20 text-orange-400 rounded">
                      {exp.badge}
                    </span>
                  )}
                </div>
                <p className="text-[var(--color-foreground)] font-medium mb-2">
                  {exp.role}
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-[var(--color-muted)]">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={14} />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Experience sections */}
              <div className="space-y-6">
                {exp.sections.map((section, sectionIndex) => (
                  <div
                    key={sectionIndex}
                    className="p-5 rounded-lg border border-[var(--color-border)] bg-[var(--color-card)]"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-medium text-[var(--color-foreground)]">
                        {section.title}
                      </h4>
                      {section.website && (
                        <a
                          href={section.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs text-[var(--color-muted)] hover:text-[var(--color-gradient-start)] transition-colors"
                        >
                          <ExternalLink size={12} />
                          <span>Visit</span>
                        </a>
                      )}
                    </div>
                    <ul className="space-y-2">
                      {section.highlights.map((highlight, highlightIndex) => (
                        <li
                          key={highlightIndex}
                          className="flex gap-3 text-sm text-[var(--color-muted)] leading-relaxed"
                        >
                          <span className="text-[var(--color-gradient-start)] mt-1.5 flex-shrink-0">
                            &bull;
                          </span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
