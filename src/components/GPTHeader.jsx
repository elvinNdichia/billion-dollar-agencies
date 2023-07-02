import { useState, useEffect } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

const GPTHeader = () => {
  const { scrollY } = useViewportScroll();
  const [isTicking, setIsTicking] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);
  const [shouldHideHeader, setShouldHideHeader] = useState(false);

  const y = useTransform(scrollY, [0, 1], ["0%", "-100%"]);

  useEffect(() => {
    const handleScroll = () => {
      setShouldHideHeader(lastScroll < window.scrollY);
      setLastScroll(window.scrollY);
      setIsTicking(false);
    };

    if (!isTicking) {
      window.requestAnimationFrame(handleScroll);
      setIsTicking(true);
    }
  }, [isTicking, lastScroll]);

  return (
    <motion.div
      style={{
        y,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
      initial={{ y: 0 }}
      animate={{ y: shouldHideHeader ? "-100%" : "0%" }}
      transition={{ ease: "easeOut", duration: 0.2 }}
    >
      <p>Lorem</p>
      <p>Ipsum</p>
      <p>Dolor</p>
      <p>Sit</p>
      <p>Amet</p>
    </motion.div>
  );
};

export { GPTHeader };
