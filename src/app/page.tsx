import Link from "next/link";
import { PostList } from "@/components/PostList";
import { getAllPosts } from "@/lib/posts";
import { site } from "@/lib/site";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-14">
      <h2 className="mb-4 border-b border-rule pb-2 font-serif text-2xl text-ink">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function About() {
  const links = site.links.filter((link) => link.href !== "#");
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
        {/* Swap for next/image once you have a photo in public/. */}
        <div
          aria-hidden
          className="flex size-24 shrink-0 items-center justify-center rounded-full bg-rule font-serif text-3xl text-ink"
        >
          {site.initials}
        </div>
        <div>
          <h1 className="font-serif text-4xl text-ink">
            Hi, I&apos;m {site.name.split(" ")[0]}.
          </h1>
          <p className="mt-2">{site.intro}</p>
          {links.length > 0 && (
            <ul className="mt-3 flex gap-4 text-[15px]">
              {links.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-accent underline underline-offset-4"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {site.experience.length > 0 && (
        <Section title="Experience">
          <ul className="space-y-5">
            {site.experience.map((job) => (
              <li key={`${job.role}-${job.dates}`}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="font-medium text-ink">
                    {job.role}, {job.org}
                  </h3>
                  <span className="text-sm text-muted">{job.dates}</span>
                </div>
                <p>{job.summary}</p>
              </li>
            ))}
          </ul>
        </Section>
      )}

      {site.projects.length > 0 && (
        <Section title="Projects">
          <ul className="space-y-5">
            {site.projects.map((project) => (
              <li key={project.name}>
                <h3 className="font-medium text-ink">
                  {project.href === "#" ? (
                    project.name
                  ) : (
                    <a
                      href={project.href}
                      className="text-accent underline underline-offset-4"
                    >
                      {project.name}
                    </a>
                  )}
                </h3>
                <p>{project.summary}</p>
              </li>
            ))}
          </ul>
        </Section>
      )}

      {site.personally && (
        <Section title="Personally">
          <p>{site.personally}</p>
        </Section>
      )}

      {posts.length > 0 && (
        <Section title="Recent writing">
          <PostList posts={posts} />
          <Link
            href="/blog"
            className="mt-6 inline-block text-[15px] text-accent underline underline-offset-4"
          >
            All posts
          </Link>
        </Section>
      )}
    </>
  );
}
