// /white-label — broker sales infrastructure built around the developer's CRM.
// Content is plain data at the top of the file; edit text there.
import {
  Activity,
  Database,
  KeyRound,
  LayoutDashboard,
  Monitor,
  Network,
  Server,
  Smartphone,
} from "lucide-react";
import { Bullets, Card, CheckList, CtaButton, Eyebrow, FinalCta, IconBadge, PageShell, Section, SectionHeading, ServicesTabs } from "./ui";

const anchors = [
  { id: "insight", label: "Insight" },
  { id: "infrastructure", label: "Infrastructure" },
  { id: "tools", label: "Tools" },
  { id: "integrations", label: "Integrations" },
  { id: "impact", label: "Impact" },
];

const serverBlocks = [
  { icon: LayoutDashboard, title: "Admin Panel", text: "Inventory, users & internal system control" },
  { icon: Database, title: "Data Layer", text: "Private servers ensuring full data security" },
  { icon: KeyRound, title: "API Mgmt", text: "API keys for external integrations" },
];

const toolBlocks = [
  { icon: Smartphone, title: "Mobile App", text: "On-the-go access for your brokers" },
  { icon: Monitor, title: "White-label", text: "Branded broker-facing web platform" },
  { icon: Activity, title: "BRM", text: "Broker relationship management hub" },
];

const infrastructure = [
  {
    icon: LayoutDashboard,
    title: "Developer Admin Panel",
    items: ["Control inventory visibility", "Manage broker access and permissions", "Oversee internal workflows"],
  },
  {
    icon: Database,
    title: "Dedicated Data Layer",
    items: ["Secure storage of inventory and broker data", "Full ownership of your database", "Internal systems and processes"],
  },
  {
    icon: KeyRound,
    title: "API Management Layer",
    items: ["Generate API keys", "Define data access rules", "Connect external platforms on your terms"],
  },
];

const tools = [
  {
    icon: Monitor,
    title: "White-label Platform",
    image: "/pages/whitelabel-platform.webp",
    items: ["Branded interface for your projects", "Real-time inventory and pricing", "Sales offers and broker interaction"],
  },
  {
    icon: Smartphone,
    title: "Mobile App",
    image: "/pages/mobile-app.webp",
    items: ["Direct broker access", "Faster engagement", "Always connected to your ecosystem"],
  },
];

const brm = [
  "Track which brokers view your projects",
  "See what units they focus on",
  "Identify real buying intent",
  "Monitor engagement and activity",
  "Understand who drives demand",
  "Trigger follow-ups and actions",
];

const integrations = [
  { name: "Salesforce", logo: "/pages/logo-salesforce.png" },
  { name: "Zoho", logo: "/pages/logo-zoho.png" },
  { name: "WhatsApp", logo: "/pages/logo-whatsapp.png" },
  { name: "Call Systems" },
  { name: "Marketing Platforms" },
  { name: "Custom CRM" },
];

const impact = [
  "Full control over how inventory is exposed",
  "Clear visibility into broker performance",
  "Structured and scalable broker sales",
  "Higher conversion without increasing complexity",
];

function MiniBlock({ icon: Icon, title, text }: { icon: typeof Server; title: string; text: string }) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-black/40 p-4">
      <IconBadge>
        <Icon />
      </IconBadge>
      <div>
        <div className="text-sm font-semibold text-white">{title}</div>
        <div className="text-xs leading-relaxed text-zinc-400">{text}</div>
      </div>
    </div>
  );
}

function EcosystemDiagram() {
  return (
    <div className="mx-auto w-full max-w-5xl rounded-3xl border border-white/10 bg-zinc-900/60 p-6 md:p-10">
      <div className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">Here&apos;s what we build</div>
      <div className="grid items-stretch gap-6 md:grid-cols-[1fr_auto_1fr]">
        <div className="flex flex-col gap-3">
          <div className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-400">Your independent server with data panel control</div>
          {serverBlocks.map((b) => (
            <MiniBlock key={b.title} {...b} />
          ))}
        </div>
        <div className="flex flex-col items-center justify-center gap-3 py-4">
          <div className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-400">Developer CRM — the core</div>
          <div className="flex size-36 items-center justify-center rounded-full border-2 border-[#ccfe3a] bg-[#ccfe3a]/10 text-center text-lg font-bold text-white shadow-[0_0_60px_-10px_rgba(204,254,58,0.5)]">
            Custom
            <br />
            CRM
          </div>
          <div className="flex gap-2 text-[11px] uppercase tracking-wider text-zinc-500">
            <span>syncs</span>·<span>pushes</span>·<span>extends</span>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-400">White-label tools for broker management</div>
          {toolBlocks.map((b) => (
            <MiniBlock key={b.title} {...b} />
          ))}
        </div>
      </div>
      <div className="mt-8 flex flex-col items-center gap-3 border-t border-white/10 pt-6">
        <div className="text-center text-xs font-semibold uppercase tracking-[0.14em] text-zinc-400">
          Access to the global Reelly agent network & other integrations
        </div>
        <div className="flex items-center gap-3">
          {["/pages/logo-reelly-ai.png", "/pages/logo-salesforce.png", "/pages/logo-whatsapp.png"].map((src) => (
            <span key={src} className="flex size-12 items-center justify-center rounded-full border border-white/10 bg-black">
              <img src={src} alt="" className="size-7 object-contain" />
            </span>
          ))}
          <Network className="size-5 text-zinc-500" />
        </div>
      </div>
    </div>
  );
}

