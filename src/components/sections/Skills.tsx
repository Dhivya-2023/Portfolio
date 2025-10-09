import { useEffect, useRef, useState } from "react";

const Skills = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skills = [
    { name: "React.js", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "Tailwind CSS", level: 88 },
    { name: "Redux", level: 80 },
    { name: "FastAPI Integration", level: 75 },
    { name: "Vite", level: 82 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-24 px-6 relative">
      <div className="container mx-auto max-w-4xl">
        <span className="chapter-number">02</span>
        
        <div className="space-y-12 animate-fade-up">
          <div>
            <h2 className="font-serif text-4xl md:text-6xl font-bold mb-4">Skills</h2>
            <div className="w-24 h-1 bg-foreground"></div>
          </div>

          <div className="grid gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="space-y-3 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-between items-center">
                  <span className="font-body font-semibold text-lg">{skill.name}</span>
                  <span className="font-body text-muted-foreground">{skill.level}%</span>
                </div>
                
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-foreground transition-all duration-1000 ease-out"
                    style={{
                      width: inView ? `${skill.level}%` : "0%",
                      transitionDelay: `${index * 100}ms`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
