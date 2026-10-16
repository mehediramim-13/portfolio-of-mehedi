import { IconType } from "react-icons";
import { FaReact, FaGitAlt, FaGithub, FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss, SiExpress, SiDjango, SiMysql, SiFirebase, SiC, SiCplusplus, SiVercel } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export type Skill = { name: string; icon: IconType; color: string; level: number }; // level = 0-100

// ===== SKILLS: add/remove skills here. "level" fills the progress bar =====
export const skillGroups: { title: string; skills: Skill[] }[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: FaReact, color: "#61DAFB", level: 85 },
      { name: "Next.js", icon: SiNextdotjs, color: "#888888", level: 80 },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8", level: 90 },
      { name: "HTML5", icon: FaHtml5, color: "#E34F26", level: 92 },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6", level: 88 },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6", level: 75 },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", level: 85 },
      { name: "C", icon: SiC, color: "#5C6BC0", level: 70 },
      { name: "C++", icon: SiCplusplus, color: "#00599C", level: 70 },
    ],
  },
  {
    title: "Backend (learning)",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "#68A063", level: 55 },
      { name: "Express", icon: SiExpress, color: "#888888", level: 50 },
      { name: "Django", icon: SiDjango, color: "#44B78B", level: 40 },
    ],
  },
  {
    title: "Database and Cloud",
    skills: [
      { name: "MySQL", icon: SiMysql, color: "#4479A1", level: 60 },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28", level: 55 },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: FaGitAlt, color: "#F05032", level: 80 },
      { name: "GitHub", icon: FaGithub, color: "#888888", level: 85 },
      { name: "VS Code", icon: VscVscode, color: "#007ACC", level: 90 },
      { name: "Vercel", icon: SiVercel, color: "#888888", level: 75 },
    ],
  },
];
