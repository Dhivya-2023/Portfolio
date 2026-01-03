import { ChevronDown, Code2, Sparkles, Zap, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroIllustration from "@/assets/hero-illustration.png";
import codePattern from "@/assets/code-pattern.png";

const Hero = () => {
  const stats = [
    { value: "4+", label: "Projects Delivered" },
    { value: "2+", label: "Years Experience" },
    { value: "10+", label: "Technologies" },
    { value: "100%", label: "Success Rate" },
  ];

  const specializations = [
    { icon: Code2, text: "Frontend Architecture" },
    { icon: Zap, text: "Performance Optimization" },
    { icon: Target, text: "User Experience" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
     

      {/* Floating decorative elements */}
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* Status Badge */}
            <div className="animate-fade-up">
              <Badge
                variant="outline"
                className="px-4 py-2 font-body text-sm border-2 hover-lift"
              >
                <Sparkles size={14} className="mr-2" />
                Open for opportunities
              </Badge>
            </div>

            {/* Main Heading with typewriter effect */}
            <div className="space-y-4 animate-fade-up" style={{ animationDelay: "100ms" }}>
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1]">
                Frontend
                <br />
                <span className="text-story-accent">Developer</span>
              </h1>

              <p className="font-body text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
                Transforming ideas into{" "}
                <span className="font-semibold text-foreground relative">
                  exceptional digital experiences
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-foreground"></span>
                </span>{" "}
                with <span className="font-semibold text-foreground">React.js</span> and modern
                web technologies
              </p>
            </div>

            {/* Specializations */}
            <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "200ms" }}>
              {specializations.map((spec, index) => {
                const Icon = spec.icon;
                return (
                  <div
                    key={spec.text}
                    className="flex items-center gap-2 px-4 py-2 bg-story-light rounded-full hover-lift"
                    style={{ animationDelay: `${300 + index * 100}ms` }}
                  >
                    <Icon size={16} className="text-story-accent" />
                    <span className="font-body text-sm font-medium">{spec.text}</span>
                  </div>
                );
              })}
            </div>

            {/* Stats Grid */}
            <div
              className="grid grid-cols-2 gap-6 pt-6 animate-fade-up"
              style={{ animationDelay: "400ms" }}
            >
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="group hover-lift cursor-default"
                  style={{ animationDelay: `${500 + index * 100}ms` }}
                >
                  <div className="font-serif text-4xl md:text-5xl font-bold mb-1 group-hover:scale-110 transition-transform">
                    {stat.value}
                  </div>
                  <div className="font-body text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4 animate-fade-up"
              style={{ animationDelay: "600ms" }}
            >
              <Button
                size="lg"
                className="font-body text-base hover-lift group"
                onClick={() =>
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Explore My Work
                <ChevronDown
                  size={18}
                  className="ml-2 group-hover:translate-y-1 transition-transform"
                />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="font-body text-base hover-lift"
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Let's Connect
              </Button>
            </div>

            {/* Additional Info */}
            <div
              className="pt-6 border-t border-border animate-fade-up"
              style={{ animationDelay: "700ms" }}
            >
              <p className="font-body text-sm text-muted-foreground">
                Currently at{" "}
                <span className="font-semibold text-foreground">RBG.AI</span> • Building
                enterprise-grade React applications • Passionate about{" "}
                <span className="font-semibold text-foreground">clean code</span> &{" "}
                <span className="font-semibold text-foreground">user experience</span>
              </p>
            </div>
          </div>

          {/* Right Column - Anime Illustration */}
          <div className="relative animate-scale-in" style={{ animationDelay: "300ms" }}>
            <div className="relative hover-lift">
              {/* Decorative frame */}
              <div className="absolute -inset-4 border-2 border-foreground/20 rounded-2xl" />
              <div
                className="absolute -inset-8 border border-foreground/10 rounded-2xl"
                style={{ animationDelay: "1s" }}
              />

              {/* Main illustration */}
              <div className="relative rounded-2xl overflow-hidden border-4 border-foreground shadow-2xl">
                <img
                  src={heroIllustration}
                  alt="Developer at work - Anime illustration"
                  className="w-full h-auto animate-fade-in"
                  style={{ animationDelay: "500ms" }}
                />
              </div>

              {/* Floating accent elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-foreground rounded-full flex items-center justify-center animate-scale-in shadow-lg">
                <Code2 size={24} className="text-background" />
              </div>
              <div
                className="absolute -bottom-4 -left-4 px-6 py-3 bg-foreground text-background font-body font-semibold rounded-full shadow-lg animate-slide-up"
                style={{ animationDelay: "800ms" }}
              >
                ⚡ Fast & Efficient
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="font-body text-xs text-muted-foreground uppercase tracking-wider">
          Scroll
        </span>
        <ChevronDown size={24} className="text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
