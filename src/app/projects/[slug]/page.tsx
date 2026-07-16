import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaGithub } from "react-icons/fa6";
import {
  TbArrowLeft,
  TbExternalLink,
  TbTarget,
  TbFlag,
  TbStack2,
  TbMountain,
  TbListCheck,
  TbTrophy,
  TbBulb,
  TbRocket,
  TbPhoto,
  TbSitemap,
} from "react-icons/tb";
import { projects, getProject } from "@/data/projects";
import { site } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: `${project.title} — ${site.name}`,
      description: project.summary,
      url: `${site.url}/projects/${project.slug}`,
      type: "article",
    },
    alternates: { canonical: `${site.url}/projects/${project.slug}` },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const hasDemo = project.demoUrl && project.demoUrl !== "#";
  const cs = project.caseStudy;

  return (
    <main id="main" className="flex-1">
      {/* Hero */}
      <header className="relative overflow-hidden border-b border-border-subtle">
        <div
          className={`absolute inset-0 -z-10 bg-gradient-to-br ${project.gradient} opacity-30`}
          aria-hidden
        />
        <div className="mx-auto max-w-4xl px-4 pb-14 pt-28 sm:px-6">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent"
          >
            <TbArrowLeft size={16} /> Back to projects
          </Link>
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border-strong bg-surface px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-surface-strong"
            >
              <FaGithub size={16} /> Repository
            </a>
            {hasDemo && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border-strong bg-surface px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-surface-strong"
              >
                <TbExternalLink size={16} /> Live Demo
              </a>
            )}
          </div>

          <ul className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <li
                key={t}
                className="rounded-md border border-border-subtle bg-surface px-2.5 py-1 font-mono text-xs text-muted"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
        {/* Impact banner */}
        <Reveal>
          <div className="glass mb-12 rounded-2xl border-l-2 border-l-accent p-6">
            <p className="font-mono text-xs uppercase tracking-wider text-accent">
              Key Outcome
            </p>
            <p className="mt-2 text-xl font-semibold text-foreground">
              {project.impact}
            </p>
          </div>
        </Reveal>

        <div className="space-y-12">
          <Block icon={<TbTarget />} title="Problem Statement">
            <p className="text-muted">{cs.problem}</p>
          </Block>

          <Block icon={<TbFlag />} title="Business Goals">
            <BulletList items={cs.goals} />
          </Block>

          <Block icon={<TbStack2 />} title="Technologies Used">
            <ul className="flex flex-wrap gap-2">
              {cs.technologies.map((t) => (
                <li
                  key={t}
                  className="rounded-md border border-border-subtle bg-surface px-3 py-1.5 font-mono text-sm text-foreground/90"
                >
                  {t}
                </li>
              ))}
            </ul>
          </Block>

          {/* Architecture diagram placeholder */}
          <Block icon={<TbSitemap />} title="Architecture">
            <Placeholder
              icon={<TbSitemap size={28} />}
              label="Architecture diagram"
              hint="Drop an architecture diagram here (e.g. /public/case-studies/…)."
            />
          </Block>

          <Block icon={<TbMountain />} title="Challenges Encountered">
            <BulletList items={cs.challenges} />
          </Block>

          <Block icon={<TbListCheck />} title="Development Process">
            <ol className="space-y-3">
              {cs.process.map((step, i) => (
                <li key={i} className="flex gap-3 text-muted">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-accent/10 font-mono text-xs text-accent">
                    {i + 1}
                  </span>
                  <span className="leading-6">{step}</span>
                </li>
              ))}
            </ol>
          </Block>

          {/* Screenshots placeholder */}
          <Block icon={<TbPhoto />} title="Screenshots">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Placeholder icon={<TbPhoto size={28} />} label="Screenshot 1" />
              <Placeholder icon={<TbPhoto size={28} />} label="Screenshot 2" />
            </div>
          </Block>

          <Block icon={<TbTrophy />} title="Results Achieved">
            <BulletList items={cs.results} />
          </Block>

          <Block icon={<TbBulb />} title="Lessons Learned">
            <BulletList items={cs.lessons} />
          </Block>

          <Block icon={<TbRocket />} title="Future Improvements">
            <BulletList items={cs.future} />
          </Block>
        </div>

        {/* Footer nav */}
        <div className="mt-16 border-t border-border-subtle pt-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
          >
            <TbArrowLeft size={16} /> Back to all projects
          </Link>
        </div>
      </div>
    </main>
  );
}

function Block({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal>
      <section>
        <h2 className="mb-4 flex items-center gap-2.5 text-xl font-semibold text-foreground">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
            {icon}
          </span>
          {title}
        </h2>
        <div className="pl-0 sm:pl-11">{children}</div>
      </section>
    </Reveal>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2.5 text-muted">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
          <span className="leading-6">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Placeholder({
  icon,
  label,
  hint,
}: {
  icon: React.ReactNode;
  label: string;
  hint?: string;
}) {
  return (
    <div className="flex aspect-video flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-border-strong bg-surface p-6 text-center text-muted-dim">
      {icon}
      <span className="font-mono text-sm">{label}</span>
      {hint && <span className="max-w-xs text-xs">{hint}</span>}
    </div>
  );
}
