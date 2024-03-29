import React from "react";
import { SvgIconProp } from "./types/SvgIcons";

const MarkIcon: React.FC<SvgIconProp> = ({
  fillColor = "currentColor",
  className = "",
  width = 13,
  height = 15,
}) => {
  return (
    <div className={className}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 13 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.0069 2.61628C9.90811 0.941861 8.09415 0 6.05346 0C4.0302 0 2.21625 0.941861 1.08253 2.61628C-0.0511958 4.25581 -0.312824 6.34884 0.384851 8.18023C0.576711 8.6686 0.873223 9.17442 1.25694 9.62791L5.66973 14.8256C5.77439 14.9302 5.87904 15 6.03601 15C6.19299 15 6.29764 14.9302 6.40229 14.8256L10.8325 9.62791C11.2162 9.17442 11.5302 8.68605 11.7046 8.18023C12.4023 6.34884 12.1407 4.25581 11.0069 2.61628ZM6.05346 8.7907C4.55346 8.7907 3.31508 7.55233 3.31508 6.05233C3.31508 4.55233 4.55346 3.31395 6.05346 3.31395C7.55346 3.31395 8.79183 4.55233 8.79183 6.05233C8.79183 7.55233 7.5709 8.7907 6.05346 8.7907Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
};

export default MarkIcon;
