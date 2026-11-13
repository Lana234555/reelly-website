// /consulting — B2B sales consulting program for real estate developers.
// Content is plain data at the top of the file; edit text there.
import {
  BarChart3,
  BookOpen,
  ClipboardCheck,
  Cpu,
  Eye,
  Globe,
  Layers,
  Map,
  ShieldCheck,
  Users,
  Workflow,
} from "lucide-react";
import {
  Card,
  CheckList,
  CtaButton,
  Eyebrow,
  FinalCta,
  IconBadge,
  PageShell,
  Section,
  SectionHeading,
  ServicesTabs,
} from "./ui";

const highlights = [
  { icon: Layers, text: "Full audit across sales, CRM & operations" },
  { icon: Users, text: "Standardized team playbooks" },
  { icon: Eye, text: "Full visibility into broker performance" },
  { icon: ShieldCheck, text: "No informal processes — everything tracked" },
  { icon: Workflow, text: "Process-driven, scalable systems" },
  { icon: Globe, text: "Works across markets & team sizes" },
];

const pains = [
  {
    pain: "Most of your broker database never produces revenue",
    solution: "We identify which brokers are worth activating — and build the system to do it at scale.",
  },
  {
    pain: "Sales managers work through personal WhatsApp with no real visibility",
    solution: "We design structured workflows with full tracking, so nothing falls through the cracks.",
  },
  {
    pain: "Your CRM stores contacts, but doesn't drive activation or forecasting",
    solution: "We restructure your CRM logic to turn it into an actionable sales tool — not just a database.",
  },
  {
    pain: "No clear way to measure broker performance or ROI",
    solution: "We build reporting frameworks that give leadership real-time visibility into what's working.",
  },
  {
    pain: "Scaling requires hiring more seniors — expensive and slow",
    solution: "We create systems and playbooks that let junior staff execute at a senior level.",
  },
];

const steps = [
  {
    title: "We Audit Your Sales Infrastructure",
    text: "Full review across sales, BD, marketing, CRM, finance, and leadership — identifying gaps and quick wins.",
  },
  {
    title: "Design the Operating System",
    text: "We architect broker targeting, activation workflows, CRM logic, reporting, and team playbooks tailored to your business.",
  },
  {
    title: "Build the Action Plan",
    text: "Prioritized implementation roadmap with clear milestones, owners, and measurable outcomes.",
  },
  {
    title: "Deliver Playbooks & Specs",
    text: "B2B positioning playbook, CRM automation spec, AI knowledge base design, and reporting framework — ready to execute.",
  },
  {
    title: "Handoff & Support",
    text: "Your team receives everything needed to implement — with guidance on execution and vendor selection.",
  },
];

const deliverables = [
  {
    icon: ClipboardCheck,
    title: "Full Audit Report",
    text: "Comprehensive review across sales, BD, marketing, CRM, finance, and leadership with clear findings.",
  },
  { icon: Map, title: "Implementation Roadmap", text: "Prioritized action plan with architecture, milestones, and measurable KPIs." },
  {
    icon: BookOpen,
    title: "B2B Positioning Playbook",
    text: "Tailored positioning playbook for broker activation, outreach sequences, and team scripts.",
  },
  {
    icon: Cpu,
    title: "Tech & AI Specification",
    text: "CRM logic, automation flows, reporting dashboards, and AI knowledge base — ready for implementation.",
  },
];

const results = [
  "Up to 5x more targeted meetings without expanding senior headcount",
  "Lower waste on broker marketing and dead databases",
  "Full control over broker communication and ownership of the database",
  "No more blind CRM spending or expensive rework",
  "Scalable processes that work across markets and team sizes",
];

