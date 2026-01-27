const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted">
            © {currentYear} Sirin Koca. University of Oslo.
          </p>
          <nav className="flex items-center gap-6">
            <a
              href="#about"
              className="text-sm text-muted hover:text-background transition-colors"
            >
              About
            </a>
            <a
              href="#thesis"
              className="text-sm text-muted hover:text-background transition-colors"
            >
              Thesis
            </a>
            <a
              href="#journey"
              className="text-sm text-muted hover:text-background transition-colors"
            >
              Journey
            </a>
            <a
              href="#contact"
              className="text-sm text-muted hover:text-background transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
