import { experiences } from "@/data/experience";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function ExperienceTimeline() {
  return (
    <section
      id="experience"
      className="section-py scroll-mt-16 bg-background-soft/40"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="experience --timeline"
          title="Where I've worked"
        />

        <div className="relative mt-12 pl-8">
          {/* Vertical line */}
          <div
            className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-accent via-border-strong to-transparent"
            aria-hidden
          />
          <ol className="space-y-10">
            {experiences.map((exp, i) => (
              <li key={`${exp.org}-${i}`} className="relative">
                {/* Node */}
                <span
                  className="absolute -left-8 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-accent bg-background"
                  aria-hidden
                />
                <Reveal delay={i * 0.05}>
                  <p className="font-mono text-xs text-accent">{exp.period}</p>
                  <h3 className="mt-1 text-lg font-semibold text-foreground">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-muted">{exp.org}</p>
                  <ul className="mt-3 space-y-1.5">
                    {exp.points.map((point, pi) => (
                      <li
                        key={pi}
                        className="flex gap-2 text-sm leading-6 text-muted"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  {exp.stack && (
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {exp.stack.map((tech) => (
                        <li
                          key={tech}
                          className="rounded-md border border-border-subtle bg-surface px-2 py-1 font-mono text-[11px] text-muted"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  )}
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
