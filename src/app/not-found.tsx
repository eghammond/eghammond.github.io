import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <h1 className="font-serif text-4xl text-ink">Page not found</h1>
      <p className="mt-3">
        Try the{" "}
        <Link href="/" className="text-accent underline underline-offset-4">
          home page
        </Link>
        .
      </p>
    </>
  );
}
