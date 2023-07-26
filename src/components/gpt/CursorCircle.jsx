import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Box } from "@mui/material";

const CursorCircle = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const updateCursorPos = (e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateCursorPos);

    return () => {
      window.removeEventListener("mousemove", updateCursorPos);
    };
  }, []);

  return (
    <Box sx={{ display: { xs: "none", lg: "block" } }}>
      {" "}
      <div
        className="cursor-circle"
        style={{
          transform: `translate3d(${cursorPos.x}px, ${cursorPos.y}px, 0) translate(-50%, -50%)`,
          position: "fixed",

          zIndex: 9999,
          transition: "transform 0.15s linear",
          mixBlendMode: "difference",
        }}
      >
        <div
          style={{
            position: "relative",
            left: -30,
            width: 20,
            height: 20,
            background: "#F84E32",
            borderRadius: "50%",
            pointerEvents: "none",
            mixBlendMode: "difference",
          }}
        ></div>
      </div>
    </Box>
  );
};

export default CursorCircle;
