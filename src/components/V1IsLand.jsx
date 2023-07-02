import { Box } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { waveForm } from "../svgs/waveForm";

export function V1Island() {
  const [view, setView] = useState(1);

  const handlePrevClick = () => {
    if (view > 1) {
      setView((prevView) => prevView - 1);
    }
  };

  const handleNextClick = () => {
    if (view < 3) {
      setView((prevView) => prevView + 1);
    }
  };

  // Transition
  const transitionConfig = {
    type: "spring",
    duration: 0.9,
    bounce: 0.25,
  };

  const mainContainer = {
    1: { width: "122px", padding: "1px 6px", height: "38px" },
    2: {
      width: "192px",
      padding: "1px 6px",
      height: "38px",
    },
    3: {
      width: "370px",
      padding: "20px 20px",
      height: "200px",
    },
  };

  const albumCover = {
    1: { width: "28px", height: "28px", borderRadius: "16px" },
    2: { width: "28px", height: "28px", borderRadius: "16px" },
    3: { width: "65px", height: "65px", borderRadius: "16px" },
  };

  const waveFormAnimation = {
    1: { width: "28px" },
    2: { width: "28px" },
    3: { width: "34px" },
  };

  const albumInformation = {
    1: { top: "56px", left: "4px", opacity: 0, display: "none" },
    2: { top: "56px", left: "4px", opacity: 0 },
    3: { top: 0, left: 0, opacity: 1 },
  };

  return (
    <Box
      style={{
        display: "grid",
        gridTemplateRows: "auto 200px",
        height: "100%",
        width: "100%",
        backgroundColor: "#000",
      }}
    >
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box sx={{ height: "100vh", width: "100vw" }} className="iphone-bg">
          <Box
            style={{
              alignItems: "center",
              justifyContent: "center",
              padding: "12px 12px",
              display: "flex",
            }}
          >
            <motion.div
              style={{
                background: "#000",
                borderRadius: "32px",
                overflow: "hidden",
              }}
              animate={{ ...mainContainer[view] }}
              transition={{ ...transitionConfig }}
              layout
            >
              <motion.div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <motion.div style={{ display: "flex", alignItems: "center" }}>
                  <motion.div
                    style={{
                      overflow: "hidden",
                    }}
                    animate={{ ...albumCover[view] }}
                    laout
                  >
                    <img src="/album-cover.png" style={{ maxWidth: "100%" }} />
                  </motion.div>
                  <motion.div
                    style={{ paddingLeft: "16px", position: "relative" }}
                    animate={{ ...albumInformation[view] }}
                    layout
                  >
                    <p style={{ color: "#fff", fontWeight: 600 }}>good 4 u</p>
                    <p
                      style={{
                        color: "rgba(255, 255, 255, .6)",
                        fontWeight: 400,
                      }}
                    >
                      Olivia Rodrigo
                    </p>
                  </motion.div>
                </motion.div>
                <motion.div
                  animate={{ ...waveFormAnimation[view] }}
                  transition={{ ...transitionConfig }}
                  layout
                >
                  {waveForm}
                </motion.div>
              </motion.div>
              <motion.div style={{ marginTop: "16px" }}>
                <img src="/player-controls.svg" />
              </motion.div>
            </motion.div>
          </Box>
          <motion.div style={{ position: "absolute", bottom: 0 }}>
            <button onClick={handlePrevClick}>Prev</button>
            <button onClick={handleNextClick}>Next</button>
          </motion.div>
        </Box>
      </Box>
      <Box></Box>
    </Box>
  );
}
