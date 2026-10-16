"use client";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FiArrowRight, FiExternalLink } from "react-icons/fi";
import { projects } from "@/data/projects";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function Projects() {
  return (
    <section id="projects" className="px-5 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Projects" title="Featured" highlight="projects" subtitle="A few things I have built. Open any card to see the full story." />

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.1}>
              <article className="card-hover group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-card">
                <Link
                  href={`/projects/${p.slug}`}
                  className="relative block aspect-video w-full overflow-hidden bg-base"
                  aria-label={p.title}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.image}
                    alt={p.title}
                    className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </Link>
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex flex-wrap gap-2">
                    {p.stack.slice(0, 3).map((s) => (
                      <span key={s} className="rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">{s}</span>
                    ))}
                  </div>
                  <h3 className="font-display text-xl font-bold">{p.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted">{p.summary}</p>
                  <div className="mt-5 flex items-center justify-between gap-3">
                    <Link href={`/projects/${p.slug}`} className="grad-bg inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-all group-hover:gap-3">
                      View More <FiArrowRight />
                    </Link>
                    <div className="flex gap-2 text-lg text-muted">
                      <a href={p.github} target="_blank" rel="noreferrer" aria-label="GitHub repository" className="flex h-10 w-10 items-center justify-center rounded-full border border-line transition-colors hover:border-brand hover:text-brand"><FaGithub /></a>
                      {p.live && <a href={p.live} target="_blank" rel="noreferrer" aria-label="Live project" className="flex h-10 w-10 items-center justify-center rounded-full border border-line transition-colors hover:border-brand hover:text-brand"><FiExternalLink /></a>}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}