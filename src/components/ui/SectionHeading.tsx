import Reveal from "./Reveal";

type Props = { eyebrow: string; title: string; highlight: string; subtitle?: string };

export default function SectionHeading({ eyebrow, title, highlight, subtitle }: Props) {
  return (
    <Reveal className="mx-auto mb-12 max-w-2xl text-center">
      <span className="inline-block rounded-full border border-brand/30 bg-brand/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-brand">{eyebrow}</span>
      <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl md:text-5xl">
        {title} <span className="grad-text grad-text-anim">{highlight}</span>
      </h2>
      {subtitle && <p className="mt-4 text-muted">{subtitle}</p>}
    </Reveal>
  );
}
