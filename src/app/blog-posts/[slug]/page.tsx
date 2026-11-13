import { notFound } from "next/navigation";
import { getPost, getPosts } from "@/lib/blog";

export const dynamicParams = false;

export async function generateStaticParams() {
  return (await getPosts()).map((p) => ({ slug: p.slug }));
}

export default async function Post({ params }: PageProps<"/blog-posts/[slug]">) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();
  return (
    <main className="mx-auto max-w-3xl px-4 py-24">
      <div className="text-sm opacity-60">{post.date} · {post.category}</div>
      <h1 className="mt-2 text-4xl font-semibold">{post.title}</h1>
      <article className="mt-8 whitespace-pre-line leading-7">{post.body}</article>
    </main>
  );
}
