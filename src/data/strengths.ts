import type { IconType } from "react-icons";
import {
  TbBulb,
  TbRefresh,
  TbUsersGroup,
  TbClock,
  TbMessages,
  TbListCheck,
  TbBrain,
  TbStack2,
  TbSparkles,
} from "react-icons/tb";

export type Strength = { title: string; icon: IconType; blurb: string };

export const strengths: Strength[] = [
  {
    title: "Full-Stack Development",
    icon: TbStack2,
    blurb:
      "Building end-to-end web apps across frontend, backend, and databases.",
  },
  {
    title: "AI-Assisted Development",
    icon: TbSparkles,
    blurb:
      "Using AI tools like Claude Code to ship features faster and smarter.",
  },
  {
    title: "Problem Solving",
    icon: TbBulb,
    blurb: "Breaking complex problems into practical, shippable solutions.",
  },
  {
    title: "Adaptability",
    icon: TbRefresh,
    blurb: "Picking up new tools and stacks quickly as projects demand.",
  },
  {
    title: "Leadership",
    icon: TbUsersGroup,
    blurb: "Guiding projects and collaborating to keep work moving.",
  },
  {
    title: "Time Management",
    icon: TbClock,
    blurb: "Delivering freelance work reliably against real deadlines.",
  },
  {
    title: "Communication",
    icon: TbMessages,
    blurb: "Translating technical detail into clear client language.",
  },
  {
    title: "Attention to Detail",
    icon: TbListCheck,
    blurb: "Catching the small issues before they reach production.",
  },
  {
    title: "Critical Thinking",
    icon: TbBrain,
    blurb: "Evaluating trade-offs to choose the right approach.",
  },
];
