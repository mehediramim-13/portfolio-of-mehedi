"use client";
import { FiMoon, FiSun } from "react-icons/fi";

export default function ThemeToggle() {
  const toggle = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch (e) {}
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Switch between dark and light mode"
      title="Dark / Light mode"
      className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-line bg-card text-lg text-fg transition-all duration-300 hover:border-brand hover:text-brand hover:shadow-lg hover:shadow-brand/20"
    >
      <FiSun className="hidden dark:block" />
      <FiMoon className="block dark:hidden" />
    </button>
  );
}
