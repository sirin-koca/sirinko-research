import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#thesis", label: "Thesis" },
    { href: "/system-architecture", label: "System Architecture" },
    { href: "#journey", label: "Journey" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer className="bg-foreground py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted">
            © {currentYear} Sirin Koca. University of Oslo. · Master Thesis (2026–2027)
          </p>
          <nav className="flex items-center gap-6">
            {navLinks.map((link) =>
              link.href.startsWith("#") ? (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted hover:text-background transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm text-muted hover:text-background transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
