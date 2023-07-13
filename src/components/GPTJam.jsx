import React from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { useWindowSize } from "react-use";

export const GPTJam = () => {
  const { scrollYProgress } = useViewportScroll();
  const { height } = useWindowSize();

  // The transform values are based on the scrollYProgress.
  // You may adjust these values as per your requirements.
  const xLetSlide = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const xJamSlide = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  return (
    <div
      style={{
        height: height,
        overflow: "auto",
        position: "relative",
        fontWeight: 800,
        fontSize: "250px",
      }}
    >
      <motion.div
        style={{
          position: "absolute",
          left: "50%",
          top: "40%",
          x: xLetSlide,
        }}
      >
        Let's
      </motion.div>
      <motion.div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          x: xJamSlide,
        }}
      >
        Jam
      </motion.div>
    </div>
  );
};
