'use client';

import React from 'react';
import { ArrowUpRight, Download, FileText } from 'lucide-react';
import { CV_DATA, DEVELOPER_PROFILE } from '@/data/portfolioData';

interface ResumeSectionProps {
  lang: 'tr' | 'en';
}

export function ResumeSection({ lang }: ResumeSectionProps) {
  return (
    <section id="cv" className="py-20 sm:py-28 border-b border-zinc-800/80">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Top Section Header with PDF Download Actions */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-8 border-b border-zinc-800/80 mb-12">
          <div>
            <div className="text-xs font-mono text-zinc-500 mb-2">
              05 — {lang === 'tr' ? 'ÖZGEÇMİŞ / CV' : 'CURRICULUM VITAE / RESUME'}
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-100">
              {DEVELOPER_PROFILE.name}
            </h2>
            <div className="text-xs sm:text-sm font-mono text-zinc-400 mt-1">
              {DEVELOPER_PROFILE.roleTitle}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={DEVELOPER_PROFILE.cvUrl}
              download="Bugra_Ciftci_iOS_CV.pdf"
              className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-5 py-2.5 text-xs font-medium text-zinc-950 transition-all hover:bg-white"
            >
              <Download className="h-3.5 w-3.5" />
              <span>{lang === 'tr' ? 'CV İndir (PDF)' : 'Download CV (PDF)'}</span>
            </a>

            <a
              href={DEVELOPER_PROFILE.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 border border-zinc-800 bg-[#0D0D0F] px-4 py-2.5 text-xs font-mono text-zinc-300 transition-colors hover:border-zinc-600 hover:text-white"
            >
              <FileText className="h-3.5 w-3.5" />
              <span>{lang === 'tr' ? 'PDF Görüntüle' : 'View PDF'}</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-zinc-500" />
            </a>
          </div>
        </div>

        {/* CV Paper Container */}
        <div className="border border-zinc-800/90 bg-[#0C0C0E] p-6 sm:p-10 space-y-12">
          {/* 1. Profile Summary */}
          <div>
            <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider border-b border-zinc-800/80 pb-2 mb-4">
              {lang === 'tr' ? 'PROFİL ÖZETİ' : 'PROFILE SUMMARY'}
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {CV_DATA.summary[lang]}
            </p>
          </div>

          {/* 2. Experience */}
          <div>
            <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider border-b border-zinc-800/80 pb-2 mb-6">
              {lang === 'tr' ? 'İŞ DENEYİMİ' : 'EXPERIENCE'}
            </div>

            <div className="space-y-8">
              {CV_DATA.experience.map((exp, idx) => (
                <div
                  key={idx}
                  className="border-b border-zinc-800/60 pb-8 last:border-b-0 last:pb-0"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-3">
                    <div>
                      <span className="text-base sm:text-lg font-semibold text-zinc-100">
                        {exp.role[lang]}
                      </span>
                      <span className="mx-2 text-zinc-600">|</span>
                      <span className="text-sm font-medium text-zinc-300">{exp.company}</span>
                    </div>
                    <div className="text-xs font-mono text-zinc-500">
                      {exp.period[lang]} · {exp.location}
                    </div>
                  </div>

                  <ul className="space-y-2 mt-3">
                    {exp.bullets[lang].map((bullet, bIdx) => (
                      <li
                        key={bIdx}
                        className="flex items-start gap-3 text-xs sm:text-sm text-zinc-400 leading-relaxed"
                      >
                        <span className="font-mono text-zinc-600 mt-0.5">—</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Technical Skills */}
          <div>
            <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider border-b border-zinc-800/80 pb-2 mb-5">
              {lang === 'tr' ? 'TEKNİK YETENEKLER' : 'TECHNICAL SKILLS'}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {CV_DATA.skillCategories.map((cat, idx) => (
                <div key={idx} className="border border-zinc-800/70 bg-[#09090B] p-4">
                  <div className="text-xs font-mono text-zinc-400 mb-3">
                    {cat.category[lang]}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="border border-zinc-800 bg-zinc-900/80 px-2.5 py-1 text-[11px] font-mono text-zinc-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Education & Languages */}
          <div>
            <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider border-b border-zinc-800/80 pb-2 mb-5">
              {lang === 'tr' ? 'EĞİTİM & DİLLER' : 'EDUCATION & LANGUAGES'}
            </div>

            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
              <div>
                <span className="text-base font-semibold text-zinc-100">
                  {CV_DATA.education.degree[lang]}
                </span>
                <span className="mx-2 text-zinc-600">·</span>
                <span className="text-sm text-zinc-300">{CV_DATA.education.school}</span>
              </div>
              <span className="text-xs font-mono text-zinc-500">
                {CV_DATA.education.period}
              </span>
            </div>

            <div className="space-y-1.5 text-xs sm:text-sm text-zinc-400 mt-3">
              <div>
                <span className="font-mono text-zinc-500">
                  {lang === 'tr' ? 'Temel Dersler: ' : 'Core Coursework: '}
                </span>
                {CV_DATA.education.coursework[lang]}
              </div>
              <div>
                <span className="font-mono text-zinc-500">
                  {lang === 'tr' ? 'Diller: ' : 'Languages: '}
                </span>
                {CV_DATA.education.languages[lang]}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
