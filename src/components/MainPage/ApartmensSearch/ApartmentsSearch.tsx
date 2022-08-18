import React from "react";
import { Link } from "react-router-dom";

import InfoCards from "./InfoCards/InfoCards";
import MarkIcon from "../../SvgIcons/MarkIcon";
import { MAP_PATH } from "../../../data/pathConstants";

import style from "./ApartmentsSearch.module.scss";

const ApartmentsSearch = () => {
  return (
    <>
      <div className={style.phiol}>
        <div className={style.background}>
          <h2 className={style.title}>Поиск квартир на карте</h2>
          <p className={style.text}>
            Ищите квартиры на сутки в центре города, возле парка или в
            живописном районе
          </p>
          <Link to={MAP_PATH} className={style.link}>
            <MarkIcon fillColor="#FFD54F" />
            <span>Открыть карту</span>
          </Link>
        </div>
      </div>
      <InfoCards className={style.cards} />
    </>
  );
};

export default ApartmentsSearch;
