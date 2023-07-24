import { Box } from "@mui/system";
import { useState } from "react";
import { motion } from "framer-motion";

export function HamburgerToggle() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      sx={{
        width: "54px",
        height: "54px",
        background: "#fff",
        borderRadius: "54px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={() => setIsOpen(!isOpen)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Box
        sx={{
          width: "17px",
          height: "17px",
          position: "relative",
          "& div": {
            position: "absolute",
            height: "2px",
            background: "#000",
            left: 0,
            transformOrigin: "center",
            transition: "all 0.3s ease",
          },
          "div:first-child": {
            top: isOpen ? "50%" : "40%",
            transform: isOpen ? "rotate(45deg)" : "rotate(0)",
            width: "100%",
          },
          "div:last-child": {
            top: isOpen ? "50%" : "65%",
            transform: isOpen ? "rotate(-45deg)" : "rotate(0)",
            width: isHovered || isOpen ? "100%" : "70%",
            right: 0,
            left: "unset",
          },
        }}
      >
        <div></div>
        <div></div>
      </Box>
    </Box>
  );
}

export function Menu() {
  return (
    <Box
      sx={{
        position: "fixed",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overscrollBehavior: "contain",
        display: "none",
      }}
    >
      <motion.div
        style={{
          background: "#fff",
          width: "100%",
          height: "100%",
          overscrollBehavior: "contain",
          overflow: "auto",
        }}
      >
        Hello
      </motion.div>
    </Box>
  );
}
