import { Box } from "@mui/system";
import { HamburgerToggle } from "./HamburgerToggle";
import { LatestProjectsLinks } from "./LatestProjectsLinks";
import { LinkWithUnderline } from "./LinkWithUnderline";

export function Header() {
  return (
    <Box
      sx={{
        padding: { sm: "1.8rem 0 0 0" },
        display: "flex",
        justifyContent: "space-between",
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
        <LinkWithUnderline>About</LinkWithUnderline>
        <LinkWithUnderline>Gallery</LinkWithUnderline>
        <LinkWithUnderline>Contact</LinkWithUnderline>
      </Box>
    </Box>
  );
}
