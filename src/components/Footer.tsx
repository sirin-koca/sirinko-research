import { Link, useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#thesis", label: "Thesis" },
    { href: "/system-architecture", label: "System Architecture" },
    { href: "#journey", label: "Journey" },
    { href: "#contact", label: "Contact" },
  ];

  const handleAnchorClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/" + href);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-foreground py-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between md:gap-4">
          <p className="text-sm text-muted text-center md:text-left">
            © {currentYear} Sirin Koca. University of Oslo. · Master Thesis (2026–2027)
          </p>
          <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {navLinks.map((link) =>
              link.href.startsWith("#") ? (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleAnchorClick(e, link.href)}
                  className="text-sm text-muted hover:text-background transition-colors whitespace-nowrap"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm text-muted hover:text-background transition-colors whitespace-nowrap"
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
