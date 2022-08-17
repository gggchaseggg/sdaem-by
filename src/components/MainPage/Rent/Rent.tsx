import React from "react";
import { Link } from "react-router-dom";

import List from "./List/List";
import RentCard from "./RentCard/RentCard";
import { CATALOG_PATH } from "../../../data/pathConstants";

import style from "./Rent.module.scss";
import { RentItemTypes } from "./types/types";

const apartments: RentItemTypes[] = [
  {
    id: "1",
    title: "Квартиры в Минске",
    amount: "3567",
    link: CATALOG_PATH,
  },
  {
    id: "2",
    title: "Квартиры в Гомеле",
    amount: "2032",
    link: CATALOG_PATH,
  },
  {
    id: "3",
    title: "Квартиры в Гродно",
    amount: "2302",
    link: CATALOG_PATH,
  },
  {
    id: "4",
    title: "Квартиры в Могилеве",
    amount: "110",
    link: CATALOG_PATH,
  },
  {
    id: "5",
    title: "Квартиры в Бресте",
    amount: "110",
    link: CATALOG_PATH,
  },
  {
    id: "6",
    title: "Квартиры в Витебске",
    amount: "110",
    link: CATALOG_PATH,
  },
];

const cottage: RentItemTypes[] = [
  { id: "1", title: "Агроусадьбы", amount: "110", link: CATALOG_PATH },
  { id: "2", title: "Коттеджи", amount: "110", link: CATALOG_PATH },
  {
    id: "3",
    title: "Загородный комплекс",
    amount: "110",
    link: CATALOG_PATH,
  },
  { id: "4", title: "Базы отдыха", amount: "110", link: CATALOG_PATH },
];

const popularDestinations: RentItemTypes[] = [
  {
    id: "1",
    title: "Коттеджи и усадьбы на о. Брасласких ",
    amount: "",
    link: CATALOG_PATH,
  },
  {
    id: "2",
    title: "Коттеджи и усадьбы (жилье) на Нарочи",
    amount: "",
    link: CATALOG_PATH,
  },
  {
    id: "3",
    title: "Коттеджи и усадьбы (жилье) у воды, на берегу, на озере",
    amount: "",
    link: CATALOG_PATH,
  },
];

type RentProps = {
  className?: string;
};

const Rent: React.FC<RentProps> = ({ className = "" }) => {
  return (
    <div className={className}>
      <div className={style.card}>
        <Link to={CATALOG_PATH} className={style.catalogLink}>
          <RentCard
            width={516}
            height={270}
            img="/img/MainPage/komnata.png"
            title="Квартиры на сутки"
            subtitle="Снять квартиру"
          />
        </Link>
        <Link to={CATALOG_PATH} className={style.catalogLink}>
          <RentCard
            width={407}
            height={270}
            img="/img/MainPage/kottedji.png"
            title="Коттеджи и усадьбы"
            subtitle="Снять коттедж на праздник"
          />
        </Link>
        <Link to={CATALOG_PATH} className={style.catalogLink}>
          <RentCard
            width={407}
            height={270}
            img="/img/MainPage/banya.png"
            title="Бани и сауны"
            subtitle="Попариться в бане с друзьями"
          />
        </Link>
        <Link to={CATALOG_PATH} className={style.catalogLink}>
          <RentCard
            width={516}
            height={270}
            img="/img/MainPage/auto.png"
            title="Авто напрокат"
            subtitle="Если срочно нужна машина"
          />
        </Link>
      </div>
      <div className={style.lists}>
        <List title="Квартиры" options={apartments} className={style.list} />
        <List
          title="Коттеджи и усадьбы"
          options={cottage}
          className={style.list}
          morePath={CATALOG_PATH}
        />
        <List
          title="Популярные направления"
          options={popularDestinations}
          className={style.list}
        />
      </div>
    </div>
  );
};

export default Rent;
