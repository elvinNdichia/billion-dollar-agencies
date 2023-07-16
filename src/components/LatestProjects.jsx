import {
  useScroll,
  motion,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";
import { useRef } from "react";
import { Box } from "@mui/system";

export function LatestProjects() {
  return (
    <Box sx={{ marginTop: { xs: "5rem", md: "3rem" } }}>
      <MyJam />
    </Box>
  );
}

function MyJam() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

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

          textAlign: "center",
          overflow: "hidden",
          color: "#000",
        }}
        className="h3"
      >
        <motion.div
          style={{ position: "relative", left: scrollYProgressTimes200 }}
        >
          Latest
        </motion.div>
        <motion.div
          style={{ position: "relative", left: scrollYProgressTimesMinus200 }}
        >
          Projects
        </motion.div>
      </div>
    </>
  );
}
