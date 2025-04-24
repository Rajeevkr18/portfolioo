// src/pages/Achievements.jsx
import React from "react";
import { motion } from "framer-motion";
import "./Achievements.css";

const achievementCategories = [
  {
    title: "Top Contest Performances",
    items: [
      "Achieved a global rank of 82 in CodeChef Starters 145.",
      "Achieved a global rank of 379 in CodeChef Starters 143.",
      "Occupied the 1521th spot on the global leaderboard of Codeforces Round 962.",
    ],
  },
  {
    title: "Competitive Programming Milestones",
    items: [
      "Highest Rating on CodeChef – 1721 (3★). [👉](https://www.codechef.com/users/rajeev1_8)",
      "Highest Rating on Codeforces – 1339 (Pupil). [👉](https://codeforces.com/profile/Rajeev_18)",
      "Solved over 700 DSA problems, including 300+ on LeetCode. [👉](https://leetcode.com/u/Rajeev_18/)",
    ],
  },
  {
    title: "Certifications",
    items: [
      "Dynamic Programming, Greedy Algorithms – Coursera: [Link](https://www.coursera.org/account/accomplishments/verify/L92LS2D3QXCJ)",
      "Approximation Algorithms and Linear Programming – Coursera: [Link](https://www.coursera.org/account/accomplishments/verify/4DMTTQ75XVQL)",
      "Server side JavaScript with Node.js – Coursera: [Link](https://www.coursera.org/account/accomplishments/verify/LXBZACSD2YUK)",
      "Cloud Computing – NPTEL: [Link](https://drive.google.com/file/d/125QGanFBahQy9Ynjc9yJ2bEdttaJZpBg/view)",
      "FLAMES’24 Summer Training: [Link](https://drive.google.com/file/d/1rd_YSPYVGUYCAEbU6XjDaTWKigDhF_nw/view)",
    ],
  },
];

const Achievements = () => {
  return (
    <div className="achievements-section">
      <motion.h2
        className="achievements-title"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        Achievements & Certifications
      </motion.h2>

      <div className="achievements-grid">
        {achievementCategories.map((cat, index) => (
          <motion.div
            className="achievement-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <h3>{cat.title}</h3>
            <ul>
              {cat.items.map((item, idx) => (
                <li key={idx}>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: item
                        .replace(/\[👉\]\((.*?)\)/g, '<a href="$1" target="_blank" rel="noopener noreferrer">👉</a>')
                        .replace(/\[Link\]\((.*?)\)/g, '<a href="$1" target="_blank" rel="noopener noreferrer">Link</a>'),
                    }}
                  />
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
