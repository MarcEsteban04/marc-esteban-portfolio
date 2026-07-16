export type Stat = {
  /** Numeric target for the count-up animation. */
  value: number;
  suffix?: string;
  label: string;
};

export const stats: Stat[] = [
  { value: 3, suffix: "+", label: "Years of Experience" },
  { value: 15, suffix: "+", label: "Projects Completed" },
  { value: 18, suffix: "+", label: "Technologies Used" },
  { value: 3, suffix: "+", label: "AI Tools Utilized" },
];

export const aboutParagraphs: string[] = [
  "I'm a Computer Science graduate from ACLC College of Sta. Maria and a freelance web developer with around 3 years of hands-on experience building websites and business applications.",
  "I've built inventory management systems, POS solutions, and web applications, and I integrate AI tools such as Google Gemini to improve automation and productivity. I have a strong interest in AI-assisted software development and modern web technologies.",
];

export const aboutQuote =
  "I enjoy learning emerging AI technologies and finding ways to use them to build software faster and smarter.";
