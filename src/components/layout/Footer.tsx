'use client';
import { Github, Linkedin, Mail } from 'lucide-react';
import { personal } from '@/data/portfolio';

export function Footer() {
  return (
    <footer className="bg-surface/90 border-t border-accent/15 py-14 px-6 md:px-16 lg:px-24 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-6">
        <p className="font-sans text-sm text-secondary">Built with care — soft edges, honest copy.</p>
        <div className="flex gap-6">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="pointer"
            className="text-muted hover:text-accent transition-colors duration-300"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="pointer"
            className="text-muted hover:text-accent transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={`mailto:${personal.email}`}
            data-cursor="pointer"
            className="text-muted hover:text-accent transition-colors duration-300"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
        <p className="font-sans text-xs text-muted">© 2026 Sarah Abdul Khader. All rights reserved.</p>
      </div>
    </footer>
  );
}
