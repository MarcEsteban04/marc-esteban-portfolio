/**
 * Central site configuration.
 * Swap the placeholder URLs / paths below for real ones when available.
 */
export const site = {
  name: "Marc Esteban",
  role: "Full-Stack Web Developer",
  title: "Marc Esteban — Full-Stack Web Developer",
  description:
    "Junior full-stack web developer and Computer Science graduate building modern web applications, business systems, and AI-powered workflows with JavaScript, React, Node.js, and PHP.",
  // Used for canonical/OG URLs and sitemap. Replace with your production domain.
  url: "https://marcesteban.dev",
  email: "marc@acoretechnology.com",
  location: "Sta. Maria, Bulacan, Philippines",
  // TODO: replace placeholders with real profile URLs
  socials: {
    github: "https://github.com/MarcEsteban04",
    linkedin: "https://www.linkedin.com/in/marc-esteban",
    email: "mailto:marc@acoretechnology.com",
  },
  // Served from /public. Swap the file there to update the download.
  resumeUrl: "/marc-resume.pdf",
} as const;

export type NavItem = { label: string; href: string };

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Strengths", href: "#strengths" },
  { label: "Contact", href: "#contact" },
];

/** Roles cycled through by the hero typing animation. */
export const typedRoles: string[] = [
  "Full-Stack Web Developer",
  "AI-Assisted Developer",
  "Computer Science Graduate",
  "Freelance Web Developer",
];

export const heroIntro =
  "I build modern web applications and business systems using JavaScript, React, Node.js, PHP, and AI-powered workflows. I enjoy creating practical solutions that improve efficiency and deliver real value to users and businesses.";
