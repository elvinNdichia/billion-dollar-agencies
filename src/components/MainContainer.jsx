import { Box, maxWidth } from "@mui/system";
import { Header } from "./Header";

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
      </Box>
    </Box>
  );
}
