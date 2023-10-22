import React from "react";

const Heading = ({ color, fontSize, fontWeight, text, padding, margin }) => {
  return <h3 style={{ color, fontSize, fontWeight, padding, margin }}>{text}</h3>;
};

export default Heading;
