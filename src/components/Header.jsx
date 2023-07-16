import { Box } from "@mui/system";
import { HamburgerToggle } from "./HamburgerToggle";
import { LatestProjectsLinks } from "./LatestProjectsLinks";
import { LinkWithUnderline } from "./LinkWithUnderline";

export function Header() {
  return (
    <Box
      sx={{
        padding: { sm: "1.8rem 0 0 0" },
        display: "grid",
        gridTemplateColumns: "1fr 2fr",
      }}
    >
      <Box
        component="h1"
        className="body1"
        sx={{ padding: { xs: "1rem 0 0 1rem", sm: "0" } }}
      >
        We do -<br />
        Design & Dev
      </Box>
      <Box
        sx={{
          display: { xs: "block", sm: "none" },
          position: "fixed",
          top: 0,
          right: 0,
        }}
      >
        <HamburgerToggle />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: { xs: "none", sm: "block", md: "none" } }} />
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <div>
            <p className="body1">Latest Projects</p>
          </div>
          <div
            style={{
              paddingTop: ".25rem",
              position: "relative",
            }}
          >
            <LatestProjectsLinks />{" "}
          </div>
        </Box>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <LinkWithUnderline style={{ marginLeft: "2.5rem" }}>
            About
          </LinkWithUnderline>

          <LinkWithUnderline style={{ marginLeft: "2.5rem" }}>
            Gallery
          </LinkWithUnderline>

          <LinkWithUnderline style={{ marginLeft: "2.5rem" }}>
            Contact
          </LinkWithUnderline>
        </Box>
      </Box>
    </Box>
  );
}
