"use client";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiMail, FiPhone, FiSend, FiMapPin } from "react-icons/fi";
import { profile } from "@/data/profile";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Socials from "@/components/ui/Socials";

const phoneLink = "tel:" + profile.phone.replace(/[^\d+]/g, "");

const cards = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, Icon: FiMail },
  { label: "Phone", value: profile.phone, href: phoneLink, Icon: FiPhone },
  { label: "WhatsApp", value: profile.phone, href: `https://wa.me/${profile.whatsapp}`, Icon: FaWhatsapp },
  { label: "Location", value: profile.location, href: "", Icon: FiMapPin },
];

const field = "w-full rounded-xl border border-line bg-base px-4 py-3 text-fg outline-none transition-colors placeholder:text-muted/70 focus:border-brand";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="px-5 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Contact" title="Let's work" highlight="together" subtitle="Have a project, an idea or just want to say hi? Reach out any way you like." />

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            {cards.map(({ label, value, href, Icon }, i) => {
              const inner = (
                <>
                  <span className="grad-bg flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-xl text-white"><Icon /></span>
                  <span className="min-w-0">
                    <span className="block text-sm text-muted">{label}</span>
                    <span className="block break-words font-semibold">{value}</span>
                  </span>
                </>
              );
              return (
                <Reveal key={label} delay={i * 0.08}>
                  {href ? (
                    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="card-hover flex items-center gap-4 rounded-2xl border border-line bg-card p-5">{inner}</a>
                  ) : (
                    <div className="flex items-center gap-4 rounded-2xl border border-line bg-card p-5">{inner}</div>
                  )}
                </Reveal>
              );
            })}
            <Reveal delay={0.35}><Socials /></Reveal>
          </div>

          <Reveal delay={0.1}>
            <form onSubmit={onSubmit} className="space-y-4 rounded-2xl border border-line bg-card p-6 sm:p-8">
              <h3 className="font-display text-xl font-semibold">Send me a message</h3>
              <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" className={field} />
              <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Your email" className={field} />
              <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Your message" className={field} />
              <button
                type="submit"
                disabled={status === "sending"}
                className="grad-bg inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-semibold text-white shadow-lg shadow-brand/30 transition-transform hover:-translate-y-0.5 disabled:opacity-60"
              >
                <FiSend /> {status === "sending" ? "Sending..." : "Send Message"}
              </button>
              <p className="text-center text-xs text-muted">
                {status === "success"
                  ? "Message sent! I'll get back to you soon."
                  : status === "error"
                  ? "Something went wrong. Please try again."
                  : "Your message will be sent directly to my inbox."}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}