import React from "react";
import clsx from "clsx";

import style from "./ShowOnMap.module.scss";
import { Link } from "react-router-dom";
import { MAP_PATH } from "../../../data/pathConstants";
import MarkIcon from "../../SvgIcons/MarkIcon";

const ShowOnMap = ({ className }) => {
  return (
    <div className={clsx(style.container, className)}>
      <div className={style.background}>
        <h3 className={style.show}>Показать найденные квартиры на карте</h3>
        <p className={style.text}>
          Ищите новостройки рядом с работой, парком или родственниками
        </p>
        <Link to={MAP_PATH} className={style.link}>
          <MarkIcon fillColor="#FFD54F" className={style.icon} />
          <span>Открыть карту</span>
        </Link>
      </div>
    </div>
  );
};

export default ShowOnMap;
