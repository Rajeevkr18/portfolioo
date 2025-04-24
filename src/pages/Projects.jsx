// src/pages/Projects.jsx
import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import "./Projects.css";

// Importing images from the assets folder
import financeFlowImage from "../assets/financeflow.png";
import doctorAppointmentImage from "../assets/doctorappointement.png";
import pathfindingImage from "../assets/pathfinding.png";
import whetherImage from "../assets/whetherapp.png";
import aileadImage from "../assets/ailead.png";

const projects = [
  {
    title: "Finance Flow",
    description: "A Dockerized MERN app for managing income/expenses with filtering and analytics.",
    image: financeFlowImage,
    link: "https://github.com/Rajeevkr18/Expense-mern",
  },
  {
    title: "Doctor Appointment System",
    description: "MERN app to book doctor appointments, with admin & user dashboards.",
    image: doctorAppointmentImage,
    link: "https://github.com/Rajeevkr18/Doctor-Appointment-System",
  },
  {
    title: "Pathfinding Visualizer",
    description: "React app to visualize Dijkstra’s and other pathfinding algorithms.",
    image: pathfindingImage,
    link: "https://github.com/Rajeevkr18/Pathfinding-visualizer",
  },
  {
    title: "Weather Application",
    description: "React app that shows current weather based on location.",
    image: whetherImage,
    link: "https://github.com/Rajeevkr18/Whetherapp",
  },
  {
    title: "Lead Management System",
    description: "MERN stack lead management system to manage sales leads and customer data.",
    image: aileadImage,
    link: "https://github.com/Rajeevkr18/ai-driven-lead-conversion",
  },
];

const Projects = () => {
  return (
    <div className="projects-section">
      <motion.h2
        className="projects-title"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        My Projects
      </motion.h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <Tilt
            key={index}
            glareEnable={true}
            glareMaxOpacity={0.3}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={500}
          >
            <motion.div
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <img src={project.image} alt={project.title} className="project-img" />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              Check it out →
              </a>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </div>
  );
};

export default Projects;
