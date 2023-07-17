import React, { useState, useEffect } from "react";
import {
  useScroll,
  motion,
  useMotionValue,
  AnimatePresence,
} from "framer-motion";

import { Box } from "@mui/system";

export function Top() {
  const { scrollY } = useScroll();
  const [showScroll, setShowScroll] = useState(false);

  const scrollYValue = useMotionValue(0);
  useEffect(() => {
    const unsubscribe = scrollY.onChange((v) => {
      scrollYValue.set(v);
      setShowScroll(v > 250);
    });

    return () => {
      unsubscribe();
    };
  }, [scrollY, scrollYValue]);

  return (
    <Box
      sx={{
        display: "block",
        bottom: 0,
        left: 0,
        right: 0,
        width: "100%",
        position: "fixed",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            maxWidth: "98rem",
            padding: { sm: "0 2rem" },
            position: "relative",
          }}
        >
          <div />
          <Box
            sx={{
              position: "relative",
              width: { xs: "5rem", md: "6.25rem" },
              height: { xs: "5rem", md: "6.25rem" },
              marginRight: { xs: "1rem", md: "2rem" },
            }}
          >
            {" "}
            <AnimatePresence mode="wait">
              {" "}
              {showScroll && (
                <motion.div
                  style={{
                    position: "relative",
                    background: "#000",
                    color: "white",
                    padding: "10px",
                    borderRadius: "50%",
                    cursor: "pointer",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  key="scroll-to-top"
                  initial={{ bottom: -100, opacity: 0 }}
                  animate={{ bottom: 40, opacity: 1 }}
                  exit={{
                    bottom: -100,
                    opacity: 0,
                    transition: { duration: 0.6, ease: "backIn" },
                  }}
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  <p className="body1">top</p>
                </motion.div>
              )}{" "}
            </AnimatePresence>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
