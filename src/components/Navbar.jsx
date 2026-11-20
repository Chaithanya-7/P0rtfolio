
import { useEffect, useState } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateNavbar = () => {
      setScrolled(window.scrollY > 10);

      const sections = links
        .map((link) =>
          document.getElementById(link.href.slice(1))
        )
        .filter(Boolean);

      let current = sections[0]?.id || "home";

      for (const section of sections) {
        if (section.getBoundingClientRect().top <= 150) {
          current = section.id;
        }
      }

      setActive(current);
    };

    updateNavbar();

    window.addEventListener("scroll", updateNavbar, {
      passive: true,
    });
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

    return () =>
      window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  const handleLinkClick = (id) => {
    setActive(id);
    setMenuOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <a
        href="#home"
        className="logo"
        onClick={() => handleLinkClick("home")}
        aria-label="Sheetal R. - Home"
      >
        Sheetal <span>R.</span>
      </a>

      <button
        type="button"
        className="menu-toggle"
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen((previous) => !previous)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav
        id="primary-navigation"
        className={`nav-links ${menuOpen ? "nav-open" : ""}`}
        aria-label="Main navigation"
      >
        {links.map((link) => {
          const id = link.href.slice(1);

          return (
            <a
              key={id}
              href={link.href}
              className={active === id ? "nav-active" : ""}
              aria-current={active === id ? "location" : undefined}
              onClick={() => handleLinkClick(id)}
            >
              {link.label}
            </a>
          );
        })}
      </nav>
    </header>
  );
}

export default Navbar;
