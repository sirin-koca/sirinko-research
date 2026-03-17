import { ArrowDown } from "lucide-react";
import flowirBg from "@/assets/flowir-bg.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      {/* Background image - faded and blended */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.12] blur-[1.5px]"
        style={{ backgroundImage: `url(${flowirBg})` }}
      />
      {/* Gradient overlays to blend image into background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(222_47%_11%/0.6)] via-transparent to-[hsl(222_47%_11%/0.8)]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(222_47%_11%/0.5)] via-transparent to-[hsl(222_47%_11%/0.5)]" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="animate-slide-up">
          <p className="text-accent font-medium tracking-wider uppercase text-sm mb-4">
            Sirin Koca • Master's Thesis • University of Oslo • SINTEF  
          </p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-primary-foreground">
             
Architecting Multi-Agent AI Systems                                                                  
                
          
          
          
          </h1>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto mb-8 leading-relaxed md:text-xl">An AI system for automated data pipeline generation with built-in governance.    










          

          </p>
          
          {/* Scroll indicator - above buttons */}
          <div className="mb-6 animate-bounce">
            <a href="#thesis" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors">
              <ArrowDown size={24} className="mx-auto" />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#thesis" className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-medium px-8 py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-accent/20">
              Explore My Thesis
            </a>
            <a href="#about" className="inline-flex items-center gap-2 border border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 font-medium px-8 py-3 rounded-lg transition-all">
              Learn More
            </a>
          </div>

          {/* Summary text box */}
          <div className="mt-10 max-w-3xl mx-auto border border-primary-foreground/15 rounded-xl bg-primary-foreground/5 backdrop-blur-sm px-8 py-6">
            <p className="text-primary-foreground/80 text-sm md:text-base leading-relaxed font-light tracking-wide">
              This thesis investigates how specialized AI agents collaborate to generate data pipelines while embedding privacy-by-design and security-by-design principles directly into the system architecture. The project develops a prototype multi-agent architecture and evaluates its ability to generate reliable and compliant workflows compared to manually engineered pipelines.
            </p>
          </div>
        </div>
      </div>
    </section>);};export default Hero;