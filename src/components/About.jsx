
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
            Curious by nature. Creative at heart.
            Always learning something new.
          </p>
        </div>

        <div className="about-grid">

          <div className="about-story">
            <h3>My Story <span>✳</span></h3>

            <p>
              What I enjoy most about technology is the
              opportunity to take an idea and gradually
              turn it into something real.
            </p>

            <p>
              I like exploring how applications work,
              understanding the logic behind them, and
              finding better ways to solve problems.
              Every project teaches me something new,
              whether it's a technical concept or a
              different way of approaching a challenge.
            </p>

            <p>
              I'm still learning, experimenting, and
              growing as a developer. This portfolio is
              a space where I share that journey and
              the things I create along the way.
            </p>

            <a href="#projects" className="about-link">
              Discover what I've built
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="about-highlights">

            <div className="about-highlight-card">
              <div className="highlight-icon">01</div>
              <div>
                <h4>Building Things</h4>
                <p>
                  I enjoy bringing ideas to life through
                  functional, thoughtful applications.
                </p>
              </div>
            </div>

            <div className="about-highlight-card">
              <div className="highlight-icon">02</div>
              <div>
                <h4>Solving Problems</h4>
                <p>
                  I like breaking down challenges,
                  exploring solutions, and understanding
                  the reasoning behind them.
                </p>
              </div>
            </div>

            <div className="about-highlight-card">
              <div className="highlight-icon">03</div>
              <div>
                <h4>Always Exploring</h4>
                <p>
                  I'm curious about new technologies
                  and enjoy learning beyond what
                  I already know.
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
