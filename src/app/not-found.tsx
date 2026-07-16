import Link from "next/link";
import { TbArrowLeft } from "react-icons/tb";

export default function NotFound() {
  return (
    <main
      id="main"
      className="flex flex-1 items-center justify-center px-4 py-32"
    >
      <div className="text-center">
        <p className="font-mono text-sm text-accent">
          <span className="text-muted-dim">$</span> cat /page
        </p>
        <h1 className="mt-4 text-6xl font-bold text-gradient">404</h1>
        <p className="mt-4 text-lg text-muted">
          This page could not be found.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-accent to-accent-2 px-5 py-3 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5"
        >
          <TbArrowLeft size={18} /> Back home
        </Link>
      </div>
    </main>
  );
}
