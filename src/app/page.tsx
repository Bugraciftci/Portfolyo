'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { BentoGridSection } from '@/components/BentoGridSection';
import { AppShowcaseSection } from '@/components/AppShowcaseSection';
import { ResumeSection } from '@/components/ResumeSection';
import { ContactSection } from '@/components/ContactSection';
import { PortfolioApp } from '@/data/portfolioData';

export default function PortfolioHomePage() {
  const [lang, setLang] = useState<'tr' | 'en'>('en');
  const [selectedApp, setSelectedApp] = useState<PortfolioApp | null>(null);

  return (
    <div className="min-h-screen bg-[#09090B] text-zinc-100 selection:bg-zinc-200 selection:text-zinc-950">
      <Navbar lang={lang} setLang={setLang} />
      <main>
        <HeroSection lang={lang} onSelectAppModal={(app) => setSelectedApp(app)} />
        <AppShowcaseSection
          lang={lang}
          selectedApp={selectedApp}
          onSelectApp={(app) => setSelectedApp(app)}
        />
        <BentoGridSection lang={lang} onSelectAppModal={(app) => setSelectedApp(app)} />
        <ResumeSection lang={lang} />
        <ContactSection lang={lang} />
      </main>
    </div>
  );
}
