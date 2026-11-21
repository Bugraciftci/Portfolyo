'use client';

import React, { useState } from 'react';
import { ArrowUpRight, Check, Copy } from 'lucide-react';
import { DEVELOPER_PROFILE } from '@/data/portfolioData';

interface ContactSectionProps {
  lang: 'tr' | 'en';
}

export function ContactSection({ lang }: ContactSectionProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('iOS Engineering');
  const [messageText, setMessageText] = useState('');

  const topics =
    lang === 'tr'
      ? [
          'iOS Uygulama Geliştirme',
          'İş & Ekip Fırsatları',
          'SwiftUI Mimari & Proje',
          'Diğer',
        ]
      : [
          'iOS Engineering',
          'Career & Team Opportunities',
          'SwiftUI Project Collaboration',
          'Other',
        ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(DEVELOPER_PROFILE.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleSendMailto = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `[${selectedTopic}] ${senderName ? `${senderName} — ` : ''}Portfolio Inquiry`
    );
    const body = encodeURIComponent(
      messageText ||
        (lang === 'tr'
          ? 'Merhaba Buğra, portfolyo siteni inceledim ve seninle iletişime geçmek istiyorum.'
          : 'Hi Bugra, I explored your iOS portfolio and would love to connect.')
    );
    window.location.href = `mailto:${DEVELOPER_PROFILE.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="text-xs font-mono text-zinc-500 mb-2">
          06 — {lang === 'tr' ? 'İLETİŞİM & BAĞLANTILAR' : 'CONTACT & CHANNELS'}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-4">
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-100 mb-4">
                {lang === 'tr'
                  ? 'Projeler ve iş fırsatları için iletişime geçin.'
                  : 'Get in touch for iOS roles or collaborations.'}
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-8">
                {lang === 'tr'
                  ? 'iOS yazılım mühendisliği pozisyonları, SwiftUI projeleri veya teknik sorularınız için doğrudan e-posta gönderebilir ya da LinkedIn / GitHub üzerinden ulaşabilirsiniz.'
                  : 'Reach out directly via email, LinkedIn, or GitHub for iOS Software Engineering roles, SwiftUI projects, or technical discussions.'}
              </p>

              {/* Single Clean Email Row */}
              <div className="border-t border-b border-zinc-800/80 mb-8">
                <div className="flex items-center justify-between py-4 gap-3">
                  <div className="min-w-0">
                    <div className="text-[10px] font-mono text-zinc-500">
                      {lang === 'tr' ? 'E-POSTA' : 'EMAIL'}
                    </div>
                    <div className="text-xs sm:text-sm font-mono text-zinc-200 truncate mt-0.5">
                      {DEVELOPER_PROFILE.email}
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 border border-zinc-800 px-3 py-1.5 text-xs font-mono text-zinc-400 hover:border-zinc-600 hover:text-zinc-100 transition-colors shrink-0 cursor-pointer"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-zinc-100" />
                        <span className="text-zinc-100">
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
              </div>
            </div>

            {/* Profile Links */}
            <div>
              <div className="text-[10px] font-mono text-zinc-500 uppercase mb-3">
                {lang === 'tr' ? 'BAĞLANTILAR' : 'LINKS'}
              </div>
              <div className="grid grid-cols-2 gap-y-2.5 gap-x-4 text-xs">
                {[
                  { label: 'GitHub (@Bugraciftci)', url: DEVELOPER_PROFILE.github },
                  { label: 'LinkedIn', url: DEVELOPER_PROFILE.linkedin },
                  { label: 'Apple App Store', url: DEVELOPER_PROFILE.appStoreDeveloperUrl },
                  { label: 'CV / Özgeçmiş (PDF)', url: DEVELOPER_PROFILE.cvUrl },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between border-b border-zinc-800/70 py-2 text-zinc-400 hover:text-zinc-100 hover:border-zinc-500 transition-colors"
                  >
                    <span>{s.label}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-zinc-500" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 border border-zinc-800/90 bg-[#0C0C0E] p-6 sm:p-8">
            <div className="text-xs font-mono text-zinc-500 uppercase mb-6">
              {lang === 'tr' ? 'DOĞRUDAN MESAJ OLUŞTUR' : 'DIRECT MESSAGE COMPOSER'}
            </div>

            <form onSubmit={handleSendMailto} className="space-y-5">
              <div>
                <label className="block text-[11px] font-mono text-zinc-500 uppercase mb-2">
                  {lang === 'tr' ? 'İSİM VEYA KURUM' : 'NAME OR ORGANIZATION'}
                </label>
                <input
                  type="text"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder={lang === 'tr' ? 'Adınız / Şirketiniz' : 'Your name / company'}
                  className="w-full border-b border-zinc-800 bg-transparent py-2.5 text-sm text-zinc-100 placeholder-zinc-600 focus:border-zinc-300 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono text-zinc-500 uppercase mb-2.5">
                  {lang === 'tr' ? 'KONU' : 'TOPIC'}
                </label>
                <div className="flex flex-wrap gap-2">
                  {topics.map((topic) => (
                    <button
                      type="button"
                      key={topic}
                      onClick={() => setSelectedTopic(topic)}
                      className={`px-3 py-1.5 text-xs font-mono transition-colors cursor-pointer ${
                        selectedTopic === topic
                          ? 'bg-zinc-100 text-zinc-950 font-medium'
                          : 'border border-zinc-800 text-zinc-400 hover:border-zinc-600 hover:text-zinc-200'
                      }`}
                    >
                      {topic}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono text-zinc-500 uppercase mb-2">
                  {lang === 'tr' ? 'MESAJ' : 'MESSAGE'}
                </label>
                <textarea
                  rows={4}
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  placeholder={
                    lang === 'tr'
                      ? 'Proje detaylarını veya mesajınızı buraya yazabilirsiniz...'
                      : 'Write a short brief about your project or inquiry...'
                  }
                  className="w-full border border-zinc-800 bg-[#09090B] p-3.5 text-sm text-zinc-100 placeholder-zinc-600 focus:border-zinc-400 focus:outline-none"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-[11px] font-mono text-zinc-500">
                  {DEVELOPER_PROFILE.location}
                </span>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-6 py-2.5 text-xs font-medium text-zinc-950 hover:bg-white transition-colors cursor-pointer"
                >
                  <span>{lang === 'tr' ? 'Mesajı Gönder' : 'Send Message'}</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </form>
          </div>
        </div>

        <footer className="mt-20 pt-8 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>
            © {new Date().getFullYear()} {DEVELOPER_PROFILE.name}
          </div>
          <div className="flex items-center gap-6">
            <a href="#apps" className="hover:text-zinc-200 transition-colors">
              Apps (30+)
            </a>
            <a href="#architecture" className="hover:text-zinc-200 transition-colors">
              SwiftUI
            </a>
            <a href="#cv" className="hover:text-zinc-200 transition-colors">
              CV
            </a>
            <a
              href={DEVELOPER_PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-200 transition-colors"
            >
              GitHub ↗
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
}
