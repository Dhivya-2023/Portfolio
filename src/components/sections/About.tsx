const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-story-light relative">
      <div className="container mx-auto max-w-4xl">
        <span className="chapter-number">01</span>
        
        <div className="space-y-8 animate-fade-up">
          <div>
            <h2 className="font-serif text-4xl md:text-6xl font-bold mb-4">About Me</h2>
            <div className="w-24 h-1 bg-foreground"></div>
          </div>

          <div className="space-y-6">
            <h3 className="font-serif text-2xl md:text-3xl font-semibold">My Journey</h3>
            
            <p className="font-body text-lg leading-relaxed text-muted-foreground">
              From analyzing complex biomedical systems to crafting intuitive user interfaces, 
              my journey represents a unique blend of analytical thinking and creative problem-solving.
            </p>

            <p className="font-body text-lg leading-relaxed text-muted-foreground">
              At <span className="font-semibold text-foreground">RBG.AI</span>, I've specialized 
              in building production-grade applications that serve both internal teams and external 
              clients, focusing on performance, scalability, and exceptional user experience.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-8 pt-8 border-t border-border">
              <div className="space-y-2 hover-lift p-6 bg-background rounded-lg">
                <div className="font-body text-sm text-muted-foreground uppercase tracking-wider">Location</div>
                <div className="font-serif text-xl font-semibold">Based in India</div>
              </div>
              
              <div className="space-y-2 hover-lift p-6 bg-background rounded-lg">
                <div className="font-body text-sm text-muted-foreground uppercase tracking-wider">Status</div>
                <div className="font-serif text-xl font-semibold">Available for opportunities</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
