import { useState } from "react";

const experiences = [
  {
    role: "Web Development Intern",
    company: "SkillCraft Technology",
    period: "Sep 2025 – Oct 2025",
    type: "Remote Internship",
    description:
      "Contributed to frontend development of responsive web applications and e-commerce UI modules using modern React.js and Tailwind CSS.",
    points: [
      "Engineered fluid, responsive user interfaces translating design specifications into clean React components.",
      "Developed modular e-commerce features including interactive product catalogs and stateful shopping carts.",
      "Implemented reusable design system elements with Tailwind CSS ensuring high cross-device fidelity."
    ],
    tag: "Experience"
  },
  {
    role: "1st Place Winner — Web3 Innovation Track",
    company: "Silver Spectrum Hackathon 2025 (NHCE)",
    period: "2025",
    type: "Competitive Hackathon",
    description:
      "Awarded 1st place among inter-college teams for architecting a cutting-edge decentralized anti-MEV and front-running defense solution.",
    points: [
      "Identified vulnerabilities in public mempool transactions susceptible to front-running bots and sandwiching.",
      "Engineered an Ethereum smart contract protocol utilizing commit-reveal cryptographic techniques.",
      "Presented working architectural demonstration to industry judges and won first place honors."
    ],
    tag: "Achievement"
  }
];

const education = [
  {
    degree: "B.E. in Computer Science (IoT, Cybersecurity & Blockchain)",
    institution: "REVA University, Bengaluru",
    period: "2023 – 2027",
    score: "CGPA: 9.0",
    description:
      "Specialized degree program focusing on secure computing, distributed systems, embedded IoT networks, cryptographic primitives, and enterprise software engineering.",
    courses: ["Data Structures & Algorithms", "DBMS", "Operating Systems", "Computer Networks", "Cryptography", "Blockchain & IoT"]
  },
  {
    degree: "Pre-University Course (PCMB - 12th Grade)",
    institution: "Vidyanidhi PU College, Tumkur",
    period: "2021 – 2023",
    score: "92.0%",
    description: "Rigorous pre-university scientific curriculum with distinction in Physics, Chemistry, Mathematics, and Biology."
  },
  {
    degree: "Secondary School Leaving Certificate (SSLC - 10th Grade)",
    institution: "Maruthi Vidya Kendra, Tumkur",
    period: "2021",
    score: "94.4%",
    description: "Completed secondary education with top honors and academic excellence."
  }
];

const certifications = [
  {
    name: "Blockchain 101",
    issuer: "Infosys Springboard",
    icon: "⛓️",
    description: "Fundamental concepts of distributed ledgers, consensus algorithms, Ethereum, and decentralized apps."
  },
  {
    name: "Web Development Fundamentals",
    issuer: "IBM",
    icon: "🌐",
    description: "Core full-stack web architecture, modern frontend principles, HTTP lifecycle, and responsive layouts."
  },
  {
    name: "Hands-On Cryptography with Java",
    issuer: "Infosys Springboard",
    icon: "🔐",
    description: "Practical implementations of ciphers, hashing, digital signatures, and asymmetric key cryptography in Java."
  }
];

function Experience() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <div className="section-header">
          <p className="section-label">JOURNEY &amp; CREDENTIALS</p>
          <h2 className="section-title">
            Experience &amp; <span>Education.</span>
          </h2>
          <p className="section-subtitle">
            My practical industry experience, competitive hackathon honors, and strong academic background
            in Computer Science, IoT, and Blockchain.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="exp-tabs">
          <button
            type="button"
            className={`exp-tab-btn ${activeTab === "all" ? "active" : ""}`}
            onClick={() => setActiveTab("all")}
          >
            All Milestones
          </button>
          <button
            type="button"
            className={`exp-tab-btn ${activeTab === "experience" ? "active" : ""}`}
            onClick={() => setActiveTab("experience")}
          >
            Experience &amp; Achievements
          </button>
          <button
            type="button"
            className={`exp-tab-btn ${activeTab === "education" ? "active" : ""}`}
            onClick={() => setActiveTab("education")}
          >
            Education &amp; Certifications
          </button>
        </div>

        <div className="experience-grid">
          {/* Experience & Hackathons Column */}
          {(activeTab === "all" || activeTab === "experience") && (
            <div className="exp-column">
              <h3 className="column-heading">
                <span className="column-icon">💼</span>
                Experience &amp; Hackathons
              </h3>

              <div className="timeline">
                {experiences.map((item, idx) => (
                  <div key={idx} className="timeline-item">
                    <div className="timeline-marker"></div>
                    <div className="timeline-card">
                      <div className="card-top-row">
                        <span className={`pill-badge ${item.tag === "Achievement" ? "pill-gold" : "pill-blue"}`}>
                          {item.type}
                        </span>
                        <span className="timeline-date">{item.period}</span>
                      </div>
                      <h4 className="timeline-title">{item.role}</h4>
                      <p className="timeline-company">{item.company}</p>
                      <p className="timeline-description">{item.description}</p>
                      <ul className="timeline-bullets">
                        {item.points.map((pt, pIdx) => (
                          <li key={pIdx}>{pt}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education & Certifications Column */}
          {(activeTab === "all" || activeTab === "education") && (
            <div className="exp-column">
              <h3 className="column-heading">
                <span className="column-icon">🎓</span>
                Education &amp; Certifications
              </h3>

              <div className="education-list">
                {education.map((edu, idx) => (
                  <div key={idx} className="edu-card">
                    <div className="edu-header">
                      <div>
                        <h4 className="edu-degree">{edu.degree}</h4>
                        <p className="edu-institution">{edu.institution}</p>
                      </div>
                      <div className="edu-badge-box">
                        <span className="edu-score">{edu.score}</span>
                        <span className="edu-period">{edu.period}</span>
                      </div>
                    </div>
                    <p className="edu-description">{edu.description}</p>
                    {edu.courses && (
                      <div className="edu-course-tags">
                        {edu.courses.map((course) => (
                          <span key={course} className="course-pill">
                            {course}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Certifications Sub-block */}
              <div className="certifications-block">
                <h4 className="cert-heading">
                  <span>📜</span> Professional Certifications
                </h4>
                <div className="cert-grid">
                  {certifications.map((cert, idx) => (
                    <div key={idx} className="cert-item">
                      <span className="cert-icon">{cert.icon}</span>
                      <div className="cert-info">
                        <strong>{cert.name}</strong>
                        <small>{cert.issuer}</small>
                        <p>{cert.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Experience;
