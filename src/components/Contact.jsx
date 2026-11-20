import { useState } from "react";

function CopyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

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

function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const emailAddress = "sheetalr2605@gmail.com";
  const phoneNumber = "+91 8123047764";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Create mailto fallback link with prefilled fields
    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
      formData.subject || `Portfolio Contact from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoLink;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="section-header">
          <p className="section-label">GET IN TOUCH</p>
          <h2 className="section-title">
            Let's build something <span>remarkable.</span>
          </h2>
          <p className="section-subtitle">
            Whether you have an internship opportunity, a project idea, or just want to discuss software engineering,
            I'd love to hear from you.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Info Column */}
          <div className="contact-info-column">
            <div className="contact-card primary-card">
              <div className="card-indicator">
                <span className="online-ping"></span>
                <span>Available for Internships &amp; Full-Time Roles</span>
              </div>
              <h3>Reach out directly</h3>
              <p>
                Based in Bengaluru, India. Open to in-person and remote software engineering opportunities.
              </p>

              <div className="contact-details-list">
                {/* Email item with copy button */}
                <div className="contact-item">
                  <div className="contact-icon-wrapper">
                    <MailIcon />
                  </div>
                  <div className="contact-item-info">
                    <span className="contact-item-label">EMAIL</span>
                    <a href={`mailto:${emailAddress}`} className="contact-item-value">
                      {emailAddress}
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="copy-btn"
                    title="Copy email to clipboard"
                    aria-label="Copy email address"
                  >
                    {copied ? <CheckIcon /> : <CopyIcon />}
                    <span className="copy-btn-text">{copied ? "Copied!" : "Copy"}</span>
                  </button>
                </div>

                {/* Phone item */}
                <div className="contact-item">
                  <div className="contact-icon-wrapper">
                    <PhoneIcon />
                  </div>
                  <div className="contact-item-info">
                    <span className="contact-item-label">PHONE</span>
                    <a href={`tel:${phoneNumber.replace(/\s+/g, "")}`} className="contact-item-value">
                      {phoneNumber}
                    </a>
                  </div>
                </div>

                {/* Location item */}
                <div className="contact-item">
                  <div className="contact-icon-wrapper">
                    <MapPinIcon />
                  </div>
                  <div className="contact-item-info">
                    <span className="contact-item-label">LOCATION</span>
                    <span className="contact-item-value">Bengaluru, Karnataka, India</span>
                  </div>
                </div>
              </div>

              {/* Social profile shortcuts */}
              <div className="contact-social-pills">
                <a
                  href="https://github.com/Sheetalr2005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill"
                >
                  <GithubIcon />
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/sheetal-r-2a48b42a0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill"
                >
                  <LinkedinIcon />
                  LinkedIn
                </a>
                <a
                  href="/resume.pdf"
                  download
                  className="social-pill resume-pill"
                >
                  <span>📄</span> Download CV
                </a>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="contact-form-column">
            <div className="form-card">
              <h3>Send a Message</h3>
              <p className="form-subtext">Fill out this quick form and it will prepare an email directly to my inbox.</p>

              {formSubmitted ? (
                <div className="form-success-banner">
                  <span className="success-icon">✓</span>
                  <div>
                    <h4>Thank you for reaching out!</h4>
                    <p>Your mail client has been opened with your message. If it didn't open automatically, feel free to email me directly at <strong>{emailAddress}</strong>.</p>
                  </div>
                  <button
                    type="button"
                    className="reset-btn"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: "", email: "", subject: "", message: "" });
                    }}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Your Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Your Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Internship opportunity / Project collaboration"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hello Sheetal, I came across your portfolio and would love to connect regarding..."
                    />
                  </div>

                  <button type="submit" className="form-submit-btn">
                    Send Message
                    <span aria-hidden="true">→</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
