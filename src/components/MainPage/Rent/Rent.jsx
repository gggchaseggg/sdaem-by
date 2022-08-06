import React from "react";
import RentCard from "./RentCard/RentCard";
import { Link } from "react-router-dom";

import style from "./Rent.module.scss";
import List from "./List/List";

const apartments = [
  { id: "1", title: "Квартиры в Минске", amount: "3567", link: "/catalog" },
  { id: "2", title: "Квартиры в Гомеле", amount: "2032", link: "/catalog" },
  { id: "3", title: "Квартиры в Гродно", amount: "2302", link: "/catalog" },
  { id: "4", title: "Квартиры в Могилеве", amount: "110", link: "/catalog" },
  { id: "5", title: "Квартиры в Бресте", amount: "110", link: "/catalog" },
  { id: "6", title: "Квартиры в Витебске", amount: "110", link: "/catalog" },
];

const cottage = [
  { id: "1", title: "Агроусадьбы", amount: "110", link: "/catalog" },
  { id: "2", title: "Коттеджи", amount: "110", link: "/catalog" },
  { id: "3", title: "Загородный комплекс", amount: "110", link: "/catalog" },
  { id: "4", title: "Базы отдыха", amount: "110", link: "/catalog" },
];

const popularDestinations = [
  { id: "1", title: "Коттеджи и усадьбы на о. Брасласких ", link: "/catalog" },
  { id: "2", title: "Коттеджи и усадьбы (жилье) на Нарочи", link: "/catalog" },
  {
    id: "3",
    title: "Коттеджи и усадьбы (жилье) у воды, на берегу, на озере",
    link: "/catalog",
  },
];

const Rent = ({ className }) => {
  return (
    <div className={className}>
      <div className={style.card}>
        <Link to="/catalog" className={style.catalogLink}>
          <RentCard
            width={516}
            height={270}
            img="/img/MainPage/komnata.png"
            title="Квартиры на сутки"
            subtitle="Снять квартиру"
          />
        </Link>
        <Link to="/catalog" className={style.catalogLink}>
          <RentCard
            width={407}
            height={270}
            img="/img/MainPage/kottedji.png"
            title="Коттеджи и усадьбы"
            subtitle="Снять коттедж на праздник"
          />
        </Link>
        <Link to="/catalog" className={style.catalogLink}>
          <RentCard
            width={407}
            height={270}
            img="/img/MainPage/banya.png"
            title="Бани и сауны"
            subtitle="Попариться в бане с друзьями"
          />
        </Link>
        <Link to="/catalog" className={style.catalogLink}>
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
          morePath="/catalog"
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
