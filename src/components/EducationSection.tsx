import { TbSchool, TbAward, TbChartBar } from "react-icons/tb";
import { education } from "@/data/education";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function EducationSection() {
  return (
    <section id="education" className="section-py scroll-mt-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading eyebrow="education" title="Academic background" />

        <Reveal className="mt-12">
          <div className="glass rounded-2xl p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <TbSchool size={24} aria-hidden />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold text-foreground">
                    {education.school}
                  </h3>
                  <span className="font-mono text-xs text-accent">
                    {education.period}
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted">{education.degree}</p>

                <div className="mt-4 inline-flex items-center gap-2 rounded-lg border border-border-subtle bg-surface px-3 py-1.5">
                  <TbChartBar size={16} className="text-accent-2" aria-hidden />
                  <span className="text-sm text-foreground">
                    GPA:{" "}
                    <span className="font-semibold">{education.gpa}</span>
                  </span>
                </div>

                <div className="mt-5">
                  <h4 className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground">
                    <TbAward size={16} className="text-accent" aria-hidden />
                    Awards
                  </h4>
                  <ul className="space-y-1.5">
                    {education.awards.map((award) => (
                      <li
                        key={award}
                        className="flex gap-2 text-sm leading-6 text-muted"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {award}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
