import { FileJson, ScrollText, ShieldCheck, ListChecks, Lightbulb, Hammer, FlaskConical, Users, AlertTriangle } from "lucide-react";

const ThesisSection = () => {
  const concepts = [
    { icon: FileJson, title: "Pipeline Blueprint", description: "A machine-readable JSON description of a planned data pipeline: its sources, activities, controls, gates and destinations." },
    { icon: ScrollText, title: "Policy-as-Code", description: "Selected organisational policy expectations encoded as Rego rules and evaluated by Open Policy Agent (OPA)." },
    { icon: ListChecks, title: "Explainable Findings", description: "Each check returns PASS, FAIL or HUMAN review, with a reason, blueprint evidence and remediation guidance." },
    { icon: ShieldCheck, title: "Design-Time Review", description: "Supports review before a pipeline is built, by asking whether selected controls are represented in its design." },
  ];

  const checks = [
    ["TK-001", "DPIA checkpoint", "Is a DPIA checkpoint declared when a source declares personal and special-category data?"],
    ["TK-002", "Risk-assessment checkpoint", "Is a risk-assessment checkpoint declared for special-category data?"],
    ["TK-003", "Data-sharing agreement", "Is an agreement checkpoint represented when personal data is transferred?"],
    ["TK-004", "Lineage record", "Do integration steps declare a lineage record?"],
    ["TK-005", "Purpose compatibility", "Is purpose compatibility explicitly declared? Missing values are escalated to human review."],
    ["TK-006", "Sharing safeguards", "Are five specified safeguard declarations present on the named workflow nodes?"],
  ];

  const phases = [
    { icon: Lightbulb, title: "Problem Identification", text: "Motivated by the need to review compliance-relevant design decisions in data pipelines before they are implemented." },
    { icon: Hammer, title: "Design & Development", text: "Iteratively building the InspectR proof of concept: blueprint input, OPA/Rego checks and a Streamlit results interface." },
    { icon: FlaskConical, title: "Demonstration", text: "Applying the artifact to the DataPACT MUNDAT use case: municipal data sharing by Trondheim Kommune." },
    { icon: Users, title: "Evaluation (planned)", text: "Evaluation design, including stakeholder validation, is still under development." },
  ];

  return (
    <section id="thesis" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-accent font-medium tracking-wider uppercase text-sm mb-4">My Research</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">Master's Thesis</h2>
          <p className="prose-academic text-lg">
            InspectR: design-time architectural compliance inspection of data pipelines
          </p>
        </div>

        <div className="bg-card rounded-2xl p-6 sm:p-8 md:p-12 card-elevated mb-12 overflow-hidden">
          <h3 className="font-serif text-xl font-semibold text-foreground mb-6 text-center">How InspectR Works</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            {["JSON blueprint", "Structure validation", "OPA evaluates Rego policies", "Result validation", "Findings with reasons, evidence & remedies"].map((s, i, a) => (
              <div key={s} className="flex flex-col md:flex-row items-center gap-4">
                <div className={`rounded-xl p-4 text-center min-w-[140px] max-w-[180px] text-sm font-medium text-foreground ${i === 2 ? "bg-accent/10 border-2 border-accent/30 glow-amber" : "bg-primary/5 border border-primary/20"}`}>{s}</div>
                {i < a.length - 1 && <><div className="hidden md:block w-6 h-0.5 bg-border" /><div className="md:hidden h-6 w-0.5 bg-border" /></>}
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {concepts.map((c) => (
            <div key={c.title} className="text-center">
              <div className="w-16 h-16 bg-card rounded-xl flex items-center justify-center mx-auto mb-4 card-elevated">
                <c.icon className="w-8 h-8 text-accent" />
              </div>
              <h4 className="font-serif text-lg font-semibold text-foreground mb-2">{c.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-card rounded-2xl p-8 card-elevated">
          <h3 className="font-serif text-xl font-semibold text-foreground mb-2">What the Current Prototype Inspects</h3>
          <p className="text-sm text-muted-foreground mb-6">Six selected policy checks for the MUNDAT example scenario. They are not a comprehensive encoding of GDPR, the AI Act or all MUNDAT requirements.</p>
          <ul className="space-y-4">
            {checks.map(([id, title, q]) => (
              <li key={id} className="flex items-start gap-4">
                <span className="flex-shrink-0 px-2 h-8 bg-accent/10 rounded-full flex items-center justify-center text-accent font-semibold text-xs">{id}</span>
                <p className="prose-academic"><strong>{title}:</strong> {q}</p>
              </li>
            ))}
          </ul>
          <p className="text-sm text-muted-foreground mt-6 italic">The research questions are currently being refined and will be published here once finalised.</p>
        </div>

        <div className="mt-12 bg-card rounded-2xl p-8 card-elevated">
          <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Methodology</h3>
          <p className="text-sm text-muted-foreground mb-8">Design Science Research, conducted with SINTEF within the EU project DataPACT.</p>
          <div className="grid md:grid-cols-2 gap-6">
            {phases.map((p) => (
              <div key={p.title} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <p.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-foreground mb-1">{p.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-accent/30 bg-accent/5 p-6 flex gap-4 items-start">
          <AlertTriangle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
          <p className="text-sm text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Scope.</strong> InspectR checks what a design <em>declares</em>. A PASS means a control is represented in the blueprint. It does not establish that the control exists, works at runtime, or that an organisation is legally compliant. InspectR supports design review; it does not replace legal interpretation, authorised approval or runtime assurance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ThesisSection;
