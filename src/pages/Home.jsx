// src/pages/Home.jsx
import React from "react";
import { motion } from "framer-motion";
import "./Home.css";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiMongodb,
  SiNodedotjs,
  SiDocker,
  SiExpress,
  SiPython,
  SiGithub,
  SiCplusplus,
} from "react-icons/si";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const techIcons = [
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiMongodb,
  SiNodedotjs,
  SiDocker,
  SiExpress,
  SiPython,
  SiGithub,
  SiCplusplus,
];

const Home = () => {
  return (
    <div className="home-container">
      {/* Floating tech icons */}
      <div className="floating-icons">
        {techIcons.map((Icon, i) => (
          <motion.div
            className="icon-wrapper"
            key={i}
            initial={{ y: 0 }}
            animate={{ y: [0, -15, 0] }}
            transition={{
              repeat: Infinity,
              duration: 3 + i * 0.1,
              ease: "easeInOut",
            }}
            style={{
              left: `${(i % 6) * 14 + 5}%`,
              top: `${(i % 5) * 18 + 5}%`,
            }}
          >
            <Icon size={36} color="#00ffff" />
          </motion.div>
        ))}
      </div>

      {/* Main content */}
      <motion.div
        className="home-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>
          Hello, I'm <span>Rajeev Kumar</span>
        </h1>
        <p>
          I’m a Full Stack Developer passionate about building efficient and scalable web applications.
        </p>
        <button className="btn">Let's Connect</button>

        {/* Social media icons */}
        <div className="social-icons">
          <a href="https://github.com/Rajeevkr18" target="_blank" rel="noopener noreferrer">
            <FaGithub size={28} />
          </a>
          <a href="https://instagram.com/_iam_rajeev" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={28} />
          </a>
          <a href="https://linkedin.com/in/rajeevk18" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={28} />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
