import "./index.css";
import profile from "./assets/me.jpeg";

import { motion } from "framer-motion";

import {
  FaCode,
  FaLaptopCode,
  FaLightbulb,
  FaGraduationCap,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
} from "react-icons/fa";

import { SiJavascript, SiNextdotjs } from "react-icons/si";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">

        {/* Left Side */}

        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <span className="section-tag">ABOUT ME</span>

          <h2>
            Passionate Software Developer
            <br />
            Creating Digital Experiences
          </h2>

          <p>
            Hello! I'm <strong>Tawananyasha Chipata</strong>, a passionate
            Software Development student who enjoys building modern,
            responsive and interactive web applications.
          </p>

          <p>
            I love turning ideas into real-world solutions through clean
            code, creative design and continuous learning. Every project is
            an opportunity to improve my skills and create something
            meaningful.
          </p>

          {/* Tech Stack */}

          <h3>Technologies I Use</h3>

          <div className="tech-stack">

            <span><FaReact /> React</span>

            <span><SiJavascript /> JavaScript</span>

            <span><FaHtml5 /> HTML5</span>

            <span><FaCss3Alt /> CSS3</span>

            <span><SiNextdotjs /> Next.js</span>

            <span><FaGithub /> GitHub</span>

          </div>

        </motion.div>

        {/* Right Side */}

        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="about-visual">
            <img src={profile} alt="Tawananyasha Chipata" />

            <div className="experience-card">
              <h2>10+</h2>
              <p>Projects Built</p>
            </div>
          </div>

          <div className="about-cards">
            <div className="about-card">
              <FaLaptopCode />
              <h4>Web Development</h4>
              <p>Responsive and interactive websites.</p>
            </div>

            <div className="about-card">
              <FaCode />
              <h4>Clean Code</h4>
              <p>Readable, maintainable and scalable code.</p>
            </div>

            <div className="about-card">
              <FaLightbulb />
              <h4>Problem Solver</h4>
              <p>Building solutions for real-world challenges.</p>
            </div>

            <div className="about-card">
              <FaGraduationCap />
              <h4>Continuous Learning</h4>
              <p>Always improving and exploring new technologies.</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;