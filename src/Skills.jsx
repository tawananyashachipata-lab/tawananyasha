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
  },
  {
    icon: <FaCss3Alt />,
    name: "CSS3",
    
  },
  {
    icon: <SiJavascript />,
    name: "JavaScript",
   
  },
  {
    icon: <FaReact />,
    name: "React",
   
  },
  {
    icon: <SiNextdotjs />,
    name: "Next.js",
    
  },
  {
    icon: <FaGithub />,
    name: "Git & GitHub",
   
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
            className="skill-item"
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
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default Skills;