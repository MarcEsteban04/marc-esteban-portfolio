import { skillCategories } from "@/data/skills";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function SkillsGrid() {
  return (
    <section
      id="skills"
      className="section-py scroll-mt-16 bg-background-soft/40"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="skills --list"
          title="Technologies I work with"
          description="A practical toolkit spanning frontend, backend, databases, and AI-assisted development."
        />

        <div className="mt-12 space-y-10">
          {skillCategories.map((category, ci) => (
            <Reveal key={category.title} delay={ci * 0.05}>
              <h3 className="mb-4 font-mono text-sm text-muted">
                <span className="text-accent">#</span> {category.title}
              </h3>
              <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                {category.skills.map(({ name, icon: Icon, color }) => (
                  <li
                    key={name}
                    className="glass group flex flex-col items-center gap-2 rounded-xl px-3 py-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-surface-strong"
                  >
                    <Icon
                      size={30}
                      style={{ color }}
                      className="transition-transform duration-300 group-hover:scale-110"
                      aria-hidden
                    />
                    <span className="text-xs font-medium text-foreground/90">
                      {name}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
