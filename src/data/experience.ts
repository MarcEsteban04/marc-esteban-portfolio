export type Experience = {
  role: string;
  org: string;
  period: string;
  points: string[];
};

export const experiences: Experience[] = [
  {
    role: "Freelance Web Developer",
    org: "Self-employed",
    period: "January 2023 – Present",
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
