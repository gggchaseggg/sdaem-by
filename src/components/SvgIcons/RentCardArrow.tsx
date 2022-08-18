import React from "react";
import { SvgIconProp } from "./types/SvgIcons";

const RentCardArrow: React.FC<SvgIconProp> = ({
  fillColor = "currentColor",
  className = "",
  width = 40,
  height = 40,
}) => {
  return (
    <div className={className}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="20.2856" cy="19.7143" r="19.2143" stroke={fillColor} />
        <path
          d="M17 26.2852L23.5714 19.7137L17 13.1423"
          stroke={fillColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default RentCardArrow;
