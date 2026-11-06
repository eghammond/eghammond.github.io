"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { label: "About", href: "/" },
  //{ label: "Blog", href: "/blog" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Main" className="flex gap-6 text-[15px]">
      {items.map(({ label, href }) => {
        const active =
          href === "/" ? pathname === "/" : pathname.startsWith(href);
        return (
          <Link
            key={href}
            href={href}
            aria-current={active ? "page" : undefined}
            className={
              active
                ? "text-ink underline decoration-accent decoration-2 underline-offset-[6px]"
                : "text-muted transition-colors hover:text-ink"
            }
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
