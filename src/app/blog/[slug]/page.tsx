import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatDate, getAllPosts, getPost } from "@/lib/posts";

type Props = { params: Promise<{ slug: string }> };

// Static export requires every post to be known at build time.
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return { title: post.meta.title, description: post.meta.summary };
}

export default async function Post({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const { meta, html } = post;

  return (
    <article>
      <h1 className="font-serif text-4xl leading-tight text-ink">
        {meta.title}
      </h1>
      <time dateTime={meta.date} className="mt-2 block text-sm text-muted">
        {formatDate(meta.date)}
      </time>
      <div
        className="prose mt-8"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <Link
        href="/blog"
        className="mt-12 inline-block text-[15px] text-accent underline underline-offset-4"
      >
        All posts
      </Link>
    </article>
  );
}
