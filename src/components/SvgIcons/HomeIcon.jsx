import React from "react";
import { Link } from "react-router-dom";

export default function MarkIcon({
  fillColor = "currentColor",
  className = "",
  width = "12",
  height = "12",
}) {
  return (
    <div className={className}>
      <Link to="/">
        <svg
          width={width}
          height={height}
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_2831_1150)">
            <path
              d="M11.7985 5.36427L6.41446 0.458394C6.17814 0.243027 5.82177 0.243051 5.58554 0.458371L0.201516 5.3643C0.0122119 5.5368 -0.0503192 5.80258 0.042165 6.04138C0.134673 6.28019 0.359907 6.43448 0.616008 6.43448H1.47593V11.3498C1.47593 11.5447 1.63394 11.7027 1.82883 11.7027H4.77993C4.97481 11.7027 5.13283 11.5447 5.13283 11.3498V8.36537H6.86724V11.3498C6.86724 11.5447 7.02526 11.7027 7.22014 11.7027H10.1711C10.366 11.7027 10.524 11.5447 10.524 11.3498V6.43448H11.3841C11.6402 6.43448 11.8654 6.28016 11.9579 6.04138C12.0503 5.80256 11.9878 5.5368 11.7985 5.36427Z"
              fill={fillColor}
            />
            <path
              d="M10.4319 1.00195H8.06189L10.7848 3.47779V1.35483C10.7848 1.15995 10.6268 1.00195 10.4319 1.00195Z"
              fill={fillColor}
            />
          </g>
          <defs>
            <clipPath id="clip0_2831_1150">
              <rect width="12" height="12" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </Link>
    </div>
  );
}
