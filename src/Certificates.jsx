import "./App.css";
import { motion } from "framer-motion";
import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";

const certificates = [
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    year: "2026",
    description:
      "Learned HTML5, CSS3, Flexbox, Grid and responsive web design principles.",
    link: "#",
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    year: "2026",
    description:
      "Covered JavaScript fundamentals, ES6, arrays, objects and algorithms.",
    link: "#",
  },
  {
    title: "React Development",
    issuer: "Coursera",
    year: "2026",
    description:
      "Built reusable React components, managed state and created interactive applications.",
    link: "#",
  },
  {
    title: "Git & GitHub",
    issuer: "Udemy",
    year: "2026",
    description:
      "Version control, branching, pull requests and collaborative development.",
    link: "#",
  },
];
const Certificates = () => {
  return (
    <section className="certificates" id="certificates">
      <motion.div
        className="certificates-heading"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <span className="section-tag">CERTIFICATES</span>

        <h2>My Certifications</h2>

        <p>
          I believe in continuous learning. These certifications reflect my
          commitment to improving my software development skills.
        </p>
      </motion.div>

      <div className="certificate-grid">
        {certificates.map((certificate, index) => (
          <motion.div
            className="certificate-card"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
          >
            <div className="certificate-icon">
              <FaCertificate />
            </div>

            <h3>{certificate.title}</h3>

            <h4>{certificate.issuer}</h4>

            <span>{certificate.year}</span>

            <p>{certificate.description}</p>

            <a href={certificate.link}>
              View Certificate <FaExternalLinkAlt />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;