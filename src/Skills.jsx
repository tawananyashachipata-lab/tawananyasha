import "./App.css";
import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGithub,
} from "react-icons/fa";

import {
  SiJavascript,
  SiNextdotjs,
} from "react-icons/si";

const skills = [
  {
    icon: <FaHtml5 />,
    name: "HTML5",
    level: "95%",
  },
  {
    icon: <FaCss3Alt />,
    name: "CSS3",
    level: "90%",
  },
  {
    icon: <SiJavascript />,
    name: "JavaScript",
    level: "85%",
  },
  {
    icon: <FaReact />,
    name: "React",
    level: "85%",
  },
  {
    icon: <SiNextdotjs />,
    name: "Next.js",
    level: "70%",
  },
  {
    icon: <FaGithub />,
    name: "Git & GitHub",
    level: "80%",
  },
];

const Skills = () => {
  return (
    <section className="skills" id="skills">

      <motion.div
        className="skills-heading"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <span className="section-tag">MY SKILLS</span>

        <h2>Technologies I Work With</h2>

        <p>
          I enjoy building responsive and interactive web applications while
          continuously improving my skills and learning modern technologies.
        </p>
      </motion.div>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            className="skill-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
          >
            <div className="skill-icon">
              {skill.icon}
            </div>

            <h3>{skill.name}</h3>

            <div className="progress">
              <div
                className="progress-bar"
                style={{ width: skill.level }}
              ></div>
            </div>

            <span>{skill.level}</span>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default Skills;