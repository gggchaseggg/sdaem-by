import React from "react";

import style from "./About.module.scss";
import clsx from "clsx";
import { Link } from "react-router-dom";
import GreaterSign from "../../SvgIcons/GreaterSign";

//TODO: Брать новости с мока

const About = ({ className }) => {
  const news = [
    {
      id: "1",
      text: "Линия Сталина: суровый отдых в усадьбах  на сутки",
      date: "14 Январь",
    },
    {
      id: "2",
      text: "Аренда квартиры посуточно",
      date: "14 Январь",
    },
    {
      id: "3",
      text: "Дворцово-парковый комплекс Чапских",
      date: "14 Январь",
    },
    {
      id: "4",
      text: "Дворцово-парковый комплекс Чапских",
      date: "14 Январь",
    },
    {
      id: "5",
      text: "Дворцово-парковый комплекс Чапских",
      date: "14 Январь",
    },
  ];

  return (
    <div className={clsx(style.container, className)}>
      <div className={style.about}>
        <h2 className={style.title}>Что такое sdaem.by</h2>
        <h3 className={style.subtitle}>Квартира на сутки в Минске</h3>
        <div className={style.imgContainer}>
          <img
            src="/img/MainPage/AboutImage.png"
            alt="комната"
            className={style.img}
          />
        </div>
        <h4 className={style.needApartments}>
          Нужна квартира на сутки в Минске?
        </h4>
        <p className={style.text}>
          На веб-сайте sdaem.by вас ждет масса выгодных предложений. Каталог
          насчитывает <b>более 500 квартир</b>. Благодаря удобной навигации вы
          быстро найдете подходящий вариант.
        </p>
        <p className={style.text}>
          В каталоге представлены комфортабельные однокомнатные квартиры на
          сутки и квартиры с большим количеством комнат в разных районах города,
          с различной степенью удобства от дешевых до VIP с джакузи.
        </p>
        <p className={style.text}>
          Чтобы снять квартиру на сутки в Минске, вам достаточно определиться с
          выбором и связаться с владельцем для уточнения условий аренды и
          заключить договор. Заметим, на сайте представлены исключительно
          квартиры на сутки без посредников, что избавляет посетителей от
          необходимости взаимодействовать с агентствами, тратя свое время и
          деньги. Также пользователи сайта могут совершенно бесплатно размещать
          объявления о готовности сдать квартиру на сутки.
        </p>
      </div>
      <div className={style.news}>
        <h3 className={clsx(style.subtitle, style.newsTitle)}>Новости</h3>
        <ul className={style.newsList}>
          {news.map((item) => (
            <li className={style.newsItem} key={item.id}>
              <Link to="/news" className={style.newsText}>
                {item.text}
              </Link>
              <span className={style.newsDate}>{item.date}</span>
            </li>
          ))}
        </ul>
        <Link to="/news" className={style.viewAll}>
          <span>Посмотреть все</span>
          <GreaterSign className={style.sign} />
        </Link>
      </div>
    </div>
  );
};

export default About;
