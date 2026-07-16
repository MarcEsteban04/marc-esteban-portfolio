"use client";

import Image from "next/image";
import { useCountUp } from "@/hooks/useCountUp";
import { stats, aboutParagraphs, aboutQuote, type Stat } from "@/data/stats";
import { site } from "@/data/site";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function AboutSection() {
  return (
    <section id="about" className="section-py scroll-mt-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="about"
          title="A fresh graduate who ships real solutions"
        />

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-5">
          {/* Portrait */}
          <Reveal className="lg:col-span-2">
            <div className="relative mx-auto max-w-xs lg:max-w-none">
              <div
                className="absolute -inset-3 -z-10 rounded-3xl bg-gradient-to-br from-accent/30 to-accent-2/20 blur-2xl"
                aria-hidden
              />
              <div className="glass-strong overflow-hidden rounded-2xl p-2">
                <Image
                  src="/profilepic.png"
                  alt={`Portrait of ${site.name}`}
                  width={892}
                  height={939}
                  priority={false}
                  className="h-auto w-full rounded-xl object-cover"
                  sizes="(max-width: 1024px) 20rem, 40vw"
                />
              </div>
            </div>
          </Reveal>

          {/* Bio */}
          <Reveal delay={0.1} className="lg:col-span-3">
            <div className="space-y-5 text-base leading-7 text-muted">
              {aboutParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <blockquote className="glass mt-6 rounded-xl border-l-2 border-l-accent p-5 font-mono text-sm italic text-foreground/90">
              &ldquo;{aboutQuote}&rdquo;
            </blockquote>
          </Reveal>
        </div>

        {/* Stats */}
        <Reveal delay={0.15}>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((stat) => (
              <StatTile key={stat.label} stat={stat} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function StatTile({ stat }: { stat: Stat }) {
  const { ref, value } = useCountUp(stat.value);
  return (
    <div className="glass rounded-xl p-5 text-center transition-colors hover:bg-surface-strong">
      <div className="text-3xl font-bold text-gradient sm:text-4xl">
        <span ref={ref}>{value}</span>
        {stat.suffix}
      </div>
      <div className="mt-1 text-xs text-muted sm:text-sm">{stat.label}</div>
    </div>
  );
}
