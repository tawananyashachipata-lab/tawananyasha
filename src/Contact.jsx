import "./App.css";
import { motion } from "framer-motion";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact" id="contact">

      <motion.div
        className="contact-heading"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <span className="section-tag">CONTACT</span>

        <h2>Let's Work Together</h2>

        <p>
          Have a project or just want to say hello? I would love to hear from you.
.
        </p>
      </motion.div>

      <div className="contact-container">

        {/* Left Side */}

        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <div className="info-card">
            <FaEnvelope />
            <div>
              <h4>Email</h4>
              <p>tawananyashachipata@gmail.com</p>
            </div>
          </div>

          <div className="info-card">
            <FaPhoneAlt />
            <div>
              <h4>Phone</h4>
              <p>+263 718 676 637</p>
            </div>
          </div>

          <div className="info-card">
            <FaMapMarkerAlt />
            <div>
              <h4>Location</h4>
              <p>Zimbabwe</p>
            </div>
          </div>

          <div className="social-icons">
            <a href="#"><FaGithub /></a>
            <a href="#"><FaLinkedin /></a>
          </div>

        </motion.div>

        {/* Right Side */}

        <motion.form
          className="contact-form"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <input
            type="text"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            required
          />

          <input
            type="text"
            placeholder="Subject"
            required
          />

          <textarea
            rows="6"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </motion.form>

      </div>

    </section>
  );
};

export default Contact;