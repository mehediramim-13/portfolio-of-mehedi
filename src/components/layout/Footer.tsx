import Link from "next/link";
import { nav, profile } from "@/data/profile";
import Socials from "@/components/ui/Socials";
import ScrollTop from "./ScrollTop";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-card/50">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-10 text-center">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="grad-bg flex h-10 w-10 items-center justify-center rounded-xl font-display font-bold text-white">MH</span>
          <span className="font-display text-xl font-bold">{profile.name}</span>
        </Link>
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted">
          {nav.map((n) => (
            <li key={n.href}><Link href={n.href} className="transition-colors hover:text-brand">{n.label}</Link></li>
          ))}
        </ul>
        <Socials className="justify-center" />
        <p className="text-sm text-muted">© {new Date().getFullYear()} {profile.name}. Built with Next.js, Tailwind CSS and Framer Motion.</p>
      </div>
      <ScrollTop />
    </footer>
  );
}
