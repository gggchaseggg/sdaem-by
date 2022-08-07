import clsx from "clsx";
import React from "react";
import { Link } from "react-router-dom";
import style from "./PlaceAd.module.scss";
import { MAIN_PATH } from "../../../data/pathConstants";

export default function PlaceAd({ className }) {
  return (
    <Link to={MAIN_PATH} className={clsx(style.adButton, className)}>
      + Разместить объявление
    </Link>
  );
}
