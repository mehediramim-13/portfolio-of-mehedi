"use client";
import type { IconType } from "react-icons";
import Reveal from "./Reveal";

export type TimelineItem = {
  title: string;
  subtitle?: string;
  period?: string;
  text?: string;
  points?: string[];
  icon: IconType;
};

export default function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="relative mx-auto max-w-3xl pl-8 sm:pl-12">
      <div className="absolute bottom-2 left-[15px] top-2 w-0.5 bg-gradient-to-b from-brand via-brand2 to-transparent sm:left-[23px]" />
      {items.map((item, i) => {
        const Icon = item.icon;
        return (
          <Reveal key={item.title} delay={i * 0.1} className="relative mb-8 last:mb-0">
            <span className="absolute -left-8 top-5 flex h-8 w-8 items-center justify-center rounded-full border-2 border-brand bg-base text-sm text-brand sm:-left-12 sm:h-12 sm:w-12 sm:text-lg">
              <Icon />
            </span>
            <div className="card-hover rounded-2xl border border-line bg-card p-5 sm:p-6">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <h3 className="font-display text-lg font-semibold sm:text-xl">{item.title}</h3>
                {item.period && <span className="rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">{item.period}</span>}
              </div>
              {item.subtitle && <p className="mt-1 font-medium text-brand2">{item.subtitle}</p>}
              {item.text && <p className="mt-3 text-muted">{item.text}</p>}
              {item.points && (
                <ul className="mt-3 space-y-2 text-muted">
                  {item.points.map((p) => (
                    <li key={p} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />{p}</li>
                  ))}
                </ul>
              )}
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
