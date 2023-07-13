import React, { useState } from "react";
import { motion } from "framer-motion";

const ListComponent = ({ items }) => {
  const [hoveredItem, setHoveredItem] = useState(0);

  const handleHover = (index) => {
    setHoveredItem(index);
  };

  return (
    <ul>
      {items.map((item, i) => (
        <li
          key={i}
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            cursor: "pointer",
          }}
          onMouseOver={() => handleHover(i)}
          onMouseLeave={() => setHoveredItem(0)}
        >
          <motion.div
            key={item}
            animate={{
              scale: hoveredItem === i ? 1.2 : 1,
              transition: {
                duration: 0.5,
              },
            }}
            style={{
              display: "inline-block",
              margin: "0 0.5rem",
              padding: "0.5rem",
              borderRadius: "0.3rem",
              color: hoveredItem === i ? "#000" : "#aaa",
              background: hoveredItem === i ? "#ed0277" : "#fff",
              fontSize: "1rem",
            }}
          >
            {item}
          </motion.div>
          <motion.div
            key={`bullet-${i}`}
            animate={{
              y: hoveredItem === i ? 0 : -7,
              transition: {
                duration: 0.5,
              },
            }}
            style={{
              display: "inline-block",
              margin: "0 0.5rem",
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "#ed0277",
            }}
          />
        </li>
      ))}
    </ul>
  );
};

export default ListComponent;
