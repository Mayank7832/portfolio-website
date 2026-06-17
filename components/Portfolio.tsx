'use client';

import { ExternalLink, X } from 'lucide-react';
import { useState } from 'react';
import { AboutSkills, EducationContact, Header, Hero, portfolio } from './PortfolioShell';

type ModalItem = {
  title: string;
  eyebrow: string;
  summary: string;
  details: string[];
  stack: string[];
};

export default function Portfolio() {
  const [modal, setModal] = useState<ModalItem | null>(null);
  const cards: ModalItem[] = [
    ...portfolio.experience.map((job) => ({
      title: job.role,
      eyebrow: `${job.company} / ${job.period}`,
      summary: job.summary,
      details: job.highlights,
      stack: job.stack
    })),
    ...portfolio.projects.map((project) => ({
      title: project.name,
      eyebrow: project.type,
      summary: project.summary,
      details: [project.summary],
      stack: project.stack
    }))
  ];

  return (
    <main className="relative overflow-hidden">
      <div className="particle-field pointer-events-none fixed inset-0 opacity-20" />
      <Header />
      <Hero />
      <AboutSkills />
      <section className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-sm text-mint">workbench</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Experience and projects as inspectable modules</h2>
          </div>
          <p className="max-w-sm font-mono text-sm leading-6 text-slate-400">Click any module for a focused modal view.</p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((card) => (
            <button
              key={`${card.eyebrow}-${card.title}`}
              className="group min-h-56 rounded-md border border-line bg-panel/82 p-5 text-left shadow-terminal transition hover:-translate-y-1 hover:border-cyan/60"
              onClick={() => setModal(card)}
            >
              <span className="font-mono text-xs text-amber">{card.eyebrow}</span>
              <span className="mt-3 block text-xl font-semibold text-white">{card.title}</span>
              <span className="mt-4 line-clamp-4 block leading-7 text-slate-300">{card.summary}</span>
              <span className="mt-5 inline-flex items-center gap-2 font-mono text-sm text-mint">
                Inspect <ExternalLink size={14} />
              </span>
            </button>
          ))}
        </div>
      </section>
      <EducationContact />
      {modal && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-ink/80 p-4 backdrop-blur">
          <article className="max-h-[86vh] w-full max-w-3xl overflow-auto rounded-md border border-line bg-panel p-6 shadow-terminal">
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="font-mono text-sm text-amber">{modal.eyebrow}</p>
                <h2 className="mt-2 text-3xl font-semibold text-white">{modal.title}</h2>
              </div>
              <button className="grid h-10 w-10 shrink-0 place-items-center rounded border border-line text-slate-200 hover:border-rose hover:text-rose" onClick={() => setModal(null)} aria-label="Close modal" title="Close">
                <X size={18} />
              </button>
            </div>
            <p className="mt-5 leading-8 text-slate-300">{modal.summary}</p>
            <ul className="mt-5 grid gap-3 text-sm leading-6 text-slate-300">
              {modal.details.map((detail) => (
                <li key={detail} className="border-l border-mint/50 pl-3">{detail}</li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              {modal.stack.map((item) => (
                <span key={item} className="rounded border border-line bg-ink px-3 py-1.5 font-mono text-xs text-slate-200">{item}</span>
              ))}
            </div>
          </article>
        </div>
      )}
    </main>
  );
}
