import React, { useState } from "react";
import { motion } from "framer-motion";

const items = ["Overpass", "Lever Edge", "56k Cloud", "Crisp"];

export const LatestProjectsLinks = () => {
  const [selectedItem, setSelectedItem] = useState(0); // Default selection set to first item

  const handleMouseEnter = (index) => {
    setSelectedItem(index);
  };

  let top;
  switch (selectedItem) {
    case 0:
      top = ".4rem";
      break;
    case 1:
      top = "1.65rem"; // replace with desired value for selectedItem 1
      break;
    case 2:
      top = "2.9rem"; // replace with desired value for selectedItem 2
      break;
    case 3:
      top = "4.35rem"; // replace with desired value for selectedItem 3
      break;
    default:
      top = ""; // replace with default value if needed
  }

  return (
    <ul
      style={{ listStyle: "none", padding: 0, margin: 0, position: "relative" }}
    >
      {items.map((item, index) => (
        <li
          key={index}
          style={{
            cursor: "pointer",
            paddingLeft: "3.18rem",
            marginTop: "0.1rem",
          }}
          className="body1"
          onMouseEnter={() => handleMouseEnter(index)}
        >
          <span
            style={{ color: "#000", opacity: selectedItem === index ? 1 : 0.5 }}
          >
            {item}
          </span>
        </li>
      ))}
      <li
        key="324089"
        style={{
          cursor: "pointer",
          paddingLeft: "3.18rem",
          marginTop: "0.1rem",
        }}
        className="body1"
      >
        <span style={{ color: "#000", opacity: 0.5 }}>More...</span>
      </li>

      <motion.div
        layout
        layoutId="bullet"
        style={{
          position: "absolute",
          left: "1.5rem",
          top: top,
          width: "0.44rem",
          height: "0.44rem",
          borderRadius: "50%",
          background: "#ed0277",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />
    </ul>
  );
};
