// Main.jsx
import React from "react";
import { Header } from "./Header";
import { motion } from "framer-motion";

import "../index.css";

function CustomCursor({
  cursorText,
  cursorVariant,
  mouseXPosition,
  mouseYPosition,
}) {
  const variants = {
    default: {
      opacity: 1,
      height: 10,
      width: 10,
      fontSize: "16px",
      backgroundColor: "#1e91d6",
      x: mouseXPosition,
      y: mouseYPosition,
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
    project: {
      opacity: 1,
      backgroundColor: "#fff",
      color: "#000",
      height: 80,
      width: 80,
      fontSize: "18px",
      x: mouseXPosition,
      y: mouseYPosition,
    },
    contact: {
      opacity: 1,
      backgroundColor: "#FFBCBC",
      color: "#000",
      height: 64,
      width: 64,
      fontSize: "32px",
      x: mouseXPosition,
      y: mouseYPosition,
    },
  };

  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 28,
  };

  return (
    <motion.div
      variants={variants}
      className="circle"
      animate={cursorVariant}
      transition={spring}
      // style={{ left: mouseXPosition, top: mouseYPosition }}
    >
      <span className="cursorText">{cursorText}</span>
    </motion.div>
  );
}

function Initial() {
  const [cursorText, setCursorText] = React.useState("");
  const [cursorVariant, setCursorVariant] = React.useState("default");
  const ref = React.useRef(null);

  const handleMouseMove = (event) => {
    const { clientX: mouseX, clientY: mouseY } = event;
    const rect = ref.current.getBoundingClientRect();
    const mouseXPosition = mouseX - rect.left;
    const mouseYPosition = mouseY - rect.top;
    setMousePosition({ mouseXPosition, mouseYPosition });
  };

  const [mousePosition, setMousePosition] = React.useState({
    mouseXPosition: 0,
    mouseYPosition: 0,
  });

  const handleProjectEnter = () => {
    setCursorText("View");
    setCursorVariant("project");
  };

  const handleProjectLeave = () => {
    setCursorText("");
    setCursorVariant("default");
  };

  const handleContactEnter = () => {
    setCursorText("👋");
    setCursorVariant("contact");
  };

  const handleContactLeave = () => {
    setCursorText("");
    setCursorVariant("default");
  };

  return (
    <div
      style={{ width: "100vw", height: "100vh", overflow: "auto" }}
      ref={ref}
      onMouseMove={handleMouseMove}
    >
      <CustomCursor
        cursorText={cursorText}
        cursorVariant={cursorVariant}
        mouseXPosition={mousePosition.mouseXPosition}
        mouseYPosition={mousePosition.mouseYPosition}
      />
      <div
        className="project"
        onMouseEnter={handleProjectEnter}
        onMouseLeave={handleProjectLeave}
      >
        <span className="projectName">Discord Onboarding</span>
      </div>
      <div className="contactWrapper">
        <div
          className="contact"
          onMouseEnter={handleContactEnter}
          onMouseLeave={handleContactLeave}
        >
          Want to Chat?
        </div>
      </div>
    </div>
  );
}

export function Main() {
  return (
    <div>
      <Initial />
      <Header />
    </div>
  );
}
