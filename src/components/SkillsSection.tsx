import { FileText, Code, Palette, Database, BarChart3, PenTool } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Research & Writing",
      icon: FileText,
      skills: ["LaTeX", "Overleaf", "Zotero", "Academic Writing", "Literature Review", "Research Methods"],
    },
    {
      title: "Data & Programming",
      icon: Code,
      skills: ["Python", "R", "Data Analysis", "Machine Learning"],
    },
    {
      title: "Design & Visualization",
      icon: Palette,
      skills: ["Figma", "Plotly", "Streamlit", "Jupyter Notebook", "Prototyping", "Tableau"],
    },
  ];

  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-accent font-medium tracking-wider uppercase text-sm mb-4">
              Toolkit
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Skills & Technologies
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The tools and technologies I use throughout my thesis research and development.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                  <category.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground text-lg mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
