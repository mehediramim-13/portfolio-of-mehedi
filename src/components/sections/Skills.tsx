"use client";
import { motion } from "framer-motion";
import { skillGroups } from "@/data/skills";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const all = skillGroups.flatMap((g) => g.skills);

export default function Skills() {
  return (
    <section id="skills" className="px-5 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Skills" title="My tech" highlight="stack" subtitle="Languages, frameworks and tools I use to build and ship projects." />

        <Reveal className="marquee marquee-mask mb-14 overflow-hidden">
          <div className="marquee-track flex w-max animate-marquee gap-4">
            {[...all, ...all].map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} className="flex items-center gap-3 rounded-2xl border border-line bg-card px-5 py-3">
                  <Icon className="text-2xl" style={{ color: s.color }} />
                  <span className="whitespace-nowrap text-sm font-semibold">{s.name}</span>
                </div>
              );
            })}
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.title} delay={gi * 0.08}>
              <div className="card-hover h-full rounded-2xl border border-line bg-card p-6">
                <h3 className="mb-5 font-display text-lg font-semibold"><span className="grad-text">{group.title}</span></h3>
                <ul className="space-y-4">
                  {group.skills.map((s) => {
                    const Icon = s.icon;
                    return (
                      <li key={s.name}>
                        <div className="mb-1.5 flex items-center justify-between text-sm">
                          <span className="flex items-center gap-2.5 font-medium"><Icon className="text-xl" style={{ color: s.color }} />{s.name}</span>
                          <span className="text-muted">{s.level}%</span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-line">
                          <motion.div
                            className="grad-bg h-full rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${s.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.1, ease: "easeOut" }}
                          />
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
