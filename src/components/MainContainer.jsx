import { Box, maxWidth } from "@mui/system";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { LatestProjects } from "./LatestProjects";

export function MainContainer() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          width: "100%",
          maxWidth: "98rem",
          padding: { sm: "0 2rem" },
        }}
      >
        <Header />
        <Hero />
        <LatestProjects />
      </Box>
    </Box>
  );
}
