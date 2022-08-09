import React from "react";
import Select from "../../Select/Select";

import CheckboxListIcon from "../../SvgIcons/CheckboxListIcon";

import style from "./ApartmentsList.module.scss";
import CheckboxTilesIcon from "../../SvgIcons/CheckboxTilesIcon";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { MAP_PATH } from "../../../data/pathConstants";
import MarkIcon from "../../SvgIcons/MarkIcon";

const sortingList = [
  { id: "1", label: "По умолчанию", value: "default" },
  { id: "2", label: "От дорогих", value: "expensive" },
  { id: "3", label: "От дешевых", value: "cheap" },
  { id: "4", label: "По рейтингу", value: "rating" },
];

const ApartmentsList = () => {
  const [isTilesActive, setIsTilesActive] = React.useState(true);

  return (
    <div>
      <div className={style.header}>
        <Select
          options={sortingList}
          isSorting={true}
          className="catalogSortingSelect"
        />
        <div className={style.right}>
          <div className={style.checkbox}>
            <div className={style.label}>
              <span
                className={clsx(
                  style.checkboxList,
                  isTilesActive ? style.checkboxActive : ""
                )}
                onClick={() => setIsTilesActive((prev) => !prev)}
              >
                <CheckboxListIcon className={style.icon} /> Список
              </span>
              <span
                className={clsx(
                  style.checkboxTiles,
                  !isTilesActive ? style.checkboxActive : ""
                )}
                onClick={() => setIsTilesActive((prev) => !prev)}
              >
                <CheckboxTilesIcon className={style.icon} /> Плитки
              </span>
            </div>
          </div>
          <Link to={MAP_PATH} className={style.mapLink}>
            <MarkIcon fillColor="#664EF9" className={style.markIcon} /> Показать
            на карте
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ApartmentsList;
