import { notFound } from "next/navigation";
import { pages } from "@/lib/site";

// Placeholder: each page gets its own folder (e.g. src/app/agent/page.tsx) as it is migrated.
export const dynamicParams = false;

export function generateStaticParams() {
  return pages.map((p) => ({ slug: p.slug }));
}

export default async function Page({ params }: PageProps<"/[slug]">) {
  const { slug } = await params;
  const page = pages.find((p) => p.slug === slug);
  if (!page) notFound();
  return (
    <main className="mx-auto max-w-7xl px-4 py-24">
      <h1 className="text-4xl font-semibold">{page.title}</h1>
      <p className="mt-4 opacity-60">Migrating from Webflow…</p>
    </main>
  );
}
