import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { MenuLink } from "./gpt/MenuLink";

export function PopMenu() {
  return (
    <Box
      style={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        zIndex: 100,
        background: "#fff",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "98rem",
          padding: { sm: "0 2rem" },
        }}
      >
        <motion.div>
          <MenuLink text="Contact" />
        </motion.div>
      </Box>
    </Box>
  );
}
