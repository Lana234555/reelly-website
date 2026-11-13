import Link from "next/link";
import { legalPages } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-black/10">
      <div className="mx-auto flex max-w-7xl flex-wrap gap-6 px-4 py-8 text-sm opacity-70">
        <span>© Reelly Tech Ltd, DIFC, Dubai</span>
        <a href="mailto:info@reelly.ai">info@reelly.ai</a>
        {legalPages.map((p) => (
          <Link key={p.slug} href={`/terms/${p.slug}`}>{p.title}</Link>
        ))}
      </div>
    </footer>
  );
}
