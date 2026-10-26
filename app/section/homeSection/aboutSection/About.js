"use client";

import { useState } from "react";
import "./About.css";
import "./Resabout.css";

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("introduction");
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <section className="about-section">
      <div className="about-container">

        {/* Header */}
        <div className="about-header">
          <span className="about-subtitle">MEET HAMZA ANSARI</span>
          <h2 className="about-title">About Me:</h2>
        </div>

        {/* Main Content Grid */}
        <div className="about-grid">

          {/* Left Side: Profile Image */}
          <div className="about-image-wrapper">
            <div className="image-box">
              <img src="./about-picture.jpeg" alt="Hamza Ansari" className="profile-img" />
            </div>
          </div>

          {/* Right Side: Tabs & Content */}
          <div className="about-content-wrapper">

            {/* Tabs Navigation (4 Options) */}
            <div className="about-tabs four-tabs">
              <button
                className={`tab-btn ${activeTab === "introduction" ? "active" : ""}`}
                onClick={() => setActiveTab("introduction")}
              >
                Introduction:
              </button>
              <button
                className={`tab-btn ${activeTab === "education" ? "active" : ""}`}
                onClick={() => setActiveTab("education")}
              >
                Education:
              </button>
              <button
                className={`tab-btn ${activeTab === "skills" ? "active" : ""}`}
                onClick={() => setActiveTab("skills")}
              >
                Skills:
              </button>
              <button
                className={`tab-btn ${activeTab === "certificates" ? "active" : ""}`}
                onClick={() => setActiveTab("certificates")}
              >
                Certificates:
              </button>
            </div>

            {/* Tab Content */}
            <div className="tab-pane-content">
              {activeTab === "introduction" && (
                <div className="tab-content fade-in">
                  <h3>FULL-STACK WEB DEVELOPER FROM KARACHI, PAKISTAN:</h3>
                  <p>
                    "I am a passionate Full-Stack Web Developer and dedicated Tech Educator from Karachi, Pakistan. I specialize
                    in building modern, scalable web applications using React.js, Next.js, Node.js, Express, MongoDB, and
                    PostgreSQL. With hands-on experience in managing state using Redux Toolkit, integrating real-time Socket.io
                    features, containerizing with Docker, and deploying on cloud platforms like Vercel & Firebase, I focus on
                    building high-performance products. I also love sharing my knowledge, mentoring aspiring developers, and
                    constantly exploring cutting-edge web technologies."
                  </p>

                  {/* Accordions */}
                  <div className="accordion-list">
                    <div className="accordion-item" onClick={() => toggleAccordion(1)}>
                      <div className="accordion-question">
                        <span>🔒 Who are you and what do you do?</span>
                        <span className="arrow">{openAccordion === 1 ? "▲" : "▼"}</span>
                      </div>
                      {openAccordion === 1 && (
                        <div className="accordion-answer">
                          I’m Hamza Ansari, a Full Stack Developer specializing in MERN Stack and Next.js, building modern,
                          responsive web applications.
                        </div>
                      )}
                    </div>

                    <div className="accordion-item" onClick={() => toggleAccordion(2)}>
                      <div className="accordion-question">
                        <span>🔒 What are your strengths as a developer?</span>
                        <span className="arrow">{openAccordion === 2 ? "▲" : "▼"}</span>
                      </div>
                      {openAccordion === 2 && (
                        <div className="accordion-answer">
                          My strengths include frontend development, backend API development, database management, and building
                          responsive websites.
                        </div>
                      )}
                    </div>

                    <div className="accordion-item" onClick={() => toggleAccordion(3)}>
                      <div className="accordion-question">
                        <span>🔒 What projects have you worked on?</span>
                        <span className="arrow">{openAccordion === 3 ? "▲" : "▼"}</span>
                      </div>
                      {openAccordion === 3 && (
                        <div className="accordion-answer">
                          I have developed e-commerce websites, clothing platforms, and full-stack applications using React.js,
                          Next.js, Node.js, Express.js, and databases.
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "education" && (
                <div className="tab-content fade-in">
                  <h3>EDUCATION BACKGROUND:</h3>
                  <p>
                    <strong>Intermediate – Computer Science</strong><br />
                    Currently Studying.
                  </p>
                  <p>
                    <strong>Matriculation – Science Group</strong><br />
                    Board of Secondary Education (70% Marks).
                  </p>
                </div>
              )}

              {activeTab === "skills" && (
                <div className="tab-content fade-in">
                  <h3>LANGUAGES / FRAMEWORKS PROFICIENCY:</h3>
                  <div className="skills-circle-grid">
                    <div className="skill-circle-card"><span>JavaScript</span></div>
                    <div className="skill-circle-card"><span>TypeScript</span></div>
                    <div className="skill-circle-card"><span>React.js</span></div>
                    <div className="skill-circle-card"><span>Next.js</span></div>
                    <div className="skill-circle-card"><span>Express</span></div>
                    <div className="skill-circle-card"><span>Node.js</span></div>
                    <div className="skill-circle-card"><span>MongoDB</span></div>
                    <div className="skill-circle-card"><span>PostgreSQL</span></div>
                    <div className="skill-circle-card"><span>Redux</span></div>
                    <div className="skill-circle-card"><span>CSS3</span></div>
                    <div className="skill-circle-card"><span>HTML5</span></div>
                    <div className="skill-circle-card"><span>Tailwind</span></div>
                    <div className="skill-circle-card"><span>Material UI</span></div>
                    <div className="skill-circle-card"><span>firebase</span></div>
                    <div className="skill-circle-card"><span>Bootstrap</span></div>
                    <div className="skill-circle-card"><span>Rest API</span></div>
                    <div className="skill-circle-card"><span>Docker</span></div>
                    <div className="skill-circle-card"><span>Socket.io</span></div>
                    <div className="skill-circle-card"><span>Git/Github</span></div>
                    <div className="skill-circle-card"><span>VERCEL</span></div>
                    <div className="skill-circle-card"><span>Netlify</span></div>
                  </div>
                </div>
              )}

              {activeTab === "certificates" && (
                <div className="tab-content fade-in">
                  <h3>CERTIFICATIONS & ACHIEVEMENTS:</h3>
                  <div className="cert-list">
                    <div className="cert-item">
                      <strong>Web & Mobile App Development</strong>
                      <p>Saylani Mass IT Training (SMIT)</p>
                    </div>
                    <div className="cert-item">
                      <strong>Certified Web Developer</strong>
                      <p>Cisco Networking Academy</p>
                    </div>
                    <div className="cert-item">
                      <strong>Cisco Web Development Course</strong>
                      <p>Completed HTML, CSS & JavaScript Certification</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}