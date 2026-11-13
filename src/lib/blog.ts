import fs from "node:fs/promises";
import path from "node:path";

// Blog posts live in content/blog/<slug>.md with a small front matter block:
// ---
// title: ...
// date: 2026-08-01
// category: Partnership
// ---
const DIR = path.join(process.cwd(), "content/blog");

export type Post = { slug: string; title: string; date: string; category: string; body: string };

function parse(slug: string, raw: string): Post {
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  const meta: Record<string, string> = {};
  for (const line of (m?.[1] ?? "").split("\n")) {
    const i = line.indexOf(":");
    if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim();
  }
  return { slug, title: meta.title ?? slug, date: meta.date ?? "", category: meta.category ?? "", body: (m?.[2] ?? raw).trim() };
}

export async function getPosts(): Promise<Post[]> {
  const files = (await fs.readdir(DIR)).filter((f) => f.endsWith(".md"));
  const posts = await Promise.all(
    files.map(async (f) => parse(f.replace(/\.md$/, ""), await fs.readFile(path.join(DIR, f), "utf8"))),
  );
  return posts.sort((a, b) => b.date.localeCompare(a.date));
}

export async function getPost(slug: string) {
  return (await getPosts()).find((p) => p.slug === slug);
}
