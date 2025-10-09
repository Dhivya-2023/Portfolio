import { ExternalLink, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Employee Portal Management System",
      category: "Full-Stack Application",
      description: "Full-stack web application developed during internship for comprehensive employee management. Features secure CRUD operations, role-based authentication, responsive UI design, and real-time data synchronization.",
      features: [
        "End-to-end development from database design to deployment",
        "Microservices architecture with separate frontend and backend deployments",
        "Auto-generated API documentation with FastAPI",
      ],
      tech: ["React.js", "FastAPI", "MongoDB Atlas", "Tailwind CSS", "JWT", "Vercel", "Railway"],
      liveUrl: "https://employee-portal-omega.vercel.app/",
      apiUrl: "https://employeeportal-production-c28a.up.railway.app/docs",
    },
    {
      title: "Dhvani – Audio Transcription Dashboard",
      category: "Enterprise Solution",
      description: "Enterprise-grade React application with FastAPI backend for audio file processing and transcription. Features secure authentication, real-time processing status, and dynamic data tables.",
      features: [
        "Real-time audio processing with progress tracking",
        "Advanced state management with Redux",
        "File upload optimization with chunked transfers",
      ],
      tech: ["React.js", "Tailwind CSS", "FastAPI", "Redux", "JWT", "FFmpeg", "WebSocket"],
      isPrivate: true,
    },
    {
      title: "MLloOps – JSON Viewer & Annotation Tool",
      category: "Enterprise Tool",
      description: "Complex enterprise React application featuring advanced JSON editing capabilities, integrated PDF viewer, and Jupyter notebook support with role-based access control.",
      features: [
        "Complex data structure visualization and editing",
        "Multi-format document support (JSON, PDF, Jupyter)",
        "Real-time collaboration features",
      ],
      tech: ["React.js", "Redux", "OAuth", "JSON Editor", "PDF.js", "Jupyter", "Material-UI"],
      isPrivate: true,
    },
    {
      title: "Thunder Auto – Interactive 3D Landing",
      category: "Client Project",
      description: "Cutting-edge automotive website featuring immersive Three.js 3D animations, smooth parallax scrolling, and interactive product showcases with performance optimization.",
      features: [
        "3D model integration with optimized loading",
        "Advanced animations and micro-interactions",
        "Performance-first development approach",
      ],
      tech: ["React.js", "Three.js", "Tailwind CSS", "Framer Motion", "AOS", "WebGL"],
      liveUrl: "https://thunderauto.vercel.app/",
    },
    {
      title: "RBG Research – Company Profile",
      category: "Corporate Website",
      description: "Professional corporate website with interactive timeline components, dynamic image carousels, and automated CI/CD deployment pipeline with SEO optimization.",
      features: [
        "Automated deployment with GitHub Actions",
        "Custom timeline and carousel components",
        "SEO optimization and performance tuning",
      ],
      tech: ["React.js", "GitHub Pages", "React Slick", "CI/CD", "Timeline Components"],
      liveUrl: "https://rbg-research.github.io/rbg-research.github.io/",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <span className="chapter-number">04</span>
        
        <div className="space-y-12 animate-fade-up">
          <div className="max-w-4xl">
            <h2 className="font-serif text-4xl md:text-6xl font-bold mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-foreground mb-6"></div>
            <p className="font-body text-lg text-muted-foreground">
              A showcase of my most impactful work, from enterprise dashboards to interactive 3D experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="hover-lift animate-fade-up overflow-hidden group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <Badge variant="outline" className="font-body text-xs">
                      {project.category}
                    </Badge>
                    {project.isPrivate && (
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Lock size={14} />
                        <span className="text-xs font-body">Private</span>
                      </div>
                    )}
                  </div>
                  
                  <h3 className="font-serif text-2xl font-bold group-hover:text-story-accent transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-body font-semibold text-sm mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, i) => (
                        <li key={i} className="font-body text-xs text-muted-foreground flex items-start gap-2">
                          <span className="text-foreground mt-0.5">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="font-body text-xs px-3 py-1 bg-story-light rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>

                {(project.liveUrl || project.apiUrl) && (
                  <CardFooter className="gap-3">
                    {project.liveUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="font-body hover-lift"
                        asChild
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={14} className="mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    {project.apiUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="font-body hover-lift"
                        asChild
                      >
                        <a href={project.apiUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={14} className="mr-2" />
                          API Docs
                        </a>
                      </Button>
                    )}
                  </CardFooter>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
