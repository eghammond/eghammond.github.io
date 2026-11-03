import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

const POSTS_DIR = path.join(process.cwd(), "content/blog");

export type PostMeta = {
  slug: string;
  title: string;
  date: string; // YYYY-MM-DD
  summary: string;
};

function readPost(slug: string) {
  const file = fs.readFileSync(path.join(POSTS_DIR, `${slug}.md`), "utf8");
  const { data, content } = matter(file);
  const meta: PostMeta = {
    slug,
    title: data.title,
    // YAML parses unquoted dates into Date objects.
    date: new Date(data.date).toISOString().slice(0, 10),
    summary: data.summary ?? "",
  };
  return { meta, content };
}

export function getAllPosts(): PostMeta[] {
  return fs
    .readdirSync(POSTS_DIR)
    .filter((name) => name.endsWith(".md"))
    .map((name) => readPost(name.replace(/\.md$/, "")).meta)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string) {
  // Slugs come from the URL, so only accept ones that match a real file.
  if (!getAllPosts().some((post) => post.slug === slug)) return null;
  const { meta, content } = readPost(slug);
  return { meta, html: marked.parse(content, { async: false }) };
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
