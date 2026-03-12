import { GraduationCap, Code, Brain, Shield } from "lucide-react";

const About = () => {
  const highlights = [
  {
    icon: GraduationCap,
    title: "Academic Excellence",
    description: "Pursuing a Master's degree at the University of Oslo, one of Europe's leading research institutions."
  },
  {
    icon: Brain,
    title: "Multi-Agent LLM Systems",
    description: "Specializing in multi-agent LLM architectures, agent coordination, and automated pipeline generation."
  },
  {
    icon: Shield,
    title: "Privacy & Security Engineering",
    description: "Embedding Privacy-by-Design and Security-by-Design principles as technical constraints in automated systems."
  },
  {
    icon: Code,
    title: "Systems Architecture",
    description: "Designing scalable data pipelines and distributed systems for real-world applications."
  }];


  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Text content */}
          <div>
            <p className="text-accent font-medium tracking-wider uppercase text-sm mb-4">
              About Me
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Bridging Research
              <span className="block text-muted-foreground">& Innovation</span>
            </h2>
            <div className="space-y-4 prose-academic">
              <p>
                As a Master's student in Informatics – Programming and System Architecture (PROSA) at the University of Oslo, my work is situated at the intersection of multi-agent LLM architecture, privacy engineering, distributed systems, and automated data pipeline generation.
              </p>
              <p>
                This website serves as a living document of my academic journey—from 
                coursework discoveries to thesis breakthroughs. Here, I share insights, 
                challenges, and progress as I architect multi-agent LLM systems for 
                automated and privacy-aware data pipeline generation.
              </p>
            </div>
          </div>

          {/* Right column - Highlight cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) =>
            <div
              key={item.title}
              className="bg-card p-6 rounded-xl card-elevated"
              style={{ animationDelay: `${index * 0.1}s` }}>
              
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

};

export default About;