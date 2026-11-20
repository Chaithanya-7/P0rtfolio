import { useState } from "react";

const skillCategories = ["All", "Frontend", "Backend", "Databases & Cloud", "Web3 & IoT", "Tools"];

const skills = [
  {
    name: "React.js",
    category: "Frontend",
    level: "Advanced",
    icon: "⚛",
    description: "Component-based architecture, hooks, state management, and modern SPA development."
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    level: "Advanced",
    icon: "🎨",
    description: "Utility-first styling, responsive layouts, animations, and clean design systems."
  },
  {
    name: "JavaScript (ES6+)",
    category: "Frontend",
    level: "Advanced",
    icon: "JS",
    description: "Async/await, DOM manipulation, functional programming patterns, and API integration."
  },
  {
    name: "HTML5 & CSS3",
    category: "Frontend",
    level: "Advanced",
    icon: "🌐",
    description: "Semantic markup, modern CSS grid/flexbox, accessibility standards, and responsive web design."
  },
  {
    name: "Spring Boot",
    category: "Backend",
    level: "Advanced",
    icon: "🌱",
    description: "Enterprise Java framework for building robust, scalable RESTful microservices and APIs."
  },
  {
    name: "Java",
    category: "Backend",
    level: "Advanced",
    icon: "☕",
    description: "Object-oriented programming, concurrency, collections framework, and clean design patterns."
  },
  {
    name: "Spring Security",
    category: "Backend",
    level: "Proficient",
    icon: "🛡️",
    description: "Role-based access control, BCrypt encryption, JWT tokens, and secure authentication flows."
  },
  {
    name: "Node.js & Express",
    category: "Backend",
    level: "Proficient",
    icon: "🟢",
    description: "Event-driven backend servers, middleware routing, and asynchronous API architectures."
  },
  {
    name: "REST APIs",
    category: "Backend",
    level: "Advanced",
    icon: "🔌",
    description: "Clean RESTful resource design, JSON serialization, status code handling, and contract design."
  },
  {
    name: "PostgreSQL",
    category: "Databases & Cloud",
    level: "Advanced",
    icon: "🐘",
    description: "Relational database modeling, complex queries, indexing, transactions, and Neon Cloud integration."
  },
  {
    name: "MongoDB & SQL",
    category: "Databases & Cloud",
    level: "Proficient",
    icon: "🍃",
    description: "NoSQL document collections, aggregation pipelines, SQL schema design, and normalization."
  },
  {
    name: "Neon & Render",
    category: "Databases & Cloud",
    level: "Proficient",
    icon: "☁️",
    description: "Serverless Postgres database hosting, continuous deployment pipelines, and cloud hosting."
  },
  {
    name: "Solidity & Ethereum",
    category: "Web3 & IoT",
    level: "Proficient",
    icon: "⛓️",
    description: "Smart contract development, EVM mechanics, decentralized state validation, and MEV defense."
  },
  {
    name: "IoT & ESP32",
    category: "Web3 & IoT",
    level: "Proficient",
    icon: "📡",
    description: "Hardware microcontrollers, over-the-air (OTA) firmware architectures, and sensor interfacing."
  },
  {
    name: "Cryptography",
    category: "Web3 & IoT",
    level: "Proficient",
    icon: "🔐",
    description: "SHA-256 integrity verification, asymmetric encryption, hashing algorithms, and Java crypto libs."
  },
  {
    name: "Git & GitHub",
    category: "Tools",
    level: "Advanced",
    icon: "🐙",
    description: "Version control workflows, branching strategies, code reviews, and collaborative development."
  },
  {
    name: "Postman",
    category: "Tools",
    level: "Advanced",
    icon: "🚀",
    description: "API testing, automated collection runners, environment variables, and endpoint validation."
  },
  {
    name: "Vite & Modern Tooling",
    category: "Tools",
    level: "Advanced",
    icon: "⚡",
    description: "Fast module bundling, Hot Module Replacement (HMR), build optimizations, and linting."
  }
];

const coreCompetencies = [
  "Data Structures & Algorithms (DSA)",
  "Object-Oriented Programming (OOP)",
  "Database Management Systems (DBMS)",
  "Operating Systems",
  "Computer Networks",
  "Web3 & Blockchain Security"
];

function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredSkills = selectedCategory === "All"
    ? skills
    : skills.filter((skill) => skill.category === selectedCategory);

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className="section-header">
          <p className="section-label">TECHNICAL TOOLKIT</p>
          <h2 className="section-title">
            Skills &amp; <span>Technologies.</span>
          </h2>
          <p className="section-subtitle">
            A solid engineering foundation spanning full-stack development, modern web ecosystems,
            secure backend services, and emerging blockchain/IoT technologies.
          </p>
        </div>

        {/* Category Filters */}
        <div className="skills-filter-container">
          {skillCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`skills-filter-btn ${selectedCategory === cat ? "active" : ""}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-grid">
          {filteredSkills.map((skill) => (
            <div key={skill.name} className="skill-card">
              <div className="skill-card-top">
                <span className="skill-card-icon">{skill.icon}</span>
                <span className="skill-card-badge">{skill.category}</span>
              </div>
              <h3 className="skill-card-title">{skill.name}</h3>
              <p className="skill-card-desc">{skill.description}</p>
              <div className="skill-card-footer">
                <span className="skill-card-level-indicator"></span>
                <span className="skill-card-level">{skill.level}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Core CS Competencies */}
        <div className="core-competencies-card">
          <div className="core-header">
            <span className="core-icon">🎓</span>
            <div>
              <h3>Core Computer Science Competencies</h3>
              <p>Theoretical and practical fundamentals honed through rigorous coursework at REVA University.</p>
            </div>
          </div>
          <div className="competencies-tags">
            {coreCompetencies.map((item) => (
              <span key={item} className="competency-tag">
                <span className="bullet">✓</span> {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
