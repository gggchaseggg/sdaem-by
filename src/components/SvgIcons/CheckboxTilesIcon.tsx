import React from "react";
import { SvgIconProp } from "./types/SvgIcons";

const CheckboxTilesIcon: React.FC<SvgIconProp> = ({
  fillColor = "currentColor",
  className = "",
  width = 15,
  height = 14,
}) => {
  return (
    <div className={className}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 15 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.00390625"
          width="5.44444"
          height="5.44444"
          rx="1"
          fill={fillColor}
        />
        <rect
          x="0.00390625"
          y="8.55469"
          width="5.44444"
          height="5.44444"
          rx="1"
          fill={fillColor}
        />
        <rect
          x="8.55957"
          width="5.44444"
          height="5.44444"
          rx="1"
          fill={fillColor}
        />
        <rect
          x="8.55957"
          y="8.55469"
          width="5.44444"
          height="5.44444"
          rx="1"
          fill={fillColor}
        />
      </svg>
    </div>
  );
};

export default CheckboxTilesIcon;
