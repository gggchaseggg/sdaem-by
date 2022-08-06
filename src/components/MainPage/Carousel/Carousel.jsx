import React from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss";
import "swiper/scss/navigation";
import style from "./Carousel.module.scss";
import clsx from "clsx";
import GreaterSign from "../../SvgIcons/GreaterSign";
import { Link } from "react-router-dom";

const carouselItems = [
  {
    title: "4-комн. апартаменты на Грушевке ",
    price: "65",
    priceFor: "сутки",
    currency: "BYN",
    address: "Минск, б-р Мулявина, д. 10",
    tenants: "4 (2+2)",
    rooms: "4",
    metro: "Грушевка",
    district: "Шабаны",
    description:
      "Большая четырехкомнатная студия! Большая джкакузи на двоих, на теливизоре есть приложение Megogo, YouTube, Smart TV, сможете выбрать фильм по вкусу!) Цена зависит от количества проживающих, уточняйте, пожалуйста, по телефону! В пяти минутах ходьбы Минск-Арена, ...",
    contactsId: "1",
    area: "179",
    status: "Gold",
    img: "",
  },
];

const Carousel = ({ className }) => {
  return (
    <div className={clsx(style.container, className)}>
      <h2 className={style.title}>Квартиры на сутки</h2>
      <h3 className={style.subtitle}>Аренда квартир в Минске</h3>
      <span>select 1</span>
      <span>select 2</span>
      <div className={style.backgroundRectangle} />
      <Swiper
        modules={[Navigation]}
        navigation
        slidesPerView={3}
        spaceBetween={30}
        speed={800}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
        <SwiperSlide>Slide 10</SwiperSlide>
      </Swiper>
      <div className={style.footer}>
        <h4 className={style.offersAmount}>
          341 <span className={style.plus}>+</span>
          <span className={style.offresAmountFooter}>
            Предложений по Минску
          </span>
        </h4>
        <Link to="/catalog" className={style.button}>
          <span>Посмотреть все</span> <GreaterSign className={style.sign} />
        </Link>
      </div>
    </div>
  );
};

export default Carousel;
