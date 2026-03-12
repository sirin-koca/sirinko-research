import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Bot, Database, Lock, Workflow, Shield, Cpu, Network, Layers } from "lucide-react";

const SystemArchitecture = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-16 section-padding">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-accent font-medium tracking-wider uppercase text-sm mb-4">
              Technical Overview
            </p>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              System Architecture
            </h1>
            <p className="prose-academic text-lg">
              A deep dive into the architectural design of the Privacy-Aware Multi-Agent AI System.
            </p>
          </div>

          {/* Architecture Diagram */}
          <div className="bg-card rounded-2xl p-8 md:p-12 card-elevated mb-12">
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-8 text-center">
              High-Level Overview
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Data Ingestion Layer */}
              <div className="bg-muted/30 rounded-xl p-6 border border-border">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Database className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  Data Ingestion Layer
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Handles the collection and preprocessing of data from multiple heterogeneous sources with built-in validation.
                </p>
              </div>

              {/* Agent Orchestration */}
              <div className="bg-muted/30 rounded-xl p-6 border-2 border-accent/30">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Bot className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  Agent Orchestration
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The central multi-agent system coordinates autonomous agents for intelligent data processing and decision-making.
                </p>
              </div>

              {/* Privacy Engine */}
              <div className="bg-muted/30 rounded-xl p-6 border border-border">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  Privacy Engine
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Enforces privacy policies across all layers, ensuring compliance with data protection regulations throughout the pipeline.
                </p>
              </div>
            </div>
          </div>

          {/* Component Details */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-2xl p-8 card-elevated">
              <div className="flex items-center gap-3 mb-4">
                <Cpu className="w-5 h-5 text-accent" />
                <h3 className="font-serif text-xl font-semibold text-foreground">Processing Units</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Each agent operates as an independent processing unit capable of autonomous decision-making within defined boundaries.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                  Task decomposition and allocation
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                  Real-time data transformation
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                  Error handling and recovery
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-2xl p-8 card-elevated">
              <div className="flex items-center gap-3 mb-4">
                <Network className="w-5 h-5 text-accent" />
                <h3 className="font-serif text-xl font-semibold text-foreground">Communication Protocol</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Agents communicate through a secure messaging protocol that ensures data integrity and confidentiality.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                  Encrypted inter-agent messaging
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                  Consensus-based decision making
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                  Audit trail logging
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-2xl p-8 card-elevated">
              <div className="flex items-center gap-3 mb-4">
                <Layers className="w-5 h-5 text-accent" />
                <h3 className="font-serif text-xl font-semibold text-foreground">Pipeline Stages</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The data pipeline is organized into modular stages, each managed by specialized agents.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                  Ingestion → Validation → Processing
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                  Privacy filtering at each stage
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                  Output delivery and monitoring
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-2xl p-8 card-elevated">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-5 h-5 text-accent" />
                <h3 className="font-serif text-xl font-semibold text-foreground">Privacy Controls</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Privacy is not an afterthought — it's embedded into the architecture at every level.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                  Differential privacy mechanisms
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                  Data minimization principles
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                  Access control and permissions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SystemArchitecture;
