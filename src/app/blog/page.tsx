import type { Metadata } from "next";
import { PostList } from "@/components/PostList";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = { title: "Blog" };

export default function Blog() {
  const posts = getAllPosts();

  return (
    <>
      <h1 className="mb-8 font-serif text-4xl text-ink">Blog</h1>
      {posts.length > 0 ? (
        <PostList posts={posts} />
      ) : (
        <p>No blog posts have been written yet.</p>
      )}
    </>
  );
}
