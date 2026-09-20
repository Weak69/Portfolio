import { useEffect, useState } from "react";
import "./App.css";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "MySQL",
  "Git & GitHub",
  "Linux",
  "AI & prompt engineering",
  "C++",
];

const projects = [
  {
    number: "01",
    title: "Kid-learn",
    type: "AI-powered bilingual app",
    description:
      "A cross-platform learning app for children with English and Bangla support, featuring alphabet, math, drawing, AI stories, and speech practice.",
    tags: ["React Native", "Gemini API", "Speech"],
    href: "https://github.com/Weak69",
  },
  {
    number: "02",
    title: "Password Generator",
    type: "Web utility",
    description:
      "A browser-based tool with customizable password length and character sets, tested against each requirement with clear usage documentation.",
    tags: ["JavaScript", "CSS", "Web API"],
    href: "https://github.com/Weak69",
  },
  {
    number: "03",
    title: "Portfolio",
    type: "Personal website",
    description:
      "This site: planned and built independently from scope to deployment, with Git and GitHub keeping every change traceable.",
    tags: ["React", "Vite", "Responsive UI"],
    href: "https://github.com/Weak69",
  },
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className="icon">
      <path d="M3 13 13 3M5 3h8v8" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="icon icon-download">
      <path d="M12 3v11m0 0 4-4m-4 4-4-4M4 19h16" />
    </svg>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : true;
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? "dark" : "light";
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    if (!mobileMenuOpen) {
      return undefined;
    }

    const closeMenuOnEscape = (event) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", closeMenuOnEscape);
    return () => document.removeEventListener("keydown", closeMenuOnEscape);
  }, [mobileMenuOpen]);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="logo" href="#top" aria-label="Jahid home">
          <span>Jahid</span> <em>(JS)</em>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="mobile-nav">
          <button
            className="menu-toggle"
            type="button"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileMenuOpen((current) => !current)}
          >
            <span aria-hidden="true" className="menu-icon">
              <span />
              <span />
              <span />
            </span>
          </button>
          {mobileMenuOpen && (
            <nav
              id="mobile-menu"
              className="mobile-menu"
              aria-label="Mobile navigation"
            >
              <a href="#about" onClick={() => setMobileMenuOpen(false)}>
                About
              </a>
              <a href="#skills" onClick={() => setMobileMenuOpen(false)}>
                Skills
              </a>
              <a href="#projects" onClick={() => setMobileMenuOpen(false)}>
                Projects
              </a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </a>
            </nav>
          )}
        </div>
        <button
          className="theme-toggle"
          type="button"
          onClick={() => setDarkMode((current) => !current)}
          aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`}
        >
          <span aria-hidden="true">{darkMode ? "☼" : "◐"}</span>
        </button>
      </header>

      <main id="top">
        <section className="hero section-wrap" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">JUNIOR FULL-STACK DEVELOPER</p>
            <h1 id="hero-title">
              Building thoughtful
              <span> digital experiences.</span>
            </h1>
            <p className="hero-text">
              I&apos;m Jahidul Islam Sajib, a CSE graduate and developer focused
              on turning ideas into useful, accessible products.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                View my work <ArrowIcon />
              </a>
              <a
                className="button button-secondary"
                href="./public/Jahidul_Islam_AI_Developer.pdf"
                download
                aria-label="Download resume"
              >
                Download resume <DownloadIcon />
              </a>
              <a className="button button-secondary" href="#contact">
                Get in touch
              </a>
            </div>
          </div>
          <div className="hero-mark" aria-hidden="true">
            <span>JS</span>
            <i />
          </div>
        </section>

        <section
          className="section-wrap intro-grid"
          id="about"
          aria-labelledby="about-title"
        >
          <div>
            <p className="section-label">01 / ABOUT</p>
            <h2 id="about-title">
              Curious by nature,
              <br />
              deliberate in code.
            </h2>
          </div>
          <div className="body-copy">
            <p>
              Hi there, I&apos;m Jahidul Islam Sajib. I&apos;m a CSE graduate
              from Gono Bishwabidyalay and a junior full-stack developer.
            </p>
            <p>
              Right now I&apos;m deepening my knowledge of advanced JavaScript,
              React, and Node.js. I enjoy learning in public, collaborating on
              meaningful work, and improving one detail at a time.
            </p>
          </div>
        </section>

        <section
          className="section-wrap skills-section"
          id="skills"
          aria-labelledby="skills-title"
        >
          <div className="section-heading">
            <p className="section-label">02 / TOOLKIT</p>
            <h2 id="skills-title">Things I work with.</h2>
          </div>
          <ul className="skills-list">
            {skills.map((skill, index) => (
              <li key={skill}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {skill}
              </li>
            ))}
          </ul>
        </section>

        <section
          className="section-wrap projects-section"
          id="projects"
          aria-labelledby="projects-title"
        >
          <div className="section-heading projects-heading">
            <div>
              <p className="section-label">03 / SELECTED WORK</p>
              <h2 id="projects-title">A few things I&apos;ve built.</h2>
            </div>
            <a
              className="text-link"
              href="https://github.com/Weak69"
              target="_blank"
              rel="noreferrer"
            >
              See all on GitHub <ArrowIcon />
            </a>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <span className="project-number">{project.number}</span>
                <div className="project-content">
                  <p className="project-type">{project.type}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <ul className="tag-list">
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>
                <a
                  className="project-link"
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <ArrowIcon />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section
          className="section-wrap contact-section"
          id="contact"
          aria-labelledby="contact-title"
        >
          <p className="section-label">04 / CONTACT</p>
          <h2 id="contact-title">
            Let&apos;s make something
            <br />
            <span>worth remembering.</span>
          </h2>
          <p className="contact-text">
            Have a project in mind, or just want to say hello? My inbox is
            always open.
          </p>
          <a
            className="button button-primary"
            href="mailto:jahidsajib001@gmail.com"
          >
            Say hello <ArrowIcon />
          </a>
          <div className="contact-links">
            <a href="mailto:jahidsajib001@gmail.com">Email</a>
            <a
              href="https://www.linkedin.com/in/jahidul-islam-sajib-947601329/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Weak69"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>© {new Date().getFullYear()} Jahidul Islam Sajib</span>
        <span>Designed & built with care.</span>
      </footer>
    </div>
  );
}

export default App;
