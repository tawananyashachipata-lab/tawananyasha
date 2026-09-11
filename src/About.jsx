import "./index.css";
import profile from "./assets/me.jpeg";

import { motion } from "framer-motion";

import {
  FaCode,
  FaLaptopCode,
  FaLightbulb,
  FaGraduationCap,
} from "react-icons/fa";

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
           Building Modern Solutions
            <br />
            That Solve Real Problems
          </h2>

          <p>
            Hello! I am <strong>Tawananyasha Chipata</strong>, a junior software developer focused on building clean, responsive and user-friendly digital experiences. I work with technologies like React, JavaScript, Python and NestJS, turning ideas into functional web applications. I enjoy learning new technologies and solving problems through code.
          </p>

          <p>
            I love turning ideas into real-world solutions through clean
            code, creative design and continuous learning. Every project is
            an opportunity to improve my skills and create something
            meaningful.
          </p>

          {/* Tech Stack */}

          {/* <h3>Technologies I Use</h3>

          <div className="tech-stack">

            <span><FaReact /> React</span>

            <span><SiJavascript /> JavaScript</span>

            <span><FaHtml5 /> HTML5</span>

            <span><FaCss3Alt /> CSS3</span>

            <span><SiNextdotjs /> Next.js</span>

            <span><FaGithub /> GitHub</span>

          </div> */}

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

            {/* <div className="experience-card">
              <h2>5+</h2>
              <p>Projects Built</p> */}
            </div>
          {/* </div> */}

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