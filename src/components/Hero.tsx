import { ArrowDown } from "lucide-react";
import datapactLogo from "@/assets/datapact-logo.png";
import sintefLogoWhite from "@/assets/sintef-logo-white.png";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden hero-gradient px-6 pb-32 pt-24 md:pt-28">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-1/4 h-64 w-64 animate-float rounded-full bg-accent/5 blur-3xl" />
        <div
          className="absolute bottom-1/4 right-1/4 h-96 w-96 animate-float rounded-full bg-accent/10 blur-3xl"
          style={{ animationDelay: "-3s" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative z-10 container mx-auto text-center">
        <div className="animate-slide-up">
          <p className="mb-4 text-sm font-medium uppercase tracking-wider text-accent">
            Sirin Koca • Master's Thesis • University of Oslo • SINTEF
          </p>
          <h1 className="mb-6 font-serif text-3xl font-bold leading-tight text-primary-foreground md:text-4xl lg:text-5xl">
            Architecting Multi-Agent AI Systems
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-primary-foreground/70 md:text-xl">
            An AI system for automated data pipeline generation with built-in governance.
          </p>

          <div className="mb-6 animate-bounce">
            <a href="#thesis" className="text-primary-foreground/50 transition-colors hover:text-primary-foreground">
              <ArrowDown size={24} className="mx-auto" />
            </a>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#thesis"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-3 font-medium text-accent-foreground transition-all hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/20"
            >
              Explore My Thesis
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/20 px-8 py-3 font-medium text-primary-foreground transition-all hover:bg-primary-foreground/10"
            >
              Learn More
            </a>
          </div>

          <div className="mx-auto mt-10 max-w-3xl rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 px-8 py-6 backdrop-blur-sm">
            <p className="text-sm font-light leading-relaxed tracking-wide text-primary-foreground/80 md:text-base">
              This thesis investigates how specialized AI agents collaborate to generate data pipelines while embedding privacy-by-design and security-by-design principles directly into the system architecture. The project develops a prototype multi-agent architecture and evaluates its ability to generate reliable and compliant workflows compared to manually engineered pipelines.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-6 z-10 px-6">
        <div className="container mx-auto">
          <div className="mx-auto flex max-w-3xl items-center justify-center gap-8 sm:gap-12">
            <a
              href="https://www.sintef.no/en/projects/2025/datapact/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-32 items-center justify-center"
            >
              <img src={sintefLogoWhite} alt="SINTEF" className="max-h-[1.8rem] w-auto object-contain" />
            </a>
            <a
              href="https://datapact.eu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-32 items-center justify-center"
            >
              <img
                src={datapactLogo}
                alt="DataPACT"
                className="max-h-6 w-auto object-contain brightness-0 invert"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
