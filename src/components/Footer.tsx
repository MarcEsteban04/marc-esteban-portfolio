import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { TbMail, TbArrowUp } from "react-icons/tb";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-background-soft/40">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-10 sm:flex-row sm:px-6">
        <div className="text-center sm:text-left">
          <p className="font-mono text-sm text-foreground">
            <span className="text-accent">marc</span>
            <span className="text-muted-dim">@</span>
            <span className="text-accent-2">esteban</span>
          </p>
          <p className="mt-1 text-xs text-muted">
            Built with Next.js, Tailwind CSS &amp; Framer Motion.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={site.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted transition-colors hover:text-accent"
          >
            <FaGithub size={20} />
          </a>
          <a
            href={site.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted transition-colors hover:text-accent"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href={site.socials.email}
            aria-label="Email"
            className="text-muted transition-colors hover:text-accent"
          >
            <TbMail size={20} />
          </a>
          <a
            href="#top"
            aria-label="Back to top"
            className="ml-2 flex h-9 w-9 items-center justify-center rounded-lg border border-border-subtle text-muted transition-colors hover:border-accent/40 hover:text-accent"
          >
            <TbArrowUp size={18} />
          </a>
        </div>
      </div>
      <div className="border-t border-border-subtle py-4">
        <p className="text-center text-xs text-muted-dim">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
