// ============================================================
// PORTFOLIO DATA — Edit this file to update your entire site
// ============================================================

export const portfolioData = {
  // Personal Info
  name: "Charan",
  fullName: "Charan Kumar",
  title: "Full Stack Developer",
  titles: [
    "Full Stack Developer",
    "React Developer",
    "Node.js Engineer",
    "AI Enthusiast",
    "Open Source Contributor",
  ],
  bio: "I craft production-ready web applications with clean architecture and great user experiences. Currently focused on full-stack development and AI-powered products.",
  longBio: `I'm a full-stack developer who loves turning complex problems into elegant, performant solutions. From Node.js backends to polished React frontends, I build things that work beautifully. I'm actively exploring AI/ML integration in web products and looking for exciting opportunities to grow fast and ship great software.`,
  location: "Chennai, India",
  email: "charan@example.com",
  phone: "+91 98765 43210",
  availability: "Open to opportunities",
  resumePath: "/resume.pdf",

  // Social Links
  social: {
    github: "https://github.com/charan",
    linkedin: "https://linkedin.com/in/charan",
    twitter: "https://twitter.com/charan",
    instagram: "https://instagram.com/charan",
    leetcode: "https://leetcode.com/charan",
    hackerrank: "https://hackerrank.com/charan",
    codechef: "https://codechef.com/users/charan",
    codeforces: "https://codeforces.com/profile/charan",
    devto: "https://dev.to/charan",
    medium: "https://medium.com/@charan",
    youtube: "https://youtube.com/@charan",
  },

  // Stats
  stats: [
    { label: "Projects Built", value: 12, suffix: "+" },
    { label: "Hackathons", value: 5, suffix: "+" },
    { label: "Technologies", value: 20, suffix: "+" },
    { label: "GitHub Stars", value: 48, suffix: "+" },
  ],

  // Education
  education: [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Your University",
      year: "2022 – 2026",
      grade: "8.5 CGPA",
      description: "Focused on Data Structures, Algorithms, DBMS, and Web Technologies.",
    },
    {
      degree: "Higher Secondary (Class XII)",
      institution: "Your School",
      year: "2020 – 2022",
      grade: "92%",
      description: "Science stream with Computer Science.",
    },
  ],

  // Experience
  experience: [
    {
      role: "Full Stack Developer (Project)",
      company: "Self-Initiated",
      year: "2024 – Present",
      description: "Built College Club Management System & UserVault — production-ready CRUD apps with Node.js, Express, MySQL/Supabase.",
      tech: ["Node.js", "Express", "MySQL", "React"],
    },
  ],

  // Skills
  skills: {
    Frontend: [
      { name: "React.js", level: 85, icon: "⚛️" },
      { name: "JavaScript", level: 88, icon: "🟨" },
      { name: "HTML/CSS", level: 92, icon: "🌐" },
      { name: "Tailwind CSS", level: 80, icon: "🎨" },
    ],
    Backend: [
      { name: "Node.js", level: 82, icon: "🟢" },
      { name: "Express.js", level: 80, icon: "🚀" },
      { name: "REST APIs", level: 85, icon: "🔗" },
    ],
    Database: [
      { name: "MySQL", level: 78, icon: "🗄️" },
      { name: "PostgreSQL", level: 72, icon: "🐘" },
      { name: "Supabase", level: 70, icon: "⚡" },
    ],
    Languages: [
      { name: "JavaScript", level: 88, icon: "🟨" },
      { name: "Python", level: 70, icon: "🐍" },
      { name: "C++", level: 65, icon: "⚙️" },
      { name: "SQL", level: 78, icon: "📊" },
    ],
    Tools: [
      { name: "Git & GitHub", level: 85, icon: "🐙" },
      { name: "Postman", level: 80, icon: "📮" },
      { name: "VS Code", level: 90, icon: "💻" },
      { name: "Figma", level: 60, icon: "🎭" },
    ],
    "AI & Cloud": [
      { name: "Supabase", level: 70, icon: "⚡" },
      { name: "Render", level: 68, icon: "☁️" },
      { name: "GitHub Pages", level: 85, icon: "📄" },
    ],
  },

  // Projects
  projects: [
    {
      id: 1,
      title: "College Club Management System",
      description: "A full-stack CRUD app for managing college clubs, members, and events. Features debounced search, sorting, pagination, toast notifications, and a stats dashboard.",
      image: null,
      tech: ["Node.js", "Express", "MySQL", "Vanilla JS", "MVC"],
      github: "https://github.com/charan/college-club-management",
      demo: null,
      category: ["Full Stack", "Backend"],
      status: "Completed",
      featured: true,
      features: ["MVC Architecture", "Debounced Search", "Pagination", "Stats Dashboard", "Postman Collection"],
    },
    {
      id: 2,
      title: "UserVault",
      description: "Production-grade user management system with dark glassmorphism UI. Refactored for Supabase + Render backend + GitHub Pages frontend deployment.",
      image: null,
      tech: ["Node.js", "Express", "Supabase", "PostgreSQL", "GitHub Pages"],
      github: "https://github.com/charan/uservault",
      demo: "https://charan.github.io/uservault",
      category: ["Full Stack", "Backend"],
      status: "Deployed",
      featured: true,
      features: ["Glassmorphism UI", "Supabase Auth", "CORS Config", "Render Deploy", "MySQL→PostgreSQL Migration"],
    },
    {
      id: 3,
      title: "Developer Portfolio",
      description: "Personal portfolio website with constellation canvas animation, glassmorphism cards, dark/light mode, and sections for projects, skills, and coding profiles.",
      image: null,
      tech: ["HTML", "CSS", "JavaScript", "Canvas API"],
      github: "https://github.com/charan/portfolio",
      demo: "#",
      category: ["Frontend", "Open Source"],
      status: "Live",
      featured: false,
      features: ["Constellation Animation", "Glassmorphism", "Dark/Light Mode", "Single Config Object"],
    },
  ],

  // Articles
  articles: [
    {
      id: 1,
      title: "From MySQL to PostgreSQL: A Real Migration Story",
      excerpt: "How I migrated UserVault from a local MySQL setup to Supabase PostgreSQL, including the gotchas and lessons learned.",
      date: "June 2025",
      readTime: "6 min",
      category: "Backend",
      image: null,
      link: "#",
    },
    {
      id: 2,
      title: "Building MVC Apps with Express.js from Scratch",
      excerpt: "A practical walkthrough of structuring a Node.js project with clean MVC architecture — no frameworks, just clean code.",
      date: "May 2025",
      readTime: "8 min",
      category: "Node.js",
      image: null,
      link: "#",
    },
    {
      id: 3,
      title: "Why I Use Vanilla JS for Admin UIs (And When Not To)",
      excerpt: "Exploring the trade-offs between vanilla JS and React for internal tools, dashboards, and CRUD applications.",
      date: "April 2025",
      readTime: "5 min",
      category: "Frontend",
      image: null,
      link: "#",
    },
  ],

  // Certificates
  certificates: [
    { name: "JavaScript Algorithms & Data Structures", issuer: "freeCodeCamp", year: "2024" },
    { name: "Responsive Web Design", issuer: "freeCodeCamp", year: "2024" },
    { name: "SQL (Basic)", issuer: "HackerRank", year: "2023" },
  ],

  // EmailJS Config
  emailjs: {
    serviceId: "YOUR_SERVICE_ID",
    templateId: "YOUR_TEMPLATE_ID",
    publicKey: "YOUR_PUBLIC_KEY",
  },

  // SEO
  seo: {
    title: "Charan Kumar | Full Stack Developer",
    description: "Full Stack Developer specializing in React, Node.js, and modern web technologies. Building production-ready applications.",
    keywords: "full stack developer, react, node.js, javascript, web developer, portfolio",
    image: "/og-image.png",
    url: "https://charan.dev",
  },
};
