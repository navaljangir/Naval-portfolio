import { Link } from "react-router";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { personalInfo } from "~/data/portfolio";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#github", label: "GitHub" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[var(--color-background)]/80 backdrop-blur-md border-b border-[var(--color-border)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-sm font-mono tracking-tight hover:opacity-80 transition-opacity flex items-center"
          >
            <span className="text-[var(--color-gradient-start)]">~</span>
            <span className="text-[var(--color-muted)]">/</span>
            <span className="text-[var(--color-foreground)]">nk</span>
            <span className="w-1.5 h-4 bg-[var(--color-foreground)] ml-0.5 animate-pulse" />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors link-underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Resume Button */}
          <Link
            to="/resume"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-[var(--color-foreground)] text-[var(--color-background)] rounded-md hover:opacity-90 transition-opacity"
          >
            Resume
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[var(--color-muted)] hover:text-[var(--color-foreground)]"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-[var(--color-border)] pt-4">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-sm text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  to="/resume"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-[var(--color-foreground)] text-[var(--color-background)] rounded-md"
                >
                  Resume
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
