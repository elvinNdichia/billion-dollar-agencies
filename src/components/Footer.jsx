import {
  useScroll,
  motion,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";
import { useRef } from "react";
import { Box } from "@mui/system";
import { LinkWithUnderline } from "./LinkWithUnderline";

export function Footer() {
  return (
    <Box>
      <MyJam />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1.4fr 2fr" },
          padding: {
            xs: "0 1rem",
            lg: "0 0 0 0",
          },
        }}
      >
        <Box></Box>

        <Box
          className="gradient-bg"
          sx={{
            paddingTop: { xs: "2rem" },
            paddingRight: { xs: "0rem", md: "2rem", lg: "4rem" },
          }}
        >
          <h2 className="gradient-text h2">
            We’d love to meet up with you to discuss your venture, and potential
            collaborations. Send us a message!
          </h2>
        </Box>
        <Box></Box>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1.4fr 2fr" },
          padding: {
            xs: "2rem 1rem 4rem 1rem",
            lg: "6rem 0 7rem 0",
          },
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          }}
        >
          <Box sx={{ marginBottom: "1.5rem" }}>
            <p className="body1">
              Design & <div style={{ marginTop: ".3rem" }} />
              Development
            </p>
          </Box>
          <Box>
            <p className="body1">Austin, Texas</p>
          </Box>
        </Box>
        <Box sx={{}}>
          <LinkWithUnderline>Phone: (+1) 858 361 7223</LinkWithUnderline>
          <br />
          <LinkWithUnderline>hi@studiovoila.com</LinkWithUnderline>
          <div style={{ height: "1rem" }} />
          <LinkWithUnderline>Instagram</LinkWithUnderline>
          <br />
          <LinkWithUnderline>Twitter</LinkWithUnderline>
          <br /> <LinkWithUnderline>Dribbble</LinkWithUnderline>
        </Box>
      </Box>
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
      <Box
        ref={ref}
        sx={{
          padding: { xs: "0 0 5rem 0", sm: "3rem 0 4rem 0" },
          textAlign: "center",
          overflow: "hidden",
          color: "#000",
        }}
        className="h3"
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
      </Box>
    </>
  );
}