export default function ConsultingPage() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-20 pt-16 md:pb-28">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[28rem] w-[56rem] -translate-x-1/2 rounded-full bg-[#ccfe3a]/10 blur-3xl" />
        <div className="relative mx-auto flex max-w-[1200px] flex-col items-center gap-8 text-center">
          <ServicesTabs active="consulting" />
          <Eyebrow>B2B Sales Consulting</Eyebrow>
          <h1 className="m-0 max-w-4xl font-[Inter,sans-serif] text-4xl font-bold leading-[1.1] text-white md:text-6xl">
            Turn Your Broker Database Into a <span className="text-[#ccfe3a]">Predictable Sales Engine</span>
          </h1>
          <p className="m-0 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">
            A 6-week consulting program for developers who want to fix broker activation, CRM chaos, and B2B sales
            inefficiency — without scaling headcount.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <CtaButton>Request Consultation</CtaButton>
            <a
              href="#process"
              className="inline-flex items-center rounded-lg border border-white/15 px-6 py-4 text-base font-semibold text-white no-underline transition-all duration-300 hover:border-white/40 hover:bg-white/5"
            >
              See How It Works
            </a>
          </div>
          <div className="mt-6 grid w-full max-w-4xl gap-4 rounded-2xl border border-white/10 bg-zinc-900/60 p-6 text-left sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-3 text-sm text-zinc-300">
                <IconBadge>
                  <Icon />
                </IconBadge>
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pains */}
      <Section className="bg-zinc-950">
        <SectionHeading
          title="Key Sales Pains — And How We Solve Them"
          subtitle="Common challenges we see across developer sales teams"
        />
        <div className="mx-auto flex max-w-4xl flex-col gap-4">
          {pains.map(({ pain, solution }) => (
            <div
              key={pain}
              className="grid overflow-hidden rounded-2xl border border-white/10 transition-colors duration-300 hover:border-white/25 md:grid-cols-2"
            >
              <div className="flex flex-col gap-2 bg-zinc-900/60 p-6">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-red-400">Pain</span>
                <p className="m-0 text-base leading-relaxed text-zinc-200">{pain}</p>
              </div>
              <div className="flex flex-col gap-2 border-t border-white/10 bg-[#ccfe3a]/[0.06] p-6 md:border-l md:border-t-0">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#ccfe3a]">Solution</span>
                <p className="m-0 text-base leading-relaxed text-zinc-200">{solution}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section id="process">
        <SectionHeading title="How the Process Works" subtitle="Simple, predictable, and fully structured" />
        <ol className="relative mx-auto m-0 flex max-w-3xl list-none flex-col gap-10 p-0">
          <span className="absolute bottom-4 left-5 top-4 w-px bg-white/10" aria-hidden />
          {steps.map((s, i) => (
            <li key={s.title} className="relative flex gap-6">
              <span className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full bg-[#ccfe3a] text-sm font-bold text-black">
                {i + 1}
              </span>
              <div className="flex flex-col gap-2 pt-1.5">
                <h3 className="m-0 text-lg font-semibold text-white">{s.title}</h3>
                <p className="m-0 text-base leading-relaxed text-zinc-400">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* Deliverables */}
      <Section className="bg-zinc-950">
        <SectionHeading title="What You Get in 6 Weeks" subtitle="Everything your team needs to transform B2B sales operations" />
        <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-2">
          {deliverables.map(({ icon: Icon, title, text }) => (
            <Card key={title} className="flex flex-col gap-4">
              <IconBadge>
                <Icon />
              </IconBadge>
              <h3 className="m-0 text-lg font-semibold text-white">{title}</h3>
              <p className="m-0 text-base leading-relaxed text-zinc-400">{text}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Results */}
      <Section>
        <SectionHeading title="What Changes After Implementation" subtitle="Measurable results from structured sales operations" />
        <Card className="mx-auto max-w-3xl">
          <div className="mb-6 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.14em] text-zinc-400">
            <BarChart3 className="size-5 text-[#ccfe3a]" /> Results
          </div>
          <CheckList items={results} />
        </Card>
      </Section>

      <FinalCta
        title="Ready to Fix Your B2B Sales?"
        text="Book a short introductory call where we'll discuss your current setup, identify quick wins, and explain how the 6-week program works."
        button="Book Your Consultation Call"
        note="No commitment required — we'll assess fit on the call."
      />
    </PageShell>
  );
}
