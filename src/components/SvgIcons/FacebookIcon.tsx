import React from "react";
import { SvgIconProp } from "./types/SvgIcons";

const FacebookIcon: React.FC<SvgIconProp> = ({
  fillColor = "currentColor",
  className = "",
  width = 10,
  height = 19,
}) => {
  return (
    <div className={className}>
      <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
        <svg
          width={width}
          height={height}
          viewBox="0 0 10 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.88394 3.79773H9.44256V1.08311C9.17366 1.04612 8.24887 0.962891 7.17185 0.962891C4.92461 0.962891 3.38519 2.3764 3.38519 4.97434V7.36528H0.905334V10.4H3.38519V18.0359H6.42561V10.4007H8.80517L9.18291 7.36599H6.4249V5.27525C6.42562 4.39813 6.66179 3.79773 7.88394 3.79773Z"
            fill={fillColor}
          />
        </svg>
      </a>
    </div>
  );
};

export default FacebookIcon;
