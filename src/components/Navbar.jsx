import { useEffect, useState } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateNavbar = () => {
      setScrolled(window.scrollY > 15);

      const sections = links
        .map((link) => document.getElementById(link.href.slice(1)))
        .filter(Boolean);

      let current = sections[0]?.id || "home";

      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        // If top of section is within upper viewport area
        if (rect.top <= 200 && rect.bottom >= 100) {
          current = section.id;
        }
      }

      setActive(current);
    };

    updateNavbar();

    window.addEventListener("scroll", updateNavbar, { passive: true });
    window.addEventListener("resize", updateNavbar);

    return () => {
      window.removeEventListener("scroll", updateNavbar);
      window.removeEventListener("resize", updateNavbar);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  const handleLinkClick = (id) => {
    setActive(id);
    setMenuOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">
        <a
          href="#home"
          className="logo"
          onClick={() => handleLinkClick("home")}
          aria-label="Sheetal R. - Home"
        >
          Sheetal <span>R.</span>
        </a>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Backdrop for mobile */}
        {menuOpen && (
          <div
            className="nav-backdrop"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />
        )}

        <nav
          id="primary-navigation"
          className={`nav-links ${menuOpen ? "nav-open" : ""}`}
          aria-label="Main navigation"
        >
          {links.map((link) => {
            const id = link.href.slice(1);
            const isActive = active === id;

            return (
              <a
                key={id}
                href={link.href}
                className={isActive ? "nav-active" : ""}
                aria-current={isActive ? "location" : undefined}
                onClick={() => handleLinkClick(id)}
              >
                {link.label}
              </a>
            );
          })}

          <a
            href="/resume.pdf"
            className="nav-cta-btn"
            download
            onClick={() => setMenuOpen(false)}
          >
            Resume <span>↓</span>
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
