"use client";
import { FaGraduationCap, FaSchool } from "react-icons/fa";
import { education } from "@/data/profile";
import SectionHeading from "@/components/ui/SectionHeading";
import Timeline from "@/components/ui/Timeline";

export default function Education() {
  const items = education.map((e, i) => ({
    title: e.degree,
    subtitle: e.school || undefined,
    period: e.period || undefined,
    text: e.note,
    icon: i === 0 ? FaGraduationCap : FaSchool,
  }));

  return (
    <section id="education" className="px-5 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Education" title="Educational" highlight="qualification" subtitle="Where I study and what I have learned so far." />
        <Timeline items={items} />
      </div>
    </section>
  );
}