export default function WhiteLabelPage() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-16 pt-16">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[28rem] w-[56rem] -translate-x-1/2 rounded-full bg-[#ccfe3a]/10 blur-3xl" />
        <div className="relative mx-auto flex max-w-[1200px] flex-col items-center gap-8 text-center">
          <ServicesTabs active="white-label" />
          <Eyebrow>Broker Sales Infrastructure</Eyebrow>
          <h1 className="m-0 max-w-4xl font-[Inter,sans-serif] text-4xl font-bold leading-[1.1] text-white md:text-6xl">
            Your Broker Ecosystem <span className="text-[#ccfe3a]">Custom-Built Around Your CRM</span>
          </h1>
          <p className="m-0 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">
            We create a dedicated infrastructure around your existing CRM — giving you full control over broker activity,
            inventory visibility, and sales performance.
          </p>
          <CtaButton>Request Private Demo</CtaButton>
          <EcosystemDiagram />
        </div>
      </section>

      {/* Anchor nav */}
      <nav className="sticky top-0 z-20 border-y border-white/10 bg-black/80 px-6 py-3 backdrop-blur">
        <div className="mx-auto flex max-w-[1200px] gap-2 overflow-x-auto">
          {anchors.map((a) => (
            <a
              key={a.id}
              href={`#${a.id}`}
              className="shrink-0 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-zinc-400 no-underline transition-colors duration-300 hover:bg-white/10 hover:text-white"
            >
              {a.label}
            </a>
          ))}
        </div>
      </nav>

      <Section id="insight">
        <SectionHeading
          eyebrow="Core insight"
          title="Your CRM Stays the Core"
          subtitle="You don't need to rebuild your systems. We connect everything around your existing CRM — and turn it into a complete broker sales ecosystem."
        />
      </Section>

      <Section id="infrastructure" className="bg-zinc-950">
        <SectionHeading eyebrow="Infrastructure" title="Independent Infrastructure — Fully Under Your Control" />
        <div className="grid gap-4 md:grid-cols-3">
          {infrastructure.map(({ icon: Icon, title, items }) => (
            <Card key={title} className="flex flex-col gap-4">
              <IconBadge>
                <Icon />
              </IconBadge>
              <h3 className="m-0 text-lg font-semibold text-white">{title}</h3>
              <Bullets items={items} />
            </Card>
          ))}
        </div>
      </Section>

      <Section id="tools">
        <SectionHeading eyebrow="Developer tools" title="What Your Market Interacts With" />
        <div className="grid gap-4 md:grid-cols-2">
          {tools.map(({ icon: Icon, title, image, items }) => (
            <Card key={title} className="flex flex-col gap-5">
              <div className="flex h-64 items-center justify-center overflow-hidden rounded-xl bg-black">
                <img src={image} alt={title} loading="lazy" className="h-full w-full object-contain" />
              </div>
              <div className="flex items-center gap-3">
                <IconBadge>
                  <Icon />
                </IconBadge>
                <h3 className="m-0 text-lg font-semibold text-white">{title}</h3>
              </div>
              <Bullets items={items} />
            </Card>
          ))}
        </div>
        <Card className="mt-4 grid items-center gap-8 md:grid-cols-2">
          <img src="/pages/brm-platform.webp" alt="Reelly BRM" loading="lazy" className="w-full rounded-xl" />
          <div className="flex flex-col gap-5">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#ccfe3a]">
              BRM · Broker Relationship Management
            </span>
            <h3 className="m-0 text-2xl font-bold text-white">Understand and Influence Broker Behavior</h3>
            <CheckList items={brm} columns={2} />
          </div>
        </Card>
        <div className="mt-10 flex justify-center">
          <CtaButton>Request Private Demo</CtaButton>
        </div>
      </Section>

      <Section id="integrations" className="bg-zinc-950">
        <SectionHeading
          eyebrow="Integrations"
          title="Works With Your Existing Ecosystem"
          subtitle="Integrates with your CRM and external tools. You keep your stack — we structure it."
        />
        <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-3">
          {integrations.map((i) => (
            <span
              key={i.name}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-zinc-900/60 px-5 py-3 text-sm font-medium text-zinc-200 transition-colors duration-300 hover:border-white/30"
            >
              {i.logo ? <img src={i.logo} alt="" className="size-5 object-contain" /> : <span className="size-1.5 rounded-full bg-[#ccfe3a]" />}
              {i.name}
            </span>
          ))}
        </div>
      </Section>

      <Section id="impact">
        <SectionHeading eyebrow="Business impact" title="What Changes After Implementation" />
        <Card className="mx-auto max-w-3xl">
          <CheckList items={impact} />
        </Card>
      </Section>

      <FinalCta
        eyebrow="Get started"
        title="Request a Private Demo"
        text="We'll show you how this would work for your projects, your teams, and your broker network."
        button="Request Private Demo"
        note="Connect with us today to schedule a walkthrough."
      />
    </PageShell>
  );
}
