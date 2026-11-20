function ArrowUpIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="18 15 12 9 6 15" />
    </svg>
  );
}

const currentYear = new Date().getFullYear();

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              Sheetal <span>R.</span>
            </a>
            <p className="footer-bio">
              Computer Science student at REVA University passionate about full-stack engineering,
              scalable web applications, IoT architectures, and decentralized Web3 technologies.
            </p>
          </div>

          <div className="footer-nav-groups">
            <div className="footer-nav-col">
              <h4>Navigation</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className="footer-nav-col">
              <h4>Connect</h4>
              <ul>
                <li>
                  <a href="https://github.com/Sheetalr2005" target="_blank" rel="noopener noreferrer">
                    GitHub ↗
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com/in/sheetal-r-2a48b42a0" target="_blank" rel="noopener noreferrer">
                    LinkedIn ↗
                  </a>
                </li>
                <li>
                  <a href="mailto:sheetalr2605@gmail.com">
                    sheetalr2605@gmail.com
                  </a>
                </li>
                <li>
                  <a href="/resume.pdf" download>
                    Download Resume ↓
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright-text">
            © {currentYear} Sheetal R. All rights reserved. Built with React &amp; Vite.
          </p>

          <button
            type="button"
            className="back-to-top-btn"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
          >
            Back to Top
            <ArrowUpIcon />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
