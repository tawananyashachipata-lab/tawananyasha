import "./App.css";
import profile from "./assets/me.jpeg";
import cv from "./assets/cv.pdf";

import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiJavascript,
  SiNextdotjs,
} from "react-icons/si";

const Hero = () => {
  return (
    <section className="hero" id="home">
      {/* Background Blur */}
      <div className="blur blur1"></div>
      <div className="blur blur2"></div>

      <div className="hero-container">

        {/* LEFT SIDE */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <h3>Hello 👋 I'm</h3>

          <h1>
            <span>Tawananyasha</span>
            <br />
            Chipata
          </h1>

          <h2>
            <Typewriter
              words={[
                "Software Developer",
                "React Developer",
                "Front-End Developer",
                "UI Enthusiast",
                "Problem Solver",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </h2>

          <p>
            Software Developer passionate about building accessible, performant web applications. I specialize in React, Node.js, and modern full-stack development. I enjoy turning complex problems into simple, beautiful solutions and I’m always learning the next best tool.
          </p>

          {/* Buttons */}

          <div className="hero-buttons">

            <a href="#projects">
              <button className="primary-btn">
                View Projects
              </button>
            </a>

            <a href={cv} download>
              <button className="secondary-btn">
                Download CV
              </button>
            </a>

            <a href="#contact">
              <button className="outline-btn">
                Contact Me
              </button>
            </a>

          </div>

          {/* Social Icons */}

          <div className="social-icons">

            <a href="https://github.com/" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>

            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>

            <a href="mailto:your@email.com">
              <FaEnvelope />
            </a>

          </div>

          {/* Stats */}

          {/* <div className="stats">

            <div className="card">
              <h2>10+</h2>
              <p>Projects</p>
            </div>

            <div className="card">
              <h2>1+</h2>
              <p>Years Learning</p>
            </div>

            <div className="card">
              <h2>100%</h2>
              <p>Passion</p>
            </div>

            <div className="card">
              <h2>∞</h2>
              <p>Curiosity</p>
            </div>

          </div> */}

        </motion.div>

        {/* RIGHT SIDE */}

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <div className="image-circle">

            <img src={profile} alt="Tawananyasha Chipata" />

            {/* Floating Tech Icons */}

            <span className="icon react">
              <FaReact />
            </span>

            <span className="icon js">
              <SiJavascript />
            </span>

            <span className="icon html">
              <FaHtml5 />
            </span>

            <span className="icon css">
              <FaCss3Alt />
            </span>

            <span className="icon git">
              <FaGitAlt />
            </span>

            <span className="icon next">
              <SiNextdotjs />
            </span>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default Hero;