import React from "react";
import { SvgIconProp } from "./types/SvgIcons";

const TelegramIcon: React.FC<SvgIconProp> = ({
  fillColor = "currentColor",
  className = "",
  width = 18,
  height = 15,
}) => {
  return (
    <div className={className}>
      <a href="https://www.telegram.com" target="_blank" rel="noreferrer">
        <svg
          width={width}
          height={height}
          viewBox="0 0 18 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.2089 0.997407L1.56595 6.644C0.566623 7.04538 0.572405 7.60286 1.3826 7.85145L5.14204 9.02421L13.8403 3.53619C14.2516 3.28594 14.6274 3.42056 14.3185 3.69476L7.27118 10.0549H7.26953L7.27118 10.0557L7.01185 13.9308C7.39176 13.9308 7.55941 13.7565 7.77249 13.5509L9.59853 11.7752L13.3968 14.5808C14.0971 14.9665 14.6001 14.7683 14.7744 13.9325L17.2677 2.18173C17.5229 1.15846 16.8771 0.695132 16.2089 0.997407Z"
            fill={fillColor}
          />
        </svg>
      </a>
    </div>
  );
};

export default TelegramIcon;
