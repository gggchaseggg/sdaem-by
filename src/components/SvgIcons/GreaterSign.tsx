import React from "react";
import { SvgIconProp } from "./types/SvgIcons";

const GreaterSign: React.FC<SvgIconProp> = ({
  fillColor = "currentColor",
  className = "",
  width = 12,
  height = 7,
}) => {
  return (
    <div className={className}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 12 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.5 1.38477L6 5.64152L10.5 1.38477"
          stroke={fillColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default GreaterSign;
