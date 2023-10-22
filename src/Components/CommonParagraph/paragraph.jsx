import React from "react";

const Paragraph = ({ color, fontSize, fontWeight, letterSpacing, text }) => {
  return <p style={{ color, fontSize, fontWeight, letterSpacing }}>{text}</p>;
};

export default Paragraph;
