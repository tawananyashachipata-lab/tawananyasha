import "./index.css";

const projects = [
  {
    title: "Stylish Portfolio",
    description:
      "A modern personal portfolio showcasing my skills, projects, and experience built with Python.",
    tech: "Python",
    github: "https://github.com/tawananyashachipata-lab/Staycey.django.git",
    // live: "https://yourportfolio.com",
  },
  {
    title: "Airbnb ",
    description:
      "A responsive Airbnb-inspired web application built with Python and Django, featuring property listings, search functionality, and a modern user interface.",
    tech: "Python • Django",
    github: "https://github.com/tawananyashachipata-lab/stayhub_airbnb.git",
    // live: "https://airbnbclone.vercel.app",
  },
  {
    title: "HydroCare",
    description:
      "A water intake and medication reminder application designed to help users maintain healthy daily habits with authentication and analytics.",
    tech: "React • NestJS • PostgreSQL • Supabase",
    github: "https://github.com/yourusername/hydrocare",
    // live: "https://hydrocare.vercel.app",
  },
  {
    title: "Staycey Glow",
    description:
      "An elegant beauty and skincare website featuring products, branding, and a modern shopping experience.",
    tech: "React • CSS • JavaScript",
    github: "https://github.com/yourusername/staycey-glow",
    // live: "https://stayceyglow.vercel.app",
  },
  {
    title: "TrainEase by Staycey",
    description:
      "A fitness and wellness platform helping users manage workouts, progress tracking, and healthy living.",
    tech: "React • NestJS • PostgreSQL",
    github: "https://github.com/yourusername/trainease",
    // live: "https://trainease.vercel.app",
  },
];

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <h2 className="projects-title">My Projects</h2>

        <p className="projects-subtitle">
          Some of the projects I have built using modern technologies.
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
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
      </div>
    </section>
  );
}