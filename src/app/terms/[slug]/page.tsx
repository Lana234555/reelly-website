import { notFound } from "next/navigation";
import { legalPages } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return legalPages.map((p) => ({ slug: p.slug }));
}

export default async function LegalPage({ params }: PageProps<"/terms/[slug]">) {
  const { slug } = await params;
  const page = legalPages.find((p) => p.slug === slug);
  if (!page) notFound();
  return (
    <main className="mx-auto max-w-3xl px-4 py-24">
      <h1 className="text-4xl font-semibold">{page.title}</h1>
    </main>
  );
}
