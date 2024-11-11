import React from "react";
import { Link } from "react-router-dom";

import { MAIN_PATH, PathConstants } from "../../../../../data/pathConstants";

import style from "./RentButton.module.scss";

type RentButtonProps = {
  text: string;
  link?: PathConstants;
};

const RentButton: React.FC<RentButtonProps> = ({ text, link = MAIN_PATH }) => {
  return (
    <Link to={link} className={style.button}>
      {text}
    </Link>
  );
};

export default RentButton;
