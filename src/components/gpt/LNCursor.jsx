import React, { useEffect, useState, createContext, useContext } from "react";

const MouseContext = createContext("");

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  useEffect(() => {
    const mouseMoveHandler = (event) => {
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX, y: clientY });
    };
    document.addEventListener("mousemove", mouseMoveHandler);
    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);
  return mousePosition;
};

const Cursor = () => {
  const { cursorType } = useContext(MouseContext);
  const { x, y } = useMousePosition();

  useEffect(() => {
    if (!(navigator.userAgent.indexOf("Chrome") != -1)) {
      const dot = document.querySelector(".dot");
      const ring = document.querySelector(".ring");

      if (dot && ring) {
        ring.style.display = "none";
      }
    }
  }, [cursorType]);

  return (
    <>
      <div
        className={`dot ${cursorType}`}
        style={{ left: `${x}px`, top: `${y}px` }}
      ></div>

      <div
        className={`ring ${cursorType}`}
        style={{ left: `${x}px`, top: `${y}px` }}
      ></div>
    </>
  );
};

export const LNCursor = () => {
  return (
    <MouseContext.Provider value={{ cursorType: "default" }}>
      <Cursor />
    </MouseContext.Provider>
  );
};
