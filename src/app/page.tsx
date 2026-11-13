import { appLinks } from "@/lib/site";

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-32">
      <h1 className="max-w-3xl text-5xl font-semibold leading-tight">AI Ecosystem For Real Estate Sellers</h1>
      <p className="mt-6 max-w-xl text-lg opacity-70">
        Free professional tools for UAE agents: daily developer updates, commission automation, live availability and AI-generated branded presentations.
      </p>
      <a href={appLinks.signUp} className="mt-10 inline-block rounded-full bg-black px-6 py-3 text-white">Get started</a>
    </main>
  );
}
