export const projects = [
  {
    title: "Employee Portal Management System",
    description: "Full-stack web application developed during internship for comprehensive employee management. Features secure CRUD operations, role-based authentication, responsive UI design, and real-time data synchronization. Implements RESTful API architecture with comprehensive documentation and cloud deployment across multiple platforms.",
    tech: ["React.js", "FastAPI", "MongoDB Atlas", "Tailwind CSS", "JWT Authentication", "Vercel", "Railway", "REST API"],
    link: "https://employee-portal-omega.vercel.app/",
    apiDocs: "https://employeeportal-production-c28a.up.railway.app/docs",
    type: "Full-Stack Application",
    isPrivate: false,
    highlights: [
      "End-to-end development from database design to deployment",
      "Microservices architecture with separate frontend and backend deployments", 
      "Auto-generated API documentation with FastAPI",
      "Cloud database integration with MongoDB Atlas",
      "Production-ready deployment pipeline"
    ]
  },
  {
    title: "Dhvani – Audio Transcription Dashboard",
    description: "Enterprise-grade React application with FastAPI backend for audio file processing and transcription. Features secure authentication, real-time processing status, dynamic data tables with advanced filtering, and intuitive file management with drag-and-drop functionality. Optimized for high-volume audio processing workflows.",
    tech: ["React.js", "Tailwind CSS", "FastAPI", "Redux", "JWT", "FFmpeg", "WebSocket"],
    type: "Enterprise Solution",
    isPrivate: true,
    highlights: [
      "Real-time audio processing with progress tracking",
      "Advanced state management with Redux",
      "File upload optimization with chunked transfers",
      "Responsive dashboard with data visualization"
    ]
  },
  {
    title: "MLloOps – JSON Viewer & Annotation Tool",
    description: "Complex enterprise React application featuring advanced JSON editing capabilities, integrated PDF viewer, and Jupyter notebook support. Implements role-based access control, OAuth integration, and collaborative annotation features for machine learning operations teams.",
    tech: ["React.js", "Redux", "OAuth", "JSON Editor", "PDF.js", "Jupyter", "WebSocket", "Material-UI"],
    type: "Enterprise Tool",
    isPrivate: true,
    highlights: [
      "Complex data structure visualization and editing",
      "Multi-format document support (JSON, PDF, Jupyter)",
      "Real-time collaboration features",
      "Enterprise security with OAuth and RBAC"
    ]
  },
  {
    title: "Thunder Auto – Interactive 3D Landing",
    description: "Cutting-edge automotive website featuring immersive Three.js 3D animations, smooth parallax scrolling, and interactive product showcases. Built with performance optimization, mobile responsiveness, and modern web standards. Includes advanced loading optimizations and cross-browser compatibility.",
    tech: ["React.js", "Three.js", "Tailwind CSS", "Framer Motion", "AOS", "WebGL", "Progressive Loading"],
    link: "https://thunderauto.vercel.app",
    type: "Client Project",
    isPrivate: false,
    highlights: [
      "3D model integration with optimized loading",
      "Advanced animations and micro-interactions",
      "Performance-first development approach",
      "Cross-device compatibility testing"
    ]
  },
  {
    title: "RBG Research – Company Profile",
    description: "Professional corporate website with interactive timeline components, dynamic image carousels, and automated CI/CD deployment pipeline. Features responsive design system, SEO optimization, and performance metrics tracking. Built with maintainable code architecture and comprehensive documentation.",
    tech: ["React.js", "GitHub Pages", "React Slick", "CI/CD", "Timeline Components", "SEO Optimization"],
    link: "https://rbg-research.github.io/rbg-research.github.io/",
    type: "Corporate Website",
    isPrivate: false,
    highlights: [
      "Automated deployment with GitHub Actions",
      "Custom timeline and carousel components",
      "SEO optimization and performance tuning",
      "Responsive design system implementation"
    ]
  }
];

// Additional metadata for job applications
export const portfolioStats = {
  totalProjects: 5,
  technicalSkills: [
    "Frontend: React.js, Three.js, Redux, Tailwind CSS",
    "Backend: FastAPI, Node.js, REST APIs, WebSocket",
    "Database: MongoDB Atlas, SQL",
    "Deployment: Vercel, Railway, GitHub Pages",
    "Tools: Git, CI/CD, OAuth, JWT Authentication"
  ],
  experienceHighlights: [
    "Full-stack development with modern tech stacks",
    "Enterprise application development during internship",
    "3D web development and advanced animations", 
    "Cloud deployment and DevOps practices",
    "API design and documentation"
  ]
};