import "./App.css";
import { motion } from "framer-motion";
import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";
import responsiveCertificate from "./assets/responsive.png";
import javascriptCertificate from "./assets/Screenshot 2026-07-27 094926.png";
import pythonCertificate from "./assets/python_free.png";
import softwareEngineeringCertificate from "./assets/Screenshot 2026-07-16 145619.png";
import nestImage from "./assets/nestjs.png";
import nestCertificate from "./assets/Screenshot 2026-08-05 131124.png";

const certificates = [
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    year: "2026",
    description:
      "Learned HTML5, CSS3, Flexbox, Grid and responsive web design principles.",
    link: responsiveCertificate,
  },
  {
    title: "Introduction to software engineering",
    issuer: "Coursera",
    year: "2026",
    description:
      "Learning software development fundamentals,software development life cyle and problem solving.",
    link: softwareEngineeringCertificate,
  },
  {
    title: "Python",
    issuer: "Freecodecamp",
    year: "2026",
    description:
      "Built reusable React components, managed state and created interactive applications.",
    link: pythonCertificate,
  },
  {
    title: "Fundamentals of Nestjs",
    issuer: "Coursera",
    year: "2026",
    description:
      "Learning basics of Nest.js framework.",
    link: nestImage,
  },
  {
    title: "Javascript Basics",
    issuer: "Coursera",
    year: "2026",
    description:
      "Covered JavaScript fundamentals, ES6, arrays, objects and algorithms.",
    link: javascriptCertificate,
  },
  {
    title: "Nest.js Developer lab",
    issuer: "Coursera",
    year: "2026",
    description:
      "Learning to build scalable backend applications using modules,controllers,services and REST APIs with typescript.",
    link: nestCertificate,
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

            <img
              src={certificate.link}
              alt={`${certificate.title} certificate`}
              className="certificate-image"
            />

            <h3>{certificate.title}</h3>

            <h4>{certificate.issuer}</h4>

            <span>{certificate.year}</span>

            <p>{certificate.description}</p>

            <a href={certificate.link} target="_blank" rel="noopener noreferrer">
              View Certificate <FaExternalLinkAlt />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
