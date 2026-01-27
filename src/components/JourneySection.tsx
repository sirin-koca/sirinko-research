import { BookOpen, Lightbulb, Target, Rocket } from "lucide-react";

const JourneySection = () => {
  const milestones = [
    {
      icon: BookOpen,
      date: "Fall 2025",
      title: "Literature Review",
      description: "Surveying existing research on multi-agent systems, privacy-preserving ML, and data pipeline architectures.",
      status: "in-progress",
    },
    {
      icon: Lightbulb,
      date: "Spring 2026",
      title: "System Design",
      description: "Designing the initial architecture for the privacy-aware multi-agent system.",
      status: "upcoming",
    },
    {
      icon: Target,
      date: "Fall 2026",
      title: "Implementation",
      description: "Building the core components of the multi-agent system and data pipeline infrastructure.",
      status: "upcoming",
    },
    {
      icon: Rocket,
      date: "Spring 2027",
      title: "Evaluation & Thesis",
      description: "Testing the system, analyzing results, and completing the thesis documentation.",
      status: "upcoming",
    },
  ];

  const getStatusStyles = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-accent/20 border-accent text-accent";
      case "in-progress":
        return "bg-accent border-accent text-accent-foreground";
      case "upcoming":
        return "bg-muted border-border text-muted-foreground";
      default:
        return "bg-muted border-border text-muted-foreground";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "completed":
        return "Completed";
      case "in-progress":
        return "In Progress";
      case "upcoming":
        return "Upcoming";
      default:
        return status;
    }
  };

  return (
    <section id="journey" className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-accent font-medium tracking-wider uppercase text-sm mb-4">
            Progress Tracker
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            My Learning Journey
          </h2>
          <p className="prose-academic text-lg">
            Documenting key milestones and progress throughout my Master's program.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />

          {milestones.map((milestone, index) => (
            <div
              key={milestone.title}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline node */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-card border-2 border-accent rounded-full md:-translate-x-1/2 translate-y-6 z-10" />

              {/* Content card */}
              <div className={`ml-20 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                <div className="bg-card rounded-xl p-6 card-elevated">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                      <milestone.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{milestone.date}</p>
                      <h3 className="font-serif text-lg font-semibold text-foreground">
                        {milestone.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {milestone.description}
                  </p>
                  <span
                    className={`inline-block px-3 py-1 text-xs font-medium rounded-full border ${getStatusStyles(
                      milestone.status
                    )}`}
                  >
                    {getStatusLabel(milestone.status)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Updates CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Want to follow my journey more closely?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-medium px-6 py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-accent/20"
          >
            Get Updates
          </a>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
