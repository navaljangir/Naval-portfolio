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
  return (
    <div className="h-screen bg-[var(--color-background)] flex flex-col overflow-hidden">
      {/* Header - compact */}
      <header className="shrink-0 bg-[var(--color-background)] border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex items-center justify-between">
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
              <span className="hidden sm:inline">New Tab</span>
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

      {/* PDF Viewer */}
      <main className="flex-1 min-h-0 p-4 sm:p-6">
        <div className="max-w-4xl mx-auto h-full">
          <div className="relative w-full h-full group">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[var(--color-gradient-start)]/20 to-[var(--color-gradient-end)]/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* PDF Container */}
            <div className="relative w-full h-full rounded-xl overflow-hidden border border-[var(--color-border)] bg-[#1a1a1a] shadow-2xl flex flex-col">
              {/* Title bar */}
              <div className="shrink-0 flex items-center gap-2 px-4 py-2 bg-[var(--color-card)] border-b border-[var(--color-border)]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="max-w-md mx-auto px-3 py-1 rounded-md bg-[var(--color-background)] text-xs text-[var(--color-muted)] text-center truncate">
                    resume.pdf
                  </div>
                </div>
                <div className="w-[52px]" />
              </div>

              {/* PDF iframe */}
              <div className="flex-1 min-h-0 bg-[#525659]">
                <iframe
                  src="/resume.pdf#toolbar=0&navpanes=0&view=FitH"
                  className="w-full h-full border-0"
                  title="Resume"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
