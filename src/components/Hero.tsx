import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
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
            Sirin Koca • Master's Student • University of Oslo & SINTEF  
          </p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-primary-foreground">
             
Architecting Multi-Agent AI Systems                                                                  
                
          
          
          
          </h1>
          <p className="text-primary-foreground/70 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            Documenting my academic journey and research in building privacy-aware 
            multi-agent AI systems for intelligent data pipelines.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#thesis" onClick={(e) => { e.preventDefault(); document.querySelector('#thesis')?.scrollIntoView({ behavior: 'smooth' }); }} className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-medium px-8 py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-accent/20">
              Explore My Thesis
            </a>
            <a href="#about" onClick={(e) => { e.preventDefault(); document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' }); }} className="inline-flex items-center gap-2 border border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 font-medium px-8 py-3 rounded-lg transition-all">
              Learn More
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>);};export default Hero;