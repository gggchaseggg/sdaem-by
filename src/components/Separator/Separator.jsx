import React from "react";

const Separator = ({ className, height, width, color }) => {
  return (
    <div
      className={className}
      style={{ height: height, width: width, background: color }}
    ></div>
  );
};

export default Separator;
