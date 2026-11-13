// Building blocks for the B2B service pages (/consulting, /white-label).
// Styled to match the rest of reelly.io: dark background, Inter, lime accent (#ccfe3a).
import type { ReactNode } from "react";
import { ArrowRight, Check } from "lucide-react";

export const CONTACT_URL = "https://wa.me/971585930745";

export function ServicesTabs({ active }: { active: "consulting" | "white-label" }) {
  const tabs = [
    { id: "consulting", label: "Consulting", href: "/consulting" },
    { id: "white-label", label: "White Label", href: "/white-label" },
  ] as const;
  return (
    <div className="flex justify-center">
      <div role="tablist" className="inline-flex gap-1 rounded-full border border-white/10 bg-white/5 p-1">
        {tabs.map((t) => (
          <a
            key={t.id}
            href={t.href}
            role="tab"
            aria-selected={t.id === active}
            className={`rounded-full px-5 py-2 text-sm font-medium no-underline transition-colors duration-300 ${
              t.id === active ? "bg-[#ccfe3a] text-black" : "text-zinc-300 hover:bg-white/10 hover:text-white"
            }`}
          >
            {t.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-zinc-300">
      <span className="size-1.5 rounded-full bg-[#ccfe3a]" />
      {children}
    </div>
  );
}

export function SectionHeading({ eyebrow, title, subtitle }: { eyebrow?: string; title: ReactNode; subtitle?: ReactNode }) {
  return (
    <div className="mx-auto mb-12 flex max-w-3xl flex-col items-center gap-4 text-center">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="m-0 font-[Inter,sans-serif] text-3xl font-bold leading-tight text-white md:text-5xl">{title}</h2>
      {subtitle && <p className="m-0 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">{subtitle}</p>}
    </div>
  );
}

export function Section({ id, children, className = "" }: { id?: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={`scroll-mt-28 px-6 py-20 md:py-28 ${className}`}>
      <div className="mx-auto max-w-[1200px]">{children}</div>
    </section>
  );
}

export function CtaButton({ children, variant = "primary" }: { children: ReactNode; variant?: "primary" | "ghost" }) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-lg px-6 py-4 text-base font-semibold no-underline transition-all duration-300 ease-out hover:-translate-y-0.5";
  const look =
    variant === "primary"
      ? "bg-[#ccfe3a] text-black hover:bg-[#d9ff6b] hover:shadow-[0_10px_30px_-10px_rgba(204,254,58,0.6)]"
      : "border border-white/15 bg-transparent text-white hover:border-white/40 hover:bg-white/5";
  return (
    <a href={CONTACT_URL} target="_blank" rel="noopener noreferrer" className={`${base} ${look}`}>
      {children}
      <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-zinc-900/60 p-6 transition-colors duration-300 hover:border-white/25 md:p-8 ${className}`}
    >
      {children}
    </div>
  );
}

export function IconBadge({ children }: { children: ReactNode }) {
  return (
    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#ccfe3a]/10 text-[#ccfe3a] [&_svg]:size-5">
      {children}
    </div>
  );
}

export function CheckList({ items, columns = 1 }: { items: string[]; columns?: 1 | 2 }) {
  return (
    <ul className={`m-0 grid list-none gap-4 p-0 ${columns === 2 ? "md:grid-cols-2" : ""}`}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-base leading-relaxed text-zinc-200">
          <Check className="mt-0.5 size-5 shrink-0 text-[#ccfe3a]" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="m-0 flex list-none flex-col gap-2 p-0">
      {items.map((i) => (
        <li key={i} className="flex gap-2 text-sm leading-relaxed text-zinc-400">
          <span className="mt-2 size-1 shrink-0 rounded-full bg-[#ccfe3a]" />
          {i}
        </li>
      ))}
    </ul>
  );
}

export function FinalCta({ eyebrow, title, text, button, note }: { eyebrow?: string; title: string; text: string; button: string; note: string }) {
  return (
    <Section>
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-zinc-900 to-black px-6 py-16 text-center md:px-16">
        <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-[#ccfe3a]/15 blur-3xl" />
        <div className="relative flex flex-col items-center gap-6">
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h2 className="m-0 font-[Inter,sans-serif] text-3xl font-bold text-white md:text-5xl">{title}</h2>
          <p className="m-0 max-w-xl text-base leading-relaxed text-zinc-400 md:text-lg">{text}</p>
          <CtaButton>{button}</CtaButton>
          <p className="m-0 text-sm text-zinc-500">{note}</p>
        </div>
      </div>
    </Section>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return <main className="bg-black font-[Inter,sans-serif] text-white antialiased">{children}</main>;
}
