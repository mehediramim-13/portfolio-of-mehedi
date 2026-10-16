import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FaArrowLeft, FaGithub } from "react-icons/fa";
import { FiArrowRight, FiCheckCircle, FiExternalLink, FiLayers, FiTool, FiTrendingUp } from "react-icons/fi";
import type { IconType } from "react-icons";
import { projects } from "@/data/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  return { title: p ? `${p.title} | Project Details` : "Project" };
}

function Card({ title, icon: Icon, children }: { title: string; icon: IconType; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-line bg-card p-6 sm:p-7">
      <h2 className="mb-4 flex items-center gap-3 font-display text-xl font-semibold">
        <span className="grad-bg flex h-9 w-9 items-center justify-center rounded-lg text-base text-white"><Icon /></span>
        {title}
      </h2>
      {children}
    </div>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3 text-muted">
      {items.map((x) => (
        <li key={x} className="flex gap-3"><FiCheckCircle className="mt-1 shrink-0 text-brand" />{x}</li>
      ))}
    </ul>
  );
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const index = projects.findIndex((x) => x.slug === slug);
  if (index === -1) notFound();
  const p = projects[index];
  const next = projects[(index + 1) % projects.length];

  return (
    <article className="mx-auto max-w-4xl px-5 pb-24 pt-28 sm:px-6">
      <Link href="/#projects" className="mb-6 inline-flex items-center gap-2 text-muted transition-colors hover:text-brand"><FaArrowLeft /> Back to projects</Link>
      <h1 className="font-display text-4xl font-extrabold sm:text-5xl"><span className="grad-text grad-text-anim">{p.title}</span></h1>
      <p className="mt-3 max-w-2xl text-lg text-muted">{p.summary}</p>

      <div className="mt-8 overflow-hidden rounded-2xl border border-line bg-card p-1.5 shadow-2xl shadow-brand/10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={p.image} alt={p.title} className="w-full rounded-xl object-cover" />
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        {p.live && <a href={p.live} target="_blank" rel="noreferrer" className="grad-bg inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-white shadow-lg shadow-brand/30 transition-transform hover:-translate-y-1"><FiExternalLink /> Live Project</a>}
        <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-6 py-3 font-semibold transition-all hover:-translate-y-1 hover:border-brand hover:text-brand"><FaGithub /> GitHub Repository</a>
      </div>

      <div className="mt-10 space-y-6">
        <Card title="Overview" icon={FiLayers}><p className="text-muted">{p.description}</p></Card>
        <Card title="Main Technology Stack" icon={FiTool}>
          <div className="flex flex-wrap gap-2">{p.stack.map((s) => <span key={s} className="rounded-full bg-brand/10 px-4 py-1.5 text-sm font-medium text-brand">{s}</span>)}</div>
        </Card>
        <Card title="Challenges Faced" icon={FiTool}><List items={p.challenges} /></Card>
        <Card title="Future Plans and Improvements" icon={FiTrendingUp}><List items={p.improvements} /></Card>
      </div>

      <Link href={`/projects/${next.slug}`} className="card-hover mt-10 flex items-center justify-between rounded-2xl border border-line bg-card p-6">
        <span><span className="block text-sm text-muted">Next project</span><span className="font-display text-xl font-semibold">{next.title}</span></span>
        <FiArrowRight className="text-2xl text-brand" />
      </Link>
    </article>
  );
}