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

export type Skill = { name: string; icon: IconType };
export type SkillCategory = { title: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Bootstrap", icon: SiBootstrap },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React.js", icon: SiReact },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "PHP", icon: SiPhp },
      { name: "REST APIs", icon: TbApi },
      { name: "JWT Auth", icon: SiJsonwebtokens },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", icon: SiMysql },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "SEO", icon: TbSeo },
      { name: "Responsive Design", icon: TbDeviceMobileCode },
    ],
  },
  {
    title: "AI Tools",
    skills: [
      { name: "Cursor", icon: SiCursor },
      { name: "Google Gemini", icon: SiGooglegemini },
      { name: "Claude Code", icon: SiClaude },
      { name: "ChatGPT", icon: TbBrandOpenai },
    ],
  },
  {
    title: "Currently Learning",
    skills: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Supabase", icon: SiSupabase },
      { name: "Advanced AI Integrations", icon: TbBrain },
    ],
  },
];
