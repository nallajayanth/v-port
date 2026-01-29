// Mock data for Vasavi Sama's Portfolio

export const portfolioData = {
  personal: {
    name: "Vasavi Sama",
    role: "PHP / Laravel Developer",
    tagline: "Building Scalable & Secure Web Applications",
    email: "vasavisama2006@gmail.com",
    phone: "9392378244",
    location: "Karimnagar, Telangana",
    github: "https://github.com/Vasavisama",
    linkedin: "https://www.linkedin.com/in/vasavi-sama/",
    resumeUrl: "https://customer-assets.emergentagent.com/job_c7082a68-2140-4785-b61c-fa45219e5b61/artifacts/ioymo9az_Vasavi_Sama_Resume%20%281%29.pdf"
  },
  about: {
    description: "Passionate PHP/Laravel Developer with a strong foundation in building scalable, secure, and data-intensive web applications. Experienced in e-commerce development, finance management systems, and implementing robust features like RBAC and JWT authentication. Eager to contribute to innovative projects and continuously learn.",
    highlights: [
      "Full-stack development with Laravel 12",
      "E-commerce & Finance Management Systems",
      "JWT Authentication & RBAC Implementation",
      "Asynchronous Processing with Laravel Queues"
    ]
  },
  skills: {
    technical: [
      { name: "Laravel", level: 90, category: "Backend" },
      { name: "PHP", level: 85, category: "Backend" },
      { name: "JavaScript", level: 80, category: "Frontend" },
      { name: "HTML/CSS", level: 90, category: "Frontend" },
      { name: "MySQL", level: 85, category: "Database" },
      { name: "Python", level: 75, category: "Backend" },
      { name: "Git", level: 85, category: "Tools" },
      { name: "JWT Authentication", level: 85, category: "Security" },
      { name: "RESTful APIs", level: 80, category: "Backend" },
      { name: "Cloudinary Integration", level: 75, category: "Cloud" }
    ],
    soft: [
      "Problem Solving",
      "Team Collaboration",
      "Attention to Detail",
      "Quick Learner",
      "Communication"
    ]
  },
  projects: [
    {
      id: 1,
      title: "Shopify E-commerce Platform",
      description: "Multi-store e-commerce platform with customizable storefronts, admin CRUD operations, dynamic theming engine, and secure payment integration.",
      technology: "Laravel 12",
      features: [
        "Multi-store management with customizable storefronts",
        "Administrative CRUD for stores and products",
        "Dynamic theming engine with async application via Laravel Queues",
        "Cloudinary integration for media assets",
        "Session-based shopping cart system",
        "Secure checkout with Razorpay integration",
        "JWT API authentication"
      ],
      tags: ["Laravel", "E-commerce", "JWT", "Razorpay", "Cloudinary"],
      githubUrl: "https://github.com/Vasavisama/shopify.git",
      color: "#00D9FF"
    },
    {
      id: 2,
      title: "Expense Tracker Application",
      description: "Full-stack finance management application with role-based access control, advanced reporting, and asynchronous email processing.",
      technology: "Laravel 12",
      features: [
        "Role-Based Access Control (RBAC) with Admin and user dashboards",
        "Complete CRUD operations for expense management",
        "Secure API authentication with JWT",
        "Excel/CSV import/export functionality",
        "Custom PDF expense report generation",
        "Asynchronous welcome email processing via Laravel Queues",
        "Advanced reporting and analytics"
      ],
      tags: ["Laravel", "Finance", "RBAC", "JWT", "PDF", "Excel"],
      githubUrl: "https://github.com/Vasavisama/expense_tracker.git",
      color: "#10B981"
    }
  ],
  education: [
    {
      id: 1,
      institution: "Birla Institute of Technology and Science",
      degree: "BSc Computer Science",
      duration: "Ongoing",
      expectedGraduation: "August 2024",
      status: "current"
    },
    {
      id: 2,
      institution: "NxtWave Institute of Advanced Technologies",
      program: "Tech Skills",
      duration: "Ongoing",
      completionDate: "August 2024",
      status: "current"
    },
    {
      id: 3,
      institution: "Alphores Junior College",
      program: "Intermediate",
      duration: "June 2022 - March 2024",
      percentage: "95.8%",
      status: "completed"
    },
    {
      id: 4,
      institution: "Brilliant Model School",
      program: "SSC",
      cgpa: "9.7",
      completionYear: "2022",
      status: "completed"
    }
  ],
  journey: [
    { id: 'intro', label: 'Start', section: 'intro' },
    { id: 'about', label: 'About', section: 'about' },
    { id: 'skills', label: 'Skills', section: 'skills' },
    { id: 'projects', label: 'Projects', section: 'projects' },
    { id: 'education', label: 'Education', section: 'education' },
    { id: 'contact', label: 'Contact', section: 'contact' }
  ]
};
