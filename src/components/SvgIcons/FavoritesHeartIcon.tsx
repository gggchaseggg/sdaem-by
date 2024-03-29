import React from "react";
import { FavoritesHeartIconProp } from "./types/SvgIcons";

const FavoritesHeartIcon: React.FC<FavoritesHeartIconProp> = ({
  fillColor = "currentColor",
  fillOpacity = 1,
  strokeColor = "currentColor",
  className = "",
  width = "16",
  height = "15",
}) => {
  return (
    <div className={className}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g strokeWidth={2}>
          <path
            d="
            M 7.59027 3.55401
            l -0.1 -0.15
            C 8.25505 2.64328 8.54276 2.34654 8.85535 2.10691
            C 9.46977 1.63609 10.1566 1.40351 10.9095 1.40682
            C 11.93 1.4113 12.8597 1.82209 13.5371 2.56327
            C 14.2083 3.29769 14.587 4.31189 14.5821 5.43081
            C 14.5772 6.55587 14.16 7.60618 13.1949 8.76024
            C 12.316 9.8114 11.0446 10.8874 9.51663 12.1779
            C 8.98842 12.6241 8.40358 13.1182 7.7965 13.6444
            C 7.72713 13.7046 7.63812 13.7378 7.5456 13.7374
            C 7.45309 13.7369 7.36447 13.7031 7.29558 13.6422
            C 6.68828 13.1065 6.10396 12.6041 5.59058 12.1626
            C 4.0719 10.8569 2.80994 9.76967 1.94031 8.71096
            C 0.985381 7.54832 0.577321 6.49438 0.582259 5.36947
            C 0.587171 4.25045 0.974833 3.23962 1.65226 2.51112
            C 2.33615 1.7759 3.2696 1.37328 4.29007 1.37776
            C 5.04293 1.38107 5.72772 1.61967 6.33787 2.09585
            C 6.64845 2.33821 6.93366 2.63758 7.59027 3.55401
            l 0.1 0.06"
            fill={fillColor}
            fillOpacity={fillOpacity}
            stroke={strokeColor}
          />
        </g>
      </svg>
    </div>
  );
};

export default FavoritesHeartIcon;
