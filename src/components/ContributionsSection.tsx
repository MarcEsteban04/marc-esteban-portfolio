import type { CSSProperties } from "react";
import { FaGithub } from "react-icons/fa6";
import { site } from "@/data/site";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

type Day = { date: string; count: number; level: number };
type ApiResponse = { total?: Record<string, number>; contributions?: Day[] };

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];
const DAY_LABELS = ["", "Mon", "", "Wed", "", "Fri", ""];
// Opacity ramp for contribution levels 0–4 (0 handled separately).
const LEVEL_OPACITY = [0, 28, 50, 74, 100];

const usernameFromUrl = (url: string) =>
  url.replace(/\/+$/, "").split("/").pop() ?? "";

/** UTC weekday (0=Sun … 6=Sat) from a YYYY-MM-DD string, tz-safe. */
const utcDate = (iso: string) => new Date(`${iso}T00:00:00Z`);

const cellStyle = (level: number): CSSProperties =>
  level <= 0
    ? { backgroundColor: "color-mix(in srgb, var(--foreground) 9%, transparent)" }
    : {
        backgroundColor: `color-mix(in srgb, var(--accent) ${LEVEL_OPACITY[level]}%, transparent)`,
      };

async function getContributions(
  user: string,
): Promise<{ days: Day[]; total: number } | null> {
  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${user}?y=last`,
      { next: { revalidate: 86400 } },
    );
    if (!res.ok) return null;
    const json = (await res.json()) as ApiResponse;
    if (!json.contributions?.length) return null;
    const total =
      json.total?.lastYear ??
      json.contributions.reduce((sum, d) => sum + d.count, 0);
    return { days: json.contributions, total };
  } catch {
    return null;
  }
}

/** Group daily contributions into week columns (7 rows, Sun→Sat). */
function buildWeeks(days: Day[]): (Day | null)[][] {
  const weeks: (Day | null)[][] = [];
  let week: (Day | null)[] = new Array(7).fill(null);
  for (const day of days) {
    week[utcDate(day.date).getUTCDay()] = day;
    if (utcDate(day.date).getUTCDay() === 6) {
      weeks.push(week);
      week = new Array(7).fill(null);
    }
  }
  if (week.some(Boolean)) weeks.push(week);
  return weeks;
}

/** A month label per column, shown only when the month changes. */
function monthLabels(weeks: (Day | null)[][]): string[] {
  let prev = -1;
  return weeks.map((week) => {
    const first = week.find((d): d is Day => d !== null);
    if (!first) return "";
    const month = utcDate(first.date).getUTCMonth();
    const label = month !== prev ? MONTHS[month] : "";
    prev = month;
    return label;
  });
}

export async function ContributionsSection() {
  const user = usernameFromUrl(site.socials.github);
  const data = await getContributions(user);

  return (
    <section
      id="github"
      className="section-py scroll-mt-16 bg-background-soft/40"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="git log --graph"
          title="GitHub Contributions"
          description="My open-source and project activity over the last year."
        />

        <Reveal className="mt-12">
          <div className="glass rounded-2xl p-5 sm:p-6">
            {data ? (
              <>
                <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                  <p className="text-sm text-muted">
                    <span className="font-semibold text-foreground">
                      {data.total.toLocaleString("en-US")}
                    </span>{" "}
                    contributions in the last year
                  </p>
                  <a
                    href={site.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-accent transition-opacity hover:opacity-80"
                  >
                    <FaGithub size={16} /> @{user}
                  </a>
                </div>
                <ContributionGraph days={data.days} />
                <Legend />
              </>
            ) : (
              <Fallback user={user} />
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ContributionGraph({ days }: { days: Day[] }) {
  const weeks = buildWeeks(days);
  const labels = monthLabels(weeks);

  return (
    <div className="overflow-x-auto pb-1">
      <div className="min-w-max">
        {/* Month labels */}
        <div className="mb-1 flex gap-[3px] pl-8">
          {labels.map((label, i) => (
            <div
              key={i}
              className="w-[11px] shrink-0 text-[10px] leading-none text-muted-dim"
            >
              <span className="whitespace-nowrap">{label}</span>
            </div>
          ))}
        </div>

        <div className="flex gap-[3px]">
          {/* Day-of-week labels */}
          <div className="mr-1 flex w-7 shrink-0 flex-col gap-[3px]">
            {DAY_LABELS.map((label, i) => (
              <div
                key={i}
                className="h-[11px] text-[10px] leading-[11px] text-muted-dim"
              >
                {label}
              </div>
            ))}
          </div>

          {/* Week columns */}
          {weeks.map((week, wi) => (
            <div key={wi} className="flex flex-col gap-[3px]">
              {week.map((day, di) => (
                <div
                  key={di}
                  className="h-[11px] w-[11px] rounded-[2px]"
                  style={cellStyle(day ? day.level : -1)}
                  title={
                    day
                      ? `${day.count} contribution${day.count === 1 ? "" : "s"} on ${day.date}`
                      : undefined
                  }
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Legend() {
  return (
    <div className="mt-4 flex items-center justify-end gap-1.5 text-[10px] text-muted-dim">
      <span>Less</span>
      {[0, 1, 2, 3, 4].map((level) => (
        <div
          key={level}
          className="h-[11px] w-[11px] rounded-[2px]"
          style={cellStyle(level)}
        />
      ))}
      <span>More</span>
    </div>
  );
}

function Fallback({ user }: { user: string }) {
  return (
    <div className="flex flex-col items-center gap-3 py-8 text-center">
      <FaGithub size={32} className="text-muted-dim" aria-hidden />
      <p className="text-sm text-muted">
        Couldn&apos;t load the contribution graph right now.
      </p>
      <a
        href={`https://github.com/${user}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-lg border border-border-strong bg-surface px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-surface-strong"
      >
        <FaGithub size={16} /> View @{user} on GitHub
      </a>
    </div>
  );
}
