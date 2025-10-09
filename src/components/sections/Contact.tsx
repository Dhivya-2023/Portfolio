import { Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      href: "mailto:Dhivyanagaraj2720@gmail.com",
      label: "Dhivyanagaraj2720@gmail.com",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/in/dhivya27",
      label: "linkedin.com/in/dhivya27",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/Dhivya-2023",
      label: "github.com/Dhivya-2023",
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-story-light relative">
      <div className="container mx-auto max-w-4xl">
        <span className="chapter-number">05</span>
        
        <div className="space-y-12 animate-fade-up text-center">
          <div>
            <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6">Let's Create Together</h2>
            <div className="w-24 h-1 bg-foreground mx-auto mb-6"></div>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to bring your next project to life? Let's discuss how we can create something extraordinary together.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-6 border-2 border-border rounded-lg hover-lift hover:border-foreground transition-all animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Icon size={32} className="mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <div className="font-body font-semibold mb-2">{link.name}</div>
                  <div className="font-body text-xs text-muted-foreground break-all">
                    {link.label}
                  </div>
                </a>
              );
            })}
          </div>

          <div className="pt-8">
            <Button
              size="lg"
              className="font-body text-base hover-lift"
              asChild
            >
              <a href="mailto:Dhivyanagaraj2720@gmail.com">
                <Mail size={20} className="mr-2" />
                Send Me an Email
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="container mx-auto max-w-6xl mt-24 pt-12 border-t border-border">
        <div className="text-center font-body text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Dhivya. Crafted with precision and care.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
