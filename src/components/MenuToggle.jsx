import React, { useState, useEffect } from "react";
import {
  useScroll,
  motion,
  useMotionValue,
  AnimatePresence,
} from "framer-motion";

import { Box } from "@mui/system";
import { HamburgerToggle } from "./HamburgerToggle";

export function MenuToggle() {
  const { scrollY } = useScroll();
  const [showScroll, setShowScroll] = useState(false);

  const scrollYValue = useMotionValue(0);
  useEffect(() => {
    const unsubscribe = scrollY.onChange((v) => {
      scrollYValue.set(v);
      setShowScroll(v > 100);
    });

    return () => {
      unsubscribe();
    };
  }, [scrollY, scrollYValue]);

  return (
    <Box
      sx={{
        display: { xs: "none", sm: "block" },
        top: 0,
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
                    top: "1.5rem",
                    cursor: "pointer",
                  }}
                  key="scroll-to-top"
                  initial={{ right: -100, opacity: 0 }}
                  animate={{ right: 0, opacity: 1 }}
                  exit={{
                    right: -100,
                    opacity: 0,
                    transition: { duration: 0.6, ease: "backIn" },
                  }}
                >
                  <HamburgerToggle />
                </motion.div>
              )}{" "}
            </AnimatePresence>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
