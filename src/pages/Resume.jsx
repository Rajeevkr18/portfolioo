import React from "react";
import { motion } from "framer-motion";
import "./Resume.css";

const Resume = () => {
  return (
    <div className="resume-section">
      <motion.h2
        className="resume-title"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        My Resume
      </motion.h2>

      <motion.div
        className="resume-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="resume-description">
          View or download my complete resume to learn more about my skills, experience, and education.
        </p>
        <a
          href="https://drive.google.com/file/d/1I_EmMFQC3wXxdfgVesY35YQMchGZe_Wh/preview" // Make sure this file is in the public folder
          target="_blank"
          rel="noopener noreferrer"
          className="resume-button"
        >
          📄 View and Download Resume
        </a>
      </motion.div>
    </div>
  );
};

export default Resume;
