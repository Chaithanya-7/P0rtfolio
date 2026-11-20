function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">

        <div className="about-heading">
          <p className="section-label">A LITTLE ABOUT ME</p>
          <h2 className="section-title">
            The person behind <span>the code.</span>
          </h2>
          <p className="about-subtitle">
            Curious by nature. Analytical at heart.
            Always driven to explore what technology makes possible.
          </p>
        </div>

        <div className="about-grid">

          <div className="about-story">
            <h3>My Story <span>✳</span></h3>

            <p>
              I am a Computer Science engineering undergraduate at <strong>REVA University, Bengaluru</strong> (specializing in IoT, Cybersecurity &amp; Blockchain, currently maintaining a <strong>9.0 CGPA</strong>). What excites me most about technology is taking an abstract concept and engineering it into a robust, tangible, and useful application.
            </p>

            <p>
              My journey spans full-stack web development with <strong>React</strong> and <strong>Spring Boot</strong>, secure backend architecture with <strong>PostgreSQL</strong>, and cutting-edge decentralized systems. From building coding analytics platforms with real-time heatmaps to winning <strong>1st place at the Silver Spectrum Hackathon</strong> for anti-MEV blockchain protections, I thrive on solving complex engineering challenges.
            </p>

            <p>
              Whether designing clean responsive user interfaces, writing secure RESTful APIs, or experimenting with microcontroller OTA updates, I value clean code, strong fundamentals, and continuous learning.
            </p>

            <div className="about-badges">
              <span className="about-stat-pill">📍 Bengaluru, India</span>
              <span className="about-stat-pill">🎓 REVA University (CGPA 9.0)</span>
              <span className="about-stat-pill">🏆 Hackathon 1st Place</span>
              <span className="about-stat-pill">💡 Full-Stack &amp; Web3</span>
            </div>

            <div className="about-actions-row">
              <a href="#projects" className="about-link">
                Discover what I've built
                <span aria-hidden="true">↗</span>
              </a>
              <a href="#skills" className="about-link secondary-link">
                View my tech stack
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          <div className="about-highlights">

            <div className="about-highlight-card">
              <div className="highlight-icon">01</div>
              <div>
                <h4>Full-Stack Engineering</h4>
                <p>
                  Architecting end-to-end web applications with modern React frontends, robust Spring Boot backends, and relational databases.
                </p>
              </div>
            </div>

            <div className="about-highlight-card">
              <div className="highlight-icon">02</div>
              <div>
                <h4>Security &amp; Web3 Innovation</h4>
                <p>
                  Building secure smart contract systems, tamper-proof OTA firmware updates, and defending against front-running and MEV exploits.
                </p>
              </div>
            </div>

            <div className="about-highlight-card">
              <div className="highlight-icon">03</div>
              <div>
                <h4>Problem Solving &amp; Core CS</h4>
                <p>
                  Grounded in solid computer science foundations: Data Structures, Algorithms, OOP, DBMS, and Operating Systems.
                </p>
              </div>
            </div>

          </div>

        </div>

        <div className="about-bottom">
          <span className="about-bottom-line"></span>
          <p>
            Learning. Creating. Improving.
            <span> One step at a time.</span>
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;
