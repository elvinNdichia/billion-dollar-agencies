import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// This is a simple function that makes the use of the useTransform hook more readable
function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ id }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  // List of image URLs. Replace these with your own links if necessary.
  const imageUrls = [
    "https://placekitten.com/200/300",
    "https://placekitten.com/300/400",
    "https://placekitten.com/400/500",
    "https://placekitten.com/500/600",
    "https://placekitten.com/600/700",
  ];

  return (
    <section style={{ height: "100vh", position: "relative" }}>
      <div ref={ref}>
        <img
          src={imageUrls[id]}
          alt={`Cute Kitten ${id}`}
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <motion.h2
        style={{
          y,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        {`#00${id}`}
      </motion.h2>
    </section>
  );
}

export function AdvancedParallaxGPt() {
  return (
    <div>
      {[0, 1, 2, 3, 4].map((image) => (
        <Image id={image} key={image} />
      ))}
    </div>
  );
}
