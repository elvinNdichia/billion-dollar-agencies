import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { SharedLayout } from "./components/SharedLayout";
import { V1Island } from "./components/V1IsLand";
import { Page1 } from "./components/Page1";
import { PageScroll } from "./components/PageScroll";
import { IntermediateParallax, SimpleParallax } from "./components/Parallax";
import { AdvancedParallaxGPt } from "./components/AdvancedParallaxGPt";
import { NavAndTop } from "./components/NavAndTop";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavAndTop />
    </>
  );
}

export default App;
