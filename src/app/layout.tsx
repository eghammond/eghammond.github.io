import type { Metadata, Viewport } from "next";
import { Inter, Newsreader } from "next/font/google";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: { default: site.name, template: `%s · ${site.name}` },
  description: site.description,
};

export const viewport: Viewport = { themeColor: "#CEDEEE" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${newsreader.variable} h-full antialiased`}
    >
      <body className="mx-auto flex min-h-full w-full max-w-2xl flex-col px-6">
        <header className="flex items-baseline justify-between py-8">
          <Link href="/" className="font-serif text-xl text-ink">
            {site.name}
          </Link>
          <Nav />
        </header>
        <main className="flex-1 py-8">{children}</main>
        <footer className="py-10 text-sm text-muted">
          © {new Date().getFullYear()} {site.name}
        </footer>
      </body>
    </html>
  );
}
