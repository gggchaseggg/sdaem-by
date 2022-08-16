import React from "react";
import { SvgIconProp } from "./types/SvgIcons";

const WhatsappIcon: React.FC<SvgIconProp> = ({
  fillColor = "currentColor",
  className = "",
  width = 18,
  height = 18,
}) => {
  return (
    <div className={className}>
      <a href="https://www.viber.com" target="_blank" rel="noreferrer">
        <svg
          width={width}
          height={height}
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.1558 2.87929C14.3846 2.10244 13.4667 1.48655 12.4555 1.06738C11.4442 0.64821 10.3598 0.43412 9.26514 0.43754C4.67675 0.43754 0.942178 4.17211 0.942178 8.76365C0.942178 10.2308 1.32656 11.6654 2.05436 12.9257L0.872864 17.241L5.28692 16.0826C6.50723 16.7473 7.87449 17.0961 9.26409 17.0971H9.26724C13.8556 17.0971 17.5934 13.3625 17.5934 8.771C17.5961 7.67672 17.3821 6.59273 16.9635 5.58165C16.5449 4.57058 15.9302 3.65246 15.1548 2.88034L15.1558 2.87929ZM9.26724 15.6919C8.0271 15.6921 6.80973 15.3588 5.74272 14.7268L5.48961 14.5755L2.87038 15.2613L3.56982 12.7083L3.40599 12.4457C2.71049 11.3438 2.34295 10.0667 2.34632 8.76365C2.34854 6.92797 3.07897 5.16815 4.37729 3.87042C5.67561 2.57269 7.43576 1.84307 9.27144 1.84168C11.1188 1.84168 12.859 2.56423 14.1644 3.86965C14.8086 4.51152 15.3192 5.2747 15.6668 6.11507C16.0143 6.95544 16.1919 7.85636 16.1892 8.76575C16.1861 12.5854 13.0816 15.6909 9.26724 15.6909V15.6919ZM13.0617 10.507C12.8548 10.402 11.8308 9.89999 11.6407 9.83067C11.4506 9.76136 11.312 9.72565 11.1713 9.93569C11.0337 10.1426 10.6336 10.612 10.5117 10.7528C10.3899 10.8903 10.2691 10.9103 10.0623 10.8053C9.85536 10.7002 9.18218 10.4808 8.38821 9.77186C7.77068 9.2205 7.35165 8.53786 7.22982 8.33096C7.108 8.12407 7.21617 8.0096 7.32224 7.90773C7.41781 7.81531 7.52914 7.66513 7.63416 7.5433C7.73918 7.42148 7.77174 7.33641 7.84105 7.19568C7.91036 7.0581 7.87676 6.93628 7.82425 6.83125C7.77173 6.72623 7.3548 5.70227 7.18466 5.28534C7.01768 4.87785 6.84334 4.93457 6.71522 4.92721C6.59339 4.92091 6.45581 4.92091 6.31824 4.92091C6.18066 4.92091 5.95381 4.97342 5.76372 5.18032C5.57363 5.38721 5.03487 5.89236 5.03487 6.91632C5.03487 7.94028 5.77947 8.92854 5.8845 9.06927C5.98952 9.20684 7.35165 11.3104 9.43843 12.2105C9.93413 12.4237 10.3217 12.5518 10.6231 12.6505C11.1219 12.808 11.5746 12.7849 11.9327 12.7324C12.3328 12.6736 13.1635 12.2304 13.3379 11.7442C13.5122 11.2579 13.5122 10.842 13.4597 10.7559C13.4103 10.6635 13.2728 10.612 13.0627 10.506L13.0617 10.507Z"
            fill={fillColor}
          />
        </svg>
      </a>
    </div>
  );
};

export default WhatsappIcon;