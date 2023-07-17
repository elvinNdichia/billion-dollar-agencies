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
      <Box sx={{ display: { xs: "block", sm: "none" } }}>
        <MobileProject title="Overpass" src="/overpass.jpg" />
        <MobileProject title="Office Space" src="/officespace.jpg" />
        <MobileProject title="EverAfter" src="/ever-after.png" />
        <MobileProject title="LeverEdge" src="/lever-edge.jpg" />
        <MobileProject title="Resolute" src="/resolute.jpg" />
        <MobileProject title="56k Cloud" src="/56k.jpg" />
        <MobileProject title="Daml" src="/daml.jpg" />
      </Box>
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        <Box sx={{ marginBottom: "56px", cursor: "pointer" }}>
          <Box sx={{ marginBottom: "1rem" }}>
            <p className="item-description">
              <span className="gradient-text">Saas</span> Brand Identity,
              Website, Mobile, Photography
            </p>
            <h3 className="h3-projects">Overpass</h3>
          </Box>
          <motion.div style={{ width: "100%" }}>
            <Box
              component="img"
              src="/overpass.jpg"
              sx={{ borderRadius: "1rem", width: "100%" }}
            ></Box>
          </motion.div>
        </Box>

        <ExpandingProject title="Office Space" src="/officespace.jpg" />
        <ExpandingProject title="EverAfter" src="/ever-after.png" />
        <ExpandingProject title="LeverEdge" src="/lever-edge.jpg" />
        <ExpandingProject title="Resolute" src="/resolute.jpg" />
        <ExpandingProject title="56k Cloud" src="/56k.jpg" />
        <ExpandingProject title="Daml" src="/daml.jpg" />
      </Box>

      <div style={{ height: "2000px" }} />
    </Box>
  );
}

function ExpandingProject({ title, src }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const width = useTransform(
    scrollYProgress,
    [0, 1],
    [title === "Daml" ? "45%" : "65%", "65%"]
  );
  return (
    <Box sx={{ display: "flex", marginBottom: "56px", cursor: "pointer" }}>
      <motion.div ref={ref} style={{ width: width }}>
        <Box
          component="img"
          src={src}
          sx={{ borderRadius: "1rem", width: "100%" }}
        ></Box>
      </motion.div>
      <Box sx={{ padding: "26px 0 0 52px" }}>
        <p className="item-description">
          <span className="gradient-text">Saas</span> Brand Identity, Website,
          Mobile, Photography
        </p>
        <h3 className="h3-projects">{title}</h3>
      </Box>
    </Box>
  );
}

function MobileProject({ title, src }) {
  return (
    <Box
      sx={{
        display: "grid",
        marginBottom: "56px",
        cursor: "pointer",
        padding: "0 1rem",
      }}
    >
      <motion.div style={{ width: "100%" }}>
        <Box
          component="img"
          src={src}
          sx={{ borderRadius: "1rem", width: "100%" }}
        ></Box>
      </motion.div>
      <Box sx={{}}>
        <p className="item-description">
          <span className="gradient-text">Saas</span> Brand Identity, Website,
          Mobile, Photography
        </p>
        <h3 className="h3-projects">{title}</h3>
      </Box>
    </Box>
  );
}

function ExpandBox() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scrollYProgressTimes200 = useTransform(
    scrollYProgress,
    (latest) => latest * 200
  );

  const width = useTransform(scrollYProgress, [0, 1], ["50%", "100%"]);

  return (
    <div ref={ref} style={{ marginBottom: "1000px" }}>
      <motion.div
        style={{
          width: width,
          height: "300px",
          background: "blue",
          margin: "200px 0",
          position: "relative",
          //left: scrollYProgressTimes200,
        }}
      ></motion.div>
    </div>
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
          padding: { xs: "0 0 5rem 0", sm: "3rem 0 10rem 0" },
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
      </Box>
    </>
  );
}
