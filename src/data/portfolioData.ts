export interface Project {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  company: string;
  region?: string;
  category: 'All' | 'AI & Automation' | 'FinTech' | 'SaaS' | 'Mobile & Web';
  tags: string[];
  metrics?: string;
  description: string[];
  featured?: boolean;
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  bullets: string[];
  highlightTechnologies: string[];
}

export interface Certification {
  id: string;
  title: string;
  code: string;
  issuer: string;
  date: string;
  badgeColor: string;
  description: string;
  certificateNumber?: string;
  imageWebp?: string;
  imageJpg?: string;
  hasProof: boolean;
}

export interface SkillCategory {
  category: string;
  iconName: string;
  skills: { name: string; level?: 'Expert' | 'Advanced' | 'Proficient'; highlight?: boolean }[];
}

const baseUrl = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

export const personalInfo = {
  name: "Uosef Talaat",
  headline: "Software Tester / QC",
  subheadline: "Manual & Automated Testing across Web, Mobile (Android & iOS), and API",
  location: "Cairo, Egypt",
  email: "contact@uoseftalaat.online",
  phone: "+201063935766",
  linkedin: "https://www.linkedin.com/in/uoseftalaat",
  resumePath: `${baseUrl}Uosef_talaat.pdf`,
  bio: "Software Tester / QC Engineer with hands-on expertise in manual and automated testing across Web, Mobile (Android & iOS), and API layers within fast-paced Agile engineering teams. Experienced in functional testing, regression analysis, risk-based test planning, and building robust automation suites with Playwright, Selenium, and Appium to guarantee top-tier release reliability.",
  availability: "Open to Software Tester / QC Roles",
};

export const keyMetrics = [
  {
    value: "30%",
    suffix: "Faster",
    label: "Test Authoring & Delivery",
    subtext: "Achieved via SpecKit and Agentic AI testing workflows",
    icon: "Zap",
  },
  {
    value: "99%",
    suffix: "Coverage",
    label: "Backend API Automation",
    subtext: "Maintaining 99% automated API test coverage across all projects",
    icon: "Target",
  },
  {
    value: "3x",
    suffix: "Certified",
    label: "ISTQB Credentials",
    subtext: "CTFL, Mobile MAT, and GenAI Testing certified",
    icon: "Award",
  },
  {
    value: "20%",
    suffix: "Faster CI",
    label: "CI Pipeline & Cloud Cost Drop",
    subtext: "Eliminated cloud linter pipelines via Git pre-commit hooks, dropping build costs and accelerating merges by 20%",
    icon: "GitBranch",
  },
];

export const experienceData: ExperienceItem[] = [
  {
    role: "QC Engineer",
    company: "Areeb Technologies",
    location: "Cairo, Egypt",
    period: "Sep 2025 – Present",
    type: "Full-Time",
    bullets: [
      "Partner with cross-functional product and engineering teams to embed QA best practices, define acceptance criteria, and ensure consistent release quality in sprint cadences.",
      "Design and maintain scalable API, Web, and Mobile automation frameworks using Playwright (TypeScript), Selenium, Appium, and HTTParty.",
      "Migrated Android and iOS regression test execution from a dedicated server to an optimized local execution environment, eliminating dedicated server overhead and external dependency.",
      "Implemented a local pre-commit hook for Ruby linting, offloading static checks from the dedicated CI pipeline and reducing pipeline execution time by 20%.",
      "Championed the adoption of AI-assisted testing via SpecKit with Ruby/BDD, and subsequently contributed to migrating test suites to a high-performance Playwright (TypeScript) framework for Web and API.",
      "Delivered end-to-end QC across live FinTech, SaaS, and AI-native products serving the Saudi Arabian market.",
    ],
    highlightTechnologies: [
      "Playwright (TypeScript)",
      "Appium (Ruby)",
      "SpecKit",
      "Selenium",
      "HTTParty",
      "CI/CD Optimization",
      "FinTech & SaaS",
    ],
  },
];

