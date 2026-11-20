import { useState } from "react";

const projectCategories = ["All", "Full Stack", "Web3 & IoT", "Frontend"];

const projects = [
  {
    id: "codepulse",
    title: "CodePulse — Coding Analytics Platform",
    category: "Full Stack",
    badge: "Featured Full-Stack",
    summary:
      "A full-stack developer analytics platform that tracks problem-solving streaks, submission heatmaps, and coding metrics.",
    bullets: [
      "Built full-stack architecture using React, Spring Boot, and PostgreSQL.",
      "Implemented enterprise-grade authentication with Spring Security and BCrypt password encryption.",
      "Engineered visual streak tracking, commit heatmaps, and personalized analytics dashboards.",
      "Deployed full stack on Render with serverless Neon PostgreSQL for production resilience."
    ],
    technologies: ["React", "Spring Boot", "PostgreSQL", "Spring Security", "BCrypt", "Neon", "Render"],
    githubUrl: "https://github.com/Sheetalr2005",
    liveUrl: "https://github.com/Sheetalr2005",
    icon: "📊"
  },
  {
    id: "ota-firmware",
    title: "Blockchain-Based Secure OTA Firmware Update System",
    category: "Web3 & IoT",
    badge: "IoT Security & Web3",
    summary:
      "Decentralized over-the-air firmware distribution pipeline protecting IoT microcontrollers from malicious firmware injections.",
    bullets: [
      "Engineered decentralized OTA distribution architecture for ESP32 IoT microcontrollers.",
      "Implemented SHA-256 cryptographic verification and Ethereum smart contracts for immutable firmware validation.",
      "Simulated Man-in-the-Middle (MitM) attacks to evaluate resilience and eliminate attack vectors.",
      "Ensured zero-trust validation before any code is flashed onto hardware nodes."
    ],
    technologies: ["Node.js", "Solidity", "Ethereum", "ESP32", "SHA-256", "Smart Contracts"],
    githubUrl: "https://github.com/Sheetalr2005",
    liveUrl: "https://github.com/Sheetalr2005",
    icon: "🔐"
  },
  {
    id: "anti-mev",
    title: "Anti-MEV Transaction Defense Shield",
    category: "Web3 & IoT",
    badge: "🏆 1st Place — Hackathon Winner",
    summary:
      "A decentralized blockchain protocol safeguarding transactions against Maximal Extractable Value (MEV) exploits and sandwich attacks.",
    bullets: [
      "Won 1st Place in the Web3 Innovation Track at Silver Spectrum Hackathon 2025 (NHCE).",
      "Devised smart contract mechanisms preventing predatory mempool arbitrage and front-running bot manipulation.",
      "Architected secure commit-reveal transaction processing to guarantee execution integrity on EVM.",
      "Showcased live attack mitigation proof-of-concept during competitive jury evaluation."
    ],
    technologies: ["Solidity", "Ethereum", "EVM", "Web3 Security", "MEV Protection"],
    githubUrl: "https://github.com/Sheetalr2005",
    liveUrl: "https://github.com/Sheetalr2005",
    icon: "🛡️"
  },
  {
    id: "skillcraft-ecommerce",
    title: "SkillCraft E-Commerce Web Experience",
    category: "Frontend",
    badge: "Internship Showcase",
    summary:
      "A high-performance, mobile-first e-commerce web platform engineered with reusable React components and Tailwind CSS.",
    bullets: [
      "Built modern responsive web interfaces during Web Development Internship at SkillCraft Technology.",
      "Implemented dynamic product catalog, multi-criteria filtering, and client-side cart state management.",
      "Crafted modular, reusable UI components adhering to accessibility and UX best practices.",
      "Optimized rendering speed and cross-browser responsiveness across tablet and mobile devices."
    ],
    technologies: ["React.js", "Tailwind CSS", "JavaScript (ES6+)", "HTML5/CSS3", "Vite"],
    githubUrl: "https://github.com/Sheetalr2005",
    liveUrl: "https://github.com/Sheetalr2005",
    icon: "🛍️"
  }
];

function ExternalLinkIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function GithubIconSmall() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .8a11.2 11.2 0 0 0-3.54 21.83c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.75-1.32-3.75-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.77 2.28 3.26 1.6.1-.73.39-1.23.7-1.52-2.47-.28-5.07-1.24-5.07-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.08 1.14a10.7 10.7 0 0 1 5.6 0c2.14-1.45 3.07-1.14 3.07-1.14.62 1.53.23 2.67.12 2.95.72.78 1.14 1.78 1.14 3 0 4.29-2.6 5.23-5.08 5.51.4.35.75 1.03.75 2.08v3.08c0 .3.2.65.77.54A11.2 11.2 0 0 0 12 .8Z" />
    </svg>
  );
}

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="section-header">
          <p className="section-label">SELECTED WORKS</p>
          <h2 className="section-title">
            Featured <span>Projects.</span>
          </h2>
          <p className="section-subtitle">
            A showcase of full-stack web applications, decentralized blockchain systems,
            and software solutions built to solve real engineering problems.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="projects-filter-bar">
          {projectCategories.map((category) => (
            <button
              key={category}
              type="button"
              className={`projects-filter-btn ${activeFilter === category ? "active" : ""}`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article key={project.id} className="project-card">
              <div className="project-card-header">
                <div className="project-icon-box">{project.icon}</div>
                <span className={`project-badge ${project.badge.includes("Hackathon") ? "badge-highlight" : ""}`}>
                  {project.badge}
                </span>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-summary">{project.summary}</p>

              <div className="project-highlights">
                <span className="highlights-title">Key Contributions &amp; Features:</span>
                <ul>
                  {project.bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
              </div>

              <div className="project-tech-stack">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-pill">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-card-footer">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-action-btn secondary"
                  aria-label={`View ${project.title} source on GitHub`}
                >
                  <GithubIconSmall />
                  GitHub Code
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-action-btn primary"
                  aria-label={`Open demo or repository for ${project.title}`}
                >
                  Explore Project
                  <ExternalLinkIcon />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* GitHub Callout Banner */}
        <div className="github-callout-card">
          <div className="callout-content">
            <span className="callout-icon">⚡</span>
            <div>
              <h4>Looking for more repositories and experiments?</h4>
              <p>Explore my continuous commits, competitive programming solutions, and open-source explorations on GitHub.</p>
            </div>
          </div>
          <a
            href="https://github.com/Sheetalr2005"
            target="_blank"
            rel="noopener noreferrer"
            className="callout-btn"
          >
            Visit @Sheetalr2005
            <ExternalLinkIcon />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
