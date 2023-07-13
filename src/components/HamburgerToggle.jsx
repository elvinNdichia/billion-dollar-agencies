import { Box } from "@mui/system";
import { useState } from "react";

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
