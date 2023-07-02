import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";

export function SharedLayout() {
  const [shown, setShown] = useState(true);

  return (
    <Box>
      <Box>
        <motion.div
          style={{}}
          animate={{
            width: shown ? "100px" : "500px",
            height: shown ? "100px" : "500px",
            background: shown ? "#000" : "#ddd",
            borderRadius: shown ? "0px" : "500px",
          }}
          layoutId="animated-box"
        ></motion.div>
      </Box>
      <button
        style={{ position: "absolute", bottom: 0 }}
        onClick={() => setShown(!shown)}
      >
        Hide/Show
      </button>
    </Box>
  );
}
