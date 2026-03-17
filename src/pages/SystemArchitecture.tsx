import Header from "@/components/Header";
import flowirImg from "@/assets/flowir-bg.png";
import Footer from "@/components/Footer";
import {
  Bot,
  Database,
  Lock,
  Shield,
  Search,
  Workflow,
  CheckCircle,
  ArrowDown,
  ArrowRight,
  Layers,
  FileSearch,
  ScrollText,
  Cog,
  GitBranch,
  RefreshCw,
  Zap,
  Eye,
} from "lucide-react";

const agents = [
  {
    icon: Cog,
    name: "Orchestrator Agent",
    description:
      "The central coordinator that manages task delegation, monitors agent health, resolves conflicts, and ensures coherent execution across the entire pipeline.",
    responsibilities: [
      "Task decomposition & scheduling",
      "Inter-agent communication routing",
      "Conflict resolution & consensus",
      "Pipeline lifecycle management",
    ],
  },
  {
    icon: Database,
    name: "Data Discovery Agent",
    description:
      "Connects to heterogeneous data sources, discovers available datasets, extracts raw data, and performs initial normalization before passing it downstream.",
    responsibilities: [
      "Multi-source data discovery",
      "Format normalization (CSV, JSON, SQL, API)",
      "Connection pooling & retry logic",
      "Initial quality checks",
    ],
  },
  {
    icon: FileSearch,
    name: "Schema Analysis Agent",
    description:
      "Automatically infers and validates data schemas, detects structural changes, and maintains a living data catalog for the system.",
    responsibilities: [
      "Automatic schema inference",
      "Schema drift detection",
      "Data catalog maintenance",
      "Type mapping & relationship discovery",
    ],
  },
  {
    icon: ScrollText,
    name: "Privacy Policy Agent",
    description:
      "Enforces privacy regulations (GDPR, CCPA) by classifying sensitive fields, applying anonymization, and generating compliance reports.",
    responsibilities: [
      "PII detection & classification",
      "Anonymization & pseudonymization",
      "Consent management integration",
      "Compliance audit trail generation",
    ],
  },
  {
    icon: Workflow,
    name: "Pipeline Generation Agent",
    description:
      "Dynamically constructs and optimizes data transformation pipelines based on discovered schemas and privacy constraints.",
    responsibilities: [
      "DAG-based pipeline construction",
      "Transformation rule generation",
      "Resource allocation optimization",
      "Pipeline versioning & rollback",
    ],
  },
  {
    icon: CheckCircle,
    name: "Validation Agent",
    description:
      "Performs end-to-end validation of processed data, ensuring correctness, completeness, and adherence to privacy policies before output delivery.",
    responsibilities: [
      "Data integrity verification",
      "Privacy constraint validation",
      "Output quality scoring",
      "Anomaly detection & alerting",
    ],
  },
];

const pipelineStages = [
  {
    label: "Discover",
    description: "Source detection & data extraction",
    agent: "Data Discovery Agent",
    color: "bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/20",
  },
  {
    label: "Analyze",
    description: "Schema inference & cataloging",
    agent: "Schema Analysis Agent",
    color: "bg-violet-500/10 text-violet-700 dark:text-violet-300 border-violet-500/20",
  },
  {
    label: "Protect",
    description: "Privacy policy enforcement",
    agent: "Privacy Policy Agent",
    color: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20",
  },
  {
    label: "Generate",
    description: "Pipeline construction & optimization",
    agent: "Pipeline Generation Agent",
    color: "bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/20",
  },
  {
    label: "Validate",
    description: "Quality & compliance verification",
    agent: "Validation Agent",
    color: "bg-rose-500/10 text-rose-700 dark:text-rose-300 border-rose-500/20",
  },
];

const privacyLayers = [
  {
    title: "Data Classification",
    description:
      "Automated detection and tagging of sensitive data fields (PII, PHI, financial) using NLP-based classifiers.",
    icon: Search,
  },
  {
    title: "Policy Enforcement",
    description:
      "Real-time application of privacy rules derived from GDPR, CCPA, and organization-specific policies.",
    icon: Shield,
  },
  {
    title: "Anonymization Engine",
    description:
      "Applies k-anonymity, l-diversity, and differential privacy techniques to protect individual records.",
    icon: Lock,
  },
  {
    title: "Audit & Compliance",
    description:
      "Continuous logging, lineage tracking, and automated compliance report generation for regulatory review.",
    icon: Layers,
  },
];

