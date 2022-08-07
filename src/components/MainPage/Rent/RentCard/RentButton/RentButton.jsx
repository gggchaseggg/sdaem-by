import React from "react";
import { Link } from "react-router-dom";

import { MAIN_PATH } from "../../../../../data/pathConstants";

import style from "./RentButton.module.scss";

const RentButton = ({ text, link = { MAIN_PATH } }) => {
  return (
    <Link to={link} className={style.button}>
      {text}
    </Link>
  );
};

export default RentButton;
