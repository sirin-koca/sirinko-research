import datapactLogo from "@/assets/datapact-logo.png";
import sintefLogo from "@/assets/sintef-logo.png";

const CollaborationStrip = () => {
  return (
    <section aria-label="Collaborations" className="bg-background px-6 pb-10 md:px-12 lg:px-24 lg:pb-16">
      <div className="container mx-auto">
        <div className="rounded-2xl border border-border/60 bg-card/70 px-6 py-6 shadow-sm backdrop-blur-sm">
          <div className="grid gap-3 sm:grid-cols-3 sm:items-center sm:gap-4">
            <div className="flex h-14 items-center justify-start sm:justify-center">
              <span className="text-xs uppercase leading-snug tracking-[0.22em] text-muted-foreground sm:text-center">
                In collaboration with
              </span>
            </div>
            <a
              href="https://www.sintef.no/en/projects/2025/datapact/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-14 w-full items-center justify-center rounded-lg border border-border/50 bg-background px-4 transition-colors hover:bg-muted/40"
            >
              <img src={sintefLogo} alt="SINTEF" className="max-h-6 w-auto object-contain mix-blend-multiply" />
            </a>
            <a
              href="https://datapact.eu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-14 w-full items-center justify-center rounded-lg border border-border/50 bg-background px-4 transition-colors hover:bg-muted/40"
            >
              <img src={datapactLogo} alt="DataPACT" className="max-h-6 w-auto object-contain" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborationStrip;
