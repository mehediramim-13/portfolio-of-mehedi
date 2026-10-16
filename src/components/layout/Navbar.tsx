"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { nav, profile } from "@/data/profile";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    if (pathname !== "/") {
      setActive("");
      return;
    }
    const ids = nav.map((n) => n.href.replace("/#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || open ? "glass border-b border-line shadow-lg shadow-black/5" : "bg-transparent"}`}>
      <motion.div style={{ scaleX: progress }} className="grad-bg absolute inset-x-0 top-0 h-[3px] origin-left" />
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6">
        <Link href="/" className="group flex items-center gap-2.5" aria-label="Home">
          <span className="grad-bg flex h-9 w-9 items-center justify-center rounded-xl font-display text-sm font-bold text-white shadow-lg shadow-brand/30 transition-transform duration-300 group-hover:rotate-6">MH</span>
          <span className="font-display text-lg font-bold">{profile.name.split(" ").slice(1).join(" ")}</span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => {
            const id = item.href.replace("/#", "");
            const isActive = active === id;
            return (
              <li key={item.href}>
                <Link href={item.href} className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${isActive ? "text-brand" : "text-muted hover:text-fg"}`}>
                  {isActive && <motion.span layoutId="nav-pill" className="absolute inset-0 -z-10 rounded-full bg-brand/10" transition={{ type: "spring", stiffness: 380, damping: 30 }} />}
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a href={profile.resume} target="_blank" rel="noreferrer" className="grad-bg hidden rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand/30 transition-transform hover:-translate-y-0.5 sm:inline-block">Resume</a>
          <button type="button" onClick={() => setOpen((v) => !v)} aria-label="Open menu" aria-expanded={open} className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-card text-xl lg:hidden">
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden lg:hidden">
            <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-5 pb-5 pt-1 sm:px-6">
              {nav.map((item, i) => (
                <motion.li key={item.href} initial={{ x: -16, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.04 }}>
                  <Link href={item.href} onClick={() => setOpen(false)} className={`block rounded-xl px-4 py-3 font-medium ${active === item.href.replace("/#", "") ? "bg-brand/10 text-brand" : "text-muted hover:bg-brand/5 hover:text-fg"}`}>{item.label}</Link>
                </motion.li>
              ))}
              <li className="pt-2">
                <a href={profile.resume} target="_blank" rel="noreferrer" className="grad-bg block rounded-xl px-4 py-3 text-center font-semibold text-white">View Resume</a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
