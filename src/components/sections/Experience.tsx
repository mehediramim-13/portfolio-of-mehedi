"use client";
import { FaLaptopCode } from "react-icons/fa";
import { experience } from "@/data/profile";
import SectionHeading from "@/components/ui/SectionHeading";
import Timeline from "@/components/ui/Timeline";

export default function Experience() {
  if (experience.length === 0) return null;

  const items = experience.map((e) => ({
    title: e.role,
    subtitle: e.place,
    period: e.period,
    points: e.points,
    icon: FaLaptopCode,
  }));

  return (
    <section id="experience" className="px-5 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Experience" title="My work" highlight="experience" subtitle="Hands-on work that shaped the way I build." />
        <Timeline items={items} />
      </div>
    </section>
  );
}
