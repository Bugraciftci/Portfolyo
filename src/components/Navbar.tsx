'use client';

import React from 'react';
import { ArrowUpRight, FileText, Github } from 'lucide-react';
import { DEVELOPER_PROFILE } from '@/data/portfolioData';

interface NavbarProps {
  lang: 'tr' | 'en';
  setLang: (lang: 'tr' | 'en') => void;
}

export function Navbar({ lang, setLang }: NavbarProps) {
  const navItems =
    lang === 'tr'
      ? [
          { label: 'Uygulamalar', href: '#apps' },
          { label: 'Mimari & Kod', href: '#architecture' },
          { label: 'CV / Özgeçmiş', href: '#cv' },
          { label: 'İletişim', href: '#contact' },
        ]
      : [
          { label: 'Apps', href: '#apps' },
          { label: 'Architecture', href: '#architecture' },
          { label: 'CV / Resume', href: '#cv' },
          { label: 'Contact', href: '#contact' },
        ];

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-[#09090B]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        {/* Minimalist Typographic Brand */}
        <a href="#" className="flex items-center gap-2.5 group">
          <span className="h-2 w-2 rounded-full bg-zinc-100 transition-transform group-hover:scale-125" />
          <span className="text-sm font-medium tracking-tight text-zinc-100">
            {DEVELOPER_PROFILE.shortName}
          </span>
          <span className="hidden sm:inline-block text-xs font-mono text-zinc-500">
            / iOS Software Engineer
          </span>
        </a>

        {/* Minimalist Hairline Navigation */}
        <nav className="hidden md:flex items-center gap-7">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs font-medium text-zinc-400 transition-colors hover:text-zinc-100"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Controls: TR/EN Toggle + GitHub + CV PDF + Contact */}
        <div className="flex items-center gap-2.5 sm:gap-3.5">
          <div className="flex items-center text-xs font-mono">
            <button
              onClick={() => setLang('tr')}
              className={`px-1.5 py-0.5 transition-colors cursor-pointer ${
                lang === 'tr' ? 'text-zinc-100 font-semibold' : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              TR
            </button>
            <span className="text-zinc-700">/</span>
            <button
              onClick={() => setLang('en')}
              className={`px-1.5 py-0.5 transition-colors cursor-pointer ${
                lang === 'en' ? 'text-zinc-100 font-semibold' : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              EN
            </button>
          </div>

          <span className="h-3.5 w-px bg-zinc-800" />

          {/* Prominent GitHub Header Link */}
          <a
            href={DEVELOPER_PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 border border-zinc-800 bg-zinc-900/70 px-3 py-1.5 text-xs font-medium text-zinc-200 transition-colors hover:border-zinc-600 hover:text-white"
            title="GitHub (@Bugraciftci)"
          >
            <Github className="h-3.5 w-3.5" />
            <span>GitHub</span>
          </a>

          {/* Direct CV PDF Link */}
          <a
            href={DEVELOPER_PROFILE.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 border border-zinc-800 bg-zinc-900/70 px-3 py-1.5 text-xs font-medium text-zinc-200 transition-colors hover:border-zinc-600 hover:text-white"
            title="CV (PDF)"
          >
            <FileText className="h-3.5 w-3.5" />
            <span>CV</span>
          </a>

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1 rounded-full bg-zinc-100 px-3.5 py-1.5 text-xs font-medium text-zinc-950 transition-all hover:bg-white"
          >
            <span>{lang === 'tr' ? 'İletişim' : 'Contact'}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
