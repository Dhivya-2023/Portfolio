import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "IT Practitioner (Full-time)",
      company: "RBG.AI",
      period: "June 2024 – Present",
      description: "Leading frontend development initiatives and mentoring junior developers while delivering enterprise-grade applications.",
      achievements: [
        "Architected and developed 4+ applications using React.js and FastAPI Integration",
        "Implemented responsive design systems using Tailwind CSS and Framer Motion",
        "Integrated secure authentication systems (MSAL, Google OAuth) with Redux state management",
        "Collaborated with cross-functional teams to deliver high-impact solutions",
      ],
    },
    {
      title: "IT Intern",
      company: "RBG.AI",
      period: "Oct 2023 – May 2024",
      description: "Launched my career in web development, rapidly mastering modern frontend technologies and contributing to production applications.",
      achievements: [
        "Mastered React.js ecosystem and modern development practices",
        "Built internal tools for audio transcription and data visualization",
        "Contributed to company's digital transformation initiatives",
        "Developed expertise in API integration and state management",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-story-light relative">
      <div className="container mx-auto max-w-4xl">
        <span className="chapter-number">03</span>
        
        <div className="space-y-12 animate-fade-up">
          <div>
            <h2 className="font-serif text-4xl md:text-6xl font-bold mb-4">Experience</h2>
            <div className="w-24 h-1 bg-foreground"></div>
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className="relative pl-8 border-l-2 border-foreground hover-lift"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-foreground rounded-full" />
                
                <div className="space-y-4 pb-8">
                  <div className="flex items-start gap-3">
                    <Briefcase className="mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-serif text-2xl font-bold">{exp.title}</h3>
                      <div className="font-body text-lg text-story-accent font-semibold">{exp.company}</div>
                      <div className="font-body text-sm text-muted-foreground mt-1">{exp.period}</div>
                    </div>
                  </div>

                  <p className="font-body text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>

                  <ul className="space-y-2 mt-4">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="font-body text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-foreground mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
