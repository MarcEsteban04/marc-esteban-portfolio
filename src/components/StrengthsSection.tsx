import { strengths } from "@/data/strengths";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function StrengthsSection() {
  return (
    <section
      id="strengths"
      className="section-py scroll-mt-16 bg-background-soft/40"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="strengths"
          title="What I bring to a team"
        />

        <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {strengths.map(({ title, icon: Icon, blurb }, i) => (
            <li key={title}>
              <Reveal delay={(i % 3) * 0.06}>
                <div className="glass group flex h-full items-start gap-4 rounded-xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-surface-strong">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110">
                    <Icon size={22} aria-hidden />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-muted">{blurb}</p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
