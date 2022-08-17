import clsx from "clsx";
import React from "react";
import { Link } from "react-router-dom";
import style from "./PlaceAd.module.scss";
import { MAIN_PATH } from "../../../data/pathConstants";

type PlaceAdProps = {
  className?: string;
};

const PlaceAd: React.FC<PlaceAdProps> = ({ className = "" }) => {
  return (
    <Link to={MAIN_PATH} className={clsx(style.adButton, className)}>
      <span>+ Разместить объявление</span>
    </Link>
  );
};

export default PlaceAd;
