'use client';

import React, { useState } from 'react';
import { ArrowUpRight, Check, Copy } from 'lucide-react';
import {
  DEVELOPER_PROFILE,
  PortfolioApp,
  SWIFT_ARCHITECTURE_SNIPPETS,
  TECH_STACK_GROUPS,
} from '@/data/portfolioData';

interface BentoGridSectionProps {
  lang: 'tr' | 'en';
  onSelectAppModal: (app: PortfolioApp) => void;
}

export function BentoGridSection({ lang }: BentoGridSectionProps) {
  const [activeTabId, setActiveTabId] = useState(SWIFT_ARCHITECTURE_SNIPPETS[0].id);
  const [copiedCode, setCopiedCode] = useState(false);

  const activeSnippet =
    SWIFT_ARCHITECTURE_SNIPPETS.find((t) => t.id === activeTabId) ||
    SWIFT_ARCHITECTURE_SNIPPETS[0];

  const handleCopyCode = () => {
    navigator.clipboard.writeText(activeSnippet.code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="architecture" className="py-20 sm:py-28 border-b border-zinc-800/80">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="text-xs font-mono text-zinc-500 mb-2">
              04 — {lang === 'tr' ? 'TEKNİK MİMARİ & STACK' : 'TECHNICAL ARCHITECTURE & STACK'}
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-100">
              {lang === 'tr'
                ? 'Protokol Odaklı SwiftUI & Sistem Mühendisliği'
                : 'Protocol-Oriented SwiftUI & System Engineering'}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-500 max-w-sm">
            {lang === 'tr'
              ? 'Değer tipleri (Struct), katı eşzamanlılık (async/await) ve birinci parti Apple framework’leri.'
              : 'Value types, strict Swift concurrency, and deep first-party Apple SDK integration.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-zinc-800/80 mb-14">
          {TECH_STACK_GROUPS.map((group, idx) => (
            <div
              key={idx}
              className="border-r border-b border-zinc-800/80 p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="text-[11px] font-mono text-zinc-500 mb-3">
                  0{idx + 1} / {group.title[lang].toUpperCase()}
                </div>
                <ul className="space-y-2.5 mt-4">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center justify-between text-xs sm:text-sm text-zinc-300 border-b border-zinc-900 pb-2"
                    >
                      <span>{item}</span>
                      <span className="font-mono text-[10px] text-zinc-600">iOS</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 border border-zinc-800/90 bg-[#0C0C0E]">
          <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-zinc-800/80 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="text-[11px] font-mono text-zinc-500 uppercase mb-3">
                {lang === 'tr' ? 'KOD STANDARTLARI' : 'ENGINEERING STANDARDS'}
              </div>
              <h3 className="text-lg font-semibold text-zinc-100 mb-3">
                {lang === 'tr'
                  ? 'Temiz, Modüler ve Ölçeklenebilir Mimari'
                  : 'Clean, Modular & Scalable Codebase'}
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                {lang === 'tr'
                  ? 'Uygulamaları sürdürülebilir ve test edilebilir kılmak için her modül OOP, SOLID prensipleri, protokol tabanlı bağımlılık enjeksiyonu (DI) ve @MainActor durum izolasyonuyla inşa edilir.'
                  : 'Every application module is built with SOLID principles, protocol-driven dependency injection, and strict @MainActor state isolation.'}
              </p>

              <div className="space-y-3 border-t border-zinc-800/80 pt-5 text-xs text-zinc-400">
                <div>
                  <span className="font-mono text-zinc-200">01.</span> Protocol-Oriented MVVM
                </div>
                <div>
                  <span className="font-mono text-zinc-200">02.</span> FamilyControls & ScreenTime
                </div>
                <div>
                  <span className="font-mono text-zinc-200">03.</span> StoreKit 2 & RevenueCat
                </div>
                <div>
                  <span className="font-mono text-zinc-200">04.</span> Core ML & Firebase
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs">
              <span className="font-mono text-zinc-500">GitHub</span>
              <a
                href={DEVELOPER_PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-zinc-300 hover:text-white transition-colors"
              >
                <span>@Bugraciftci</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-8 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-800/80 bg-[#09090B] px-4 py-3">
                <div className="flex flex-wrap items-center gap-1">
                  {SWIFT_ARCHITECTURE_SNIPPETS.map((tab) => {
                    const active = activeTabId === tab.id;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTabId(tab.id)}
                        className={`px-3 py-1.5 text-xs font-mono transition-colors cursor-pointer ${
                          active
                            ? 'bg-zinc-100 text-zinc-950 font-medium'
                            : 'text-zinc-500 hover:text-zinc-200'
                        }`}
                      >
                        {tab.fileName}
                      </button>
                    );
                  })}
                </div>

                <button
                  onClick={handleCopyCode}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-500 hover:text-zinc-200 transition-colors cursor-pointer px-2 py-1"
                >
                  {copiedCode ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-zinc-200" />
                      <span className="text-zinc-200">
                        {lang === 'tr' ? 'Kopyalandı' : 'Copied'}
                      </span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>{lang === 'tr' ? 'Kopyala' : 'Copy'}</span>
                    </>
                  )}
                </button>
              </div>

              <pre className="overflow-x-auto p-5 sm:p-6 text-xs font-mono leading-relaxed text-zinc-300">
                <code>{activeSnippet.code}</code>
              </pre>
            </div>

            <div className="border-t border-zinc-800/80 px-5 py-2.5 flex items-center justify-between text-[11px] font-mono text-zinc-500">
              <span>{activeSnippet.badge}</span>
              <span>UTF-8 · Swift 6.0</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
