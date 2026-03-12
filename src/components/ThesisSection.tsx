import { Bot, Database, Lock, Workflow } from "lucide-react";

const ThesisSection = () => {
  const concepts = [
    {
      icon: Bot,
      title: "Multi-Agent System",
      description: "Autonomous agents collaborating to process and transform data through intelligent orchestration.",
    },
    {
      icon: Lock,
      title: "Privacy-Aware Design",
      description: "Built-in privacy controls ensuring data protection at every stage of the pipeline.",
    },
    {
      icon: Workflow,
      title: "Data Pipeline",
      description: "Automated workflows for ingesting, processing, and delivering data with minimal human intervention.",
    },
    {
      icon: Database,
      title: "Scalable Architecture",
      description: "Designed to handle growing data volumes while maintaining performance and reliability.",
    },
  ];

  return (
    <section id="thesis" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-accent font-medium tracking-wider uppercase text-sm mb-4">
            My Research
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Master's Thesis
          </h2>
          <p className="prose-academic text-lg">
            Building a Privacy-Aware Multi-Agent AI System for Intelligent Data Pipelines
          </p>
        </div>

        {/* Visual Architecture Representation */}
        <div className="bg-card rounded-2xl p-8 md:p-12 card-elevated mb-12">
          <h3 className="font-serif text-xl font-semibold text-foreground mb-6 text-center">
            System Architecture Overview
          </h3>

          {/* Simplified architecture diagram */}
          <div className="relative">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-4">
              {/* Data Sources */}
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 text-center min-w-[140px]">
                <Database className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium text-foreground">Data Sources</p>
              </div>

              {/* Arrow */}
              <div className="hidden md:block w-8 h-0.5 bg-border" />
              <div className="md:hidden h-8 w-0.5 bg-border" />

              {/* Multi-Agent Core */}
              <div className="bg-accent/10 border-2 border-accent/30 rounded-xl p-6 text-center min-w-[180px] glow-amber">
                <div className="flex justify-center gap-2 mb-3">
                  <Bot className="w-6 h-6 text-accent" />
                  <Bot className="w-6 h-6 text-accent" />
                  <Bot className="w-6 h-6 text-accent" />
                </div>
                <p className="text-sm font-semibold text-foreground">Multi-Agent Core</p>
                <p className="text-xs text-muted-foreground mt-1">Privacy-Aware Processing</p>
              </div>

              {/* Arrow */}
              <div className="hidden md:block w-8 h-0.5 bg-border" />
              <div className="md:hidden h-8 w-0.5 bg-border" />

              {/* Output */}
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 text-center min-w-[140px]">
                <Workflow className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium text-foreground">Data Pipeline</p>
              </div>
            </div>

            {/* Privacy Shield Overlay */}
            <div className="absolute -top-2 -right-2 bg-accent text-accent-foreground p-2 rounded-full">
              <Lock className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Key Concepts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {concepts.map((concept, index) => (
            <div
              key={concept.title}
              className="text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-card rounded-xl flex items-center justify-center mx-auto mb-4 card-elevated">
                <concept.icon className="w-8 h-8 text-accent" />
              </div>
              <h4 className="font-serif text-lg font-semibold text-foreground mb-2">
                {concept.title}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {concept.description}
              </p>
            </div>
          ))}
        </div>

        {/* Research Questions */}
        <div className="mt-16 bg-card rounded-2xl p-8 card-elevated">
          <h3 className="font-serif text-xl font-semibold text-foreground mb-6">
            Research Questions
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center text-accent font-semibold text-sm">1</span>
              <p className="prose-academic">How can a multi-agent LLM architecture be designed so that specialized agents collaboratively generate end-to-end data pipelines (ingestion, transformation, validation, orchestration)?</p>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center text-accent font-semibold text-sm">2</span>
              <p className="prose-academic">What agent roles, communication patterns, and coordination mechanisms ensure reliability, consistency, and conflict resolution during automated pipeline generation?</p>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center text-accent font-semibold text-sm">3</span>
              <p className="prose-academic">How can PbD/SbD constraints (data minimization, sensitivity labelling, anonymization, access control, encryption, provenance logging) be technically embedded into the generation workflow without reducing flexibility or correctness?</p>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center text-accent font-semibold text-sm">4</span>
              <p className="prose-academic">To what extent do LLM-generated pipelines satisfy structural correctness, functional completeness, and privacy/security constraints compared to manually engineered pipelines?</p>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center text-accent font-semibold text-sm">5</span>
              <p className="prose-academic">How do multi-agent generation strategies impact performance, scalability, and energy usage, and what trade-offs emerge when privacy/security constraints are enforced?</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ThesisSection;
