import Link from "next/link";
import { getPosts } from "@/lib/blog";

export const metadata = { title: "Blog | Reelly" };

export default async function Blog() {
  const posts = await getPosts();
  return (
    <main className="mx-auto max-w-7xl px-4 py-24">
      <h1 className="text-4xl font-semibold">Blog</h1>
      <ul className="mt-10 grid gap-6 md:grid-cols-3">
        {posts.map((p) => (
          <li key={p.slug}>
            <Link href={`/blog-posts/${p.slug}`} className="block rounded-2xl border border-black/10 p-6 hover:bg-black/5">
              <div className="text-xs opacity-60">{p.date} · {p.category}</div>
              <div className="mt-2 font-medium">{p.title}</div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
