// src/components/ExampleCarouselImage.jsx
import React from "react";

export default function ExampleCarouselImage({ text }) {
  return (
    <div
      style={{
        height: "765px",
        width: "100%",
        backgroundColor: "#ccc",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h3>{text}</h3>
    </div>
  );
}
