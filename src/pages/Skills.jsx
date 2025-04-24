// src/pages/Skills.jsx
import React from "react";
import { motion } from "framer-motion";
import "./Skills.css";

const skillSections = [
  {
    title: "Languages",
    items: ["C++", "Java", "Python", "SQL", "JavaScript", "HTML", "CSS"]
  },
  {
    title: "Version Control",
    items: ["Git", "GitHub"]
  },
  {
    title: "Tools",
    items: ["VS Code", "Netlify"]
  },
  {
    title: "Libraries & Technologies",
    items: ["MERN Stack", "Bootstrap", "REST APIs"]
  },
  {
    title: "Core Subjects",
    items: [
      "Data Structures and Algorithms",
      "Object-oriented Programming",
      "Operating Systems",
      "Database Management Systems",
      "Computer Networks",
      "DevOps"
    ]
  },
  {
    title: "Other Skills",
    items: ["Analytical & Mathematical Skills", "Teamwork"]
  }
];

const Skills = () => {
  return (
    <div className="skills-section">
      <motion.h2
        className="skills-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Skills
      </motion.h2>

      <div className="skills-container">
        {skillSections.map((section, index) => (
          <motion.div
            className="skill-category"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3>{section.title}</h3>
            <ul>
              {section.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
