import { Link } from "react-router";
import { ArrowLeft, Download, ExternalLink, FileText } from "lucide-react";
import type { Route } from "./+types/resume";
import { personalInfo } from "~/data/portfolio";

export function meta({}: Route.MetaArgs) {
  return [
    { title: `Resume | ${personalInfo.name}` },
    { name: "description", content: `${personalInfo.name}'s Resume - Software Engineer` },
  ];
}

export default function Resume() {
  const pdfUrl = "https://naval-portfolio-seven.vercel.app/resume.pdf";
  const googleDocsUrl = `https://docs.google.com/viewer?url=${encodeURIComponent(pdfUrl)}&embedded=true`;

  return (
    <div className="min-h-screen bg-[var(--color-background)] flex flex-col">
      {/* Header */}
      <header className="shrink-0 bg-[var(--color-background)] border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm">Back</span>
          </Link>

          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-2 mr-4 text-sm text-[var(--color-muted)]">
              <FileText size={16} />
              <span>{personalInfo.name} - Resume</span>
            </div>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 text-sm text-[var(--color-muted)] hover:text-[var(--color-foreground)] border border-[var(--color-border)] hover:border-[var(--color-border-hover)] hover:bg-[var(--color-card)] rounded-lg transition-all"
            >
              <ExternalLink size={14} />
              <span className="hidden sm:inline">Open</span>
            </a>
            <a
              href="/resume.pdf"
              download={`${personalInfo.name.replace(' ', '_')}_Resume.pdf`}
              className="flex items-center gap-2 px-4 py-1.5 text-sm font-medium bg-[var(--color-foreground)] text-[var(--color-background)] rounded-lg hover:opacity-90 transition-opacity"
            >
              <Download size={14} />
              <span>Download</span>
            </a>
          </div>
        </div>
      </header>

      {/* PDF Viewer using Google Docs */}
      <main className="flex-1">
        <iframe
          src={googleDocsUrl}
          className="w-full h-[calc(100vh-57px)] border-0"
          title="Resume"
        />
      </main>
    </div>
  );
}
