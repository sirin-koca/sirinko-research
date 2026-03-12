import Header from "@/components/Header";
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
} from "lucide-react";

const agents = [
  {
    icon: Cog,
    name: "Agent Orchestrator",
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
    name: "Data Ingestion Agent",
    description:
      "Responsible for connecting to heterogeneous data sources, extracting raw data, and performing initial normalization before passing it downstream.",
    responsibilities: [
      "Multi-source data extraction",
      "Format normalization (CSV, JSON, SQL, API)",
      "Connection pooling & retry logic",
      "Initial quality checks",
    ],
  },
  {
    icon: FileSearch,
    name: "Schema Discovery Agent",
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
    label: "Ingest",
    description: "Raw data collection from sources",
    agent: "Data Ingestion Agent",
    color: "bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/20",
  },
  {
    label: "Discover",
    description: "Schema inference & cataloging",
    agent: "Schema Discovery Agent",
    color: "bg-violet-500/10 text-violet-700 dark:text-violet-300 border-violet-500/20",
  },
  {
    label: "Protect",
    description: "Privacy policy enforcement",
    agent: "Privacy Policy Agent",
    color: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20",
  },
  {
    label: "Transform",
    description: "Pipeline generation & execution",
    agent: "Pipeline Generation Agent",
    color: "bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/20",
  },
  {
    label: "Validate",
    description: "Quality & compliance checks",
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

      {/* Architecture Diagram */}
      <section className="pb-16 section-padding">
        <div className="container mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-10 text-center">
            Architecture Diagram
          </h2>

          <div className="bg-card rounded-2xl p-8 md:p-12 card-elevated max-w-4xl mx-auto">
            {/* Top: Data Sources */}
            <div className="text-center mb-6">
              <span className="inline-block bg-muted px-5 py-2.5 rounded-lg text-sm font-medium text-foreground border border-border">
                External Data Sources (APIs, DBs, Files)
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
                  Agent Orchestrator
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Coordinates all agents · Task routing · Conflict resolution
              </p>
            </div>
            <div className="flex justify-center mb-6">
              <ArrowDown className="w-5 h-5 text-muted-foreground" />
            </div>

            {/* Agent Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
              {[
                { icon: Database, label: "Ingestion" },
                { icon: FileSearch, label: "Schema" },
                { icon: ScrollText, label: "Privacy" },
                { icon: Workflow, label: "Pipeline" },
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
              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4 text-center">
                <Shield className="w-4 h-4 text-emerald-600 mx-auto mb-1" />
                <span className="text-sm font-medium text-foreground">
                  Privacy Layer (Cross-Cutting)
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

      {/* Data Pipeline Flow */}
      <section className="pb-16 section-padding">
        <div className="container mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4 text-center">
            Data Pipeline Flow
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

      {/* Privacy Layer */}
      <section className="pb-20 section-padding">
        <div className="container mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4 text-center">
            Privacy Layer
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
            Privacy is a cross-cutting concern woven into every stage of the
            pipeline — not an afterthought.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {privacyLayers.map((layer) => (
              <div
                key={layer.title}
                className="bg-card rounded-2xl p-6 card-elevated border border-emerald-500/10"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                    <layer.icon className="w-5 h-5 text-emerald-600" />
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

      <Footer />
    </div>
  );
};

export default SystemArchitecture;
