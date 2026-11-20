
import Navbar from "./components/Navbar";
import About from "./components/About";
import "./App.css";

const technologies = [
  { name: "React", category: "Frontend", icon: "⚛" },
  { name: "Spring Boot", category: "Backend", icon: "◈" },
  { name: "Java", category: "Programming", icon: "{ }" },
  { name: "PostgreSQL", category: "Database", icon: "▤" },
];

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .8a11.2 11.2 0 0 0-3.54 21.83c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.75-1.32-3.75-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.77 2.28 3.26 1.6.1-.73.39-1.23.7-1.52-2.47-.28-5.07-1.24-5.07-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.08 1.14a10.7 10.7 0 0 1 5.6 0c2.14-1.45 3.07-1.14 3.07-1.14.62 1.53.23 2.67.12 2.95.72.78 1.14 1.78 1.14 3 0 4.29-2.6 5.23-5.08 5.51.4.35.75 1.03.75 2.08v3.08c0 .3.2.65.77.54A11.2 11.2 0 0 0 12 .8Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.75H4.98V9.2h2.95v9.55ZM6.45 7.9a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.3 10.85H15.8V14.1c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.73H9.51V9.2h2.83v1.3h.04c.4-.75 1.36-1.55 2.79-1.55 2.99 0 3.58 1.97 3.58 4.53v5.27Z" />
    </svg>
  );
}

function Home() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-eyebrow">
            <span className="eyebrow-line"></span>
            WELCOME TO MY PORTFOLIO
          </p>

          <h1 className="hero-title">
            Hi, I'm <span>Sheetal.</span>
            <br />
            I turn ideas into
            <br />
            <span>experiences.</span>
          </h1>

          <p className="hero-description">
            I enjoy taking ideas from the first spark of
            inspiration to something real and useful.
            Whether I'm building a web application,
            solving a challenging problem, or learning
            something new, I love discovering what
            technology makes possible.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              Explore My Work
              <span aria-hidden="true">↗</span>
            </a>

            <a
              href="/resume.pdf"
              className="btn-secondary"
              download
            >
              Download Resume
              <span aria-hidden="true">↓</span>
            </a>
          </div>

          <div className="hero-socials">
            <span className="social-label">CONNECT WITH ME</span>

            <a
              href="https://github.com/Sheetalr2005"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
            >
              <GithubIcon />
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/sheetal-r-2a48b42a0"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
            >
              <LinkedinIcon />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-backdrop"></div>

          <div className="workspace-card">
            <div className="workspace-header">
              <div className="window-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <span className="workspace-filename">
                developer.workspace
              </span>

              <span className="workspace-command">⌘</span>
            </div>

            <div className="workspace-body">
              <p className="workspace-label">
                MY CREATIVE SPACE
              </p>

              <h2 className="workspace-title">
                Design.
                <br />
                Develop.
                <br />
                <span>Deliver.</span>
              </h2>

              <p className="workspace-description">
                Exploring ideas and bringing them to life,
                one project at a time.
              </p>

              <div className="tech-grid">
                {technologies.map((tech) => (
                  <div className="tech-card" key={tech.name}>
                    <span className="tech-icon">
                      {tech.icon}
                    </span>

                    <div className="tech-info">
                      <strong>{tech.name}</strong>
                      <small>{tech.category}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="workspace-footer">
              <span className="online-dot"></span>
              Always learning. Always building.
              <span className="footer-star">✳</span>
            </div>
          </div>

          <span className="visual-star star-top">✳</span>
          <span className="visual-star star-bottom">+</span>
        </div>
      </div>

      <a href="#about" className="scroll-indicator">
        SCROLL TO EXPLORE
        <span aria-hidden="true">↓</span>
      </a>
    </section>
  );
}

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Home />
        <About />
      </main>
    </>
  );
}

export default App;