const orchestrationSteps = [
  {
    step: 1,
    title: "Task Reception",
    description: "Orchestrator receives a new data processing request and decomposes it into sub-tasks.",
    icon: Zap,
  },
  {
    step: 2,
    title: "Agent Selection",
    description: "Selects and activates the appropriate agents based on task requirements and agent availability.",
    icon: GitBranch,
  },
  {
    step: 3,
    title: "Parallel Execution",
    description: "Agents execute their sub-tasks concurrently, with the orchestrator monitoring progress and dependencies.",
    icon: RefreshCw,
  },
  {
    step: 4,
    title: "Result Aggregation",
    description: "Collects outputs from all agents, resolves conflicts, and assembles the final validated result.",
    icon: Eye,
  },
];

const pipelineGenSteps = [
  {
    phase: "Schema Input",
    detail: "Receives validated schema from the Schema Analysis Agent with field types, relationships, and constraints.",
  },
  {
    phase: "Privacy Constraints",
    detail: "Integrates privacy rules from the Privacy Policy Agent to determine which fields require transformation.",
  },
  {
    phase: "DAG Construction",
    detail: "Builds a directed acyclic graph of transformation steps, optimizing for parallelism and resource efficiency.",
  },
  {
    phase: "Code Generation",
    detail: "Auto-generates transformation code (SQL, Python, Spark) tailored to the target execution environment.",
  },
  {
    phase: "Optimization",
    detail: "Applies cost-based optimization: predicate pushdown, partition pruning, and memory-aware scheduling.",
  },
  {
    phase: "Deployment",
    detail: "Deploys the pipeline with versioning, rollback capability, and continuous monitoring hooks.",
  },
];

