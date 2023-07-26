import React, { useState, useEffect } from "react";
import "./CustomCursor.css"; // Create a CSS file for styling the custom cursor
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Function to update the cursor position
    const updateCursorPosition = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    // Add event listener to track mouse movement
    document.addEventListener("mousemove", updateCursorPosition);

    // Clean up the event listener when the component is unmounted
    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  return (
    <>
      <div
        className="custom-cursor"
        style={{ left: cursorPosition.x, top: cursorPosition.y }}
      >
        <motion.div
          style={{ width: "16px", height: "16px", background: "red" }}
        ></motion.div>
        {/* You can put your custom cursor content here */}
        {/* For example, you could use an SVG or an image */}
        <div className="custom-cursor-inner"></div>
      </div>
    </>
  );
};

export default CustomCursor;
