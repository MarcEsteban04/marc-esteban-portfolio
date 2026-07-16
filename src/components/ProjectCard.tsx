import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { TbExternalLink, TbArrowRight, TbTrendingUp } from "react-icons/tb";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  const hasDemo = project.demoUrl && project.demoUrl !== "#";

  return (
    <article className="glass group flex h-full flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent-glow">
      {/* Placeholder mockup */}
      <Link
        href={`/projects/${project.slug}`}
        aria-label={`View ${project.title} case study`}
        className="relative block aspect-[16/10] overflow-hidden"
      >
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}
          aria-hidden
        />
        <div
          aria-hidden
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <span className="text-center font-mono text-sm font-semibold text-white/90 drop-shadow">
            {project.title}
          </span>
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold text-foreground">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-6 text-muted">{project.summary}</p>

        {/* Impact metric */}
        <div className="mt-4 flex items-start gap-2 rounded-lg border border-accent/20 bg-accent/[0.06] px-3 py-2">
          <TbTrendingUp
            className="mt-0.5 shrink-0 text-accent"
            size={16}
            aria-hidden
          />
          <span className="text-xs font-medium text-accent">
            {project.impact}
          </span>
        </div>

        {/* Tech tags */}
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <li
              key={t}
              className="rounded-md border border-border-subtle bg-surface px-2 py-1 font-mono text-[11px] text-muted"
            >
              {t}
            </li>
          ))}
        </ul>

        {/* Links */}
        <div className="mt-5 flex items-center justify-between border-t border-border-subtle pt-4">
          <div className="flex items-center gap-3">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} GitHub repository`}
              className="text-muted transition-colors hover:text-foreground"
            >
              <FaGithub size={18} />
            </a>
            {hasDemo && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} live demo`}
                className="text-muted transition-colors hover:text-foreground"
              >
                <TbExternalLink size={18} />
              </a>
            )}
          </div>
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1 text-sm font-medium text-accent transition-transform group-hover:translate-x-0.5"
          >
            Case Study <TbArrowRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
}
