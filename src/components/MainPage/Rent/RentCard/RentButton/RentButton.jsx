import React from "react";
import { Link } from "react-router-dom";

import style from "./RentButton.module.scss";

const RentButton = ({ text, link = "/" }) => {
  return (
    <Link to={link} className={style.button}>
      {text}
    </Link>
  );
};

export default RentButton;
