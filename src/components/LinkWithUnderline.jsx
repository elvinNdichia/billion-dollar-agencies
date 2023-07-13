import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export const LinkWithUnderline = ({ href, children }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        marginLeft: "2.5rem",
        cursor: "pointer",
        position: "relative",
        display: "inline-block",
        overflow: "hidden",
      }}
    >
      <a
        href={href}
        style={{ textDecoration: "none", color: "inherit" }}
        className="body1"
      >
        {children}
      </a>
      <AnimatePresence>
        {isHovered && (
          <motion.div
            style={{
              position: "absolute",
              height: "2px",
              backgroundColor: "black",
              bottom: 0,
              left: 0,
              width: "100%",
            }}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5 }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};
