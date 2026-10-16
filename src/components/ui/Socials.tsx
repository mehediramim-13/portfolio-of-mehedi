import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { profile } from "@/data/profile";

const links = [
  { name: "GitHub", href: profile.github, Icon: FaGithub },
  { name: "LinkedIn", href: profile.linkedin, Icon: FaLinkedinIn },
  { name: "WhatsApp", href: `https://wa.me/${profile.whatsapp}`, Icon: FaWhatsapp },
  { name: "Email", href: `mailto:${profile.email}`, Icon: MdEmail },
];

export default function Socials({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {links.map(({ name, href, Icon }) => (
        <a
          key={name}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel="noreferrer"
          aria-label={name}
          title={name}
          className="group flex h-11 w-11 items-center justify-center rounded-full border border-line bg-card text-lg text-muted transition-all duration-300 hover:-translate-y-1 hover:border-brand hover:bg-brand hover:text-white hover:shadow-lg hover:shadow-brand/30"
        >
          <Icon />
        </a>
      ))}
    </div>
  );
}
