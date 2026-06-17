import { Github, Linkedin, MapPin, Phone, Terminal, FileDown } from 'lucide-react';
import data from '@/data/portfolio.json';
import type { PortfolioData } from './types';
import { EmailButton } from './EmailButton';

const portfolio = data as PortfolioData;

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-ink/82 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="#top" className="flex min-w-0 items-center gap-3 font-mono">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded border border-mint/40 bg-mint/10 text-mint">
            <Terminal size={18} />
          </span>
          <span className="truncate text-sm text-slate-200">mayank.dev</span>
        </a>
        <div className="flex items-center gap-3">
          <a
            className="flex h-10 items-center gap-2 rounded border border-cyan/40 px-3 font-mono text-xs text-cyan hover:bg-cyan/10"
            href={portfolio.profile.resume}
            download
          >
            <FileDown size={15} />
            Resume
          </a>
        </div>
      </div>
    </header>
  );
}

export function Hero() {
  const { profile } = portfolio;
  return (
    <section id="top" className="relative overflow-hidden border-b border-line/70">
      <div className="absolute inset-0 terminal-grid opacity-45" />
      <div className="absolute inset-0 scanline opacity-30" />
      <div className="relative mx-auto grid min-h-[82vh] max-w-6xl content-center gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="reveal">
          <p className="mb-4 font-mono text-sm text-mint">software-engineer / portfolio</p>
          <h1 className="max-w-4xl text-5xl font-semibold tracking-normal text-white sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-cyan sm:text-2xl">{profile.title}</p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">{profile.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <EmailButton
              className="inline-flex h-11 items-center gap-2 rounded border border-mint/50 bg-mint px-4 font-mono text-sm text-ink hover:bg-mint/90"
              email={profile.email}
              label="Contact"
            />
            <a className="inline-flex h-11 items-center gap-2 rounded border border-line bg-panel/90 px-4 font-mono text-sm text-slate-100 hover:border-cyan/60" href={profile.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a className="inline-flex h-11 items-center gap-2 rounded border border-line bg-panel/90 px-4 font-mono text-sm text-slate-100 hover:border-amber/60" href={profile.resume} download>
              <FileDown size={16} />
              Resume
            </a>
          </div>
        </div>
        <aside className="reveal rounded-md border border-line bg-panel/80 p-4 font-mono shadow-terminal backdrop-blur lg:self-center">
          <div className="mb-4 flex items-center gap-2 border-b border-line pb-3 text-xs text-slate-400">
            <span className="h-3 w-3 rounded-full bg-rose" />
            <span className="h-3 w-3 rounded-full bg-amber" />
            <span className="h-3 w-3 rounded-full bg-mint" />
            <span className="ml-2">profile.json</span>
          </div>
          <pre className="whitespace-pre-wrap text-sm leading-7 text-slate-300">
{`{
  "current": "Fynd",
  "role": "SDE-1",
  "focus": ["product engineering", "rapid development", "innovation"],
  "location": "${profile.location}",
  "availability": "open to meaningful engineering conversations"
}`}
          </pre>
        </aside>
      </div>
    </section>
  );
}

export function AboutSkills() {
  return (
    <section className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
      <div>
        <p className="font-mono text-sm text-mint">about</p>
        <h2 className="mt-3 text-3xl font-semibold text-white">About Me</h2>
        <p className="mt-5 leading-8 text-slate-300">{portfolio.profile.bio}</p>
        <div className="mt-6 grid gap-3 font-mono text-sm text-slate-300">
          <span className="flex items-center gap-2"><MapPin size={15} className="text-cyan" /> {portfolio.profile.location}</span>
          <EmailButton
            className="flex items-center gap-2 text-left hover:text-mint"
            email={portfolio.profile.email}
            iconSize={15}
            label={portfolio.profile.email}
          />
          <span className="flex items-center gap-2"><Phone size={15} className="text-cyan" /> {portfolio.profile.phone}</span>
        </div>
      </div>
      <div className="grid gap-4">
        {Object.entries(portfolio.skills).map(([group, skills]) => (
          <div key={group} className="rounded-md border border-line bg-panel/72 p-5">
            <h3 className="font-mono text-sm text-amber">{group}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className="rounded border border-line bg-ink/70 px-3 py-1.5 font-mono text-xs text-slate-200">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function EducationContact() {
  const education = portfolio.education[0];
  return (
    <section className="border-t border-line bg-panel/45">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-2">
        <div>
          <p className="font-mono text-sm text-mint">education</p>
          <h2 className="mt-3 text-2xl font-semibold text-white">{education.school}</h2>
          <p className="mt-3 text-slate-300">{education.degree}</p>
          <p className="mt-2 font-mono text-sm text-cyan">{education.period} / {education.detail}</p>
        </div>
        <div>
          <p className="font-mono text-sm text-mint">contact</p>
          <h2 className="mt-3 text-2xl font-semibold text-white">Let’s build useful systems.</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            <EmailButton
              className="inline-flex h-10 items-center gap-2 rounded border border-line px-3 font-mono text-sm text-slate-200 hover:border-mint"
              email={portfolio.profile.email}
              iconSize={15}
              label="Email"
            />
            <a className="inline-flex h-10 items-center gap-2 rounded border border-line px-3 font-mono text-sm text-slate-200 hover:border-cyan" href={portfolio.profile.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={15} /> LinkedIn
            </a>
            <a className="inline-flex h-10 items-center gap-2 rounded border border-line px-3 font-mono text-sm text-slate-200 hover:border-amber" href={portfolio.profile.github} target="_blank" rel="noreferrer">
              <Github size={15} /> GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export { portfolio };
