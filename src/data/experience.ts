export type Experience = {
  role: string;
  org: string;
  period: string;
  points: string[];
  /** Optional tech-stack tags shown under the role. */
  stack?: string[];
};

export const experiences: Experience[] = [
  {
    role: "Full-Stack Developer · Information Technology",
    org: "Acore Technology",
    period: "December 2025 – Present",
    points: [
      "Deliver new features and forms, and resolve issues through bug reports.",
      "Manage ERP and CRM updates and feature development.",
      "Use AI-assisted development with Claude Code to build and ship faster.",
      "Work directly with clients to troubleshoot and fix problems in their systems.",
      "Migrate data from Zoho and Shopify into company systems.",
    ],
    stack: [
      "Next.js",
      "Supabase",
      "AWS",
      "Azure",
      "Shopify Integration",
      "Zoho Integration",
    ],
  },
  {
    role: "Freelance Web Developer",
    org: "Self-employed",
    period: "January 2023 – December 2025",
    points: [
      "Deliver custom web solutions for clients across industries.",
      "Build responsive websites and business applications.",
      "Focus on performance, usability, and maintainability.",
    ],
  },
  {
    role: "IT Support",
    org: "Municipality of Sta. Maria, Bulacan",
    period: "August 2024 – December 2024",
    points: [
      "Provided technical support and troubleshooting.",
      "Performed OS installations and maintenance.",
      "Improved IT efficiency and uptime by 25%.",
    ],
  },
  {
    role: "Full-Stack Developer",
    org: "M5B Hardware",
    period: "September 2023 – October 2023",
    points: [
      "Developed an inventory management and POS system.",
      "Reduced manual entry errors by 40%.",
      "Built using PHP, JavaScript, and MySQL.",
    ],
  },
];
