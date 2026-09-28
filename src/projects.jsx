import { useState } from "react";
import "./index.css";
import tastehubImage from "./assets/Tastehub Restaurant.png";
import stayceyGlowImage from "./assets/Staycey_glow.png";
import financeflowImage from "./assets/Financeflow.png";
import oakImage from "./assets/Oak.png.png";
import barberImage from "./assets/Barber.png";

const projects = [

  {
    thumbnail: stayceyGlowImage,
    title: "Staycey Glow",
    description:
      "An elegant beauty and skincare website featuring products and modern shopping experience.",
    tech: "React • CSS • JavaScript",
    github: "https://github.com/yourusername/staycey-glow",
    live: "https://staycey-glow-boutique.vercel.app/",
  },
  {
  thumbnail: tastehubImage,
  title: "Tastehub Restaurant",
  description:
    "A food ordering platform that allows users to browse meals, add items to their cart and place orders easily.",
  tech: "React",
  github: "https://github.com/tawananyashachipata-lab/tastehub-order.git",
  live: "https://tastehub-order.vercel.app/",
},
  {
    thumbnail: financeflowImage,
    title: "Financeflow ",
    description:
      "A modern event platform built to simplify registration, programme management, and event coordination.",
    tech: "React • TypeScript  • Supabase  • HTML • CSS",
    github: "https://github.com/tawananyashachipata-lab/financeflow-dashboard.git",
    live: "https://financeflow-dashboard-i2al.vercel.app/",
  },
  {
    thumbnail: oakImage,
    title: "OAK-Foundation-Event",
    description:
      "A digital event management platform for OAK Zimbabwe, streamlining attendee registration, QR check-in, event programmes, and partner management.",
    tech: "Typescript • NextJS • PostgreSQL • Supabase",
    github: "https://github.com/tawananyashachipata-lab/OAK.git",
    live: "https://oak-foundation-eta.vercel.app/",
  },
  
  {
    thumbnail: barberImage,
    title: "Mercer Barber Booking Platform",
    description:
    "A modern barber booking platform designed to simplify appointment scheduling and enhance the client experience.",
    tech: "React • TypeScript • Responsive web design • Git and GitHub • Vite",
    github: "https://github.com/tawananyashachipata-lab/Barber-fade.git",
    live: "https://barber-fade.netlify.app/",
  },
];

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
  <section className="projects-section" id="projects">
    <div className="projects-container">
      <h2 className="projects-title">My Projects</h2>

      <p className="projects-subtitle">
        Some of the projects I have built using modern technologies.
      </p>

      <div className="projects-grid">
        {displayedProjects.map((project, index) => (
          <div className="project-card" key={index}>

            {/* Project Thumbnail */}
            <img
              src={project.thumbnail}
              alt={project.title}
              className={`project-thumbnail ${project.title.startsWith("OAK") ? "project-thumbnail-contain" : ""}`}
            />

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <span className="tech-stack">{project.tech}</span>

            <div className="project-buttons">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="live-btn"
              >
                Live Demo
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="github-btn"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>

      {projects.length > 3 && (
        <div
          className="view-more-container"
          style={{ textAlign: "center", marginTop: "40px" }}
        >
          <button
            onClick={() => setShowAll(!showAll)}
            style={{
              padding: "14px 28px",
              border: "none",
              borderRadius: "12px",
              fontWeight: "700",
              cursor: "pointer",
              background: "#2563EB",
              color: "white",
              transition: ".3s",
              fontSize: "16px",
            }}
            onMouseOver={(e) =>
              (e.target.style.transform = "translateY(-4px)")
            }
            onMouseOut={(e) =>
              (e.target.style.transform = "translateY(0)")
            }
          >
            {showAll ? "View Less" : "View More"}
          </button>
        </div>
      )}
    </div>
  </section>
)};
