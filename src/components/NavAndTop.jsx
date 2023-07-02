import React, { useState, useEffect } from "react";
import {
  useScroll,
  motion,
  useMotionValue,
  AnimatePresence,
} from "framer-motion";

export function NavAndTop() {
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
    <div style={{ background: "#eee", width: "50vw", height: "300vh" }}>
      <AnimatePresence mode="wait">
        {" "}
        {showScroll && (
          <motion.div
            style={{
              position: "fixed",
              bottom: "20px",
              background: "#000",
              color: "white",
              padding: "10px",
              borderRadius: "50%",
              cursor: "pointer",
              width: "100px",
              height: "100px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              right: "100px",
            }}
            key="scroll-to-top"
            initial={{ bottom: -100, opacity: 0 }}
            animate={{ bottom: 20, opacity: 1 }}
            exit={{
              bottom: -100,
              opacity: 0,
              transition: { duration: 0.6, ease: "backIn" },
            }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Top
          </motion.div>
        )}{" "}
      </AnimatePresence>
    </div>
  );
}
