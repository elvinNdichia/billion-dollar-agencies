import { Box } from "@mui/system";
import { motion } from "framer-motion";
import { LinkWithUnderline } from "./LinkWithUnderline";

export function Hero() {
  const draw = {
    hidden: { pathLength: 0, opacity: 0, y: 16 },
    visible: (i) => {
      const delay = 0.2 + i * 0.5;
      return {
        y: 0,
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 4, bounce: 0 },
          opacity: { delay, duration: 0.5 },
          y: { delay, type: "spring", duration: 2, bounce: 0.5 },
        },
      };
    },
  };
  return (
    <>
      <Box
        sx={{
          padding: {
            xs: "7rem 1rem",
            sm: "7rem 0",
            md: "5rem 0",
            lg: "2rem 0",
          },
        }}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          style={{ overflow: "visible" }}
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            viewBox="0 0 376 121"
            fill="none"
            style={{ overflow: "visible" }}
          >
            <motion.path
              variants={draw}
              custom={0.2}
              d="M103.033 13.6654L64.4001 119H38.7455L0.112793 13.6654H22.7492L51.7237 97.42L80.5474 13.6654H103.033Z"
              fill="url(#paint0_linear_2125_3847)"
            />
            <motion.path
              variants={draw}
              custom={0.3}
              d="M143.769 120.358C135.72 120.358 128.477 118.598 122.038 115.076C115.599 111.455 110.519 106.374 106.796 99.8345C103.174 93.2952 101.363 85.7497 101.363 77.1982C101.363 68.6467 103.225 61.1012 106.947 54.5618C110.77 48.0224 115.951 42.9921 122.491 39.4709C129.03 35.8491 136.324 34.0382 144.372 34.0382C152.421 34.0382 159.715 35.8491 166.254 39.4709C172.794 42.9921 177.925 48.0224 181.647 54.5618C185.47 61.1012 187.382 68.6467 187.382 77.1982C187.382 85.7497 185.42 93.2952 181.496 99.8345C177.673 106.374 172.442 111.455 165.802 115.076C159.262 118.598 151.918 120.358 143.769 120.358ZM143.769 101.947C147.592 101.947 151.163 101.042 154.483 99.2309C157.904 97.3194 160.62 94.5024 162.632 90.78C164.645 87.0576 165.651 82.5303 165.651 77.1982C165.651 69.2503 163.538 63.1636 159.312 58.9382C155.188 54.6121 150.107 52.4491 144.071 52.4491C138.034 52.4491 132.954 54.6121 128.829 58.9382C124.805 63.1636 122.792 69.2503 122.792 77.1982C122.792 85.1461 124.754 91.283 128.678 95.6091C132.702 99.8345 137.732 101.947 143.769 101.947Z"
              fill="url(#paint1_linear_2125_3847)"
            />
            <motion.path
              variants={draw}
              custom={0.4}
              d="M204.539 25.4364C200.817 25.4364 197.698 24.2794 195.183 21.9654C192.768 19.5509 191.561 16.583 191.561 13.0618C191.561 9.54059 192.768 6.62301 195.183 4.30907C197.698 1.89453 200.817 0.687256 204.539 0.687256C208.262 0.687256 211.33 1.89453 213.745 4.30907C216.26 6.62301 217.517 9.54059 217.517 13.0618C217.517 16.583 216.26 19.5509 213.745 21.9654C211.33 24.2794 208.262 25.4364 204.539 25.4364ZM214.952 35.3964V119H193.825V35.3964H214.952Z"
              fill="url(#paint2_linear_2125_3847)"
            />
            <motion.path
              variants={draw}
              custom={0.5}
              d="M247.898 7.32726V119H226.771V7.32726H247.898Z"
              fill="url(#paint3_linear_2125_3847)"
            />
            <motion.path
              variants={draw}
              custom={0.6}
              d="M254.285 76.8964C254.285 68.4454 255.945 60.9503 259.265 54.4109C262.686 47.8715 267.263 42.8412 272.998 39.32C278.833 35.7988 285.322 34.0382 292.465 34.0382C298.703 34.0382 304.135 35.2957 308.763 37.8109C313.492 40.3261 317.264 43.4951 320.081 47.3182V35.3964H341.36V119H320.081V106.776C317.365 110.7 313.592 113.97 308.763 116.585C304.035 119.101 298.552 120.358 292.314 120.358C285.272 120.358 278.833 118.547 272.998 114.925C267.263 111.304 262.686 106.223 259.265 99.6836C255.945 93.0436 254.285 85.4479 254.285 76.8964ZM320.081 77.1982C320.081 72.0673 319.075 67.6909 317.063 64.0691C315.051 60.3467 312.335 57.5297 308.914 55.6182C305.493 53.606 301.821 52.6 297.898 52.6C293.974 52.6 290.352 53.5557 287.032 55.4673C283.712 57.3788 280.996 60.1958 278.883 63.9182C276.871 67.54 275.865 71.8661 275.865 76.8964C275.865 81.9267 276.871 86.3533 278.883 90.1764C280.996 93.8988 283.712 96.7661 287.032 98.7782C290.453 100.79 294.075 101.796 297.898 101.796C301.821 101.796 305.493 100.841 308.914 98.9291C312.335 96.917 315.051 94.1 317.063 90.4782C319.075 86.7558 320.081 82.3291 320.081 77.1982Z"
              fill="url(#paint4_linear_2125_3847)"
            />
            <motion.path
              variants={draw}
              custom={0.7}
              d="M362.296 120.056C358.473 120.056 355.304 118.899 352.789 116.585C350.374 114.171 349.167 111.203 349.167 107.682C349.167 104.161 350.374 101.243 352.789 98.9291C355.304 96.5145 358.473 95.3073 362.296 95.3073C366.018 95.3073 369.087 96.5145 371.501 98.9291C373.916 101.243 375.123 104.161 375.123 107.682C375.123 111.203 373.916 114.171 371.501 116.585C369.087 118.899 366.018 120.056 362.296 120.056Z"
              fill="url(#paint5_linear_2125_3847)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_2125_3847"
                x1="100.024"
                y1="106.997"
                x2="329.676"
                y2="66.9679"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#EC0D78" />
                <stop offset="0.43243" stop-color="#FD2944" />
                <stop offset="0.728046" stop-color="#F84E37" />
                <stop offset="1" stop-color="#FE880E" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_2125_3847"
                x1="100.024"
                y1="106.997"
                x2="329.676"
                y2="66.9679"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#EC0D78" />
                <stop offset="0.43243" stop-color="#FD2944" />
                <stop offset="0.728046" stop-color="#F84E37" />
                <stop offset="1" stop-color="#FE880E" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_2125_3847"
                x1="100.024"
                y1="106.997"
                x2="329.676"
                y2="66.9679"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#EC0D78" />
                <stop offset="0.43243" stop-color="#FD2944" />
                <stop offset="0.728046" stop-color="#F84E37" />
                <stop offset="1" stop-color="#FE880E" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_2125_3847"
                x1="100.024"
                y1="106.997"
                x2="329.676"
                y2="66.9679"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#EC0D78" />
                <stop offset="0.43243" stop-color="#FD2944" />
                <stop offset="0.728046" stop-color="#F84E37" />
                <stop offset="1" stop-color="#FE880E" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_2125_3847"
                x1="100.024"
                y1="106.997"
                x2="329.676"
                y2="66.9679"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#EC0D78" />
                <stop offset="0.43243" stop-color="#FD2944" />
                <stop offset="0.728046" stop-color="#F84E37" />
                <stop offset="1" stop-color="#FE880E" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_2125_3847"
                x1="100.024"
                y1="106.997"
                x2="329.676"
                y2="66.9679"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#EC0D78" />
                <stop offset="0.43243" stop-color="#FD2944" />
                <stop offset="0.728046" stop-color="#F84E37" />
                <stop offset="1" stop-color="#FE880E" />
              </linearGradient>
            </defs>
          </motion.svg>
        </motion.div>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 2fr" },
          padding: {
            xs: "0 1rem",
            lg: "3rem 0 0 0",
          },
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          }}
        >
          <div></div>
          <div>
            <p className="body1">Austin, Texas</p>
          </div>
        </Box>
        <Box>
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
    </>
  );
}
