import React from "react";
import { SvgIconProp } from "./types/SvgIcons";

const FacebookInnerIcon: React.FC<SvgIconProp> = ({
  fillColor = "currentColor",
  className = "",
  width = 21,
  height = 21,
}) => {
  return (
    <div className={className}>
      <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
        <svg
          width={width}
          height={height}
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.8047 0.320312C5.28266 0.320312 0.805664 4.79731 0.805664 10.3193C0.805664 15.3093 4.46166 19.4453 9.24266 20.1983V13.2103H6.70266V10.3193H9.24266V8.11631C9.24266 5.60831 10.7357 4.22531 13.0187 4.22531C14.1127 4.22531 15.2587 4.42031 15.2587 4.42031V6.87931H13.9947C12.7547 6.87931 12.3667 7.65131 12.3667 8.44231V10.3173H15.1377L14.6947 13.2083H12.3667V20.1963C17.1477 19.4473 20.8037 15.3103 20.8037 10.3193C20.8037 4.79731 16.3267 0.320312 10.8047 0.320312Z"
            fill={fillColor}
          />
        </svg>
      </a>
    </div>
  );
};

export default FacebookInnerIcon;
