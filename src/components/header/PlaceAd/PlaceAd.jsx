import clsx from "clsx";
import React from "react";
import { Link } from "react-router-dom";
import style from "./PlaceAd.module.scss";

export default function PlaceAd({ className }) {
  return (
    <Link to="/" className={clsx(style.adButton, className)}>
      + Разместить объявление
    </Link>
  );
}
