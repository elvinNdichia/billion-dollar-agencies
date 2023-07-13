import React, { useState } from "react";
import { motion } from "framer-motion";

const items = ["Overpass", "Lever Edge", "Crisp"];

export const LinksList = () => {
  const [selectedItem, setSelectedItem] = useState(0); // Default selection set to first item

  const handleMouseEnter = (index) => {
    setSelectedItem(index);
  };

  return (
    <ul
      style={{ listStyle: "none", padding: 0, margin: 0, position: "relative" }}
    >
      {items.map((item, index) => (
        <li
          key={index}
          style={{ margin: "0.5rem 0", cursor: "pointer", paddingLeft: "1rem" }}
          onMouseEnter={() => handleMouseEnter(index)}
        >
          <span style={{ color: selectedItem === index ? "#000" : "#aaa" }}>
            {item}
          </span>
        </li>
      ))}
      <motion.div
        layout
        layoutId="bullet"
        style={{
          position: "absolute",
          left: "0",
          top: `${selectedItem * 1.5}rem`, // Adjust vertical position based on selected item
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
