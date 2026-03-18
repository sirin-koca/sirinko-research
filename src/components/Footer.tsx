import { Link, useLocation, useNavigate } from "react-router-dom";
import datapactLogo from "@/assets/datapact-logo.png";
import sintefLogoWhite from "@/assets/sintef-logo-white.png";

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
        <div className="flex items-center justify-center gap-6 mt-6 pt-6 border-t border-muted-foreground/20">
          <span className="text-xs text-muted/60 uppercase tracking-wider">In collaboration with</span>
          <a href="https://www.sintef.no/en/projects/2025/datapact/" target="_blank" rel="noopener noreferrer" className="flex h-6 w-24 items-center justify-center opacity-60 transition-opacity hover:opacity-100">
            <img src={sintefLogoWhite} alt="SINTEF" className="max-h-full w-auto object-contain" />
          </a>
          <a href="https://datapact.eu" target="_blank" rel="noopener noreferrer" className="flex h-6 w-24 items-center justify-center opacity-60 transition-opacity hover:opacity-100">
            <img src={datapactLogo} alt="DataPACT" className="max-h-full w-auto object-contain" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
