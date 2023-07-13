import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const textStyle = {
  background: "linear-gradient(to right, #000, #aaa)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontSize: "10rem",
  fontWeight: "bold",
  display: "inline-block",
  whiteSpace: "nowrap",
};

export const HeroText = () => {
  return (
    <AnimatePresence>
      <motion.div
        style={textStyle}
        initial={{ letterSpacing: "3rem", scale: 1.5 }}
        animate={{ letterSpacing: "0.1rem", scale: 1 }}
        exit={{ letterSpacing: "3rem", scale: 1.5 }}
        transition={{ duration: 1 }}
      >
        Voila.
      </motion.div>
    </AnimatePresence>
  );
};

/*

import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const textStyle = {
  fill: "transparent",
  stroke: "transparent",
  strokeWidth: 1,
  background: "linear-gradient(to right, #000, #aaa)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontSize: "10rem",
  fontWeight: "bold",
  whiteSpace: "nowrap",
  fill: "#000",
};

export const HeroText = () => {
  return (
    <div style={{ background: "#aaa" }}>
      {" "}
      <AnimatePresence>
        <motion.svg
          viewBox="0 0 200 100"
          preserveAspectRatio="xMidYMid slice"
          style={{ width: "100%", height: "auto" }}
          initial={{ letterSpacing: "3rem", scale: 1.5 }}
          animate={{ letterSpacing: "0.1rem", scale: 1 }}
          exit={{ letterSpacing: "3rem", scale: 1.5 }}
          transition={{ duration: 1 }}
        >
          <motion.text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            style={textStyle}
          >
            Voila.
          </motion.text>
        </motion.svg>
      </AnimatePresence>
    </div>
  );
};


*/
