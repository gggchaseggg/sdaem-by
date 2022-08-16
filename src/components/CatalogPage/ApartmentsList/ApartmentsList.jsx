import React, { useState } from "react";
import Select from "../../Select/Select";

import CheckboxListIcon from "../../SvgIcons/CheckboxListIcon";

import style from "./ApartmentsList.module.scss";
import CheckboxTilesIcon from "../../SvgIcons/CheckboxTilesIcon";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { MAP_PATH } from "../../../data/pathConstants";
import MarkIcon from "../../SvgIcons/MarkIcon";
import { useApartmentsByPage } from "../../../api/dataHooks";
import { APARTMENTS_COUNT_OF_PAGE } from "../../../config";
import Paginator from "../../Paginator/Paginator";
import ApartmentItem from "../../ApartmentItem/ApartmentItem";
import VkIcon from "../../SvgIcons/VkIcon";
import FacebookIcon from "../../SvgIcons/FacebookIcon";
import ViberIcon from "../../SvgIcons/WhatsappIcon";
import WhatsappIcon from "../../SvgIcons/ViberIcon";
import TelegramIcon from "../../SvgIcons/TelegramIcon";

const sortingList = [
  { id: "1", label: "По умолчанию", value: "default" },
  { id: "2", label: "От дорогих", value: "expensive" },
  { id: "3", label: "От дешевых", value: "cheap" },
  { id: "4", label: "По рейтингу", value: "rating" },
];

const ApartmentsList = ({ className }) => {
  const [isTilesActive, setIsTilesActive] = React.useState(true);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);

  const { data: apartmentsList, status: apartmentsStatus } =
    useApartmentsByPage(page);

  React.useEffect(() => {
    if (apartmentsStatus === "success")
      setPageCount(Math.ceil(apartmentsList.count / APARTMENTS_COUNT_OF_PAGE));
  }, [apartmentsList, apartmentsStatus]);

  return (
    <div className={clsx(style.container, className)}>
      <div className={style.header}>
        <Select
          options={sortingList}
          isSorting
          className="catalogSortingSelect"
        />
        <div className={style.right}>
          <div className={style.checkbox}>
            <div className={style.label}>
              <span
                className={clsx(
                  style.checkboxList,
                  !isTilesActive ? style.checkboxActive : ""
                )}
                onClick={() => setIsTilesActive((prev) => !prev)}
              >
                <CheckboxListIcon className={style.icon} /> Список
              </span>
              <span
                className={clsx(
                  style.checkboxTiles,
                  isTilesActive ? style.checkboxActive : ""
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
      <div className={style.feed}>
        <h2 className={style.apartmentsCount}>
          {apartmentsStatus === "success"
            ? `Найдено ${apartmentsList.count} результата`
            : "Ничего не найдено"}
        </h2>

        {apartmentsStatus === "success" && (
          <>
            <ul className={style.apartmentsList}>
              {apartmentsList.items.map((item) => (
                <li
                  className={
                    isTilesActive
                      ? style.apartmentsItem
                      : style.apartmentsItemListView
                  }
                  key={item.id}
                >
                  <ApartmentItem
                    apartment={item}
                    className={style.apartmentCard}
                    isTiles={isTilesActive}
                  />
                </li>
              ))}
            </ul>
          </>
        )}
        <div className={style.footer}>
          {pageCount !== 1 ? (
            <Paginator
              className={style.paginator}
              pageSwitcher={setPage}
              pageCount={pageCount}
            />
          ) : (
            <div className={style.paginator}></div>
          )}
          <div className={style.share}>
            <span>Поделиться</span>
            <VkIcon className={style.shareIcon} />
            <FacebookIcon className={style.shareIcon} />
            <ViberIcon className={style.shareIcon} />
            <TelegramIcon className={style.shareIcon} />
            <WhatsappIcon className={style.shareIcon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentsList;
