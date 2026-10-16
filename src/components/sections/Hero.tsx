"use client";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";
import { FiArrowDown, FiDownload, FiEye, FiMapPin } from "react-icons/fi";
import { profile } from "@/data/profile";
import TypeWriter from "@/components/ui/TypeWriter";
import Socials from "@/components/ui/Socials";

const badges = [
  { Icon: FaReact, color: "#61DAFB", pos: "-left-3 top-10 sm:-left-8", delay: "0s" },
  { Icon: SiNextdotjs, color: "#888888", pos: "-right-3 top-24 sm:-right-8", delay: "-1.2s" },
  { Icon: SiTypescript, color: "#3178C6", pos: "-left-2 bottom-24 sm:-left-8", delay: "-2.4s" },
  { Icon: SiTailwindcss, color: "#38BDF8", pos: "-right-2 bottom-8 sm:-right-8", delay: "-3.6s" },
];

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center px-5 pb-16 pt-28 sm:px-6">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <motion.span initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-4 py-1.5 text-sm text-muted">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            Open to opportunities
          </motion.span>

          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-6 text-lg text-muted">Hello, I&apos;m</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="font-display text-4xl font-extrabold leading-tight sm:text-6xl xl:text-7xl">
            <span className="grad-text grad-text-anim">{profile.name}</span>
          </motion.h1>
          <motion.h2 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-3 min-h-[2.2rem] font-display text-xl font-semibold sm:text-3xl">
            <TypeWriter words={profile.roles} />
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mx-auto mt-5 max-w-xl text-base text-muted sm:text-lg lg:mx-0">
            {profile.tagline} I build modern, responsive web apps with React, Next.js and Tailwind CSS.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            <a href={profile.resume} download className="grad-bg inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-semibold text-white shadow-xl shadow-brand/30 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand/40">
              <FiDownload /> Download Resume
            </a>
            <a href={profile.resume} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-7 py-3.5 font-semibold transition-all hover:-translate-y-1 hover:border-brand hover:text-brand">
              <FiEye /> View Resume
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <Socials />
            <span className="inline-flex items-center gap-1.5 text-sm text-muted"><FiMapPin className="text-brand" /> {profile.location}</span>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }} className="order-1 lg:order-2">
          <div className="relative mx-auto w-[min(72vw,340px)] sm:w-[360px]">
            <div className="grad-bg absolute -inset-2 animate-pulse rounded-[2.4rem] opacity-50 blur-2xl" />
            <div className="grad-bg relative rounded-[2.2rem] p-[3px]">
              <div className="overflow-hidden rounded-[2.05rem] bg-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={profile.photo} alt={profile.name} className="aspect-[4/5] w-full object-cover object-top" />
              </div>
            </div>
            {badges.map(({ Icon, color, pos, delay }, i) => (
              <span key={i} style={{ animationDelay: delay }} className={`glass absolute ${pos} flex h-12 w-12 animate-float items-center justify-center rounded-2xl border border-line text-2xl shadow-lg sm:h-14 sm:w-14 sm:text-3xl`}>
                <Icon style={{ color }} />
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      <a href="#about" aria-label="Scroll down" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 animate-bounce text-2xl text-muted sm:block"><FiArrowDown /></a>
    </section>
  );
}
