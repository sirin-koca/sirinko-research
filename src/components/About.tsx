import { GraduationCap, Code, Brain, Shield } from "lucide-react";
import datapactLogo from "@/assets/datapact-logo.png";
import sintefLogo from "@/assets/sintef-logo.png";

const About = () => {
  const highlights = [
  {
    icon: GraduationCap,
    title: "Academic Excellence",
    description: "Pursuing a Master's degree at the University of Oslo, one of Europe's leading research institutions."
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Specializing in multi-agent systems, autonomous AI architectures, and intelligent automation."
  },
  {
    icon: Shield,
    title: "Privacy Engineering",
    description: "Focused on building systems that respect user privacy while delivering powerful AI capabilities."
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
                As a Master's student at the University of Oslo, I'm passionate about the intersection of artificial intelligence, systems architecture, privacy and security engineering. My research focuses on creating AI systems that are not just intelligent, but also secure and respectful of user privacy.
              


              </p>
              <p>
                This website serves as a living document of my academic journey—from 
                coursework discoveries to thesis breakthroughs. Here, I share insights, 
                challenges, and progress as I work towards building a privacy-aware 
                multi-agent AI system for data pipelines.
              </p>
              <div className="flex items-center gap-6 pt-4">
                <span className="text-xs text-muted-foreground uppercase tracking-wider">In collaboration with</span>
                <a href="https://www.sintef.no/en/projects/2025/datapact/" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity">
                  <img src={sintefLogo} alt="SINTEF" className="h-7 w-auto mix-blend-multiply" />
                </a>
                <a href="https://datapact.eu" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity">
                  <img src={datapactLogo} alt="DataPACT" className="h-7 w-auto" />
                </a>
              </div>
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