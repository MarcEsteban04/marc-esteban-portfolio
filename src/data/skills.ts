import type { IconType } from "react-icons";
import {
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiBootstrap,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiPhp,
  SiJsonwebtokens,
  SiMysql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiGooglegemini,
  SiCursor,
  SiClaude,
  SiNextdotjs,
  SiSupabase,
} from "react-icons/si";
import {
  TbApi,
  TbSeo,
  TbDeviceMobileCode,
  TbBrain,
  TbBrandOpenai,
} from "react-icons/tb";

/** `color` is the brand hex used to tint the icon (chosen to stay legible on the dark UI). */
export type Skill = { name: string; icon: IconType; color: string };
export type SkillCategory = { title: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss, color: "#1572B6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express.js", icon: SiExpress, color: "#E6E8EC" },
      { name: "PHP", icon: SiPhp, color: "#8892BF" },
      { name: "REST APIs", icon: TbApi, color: "#22D3EE" },
      { name: "JWT Auth", icon: SiJsonwebtokens, color: "#FB015B" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#E6E8EC" },
      { name: "SEO", icon: TbSeo, color: "#34D399" },
      { name: "Responsive Design", icon: TbDeviceMobileCode, color: "#22D3EE" },
    ],
  },
  {
    title: "AI Tools",
    skills: [
      { name: "Cursor", icon: SiCursor, color: "#E6E8EC" },
      { name: "Google Gemini", icon: SiGooglegemini, color: "#8E7BF9" },
      { name: "Claude Code", icon: SiClaude, color: "#D97757" },
      { name: "ChatGPT", icon: TbBrandOpenai, color: "#10A37F" },
    ],
  },
  {
    title: "Currently Learning",
    skills: [
      { name: "Next.js", icon: SiNextdotjs, color: "#E6E8EC" },
      { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
      { name: "Advanced AI Integrations", icon: TbBrain, color: "#34D399" },
    ],
  },
];
