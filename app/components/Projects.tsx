import { motion } from "framer-motion";
import { Github, ExternalLink, Play, Image as ImageIcon } from "lucide-react";
import { projects, type Project } from "~/data/portfolio";

function ProjectMedia({ project }: { project: Project }) {
  if (project.videoUrl) {
    // YouTube embed
    const videoId = project.videoUrl.includes("youtube.com")
      ? new URL(project.videoUrl).searchParams.get("v")
      : project.videoUrl.split("/").pop();

    return (
      <div className="relative aspect-video rounded-lg overflow-hidden bg-[var(--color-card)]">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={`${project.title} demo`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      </div>
    );
  }

  // Placeholder with project icon
  return (
    <div className="relative aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-[var(--color-card)] to-[var(--color-card-hover)] border border-[var(--color-border)] flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-[var(--color-border)] flex items-center justify-center">
          {project.demo ? (
            <Play size={24} className="text-[var(--color-muted)]" />
          ) : (
            <ImageIcon size={24} className="text-[var(--color-muted)]" />
          )}
        </div>
        <p className="text-sm text-[var(--color-muted)]">
          {project.demo ? "Demo available" : "Coming soon"}
        </p>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-[var(--color-card)]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Projects</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-[var(--color-gradient-start)] to-[var(--color-gradient-end)] mb-8" />
        </motion.div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-6 p-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] card-hover"
            >
              {/* Project Media */}
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <ProjectMedia project={project} />
              </div>

              {/* Project Info */}
              <div className="flex flex-col justify-center">
                <div className="mb-2">
                  <span className="text-xs font-medium text-[var(--color-muted)] uppercase tracking-wider">
                    {project.subtitle}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 6).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded bg-[var(--color-card)] border border-[var(--color-border)] text-[var(--color-muted)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
