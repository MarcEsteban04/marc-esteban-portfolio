export type Project = {
  slug: string;
  title: string;
  /** Short one-liner used on the card. */
  summary: string;
  /** Longer description shown on the case-study page intro. */
  description: string;
  tech: string[];
  /** Measurable business outcome shown as a highlighted metric. */
  impact: string;
  repoUrl: string;
  demoUrl: string;
  /** Tailwind gradient classes used to render a placeholder mockup. */
  gradient: string;
  featured: boolean;
  // Case-study fields (spec Section 7)
  caseStudy: {
    problem: string;
    goals: string[];
    technologies: string[];
    challenges: string[];
    process: string[];
    results: string[];
    lessons: string[];
    future: string[];
  };
};

export const projects: Project[] = [
  {
    slug: "inventory-pos-system",
    title: "Inventory Management System with POS",
    summary:
      "Inventory tracking with integrated Point-of-Sale for a hardware retail business.",
    description:
      "A full inventory management and Point-of-Sale system built for M5B Hardware to replace manual, error-prone stock tracking with a reliable digital workflow that cashiers and managers could use daily.",
    tech: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
    impact: "Reduced manual inventory entry errors by 40%",
    repoUrl: "https://github.com/MarcEsteban04",
    demoUrl: "#",
    gradient: "from-emerald-500/30 via-teal-500/20 to-cyan-500/30",
    featured: true,
    caseStudy: {
      problem:
        "M5B Hardware tracked stock and sales manually on paper and spreadsheets, leading to frequent counting errors, stock discrepancies, and slow checkouts.",
      goals: [
        "Digitize inventory tracking with real-time stock levels",
        "Integrate a Point-of-Sale flow for fast, accurate checkouts",
        "Reduce human error in stock and sales records",
        "Provide simple reporting for management",
      ],
      technologies: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3"],
      challenges: [
        "Designing a relational schema that keeps inventory and sales consistent",
        "Handling concurrent stock updates during checkout without race conditions",
        "Building an interface non-technical staff could learn quickly",
      ],
      process: [
        "Gathered requirements by observing the existing manual workflow",
        "Modeled the database (products, categories, stock movements, sales)",
        "Built CRUD inventory management and a barcode-friendly POS screen",
        "Added receipt generation and basic sales/stock reports",
        "Tested with real staff and iterated on the UI",
      ],
      results: [
        "Cut manual inventory entry errors by ~40%",
        "Faster checkout and automatic stock deduction per sale",
        "Clear visibility into low-stock items for reordering",
      ],
      lessons: [
        "Simple, guided UIs beat feature-rich ones for daily operational tools",
        "Data integrity constraints at the database level prevent whole classes of bugs",
      ],
      future: [
        "Migrate the stack to a modern JS framework with an API layer",
        "Add supplier management and purchase orders",
        "Introduce role-based access control and audit logs",
      ],
    },
  },
  {
    slug: "ai-powered-automation",
    title: "AI-Powered Automation Project",
    summary:
      "Google Gemini integrated into business workflows to automate repetitive tasks.",
    description:
      "An automation project that embeds Google Gemini into everyday business workflows — drafting content, summarizing data, and reducing repetitive manual steps — to demonstrate practical, low-cost AI adoption for small businesses.",
    tech: ["Google Gemini API", "Node.js", "JavaScript", "REST APIs"],
    impact: "Improved operational efficiency by 25%",
    repoUrl: "https://github.com/MarcEsteban04",
    demoUrl: "#",
    gradient: "from-cyan-500/30 via-sky-500/20 to-indigo-500/30",
    featured: true,
    caseStudy: {
      problem:
        "Repetitive knowledge work — drafting, summarizing, and reformatting data — consumed hours of staff time each week with little added value.",
      goals: [
        "Automate repetitive content and data tasks with AI",
        "Keep the solution affordable and easy to maintain",
        "Demonstrate measurable efficiency gains",
      ],
      technologies: ["Google Gemini API", "Node.js", "JavaScript", "REST APIs"],
      challenges: [
        "Prompt engineering for consistent, reliable output",
        "Handling API rate limits and errors gracefully",
        "Keeping sensitive data safe when calling external AI services",
      ],
      process: [
        "Identified the highest-friction repetitive tasks",
        "Prototyped prompts and validated output quality with Gemini",
        "Built a small Node.js service to orchestrate AI calls",
        "Added guardrails, retries, and output validation",
        "Measured time saved against the manual baseline",
      ],
      results: [
        "Improved operational efficiency by ~25%",
        "Freed staff to focus on higher-value work",
        "Showed a repeatable pattern for AI adoption in small businesses",
      ],
      lessons: [
        "Good prompts and output validation matter more than model choice",
        "AI works best augmenting a human-in-the-loop, not replacing it",
      ],
      future: [
        "Add a UI dashboard for non-technical users",
        "Support multiple AI providers with a fallback strategy",
        "Expand automations to more departments",
      ],
    },
  },
  {
    slug: "freelance-business-websites",
    title: "Freelance Business Websites",
    summary:
      "Responsive, SEO-optimized, mobile-first websites for freelance clients.",
    description:
      "A collection of responsive marketing and business websites delivered to freelance clients, focused on mobile-first design, fast load times, and search-engine visibility.",
    tech: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript", "SEO"],
    impact: "Mobile-first delivery with measurable SEO & performance gains",
    repoUrl: "https://github.com/MarcEsteban04",
    demoUrl: "#",
    gradient: "from-fuchsia-500/30 via-purple-500/20 to-emerald-500/30",
    featured: true,
    caseStudy: {
      problem:
        "Small business clients needed modern, mobile-friendly websites that loaded quickly and could be found on search engines, often replacing outdated or non-existent sites.",
      goals: [
        "Deliver responsive, mobile-first designs",
        "Optimize for performance and Core Web Vitals",
        "Improve search visibility through on-page SEO",
      ],
      technologies: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript", "SEO"],
      challenges: [
        "Meeting varied client branding needs on tight timelines",
        "Balancing rich visuals with fast load times",
        "Educating clients on content and SEO best practices",
      ],
      process: [
        "Ran a discovery call to capture goals and branding",
        "Designed mobile-first layouts and iterated with the client",
        "Built responsive, accessible pages with semantic HTML",
        "Optimized images, fonts, and metadata for performance and SEO",
        "Handed off with guidance for ongoing content updates",
      ],
      results: [
        "Consistently fast, responsive sites across devices",
        "Improved search rankings and organic reach for clients",
        "Repeat business and referrals from satisfied clients",
      ],
      lessons: [
        "Clear scoping upfront prevents scope creep later",
        "Performance and SEO are features clients feel, even if they can't name them",
      ],
      future: [
        "Offer CMS-backed sites so clients can self-edit",
        "Add analytics dashboards for clients",
      ],
    },
  },
  {
    slug: "mern-stack-application",
    title: "MERN Stack Application",
    summary:
      "Full-stack app with a React frontend, Node/Express API, and MongoDB.",
    description:
      "A full-stack MERN application featuring a React frontend, a Node.js/Express REST API, MongoDB persistence, and JWT-based authentication — built to practice end-to-end modern web development.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    impact: "End-to-end authenticated CRUD app with a REST API",
    repoUrl: "https://github.com/MarcEsteban04",
    demoUrl: "#",
    gradient: "from-teal-500/30 via-emerald-500/20 to-lime-500/30",
    featured: false,
    caseStudy: {
      problem:
        "I wanted to build a complete, production-shaped application to solidify full-stack fundamentals: API design, data modeling, and secure authentication.",
      goals: [
        "Implement a clean REST API with Express",
        "Model data effectively in MongoDB",
        "Secure routes with JWT authentication",
        "Build a responsive React frontend consuming the API",
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
      challenges: [
        "Structuring the API and separating concerns cleanly",
        "Implementing secure auth (hashing, tokens, protected routes)",
        "Managing frontend state and async data fetching",
      ],
      process: [
        "Designed the data models and API contract",
        "Built Express routes, controllers, and middleware",
        "Added JWT auth with protected endpoints",
        "Built the React UI with forms, lists, and auth flows",
        "Tested the full request lifecycle end to end",
      ],
      results: [
        "A working authenticated CRUD application",
        "Reusable auth and API patterns for future projects",
      ],
      lessons: [
        "Designing the API contract first keeps frontend and backend in sync",
        "Auth is easy to get subtly wrong — lean on well-tested patterns",
      ],
      future: [
        "Add automated tests and CI",
        "Introduce TypeScript across the stack",
        "Deploy with a managed database and CDN",
      ],
    },
  },
];

export const getProject = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);
