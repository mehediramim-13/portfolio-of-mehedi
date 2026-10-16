"use client";
import { FiCompass, FiLayers, FiCode, FiTrendingUp } from "react-icons/fi";
import { about } from "@/data/profile";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Counter from "@/components/ui/Counter";

const hobbyIcons = [FiCompass, FiLayers, FiCode, FiTrendingUp];

export default function About() {
  return (
    <section id="about" className="px-5 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="About Me" title="Get to know" highlight="me" subtitle="My journey, the work I enjoy and what keeps me curious." />

        <div className="grid gap-8 lg:grid-cols-5">
          <Reveal className="space-y-4 text-base leading-relaxed text-muted sm:text-lg lg:col-span-3">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>

          <div className="space-y-6 lg:col-span-2">
            <Reveal delay={0.1} className="rounded-2xl border border-line bg-card p-6">
              <h3 className="mb-4 font-display text-lg font-semibold">Quick Facts</h3>
              <dl className="space-y-3">
                {about.facts.map((f) => (
                  <div key={f.label} className="flex flex-wrap justify-between gap-x-4 border-b border-line pb-3 last:border-0 last:pb-0">
                    <dt className="text-sm text-muted">{f.label}</dt>
                    <dd className="text-right text-sm font-medium">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={0.2} className="rounded-2xl border border-line bg-card p-6">
              <h3 className="mb-4 font-display text-lg font-semibold">Hobbies and Interests</h3>
              <div className="flex flex-wrap gap-2">
                {about.hobbies.map((h, i) => {
                  const Icon = hobbyIcons[i % hobbyIcons.length];
                  return (
                    <span key={h} className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-4 py-2 text-sm font-medium text-brand"><Icon /> {h}</span>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {about.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="card-hover rounded-2xl border border-line bg-card p-5 text-center sm:p-6">
                <p className="grad-text font-display text-3xl font-extrabold sm:text-4xl"><Counter to={s.value} suffix={s.suffix} /></p>
                <p className="mt-1 text-xs text-muted sm:text-sm">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
