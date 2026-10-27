import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileJson, CheckCircle, ScrollText, ShieldCheck, ListChecks, ArrowDown, ArrowRight, Database, Server, Layers, AlertTriangle } from "lucide-react";

const components = [
  { icon: FileJson, name: "Blueprint Input", text: "The user uploads a JSON pipeline blueprint, built with the inLUMEN pipeline designer, that describes a planned workflow." },
  { icon: CheckCircle, name: "Structure Validation", text: "Checks the expected top-level structure, including the pipeline object and the pipeline.nodes list." },
  { icon: ScrollText, name: "Policy Engine (OPA/Rego)", text: "The blueprint is sent directly to Open Policy Agent, which evaluates the six policies TK-001 to TK-006." },
  { icon: ShieldCheck, name: "Result Validation", text: "The evaluator validates that one well-formed result is returned for each policy check." },
  { icon: ListChecks, name: "Streamlit Interface", text: "Displays each finding with its outcome, reason, supporting blueprint evidence and remediation guidance." },
];

const layers = [
  { icon: Database, name: "Data schema", text: "Fields, types, sensitivity classifications and protection metadata." },
  { icon: Layers, name: "Pipeline manifest", text: "Activities, purposes, destinations, dependencies and checkpoints." },
  { icon: Server, name: "Infrastructure / IaC metadata", text: "Hosting, storage, encryption, retention and deployment properties." },
];

const workflow = ["request", "classify_request", "dpia_check", "extract_data", "integrate_dataset", "anonymisation", "sharing_assessment", "share_dataset"];

const SystemArchitecture = () => (
  <div className="min-h-screen bg-background">
    <Header />

    <section className="hero-gradient px-6 pt-32 pb-16 text-center">
      <p className="mb-4 text-sm font-medium uppercase tracking-wider text-accent">InspectR · Proof of Concept</p>
      <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">System Architecture</h1>
      <p className="mx-auto max-w-2xl text-primary-foreground/70 leading-relaxed">
        The current architecture of InspectR, an early-stage research prototype for design-time compliance inspection of data pipelines.
      </p>
    </section>

    <section className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">Evaluation Flow</h2>
        <div className="flex flex-col md:flex-row items-stretch gap-3">
          {components.map((c, i) => (
            <div key={c.name} className="flex flex-col md:flex-row items-center gap-3 flex-1">
              <div className="bg-card rounded-xl p-5 card-elevated flex-1 w-full">
                <c.icon className="w-6 h-6 text-accent mb-3" />
                <h3 className="font-serif font-semibold text-foreground mb-2 text-sm">{i + 1}. {c.name}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{c.text}</p>
              </div>
              {i < components.length - 1 && <><ArrowRight className="hidden md:block w-4 h-4 text-muted-foreground flex-shrink-0" /><ArrowDown className="md:hidden w-4 h-4 text-muted-foreground" /></>}
            </div>
          ))}
        </div>
        <p className="text-sm text-muted-foreground text-center mt-6">The current PoC does not use an intermediate representation.</p>
      </div>
    </section>

    <section className="section-padding bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">Pipeline Blueprint</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">The example blueprint combines three kinds of architectural information in one JSON file.</p>
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {layers.map((l) => (
            <div key={l.name} className="bg-card rounded-xl p-6 card-elevated">
              <l.icon className="w-6 h-6 text-accent mb-3" />
              <h3 className="font-serif font-semibold text-foreground mb-2">{l.name}</h3>
              <p className="text-sm text-muted-foreground">{l.text}</p>
            </div>
          ))}
        </div>
        <div className="bg-card rounded-xl p-6 card-elevated overflow-x-auto">
          <h3 className="font-serif font-semibold text-foreground mb-4">Meaning of declared values</h3>
          <table className="w-full text-sm">
            <tbody className="divide-y divide-border">
              <tr><td className="py-2 pr-4 font-mono text-accent">true</td><td className="py-2 text-muted-foreground">The design declares the named checkpoint or control.</td></tr>
              <tr><td className="py-2 pr-4 font-mono text-accent">false</td><td className="py-2 text-muted-foreground">The design explicitly declares that it is absent.</td></tr>
              <tr><td className="py-2 pr-4 font-mono text-accent">missing / null</td><td className="py-2 text-muted-foreground">The design does not supply the information.</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">MUNDAT Example Scenario</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">
          A sensitive-data-sharing workflow based on the DataPACT MUNDAT use case for Trondheim Kommune. InspectR inspects selected design properties of this workflow; it does not implement it.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-2">
          {workflow.map((w, i) => (
            <div key={w} className="flex items-center gap-2">
              <span className="font-mono text-xs bg-primary/5 border border-primary/20 rounded-lg px-3 py-2 text-foreground">{w}</span>
              {i < workflow.length - 1 && <ArrowRight className="w-4 h-4 text-muted-foreground" />}
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-muted/30">
      <div className="container mx-auto max-w-4xl rounded-2xl border border-accent/30 bg-accent/5 p-6 flex gap-4 items-start">
        <AlertTriangle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
        <div className="text-sm text-muted-foreground leading-relaxed space-y-2">
          <p><strong className="text-foreground">What InspectR does not establish:</strong> whether a DPIA was performed, whether an agreement exists or is sufficient, whether anonymisation prevents re-identification, whether lineage records are complete, whether controls operate at runtime, or whether an organisation is legally compliant.</p>
          <p>Final scope, contribution and evaluation are still under development.</p>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default SystemArchitecture;
