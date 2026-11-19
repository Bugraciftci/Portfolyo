'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, LayoutGrid, List, Search, X } from 'lucide-react';
import { AppCategory, PORTFOLIO_APPS, PortfolioApp } from '@/data/portfolioData';

interface AppShowcaseSectionProps {
  lang: 'tr' | 'en';
  selectedApp: PortfolioApp | null;
  onSelectApp: (app: PortfolioApp | null) => void;
}

export function AppShowcaseSection({
  lang,
  selectedApp,
  onSelectApp,
}: AppShowcaseSectionProps) {
  const [activeCategory, setActiveCategory] = useState<AppCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');

  const flagshipApps = useMemo(() => PORTFOLIO_APPS.filter((a) => a.featured), []);

  const categories: { id: AppCategory; label: { tr: string; en: string } }[] = [
    { id: 'all', label: { tr: 'Tümü', en: 'All' } },
    { id: 'ai', label: { tr: 'Yapay Zeka & Görüntü', en: 'AI & Vision' } },
    { id: 'health', label: { tr: 'Sağlık & Yaşam', en: 'Health' } },
    { id: 'productivity', label: { tr: 'Üretkenlik & Widget', en: 'Productivity' } },
    { id: 'lifestyle', label: { tr: 'Oyun & Yardımcı Araçlar', en: 'Gaming & Utilities' } },
  ];

  const filteredApps = useMemo(() => {
    return PORTFOLIO_APPS.filter((app) => {
      const matchesCategory = activeCategory === 'all' || app.category === activeCategory;
      const q = searchQuery.trim().toLowerCase();
      if (!q) return matchesCategory;
      return (
        matchesCategory &&
        (app.name.toLowerCase().includes(q) ||
          app.shortName.toLowerCase().includes(q) ||
          app.primaryGenre.toLowerCase().includes(q) ||
          app.tagline[lang].toLowerCase().includes(q) ||
          app.techStack.some((t) => t.toLowerCase().includes(q)))
      );
    });
  }, [activeCategory, searchQuery, lang]);

  return (
    <section id="apps" className="py-20 sm:py-28 border-b border-zinc-800/80">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Part 1: Featured Live Apps (Minimalist Hairline Swiss Grid) */}
        <div className="mb-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <div className="text-xs font-mono text-zinc-500 mb-2">
                02 — {lang === 'tr' ? 'ÖNE ÇIKAN UYGULAMALAR' : 'FEATURED LIVE APPLICATIONS'}
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-100">
                {lang === 'tr' ? 'Öne Çıkan Canlı Uygulamalar' : 'Featured Live Applications'}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-zinc-500 max-w-sm">
              {lang === 'tr'
                ? 'Gerçek App Store ekran görüntülerini ve teknik mimariyi görmek için ürüne tıklayın.'
                : 'Click any product to inspect its live App Store screenshots and technical specs.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-zinc-800/80">
            {flagshipApps.map((app, idx) => (
              <div
                key={app.id}
                onClick={() => onSelectApp(app)}
                className="group border-r border-b border-zinc-800/80 p-6 sm:p-8 transition-colors hover:bg-zinc-900/35 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="flex items-center gap-4">
                      <img
                        src={app.iconUrl}
                        alt={app.name}
                        className="h-14 w-14 ios-icon object-cover shrink-0"
                      />
                      <div>
                        <span className="text-[11px] font-mono text-zinc-500">
                          0{idx + 1} · {app.primaryGenre.toUpperCase()}
                        </span>
                        <h3 className="text-base sm:text-lg font-semibold text-zinc-100 group-hover:text-white mt-0.5">
                          {app.name}
                        </h3>
                      </div>
                    </div>

                    <a
                      href={app.appStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-zinc-500 hover:text-zinc-100 transition-colors p-1"
                      title="App Store"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-5">
                    {app.tagline[lang]}
                  </p>

                  {/* Mini Real Screenshot Strip if available */}
                  {app.screenshots && app.screenshots.length > 0 && (
                    <div className="grid grid-cols-4 gap-2 mb-5 bg-[#09090B] p-2.5 border border-zinc-800/70">
                      {app.screenshots.slice(0, 4).map((shot, sIdx) => (
                        <img
                          key={sIdx}
                          src={shot}
                          alt={`${app.shortName} screen ${sIdx + 1}`}
                          loading="lazy"
                          className="w-full h-28 object-cover rounded border border-zinc-800/60"
                        />
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 pt-4 border-t border-zinc-800/50 text-[11px] font-mono text-zinc-500">
                  <div className="flex flex-wrap gap-x-3 gap-y-1">
                    {app.techStack.slice(0, 3).map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                  <span className="text-zinc-400 group-hover:text-zinc-100 transition-colors">
                    {lang === 'tr' ? 'Detay →' : 'Specs →'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Part 2: Complete Live Application Archive */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <div className="text-xs font-mono text-zinc-500 mb-2">
                03 — {lang === 'tr' ? 'YAYINLANAN UYGULAMA İNDEKSİ' : 'PUBLISHED APP STORE INDEX'}
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-100">
                {lang === 'tr'
                  ? `Yayındaki Tüm Uygulamalar (${PORTFOLIO_APPS.length})`
                  : `All Published Applications (${PORTFOLIO_APPS.length})`}
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative flex-1 sm:w-64">
                <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-zinc-500" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={
                    lang === 'tr' ? 'İsim veya SDK ara...' : 'Filter by name or SDK...'
                  }
                  className="w-full border border-zinc-800 bg-[#0D0D0F] pl-9 pr-7 py-2 text-xs text-zinc-100 placeholder-zinc-600 focus:border-zinc-500 focus:outline-none"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-200 cursor-pointer"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                )}
              </div>

              <div className="flex items-center border border-zinc-800 bg-[#0D0D0F]">
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 transition-colors cursor-pointer ${
                    viewMode === 'list' ? 'bg-zinc-800 text-zinc-100' : 'text-zinc-500 hover:text-zinc-300'
                  }`}
                  title={lang === 'tr' ? 'Minimalist Liste Görünümü' : 'Minimalist List View'}
                >
                  <List className="h-3.5 w-3.5" />
                </button>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 transition-colors cursor-pointer ${
                    viewMode === 'grid' ? 'bg-zinc-800 text-zinc-100' : 'text-zinc-500 hover:text-zinc-300'
                  }`}
                  title={lang === 'tr' ? 'Kompakt İkon Görünümü' : 'Compact Icon Grid'}
                >
                  <LayoutGrid className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 border-b border-zinc-800/80 mb-2">
            {categories.map((cat) => {
              const count =
                cat.id === 'all'
                  ? PORTFOLIO_APPS.length
                  : PORTFOLIO_APPS.filter((a) => a.category === cat.id).length;
              const active = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative pb-3 text-xs font-medium transition-colors cursor-pointer ${
                    active ? 'text-zinc-100' : 'text-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  <span>{cat.label[lang]}</span>
                  <span className="ml-1.5 font-mono text-[10px] text-zinc-600">{count}</span>
                  {active && (
                    <span className="absolute inset-x-0 bottom-0 h-px bg-zinc-100" />
                  )}
                </button>
              );
            })}
          </div>

          {viewMode === 'list' ? (
            <div className="divide-y divide-zinc-800/70 border-b border-zinc-800/70">
              {filteredApps.map((app, idx) => (
                <div
                  key={app.id}
                  onClick={() => onSelectApp(app)}
                  className="group flex flex-col sm:flex-row sm:items-center justify-between gap-3 py-4 px-2 transition-colors hover:bg-zinc-900/40 cursor-pointer"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <span className="w-6 text-[11px] font-mono text-zinc-600 shrink-0">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <img
                      src={app.iconUrl}
                      alt={app.name}
                      loading="lazy"
                      className="h-10 w-10 ios-icon object-cover shrink-0"
                    />
                    <div className="min-w-0">
                      <div className="flex items-center gap-2.5">
                        <h3 className="text-sm font-medium text-zinc-100 group-hover:text-white truncate">
                          {app.name}
                        </h3>
                        <span className="hidden md:inline-block text-[11px] font-mono text-zinc-600">
                          · {app.primaryGenre}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-500 truncate max-w-lg mt-0.5">
                        {app.tagline[lang]}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-5 pl-10 sm:pl-0 shrink-0">
                    <div className="hidden lg:flex items-center gap-2 text-[11px] font-mono text-zinc-500">
                      {app.techStack.slice(0, 2).map((t) => (
                        <span key={t} className="border border-zinc-800/80 px-2 py-0.5">
                          {t}
                        </span>
                      ))}
                    </div>

                    <span className="text-[11px] font-mono text-zinc-500 w-20 text-right hidden sm:inline-block">
                      {app.devices.join(' / ')}
                    </span>

                    <a
                      href={app.appStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 text-xs font-medium text-zinc-400 hover:text-zinc-100 transition-colors"
                    >
                      <span>App Store</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 pt-6">
              {filteredApps.map((app) => (
                <div
                  key={app.id}
                  onClick={() => onSelectApp(app)}
                  className="group border border-zinc-800/80 bg-[#0D0D0F] p-4 hover:border-zinc-600 transition-colors cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <img
                        src={app.iconUrl}
                        alt={app.name}
                        loading="lazy"
                        className="h-12 w-12 ios-icon object-cover"
                      />
                      <ArrowUpRight className="h-3.5 w-3.5 text-zinc-600 group-hover:text-zinc-200 transition-colors" />
                    </div>
                    <div className="text-[10px] font-mono text-zinc-500 uppercase">
                      {app.primaryGenre}
                    </div>
                    <h3 className="text-xs sm:text-sm font-medium text-zinc-100 mt-0.5 line-clamp-1">
                      {app.shortName}
                    </h3>
                  </div>
                  <div className="mt-3 pt-2.5 border-t border-zinc-800/60 text-[10px] font-mono text-zinc-500 truncate">
                    {app.techStack[0]} · {app.techStack[1]}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Modal with Real App Store Screenshots */}
      <AnimatePresence>
        {selectedApp && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => onSelectApp(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm overflow-y-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl border border-zinc-800 bg-[#0C0C0E] p-6 sm:p-8 shadow-2xl my-8"
            >
              <button
                onClick={() => onSelectApp(null)}
                className="absolute right-5 top-5 text-zinc-500 hover:text-zinc-100 transition-colors cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="flex items-center gap-4 mb-6">
                <img
                  src={selectedApp.iconUrl}
                  alt={selectedApp.name}
                  className="h-16 w-16 ios-icon object-cover shrink-0"
                />
                <div>
                  <div className="text-xs font-mono text-zinc-500">
                    {selectedApp.primaryGenre} · ID {selectedApp.id}
                  </div>
                  <h3 className="text-xl font-semibold text-zinc-100 mt-0.5">
                    {selectedApp.name}
                  </h3>
                  <div className="text-xs font-mono text-zinc-500">{selectedApp.bundleId}</div>
                </div>
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                {selectedApp.description[lang]}
              </p>

              {/* Real App Store Screenshots Gallery inside Modal */}
              {selectedApp.screenshots && selectedApp.screenshots.length > 0 && (
                <div className="mb-6">
                  <div className="text-[11px] font-mono text-zinc-500 uppercase mb-2.5">
                    {lang === 'tr' ? 'APP STORE EKRAN GÖRÜNTÜLERİ' : 'LIVE APP STORE SCREENSHOTS'}
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 bg-[#09090B] p-3 border border-zinc-800/80">
                    {selectedApp.screenshots.map((shot, idx) => (
                      <img
                        key={idx}
                        src={shot}
                        alt={`${selectedApp.name} screenshot ${idx + 1}`}
                        className="w-full h-auto rounded border border-zinc-800 object-contain"
                      />
                    ))}
                  </div>
                </div>
              )}

              <div className="border-t border-b border-zinc-800/80 py-4 mb-6">
                <div className="text-[11px] font-mono text-zinc-500 uppercase mb-3">
                  {lang === 'tr' ? 'MİMARİ ÖNE ÇIKANLAR' : 'ARCHITECTURAL HIGHLIGHTS'}
                </div>
                <ul className="space-y-2">
                  {selectedApp.highlights[lang].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-zinc-300">
                      <span className="font-mono text-zinc-500">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <div className="text-[11px] font-mono text-zinc-500 uppercase mb-2.5">
                  {lang === 'tr' ? 'TEKNOLOJİ YIĞINI' : 'FRAMEWORKS & STACK'}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {selectedApp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="border border-zinc-800 bg-zinc-900 px-2.5 py-1 text-xs font-mono text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-xs font-mono text-zinc-500">
                  {selectedApp.devices.join(' & ')} · iOS 17+
                </span>
                <a
                  href={selectedApp.appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-zinc-100 px-5 py-2.5 text-xs font-medium text-zinc-950 hover:bg-white transition-colors"
                >
                  <span>{lang === 'tr' ? "App Store'da Aç" : 'Open on App Store'}</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
