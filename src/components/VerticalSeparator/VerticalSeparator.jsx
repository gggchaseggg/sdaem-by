import React from "react";

const VerticalSeparator = ({ className, height, width, color }) => {
  return (
    <div
      className={className}
      style={{ height: height, width: width, background: color }}
    ></div>
  );
};

export default VerticalSeparator;
