import {
  useScroll,
  motion,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";
import { useRef } from "react";

export function MyJam() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  /*
   const scrollYProgressTimes200 = useSpring(
    useTransform(scrollYProgress, (latest) => latest * 200),
    {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001,
    }
  );
   */

  const scrollYProgressTimes200 = useTransform(
    scrollYProgress,
    (latest) => latest * 200
  );
  const scrollYProgressTimesMinus200 = useTransform(
    scrollYProgress,
    (latest) => latest * -200
  );

  return (
    <>
      <div
        ref={ref}
        style={{
          height: "100vh",
          //background: "#ccc",
          fontWeight: 800,
          fontSize: "250px",
          textAlign: "center",
          overflow: "hidden",
          color: "#555",
        }}
      >
        <motion.div
          style={{ position: "relative", left: scrollYProgressTimes200 }}
        >
          Let's
        </motion.div>
        <motion.div
          style={{ position: "relative", left: scrollYProgressTimesMinus200 }}
        >
          Jam
        </motion.div>
      </div>
      <div style={{ height: "200vh", width: "50vw", background: "#eee" }}></div>
    </>
  );
}