const SystemArchitecture = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-12 section-padding">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-accent font-medium tracking-wider uppercase text-sm mb-4">
              Technical Overview
            </p>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              System Architecture
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A modular, privacy-aware multi-agent system for trustworthy data
              pipeline orchestration — designed for the Master Thesis
              (2026–2027).
            </p>
          </div>
        </div>
      </section>

      {/* FlowIR Architecture Image */}
      <section className="pb-8 section-padding pt-0">
        <div className="container mx-auto max-w-5xl">
          <div className="rounded-xl overflow-hidden border border-border shadow-lg">
            <img
              src={flowirImg}
              alt="FlowIR multi-agent architecture diagram showing Planner, Orchestrator, Privacy, and Anonymization components"
              className="w-full h-auto opacity-75 contrast-125"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* System Overview Diagram */}
      <section className="pb-16 section-padding">
        <div className="container mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-10 text-center">
            System Overview
          </h2>

          <div className="bg-card rounded-2xl p-8 md:p-12 card-elevated max-w-4xl mx-auto">
            {/* Top: Data Sources */}
            <div className="text-center mb-6">
              <span className="inline-block bg-muted px-5 py-2.5 rounded-lg text-sm font-medium text-foreground border border-border">
                External Data Sources (APIs, DBs, Files, Streams)
              </span>
            </div>
            <div className="flex justify-center mb-6">
              <ArrowDown className="w-5 h-5 text-muted-foreground" />
            </div>

            {/* Orchestrator */}
            <div className="bg-accent/10 border-2 border-accent/30 rounded-xl p-6 text-center mb-6">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Bot className="w-5 h-5 text-accent" />
                <span className="font-serif font-semibold text-foreground text-lg">
                  Orchestrator Agent
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Central coordinator · Task routing · Conflict resolution · Lifecycle management
              </p>
            </div>
            <div className="flex justify-center mb-6">
              <ArrowDown className="w-5 h-5 text-muted-foreground" />
            </div>

            {/* Agent Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
              {[
                { icon: Database, label: "Data Discovery" },
                { icon: FileSearch, label: "Schema Analysis" },
                { icon: ScrollText, label: "Privacy Policy" },
                { icon: Workflow, label: "Pipeline Gen" },
              ].map((a) => (
                <div
                  key={a.label}
                  className="bg-muted/40 border border-border rounded-lg p-3 text-center"
                >
                  <a.icon className="w-4 h-4 text-accent mx-auto mb-1" />
                  <span className="text-xs font-medium text-foreground">
                    {a.label} Agent
                  </span>
                </div>
              ))}
            </div>
            <div className="flex justify-center mb-6">
              <ArrowDown className="w-5 h-5 text-muted-foreground" />
            </div>

            {/* Validation + Privacy Layer */}
            <div className="grid md:grid-cols-2 gap-3">
              <div className="bg-muted/40 border border-border rounded-lg p-4 text-center">
                <CheckCircle className="w-4 h-4 text-accent mx-auto mb-1" />
                <span className="text-sm font-medium text-foreground">
                  Validation Agent
                </span>
              </div>
              <div className="bg-accent/5 border border-accent/20 rounded-lg p-4 text-center">
                <Shield className="w-4 h-4 text-accent mx-auto mb-1" />
                <span className="text-sm font-medium text-foreground">
                  Privacy Enforcement Layer
                </span>
              </div>
            </div>
            <div className="flex justify-center mt-6">
              <ArrowDown className="w-5 h-5 text-muted-foreground" />
            </div>
            <div className="text-center mt-4">
              <span className="inline-block bg-muted px-5 py-2.5 rounded-lg text-sm font-medium text-foreground border border-border">
                Validated, Privacy-Compliant Output
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Agent Roles */}
      <section className="pb-16 section-padding">
        <div className="container mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4 text-center">
            Agent Roles
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
            Each agent is an autonomous unit with a well-defined responsibility
            boundary, communicating through the orchestrator.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agents.map((agent) => (
              <div
                key={agent.name}
                className="bg-card rounded-2xl p-6 card-elevated group hover:border-accent/20 border border-transparent transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <agent.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-foreground">
                    {agent.name}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {agent.description}
                </p>
                <ul className="space-y-1.5">
                  {agent.responsibilities.map((r) => (
                    <li
                      key={r}
                      className="flex items-center gap-2 text-xs text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Orchestration Flow */}
      <section className="pb-16 section-padding">
        <div className="container mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4 text-center">
            Orchestration Flow
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
            The Orchestrator Agent coordinates all activity through a
            four-phase execution cycle.
          </p>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden md:block" />

              <div className="space-y-8">
                {orchestrationSteps.map((step) => (
                  <div key={step.step} className="flex gap-5 items-start">
                    <div className="relative z-10 w-12 h-12 bg-accent/10 border-2 border-accent/30 rounded-xl flex items-center justify-center flex-shrink-0">
                      <step.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div className="pt-1">
                      <h3 className="font-serif text-lg font-semibold text-foreground mb-1">
                        Step {step.step}: {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Enforcement Layer */}
      <section className="pb-16 section-padding">
        <div className="container mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4 text-center">
            Privacy Enforcement Layer
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
            Privacy is a cross-cutting concern woven into every stage of the
            pipeline — not an afterthought.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {privacyLayers.map((layer) => (
              <div
                key={layer.title}
                className="bg-card rounded-2xl p-6 card-elevated border border-accent/10"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <layer.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-foreground">
                    {layer.title}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {layer.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pipeline Generation Process */}
      <section className="pb-20 section-padding">
        <div className="container mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4 text-center">
            Pipeline Generation Process
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
            The Pipeline Generation Agent constructs optimized data
            transformation pipelines through a six-phase process.
          </p>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4">
            {pipelineGenSteps.map((step, i) => (
              <div
                key={step.phase}
                className="bg-card rounded-xl p-5 card-elevated border border-border flex gap-4 items-start"
              >
                <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-accent">{i + 1}</span>
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-foreground mb-1">
                    {step.phase}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {step.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Pipeline Flow (visual) */}
      <section className="pb-20 section-padding">
        <div className="container mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4 text-center">
            End-to-End Data Flow
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
            Data moves through five sequential stages, each managed by a
            specialized agent under the orchestrator's coordination.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-stretch gap-3">
              {pipelineStages.map((stage, i) => (
                <div key={stage.label} className="flex-1 flex flex-col md:flex-row items-center gap-3">
                  <div
                    className={`w-full rounded-xl border p-5 ${stage.color} flex-1`}
                  >
                    <p className="font-serif font-semibold text-base mb-1">
                      {i + 1}. {stage.label}
                    </p>
                    <p className="text-xs opacity-80">{stage.description}</p>
                    <p className="text-[10px] mt-2 font-medium opacity-60">
                      ↳ {stage.agent}
                    </p>
                  </div>
                  {i < pipelineStages.length - 1 && (
                    <>
                      <ArrowRight className="hidden md:block w-4 h-4 text-muted-foreground flex-shrink-0" />
                      <ArrowDown className="md:hidden w-4 h-4 text-muted-foreground flex-shrink-0" />
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SystemArchitecture;
