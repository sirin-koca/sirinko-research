import { Mail, Linkedin, Github, MapPin } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      href: "mailto:sirinkoc@uio.no",
      value: "sirinkoc@uio.no",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/sirinkoca",
      value: "Connect on LinkedIn",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/sirin-koca",
      value: "View my code",
    },
  ];

  return (
    <section id="contact" className="section-padding hero-gradient">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-accent font-medium tracking-wider uppercase text-sm mb-4">Get In Touch</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Let's Connect
            </h2>
            <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
              Interested in my research? Have questions about my thesis or want to collaborate? I'd love to hear from
              you.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-primary-foreground/5 hover:bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/10 rounded-xl p-6 text-center transition-all hover:scale-105"
              >
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/30 transition-colors">
                  <link.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-medium text-primary-foreground mb-1">{link.label}</h3>
                <p className="text-sm text-primary-foreground/60">{link.value}</p>
              </a>
            ))}
          </div>

          {/* Location */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-primary-foreground/60">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Oslo, Norway</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
