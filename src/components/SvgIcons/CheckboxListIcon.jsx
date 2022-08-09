import React from "react";

export default function CheckboxListIcon({
  fillColor = "currentColor",
  className = "",
  width = "15",
  height = "15",
}) {
  return (
    <div className={className}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          y="0.5"
          width="14.5036"
          height="3.22302"
          rx="1"
          fill={fillColor}
        />
        <rect
          y="11.2773"
          width="14.5036"
          height="3.22302"
          rx="1"
          fill={fillColor}
        />
        <rect
          y="5.88867"
          width="14.5036"
          height="3.22302"
          rx="1"
          fill={fillColor}
        />
      </svg>
    </div>
  );
}
