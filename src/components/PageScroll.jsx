import {
  motion,
  useScroll,
  useMotionValueEvent,
  useSpring,
} from "framer-motion";

export function PageScroll() {
  const { scrollY, scrollX, scrollYProgress } = useScroll();

  useMotionValueEvent(scrollX, "change", (latest) => {
    console.log("Page scroll: ", latest);
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      Page scroll 1{" "}
      <div style={{ width: "500px", background: "#eee", height: "400vh" }} />
      <motion.div
        style={{
          scaleX,
          height: "16px",
          background: "blue",
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,

          //width: scrollY,
          transformOrigin: "0%",
        }}
      ></motion.div>
    </>
  );
}
