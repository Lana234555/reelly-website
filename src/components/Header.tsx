import Link from "next/link";
import { nav, appLinks } from "@/lib/site";

export function Header() {
  return (
    <header className="border-b border-black/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4">
        <Link href="/" className="text-xl font-semibold">Reelly</Link>
        <nav className="hidden gap-6 text-sm md:flex">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="hover:opacity-70">{n.label}</Link>
          ))}
        </nav>
        <div className="flex gap-3 text-sm">
          <a href={appLinks.signIn}>Log in</a>
          <a href={appLinks.signUp} className="rounded-full bg-black px-4 py-1.5 text-white">Get started</a>
        </div>
      </div>
    </header>
  );
}
