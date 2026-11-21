'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight, Download, Github } from 'lucide-react';
import { DEVELOPER_PROFILE, PORTFOLIO_APPS, PortfolioApp } from '@/data/portfolioData';

interface HeroSectionProps {
  lang: 'tr' | 'en';
  onSelectAppModal: (app: PortfolioApp) => void;
}

export function HeroSection({ lang, onSelectAppModal }: HeroSectionProps) {
  const dockApps = PORTFOLIO_APPS.filter((a) => a.heroDock);
  const [activeApp, setActiveApp] = useState<PortfolioApp>(dockApps[0]);

  return (
    <section className="pt-16 pb-20 sm:pt-24 sm:pb-28 border-b border-zinc-800/80">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Top Monospace Index Line */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-800/80 pb-5 mb-12 text-xs font-mono text-zinc-500"
        >
          <div>01 — {DEVELOPER_PROFILE.name.toUpperCase()}</div>
          <div>
            {lang === 'tr'
              ? 'İSTANBUL · IOS SOFTWARE ENGINEER · SWIFT & SWIFTUI'
              : 'ISTANBUL · IOS SOFTWARE ENGINEER · SWIFT & SWIFTUI'}
          </div>
        </motion.div>

        {/* Main Editorial Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
          {/* Left Typographic Statement (7 Cols) */}
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="text-4xl sm:text-5xl lg:text-[52px] font-semibold tracking-tight leading-[1.08] text-zinc-100 mb-8"
            >
              {lang === 'tr' ? (
                <>
                  Yüksek performanslı ve sade{' '}
                  <span className="text-zinc-500">native iOS uygulamaları</span> geliştiriyorum.
                </>
              ) : (
                <>
                  Engineering high-performance{' '}
                  <span className="text-zinc-500">native iOS applications</span> with Swift & SwiftUI.
                </>
              )}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-xl mb-10 font-normal"
            >
              {lang === 'tr' ? (
                <>
                  Bahçeşehir Üniversitesi Bilgisayar Mühendisliği mezunu iOS Yazılım Mühendisiyim.{' '}
                  <span className="text-zinc-200 font-medium">Swift 6, SwiftUI, UIKit, Apple CarPlay (CPTemplate), ScreenTime API</span>{' '}
                  ve temiz MVVM mimarisiyle App Store’da yayında olan{' '}
                  <span className="text-zinc-200 font-medium">30’dan fazla native iOS uygulaması</span>{' '}
                  (&gt;%99.5 crash-free oturum oranı) geliştirdim.
                </>
              ) : (
                <>
                  Computer Engineering graduate (Bahçeşehir University) and iOS Software Engineer with commercial production experience and{' '}
                  <span className="text-zinc-200 font-medium">30+ live native apps on the App Store</span>{' '}
                  (&gt;99.5% crash-free). Specialized in{' '}
                  <span className="text-zinc-200 font-medium">Swift 6, SwiftUI, UIKit, CarPlay (CPTemplate), ScreenTime API</span>, and MVVM.
                </>
              )}
            </motion.p>

            {/* Minimalist Monochrome CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.15 }}
              className="flex flex-wrap items-center gap-3.5"
            >
              <a
                href="#apps"
                className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-6 py-3 text-xs sm:text-sm font-medium text-zinc-950 transition-all hover:bg-white"
              >
                <span>
                  {lang === 'tr' ? 'Yayınlanan Uygulamalar' : 'Published Apps'}
                </span>
                <ArrowDownRight className="h-4 w-4" />
              </a>

              <a
                href={DEVELOPER_PROFILE.cvUrl}
                download="Bugra_Ciftci_iOS_CV.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/80 px-5 py-3 text-xs sm:text-sm font-medium text-zinc-100 transition-colors hover:border-zinc-500 hover:bg-zinc-800"
              >
                <Download className="h-4 w-4" />
                <span>{lang === 'tr' ? 'CV İndir (PDF)' : 'Download CV (PDF)'}</span>
              </a>

              <a
                href={DEVELOPER_PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-800 px-5 py-3 text-xs sm:text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-600 hover:text-white"
              >
                <Github className="h-4 w-4" />
                <span>GitHub</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-zinc-500" />
              </a>

              <a
                href={DEVELOPER_PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-3 text-xs sm:text-sm font-medium text-zinc-400 transition-colors hover:text-zinc-100"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-zinc-500" />
              </a>
            </motion.div>
          </div>

          {/* Right Minimalist Titanium Interactive Showcase (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="lg:col-span-5"
          >
            <div className="border border-zinc-800/90 bg-[#0D0D0F] p-6">
              <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3.5 mb-5 text-[11px] font-mono text-zinc-500">
                <span>
                  {lang === 'tr' ? 'CANLI APP STORE UYGULAMASI' : 'LIVE APP STORE PRODUCT'}
                </span>
                <span>ID · {activeApp.id}</span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeApp.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="min-h-[230px] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={activeApp.iconUrl}
                        alt={activeApp.name}
                        className="h-14 w-14 ios-icon object-cover shrink-0"
                      />
                      <div>
                        <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
                          {activeApp.primaryGenre} · {activeApp.devices.join(' / ')}
                        </div>
                        <h2 className="text-lg font-semibold text-zinc-100 leading-snug mt-0.5">
                          {activeApp.name}
                        </h2>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-5">
                      {activeApp.description[lang]}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {activeApp.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="border border-zinc-800 bg-zinc-900/60 px-2.5 py-1 text-[10px] font-mono text-zinc-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between border-t border-zinc-800/80 pt-3.5 text-xs">
                      <button
                        onClick={() => onSelectAppModal(activeApp)}
                        className="font-medium text-zinc-400 hover:text-zinc-100 transition-colors cursor-pointer"
                      >
                        {lang === 'tr' ? 'Ekran Görüntüleri & Detay →' : 'Screenshots & Specs →'}
                      </button>

                      <a
                        href={activeApp.appStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-medium text-zinc-100 hover:underline"
                      >
                        <span>App Store</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Minimalist App Icon Selector Bar */}
            <div className="mt-3 flex items-center justify-between border border-zinc-800/80 bg-[#0D0D0F] px-3.5 py-2.5">
              <span className="text-[11px] font-mono text-zinc-500">
                {lang === 'tr' ? 'Canlı Ürünler:' : 'Live Apps:'}
              </span>
              <div className="flex items-center gap-2">
                {dockApps.map((app) => {
                  const selected = app.id === activeApp.id;
                  return (
                    <button
                      key={app.id}
                      onClick={() => setActiveApp(app)}
                      title={app.name}
                      className={`relative transition-all cursor-pointer ${
                        selected
                          ? 'opacity-100 scale-105 ring-1 ring-zinc-200 rounded-[22.5%]'
                          : 'opacity-45 hover:opacity-85'
                      }`}
                    >
                      <img
                        src={app.iconUrl}
                        alt={app.shortName}
                        className="h-8 w-8 ios-icon object-cover"
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Clean Hairline Metrics Bar */}
        <div className="mt-16 pt-10 border-t border-zinc-800/80 grid grid-cols-2 sm:grid-cols-4 gap-8">
          {[
            {
              value: DEVELOPER_PROFILE.stats.publishedApps,
              label: lang === 'tr' ? 'App Store’da Yayında' : 'Live on App Store',
              detail: 'Native iOS & iPadOS',
            },
            {
              value: DEVELOPER_PROFILE.stats.crashFree,
              label: lang === 'tr' ? 'Crash-Free Oturum' : 'Crash-Free Sessions',
              detail: 'Firebase Crashlytics',
            },
            {
              value: DEVELOPER_PROFILE.stats.nativeSwift,
              label: lang === 'tr' ? 'SwiftUI & UIKit' : 'SwiftUI & UIKit',
              detail: 'MVVM · Clean Architecture',
            },
            {
              value: DEVELOPER_PROFILE.stats.fpsPerformance,
              label: lang === 'tr' ? 'Akıcı Arayüz Performansı' : 'Rendering Performance',
              detail: 'ProMotion · Apple HIG',
            },
          ].map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-100">
                {stat.value}
              </span>
              <span className="text-xs font-medium text-zinc-300 mt-1.5">{stat.label}</span>
              <span className="text-[11px] font-mono text-zinc-500 mt-0.5">{stat.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
