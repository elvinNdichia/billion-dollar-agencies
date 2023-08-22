import { Box, maxWidth } from "@mui/system";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { LatestProjects } from "./LatestProjects";
import { Footer } from "./Footer";
import { Top } from "./Top";
import { MenuToggle } from "./MenuToggle";
import { Menu } from "./HamburgerToggle";
import CursorCircle from "./gpt/CursorCircle";
import { LNCursor } from "./gpt/LNCursor";
import { PopMenu } from "./PopMenu";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

export function MainContainerWithLenis() {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });

  return (
    <ReactLenis root>
      <Box
        sx={{ height: "500vh", width: "50vw", border: "5px dashed red" }}
      ></Box>
    </ReactLenis>
  );
}

/*

 <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          width: "100%",
          maxWidth: "98rem",
          padding: { sm: "0 2rem" },
        }}
      >
        <Box sx={{ display: { xs: "none", lg: "block" } }}>
          <LNCursor />
        </Box>

        <Header />
        <Hero />
        <LatestProjects />
        <Footer />
        <Top />
        <Menu />
        <MenuToggle />
      </Box>
    </Box>

*/