export const projectsData: Project[] = [
  {
    id: "arm",
    title: "ARM – Resource & Team Management Platform",
    subtitle: "AI-Augmented Autonomous Test Engineering",
    role: "QC Engineer",
    company: "Areeb Technologies",
    category: "AI & Automation",
    tags: ["SpecKit", "Generative AI", "Knowledge Graphs", "Playwright", "TypeScript", "Ruby BDD"],
    metrics: "0% → 85% Automation Coverage | 30% Speedup",
    featured: true,
    description: [
      "Led testing for an AI-native product using SpecKit, operationalizing AI-driven workflows for automated test creation and exploratory scenario modeling.",
      "Engineered domain-specific test skills and structured knowledge graphs to guide autonomous agents, establishing deterministic blueprints that resolved complex automation roadblocks.",
      "Improved test authoring delivery speed by 30% through AI-assisted workflows while maintaining strict defect-detection standards.",
      "Contributed to migrating the test suite from Ruby BDD to Playwright (TypeScript), expanding automated scenario coverage from 0% to 85%.",
    ],
  },
  {
    id: "atlas",
    title: "Atlas (UCaffee) – Café Management Application",
    subtitle: "Sole QA Ownership & Test Architecture from Scratch",
    role: "QC Engineer",
    company: "Areeb Technologies",
    region: "Saudi Arabia",
    category: "SaaS",
    tags: ["API Automation", "HTTParty", "Test Lifecycle Architecture", "Generative AI", "Mobile & POS"],
    metrics: "99% Backend API Coverage & Zero-Defect Launch",
    featured: true,
    description: [
      "Architected the testing infrastructure and test lifecycle from scratch, operating as the sole QA engineer throughout the foundational launch phase.",
      "Authored comprehensive test plans and established the automated API test suite from zero, achieving 99% automated test coverage across critical backend endpoints.",
      "Leveraged AI tooling for rapid test case authoring and edge-case generation, reducing cycle times during initial product delivery.",
    ],
  },
  {
    id: "cadaa",
    title: "Cadaa – FinTech Platform for Real Estate",
    subtitle: "High-Stakes Financial Transactions & Multi-Platform QC",
    role: "QC Engineer",
    company: "Areeb Technologies",
    region: "Saudi Arabia",
    category: "FinTech",
    tags: ["FinTech", "Android", "iOS", "Web", "Playwright", "Security & Reconciliation"],
    metrics: "+10% Automated High-Priority Regression Coverage",
    featured: true,
    description: [
      "Collaborated with senior QA engineers to design end-to-end test strategies, scenario matrices, and acceptance criteria for financial transaction workflows.",
      "Executed manual and automated testing across Android, iOS, and Web, increasing automated regression coverage by 10% across high-priority flows.",
      "Conducted structured functional and security testing for the internal back-office management and reconciliation dashboard.",
    ],
  },
  {
    id: "domo",
    title: "Domo – SaaS Project Management",
    subtitle: "Single-to-Multi-Tenant Architecture Migration QC",
    role: "QC Engineer",
    company: "Areeb Capital / Areeb Technologies",
    category: "SaaS",
    tags: ["Multi-Tenant Architecture", "Tenant Isolation", "Playwright", "TypeScript", "Ruby BDD Migration"],
    metrics: "0% → 60% Playwright Test Automation",
    featured: false,
    description: [
      "Led quality validation during the platform’s architectural transition from a single-tenant application to a multi-tenant SaaS model, safeguarding data integrity and tenant isolation.",
      "Migrated legacy web automation tests from Ruby BDD to Playwright (TypeScript), scaling regression test automation coverage from 0% to 60%.",
    ],
  },
  {
    id: "dib",
    title: "Dib – Complex Workflow Management Platform",
    subtitle: "Stateful Workflow Validation (Parent of Domo)",
    role: "QC Engineer",
    company: "Areeb Capital / Areeb Technologies",
    category: "SaaS",
    tags: ["Stateful Workflows", "API Testing", "Web Automation", "Regression Analysis"],
    metrics: "Resilient End-to-End Interdependent Workflow Testing",
    featured: false,
    description: [
      "Engineered resilient API and web automation suites for deep, stateful workflow management processes, minimizing regression risks in interdependent modules.",
      "Guaranteed dependable data flow across interdependent business stages and asynchronous job queues.",
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Test Automation",
    iconName: "Terminal",
    skills: [
      { name: "Playwright (TypeScript)", level: "Expert", highlight: true },
      { name: "Appium (iOS & Android)", level: "Advanced", highlight: true },
      { name: "Selenium / Capybara", level: "Advanced", highlight: true },
      { name: "Cucumber (BDD)", level: "Advanced" },
      { name: "HTTParty (API)", level: "Advanced" },
      { name: "Postman", level: "Expert" },
    ],
  },
  {
    category: "AI & Modern Testing Tools",
    iconName: "Bot",
    skills: [
      { name: "SpecKit (Agent Testing)", level: "Expert", highlight: true },
      { name: "Generative AI for Testing", level: "Expert", highlight: true },
      { name: "Autonomous Agent Workflows", level: "Advanced", highlight: true },
      { name: "Claude & Gemini CLI", level: "Advanced" },
      { name: "Antigravity", level: "Advanced" },
      { name: "GitHub Copilot", level: "Advanced" },
    ],
  },
  {
    category: "Testing Methodologies",
    iconName: "CheckCircle2",
    skills: [
      { name: "API & Microservices Testing", level: "Expert" },
      { name: "Mobile Testing (iOS & Android)", level: "Expert" },
      { name: "Regression Analysis", level: "Expert" },
      { name: "Risk-Based Test Strategy", level: "Expert" },
      { name: "User Acceptance Testing (UAT)", level: "Advanced" },
      { name: "CI/CD Quality Gates", level: "Expert" },
    ],
  },
  {
    category: "Languages & Frameworks",
    iconName: "Code2",
    skills: [
      { name: "TypeScript", level: "Advanced" },
      { name: "Ruby", level: "Advanced" },
      { name: "Python", level: "Proficient" },
      { name: "JavaScript", level: "Advanced" },
      { name: "SQL", level: "Proficient" },
    ],
  },
  {
    category: "DevOps & CI/CD",
    iconName: "Layers",
    skills: [
      { name: "GitHub Actions", level: "Advanced", highlight: true },
      { name: "Azure DevOps", level: "Advanced" },
      { name: "Bitrise Pipelines", level: "Advanced" },
      { name: "Git & Pre-commit Hooks", level: "Expert" },
      { name: "JIRA & Agile Ceremonies", level: "Expert" },
    ],
  },
];

export const certificationsData: Certification[] = [
  {
    id: "ctfl-mat",
    title: "ISTQB MAT – Mobile Application Tester",
    code: "CTFL-MAT",
    issuer: "Egyptian Software Testing Board (ESTB) / ISTQB",
    date: "Dec 2025",
    badgeColor: "from-[#C0392B] to-[#855C00]",
    description: "Advanced qualification for cross-platform mobile testing across Android & iOS, device fragmentation, network conditions, performance, accessibility, and security.",
    certificateNumber: "# 251209078",
    imageWebp: `${baseUrl}certifications/IMG_2779.webp`,
    imageJpg: `${baseUrl}certifications/IMG_2779.jpg`,
    hasProof: true,
  },
  {
    id: "ctfl",
    title: "ISTQB CTFL – Foundation Level Certificate",
    code: "CTFL",
    issuer: "Egyptian Software Testing Board (ESTB) / ISTQB",
    date: "May 2025",
    badgeColor: "from-[#855C00] to-[#C0392B]",
    description: "Globally recognized baseline certification establishing core mastery in software quality principles, lifecycle phases, static testing, and test management.",
    certificateNumber: "# 250429020",
    imageWebp: `${baseUrl}certifications/IMG_2780.webp`,
    imageJpg: `${baseUrl}certifications/IMG_2780.jpg`,
    hasProof: true,
  },
  {
    id: "genai",
    title: "ISTQB GenAI – Testing with Generative AI",
    code: "CT-GenAI",
    issuer: "Egyptian Software Testing Board (ESTB) / ISTQB",
    date: "Feb 2026",
    badgeColor: "from-[#C0392B] via-[#855C00] to-[#C0392B]",
    description: "Specialized qualification validating expertise in AI-augmented test engineering, prompt-driven test case generation, LLM defect validation, and autonomous test agents.",
    certificateNumber: "# 260216095",
    imageWebp: `${baseUrl}certifications/IMG_2787.webp`,
    imageJpg: `${baseUrl}certifications/IMG_2787.jpg`,
    hasProof: true,
  },
];

export const educationData = {
  institution: "Faculty of Computer and Information Sciences – Ain Shams University",
  degree: "Bachelor’s Degree in Computer and Information Sciences",
  location: "Cairo, Egypt",
  period: "2020 – 2024",
  focus: "Software Engineering, Algorithms, Database Systems, Computer Networks, and Software Quality Assurance",
};
