import { motion } from "framer-motion";
import { skills } from "~/data/portfolio";

const skillCategories = [
  { key: "languages" as const, label: "Languages", icon: "{ }" },
  { key: "frontend" as const, label: "Frontend", icon: "</>" },
  { key: "backend" as const, label: "Backend", icon: "[ ]" },
  { key: "databases" as const, label: "Databases", icon: "db" },
  { key: "devops" as const, label: "DevOps & Tools", icon: ">>>" },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-[var(--color-card)]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Skills</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-[var(--color-gradient-start)] to-[var(--color-gradient-end)] mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-lg border border-[var(--color-border)] bg-[var(--color-background)] card-hover"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-sm text-[var(--color-muted)]">
                  {category.icon}
                </span>
                <h3 className="font-semibold">{category.label}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills[category.key].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm rounded-full bg-[var(--color-card)] border border-[var(--color-border)] text-[var(--color-muted)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
