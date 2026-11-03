import Link from "next/link";
import { formatDate, type PostMeta } from "@/lib/posts";

export function PostList({ posts }: { posts: PostMeta[] }) {
  return (
    <ul className="space-y-6">
      {posts.map((post) => (
        <li key={post.slug}>
          <Link href={`/blog/${post.slug}`} className="group block">
            <h3 className="font-serif text-xl text-ink group-hover:text-accent">
              {post.title}
            </h3>
            <time dateTime={post.date} className="text-sm text-muted">
              {formatDate(post.date)}
            </time>
            {post.summary && <p className="mt-1">{post.summary}</p>}
          </Link>
        </li>
      ))}
    </ul>
  );
}
