import clsx from "clsx";
import React from "react";
import { Navigation } from "swiper";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import Select from "../../Select/Select";
import Separator from "../../Separator/Separator";
import GreaterSign from "../../SvgIcons/GreaterSign";
import ApartmentItem from "../../ApartmentItem/ApartmentItem";
import { CATALOG_PATH } from "../../../data/pathConstants";

import "swiper/scss";
import "swiper/scss/navigation";
import style from "./Carousel.module.scss";

const carouselItems = [
  {
    id: "1",
    title: "4-комн. апартаменты на Грушевке ",
    price: { price: "85.00", interval: "сутки", currency: "BYN" },
    info: {
      address: "Минск, б-р Мулявина, д. 10",
      tenants: "4 (2+2)",
      rooms: "4",
      metro: "Грушевка",
      district: "Шабаны",
      area: "179",
    },
    description:
      "Большая четырехкомнатная студия! Большая джкакузи на двоих, на теливизоре есть приложение Megogo, YouTube, Smart TV, сможете выбрать фильм по вкусу!) Цена зависит от количества проживающих, уточняйте, пожалуйста, по телефону! В пяти минутах ходьбы Минск-Арена, ...",
    ownerId: "1",

    status: "Gold",
    img: "/img/apartmentsPhotoVertical.png",
  },
  {
    id: "2",
    title: "8-комн. апартаменты на Грушевке ",
    price: { price: "65.00", interval: "сутки", currency: "BYN" },
    info: {
      address: "Минск, б-р Мулявина, д. 10",
      tenants: "8 (2+2)",
      rooms: "8",
      metro: "Грушевка",
      district: "Шабаны",
      area: "179",
    },
    description:
      "Большая четырехкомнатная студия! Большая джкакузи на двоих, на теливизоре есть приложение Megogo, YouTube, Smart TV, сможете выбрать фильм по вкусу!) Цена зависит от количества проживающих, уточняйте, пожалуйста, по телефону! В пяти минутах ходьбы Минск-Арена, ...",
    description2:
      "Какое-то описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание ...",
    ownerId: "2",

    status: "Gold",
    img: "/img/apartmentsPhotoGorizontal.png",
  },
];

const metro = [
  { id: "1", value: "Метро 1", label: "Метро 1" },
  { id: "2", value: "Метро 2", label: "Метро 2" },
  { id: "3", value: "Метро 3", label: "Метро 3" },
  { id: "4", value: "Метро 4", label: "Метро 4" },
  { id: "5", value: "Метро 5", label: "Метро 5" },
  { id: "6", value: "Метро 6", label: "Метро 6" },
];

const district = [
  { id: "1", value: "Район 1", label: "Район 1" },
  { id: "2", value: "Район 2", label: "Район 2" },
  { id: "3", value: "Район 3", label: "Район 3" },
  { id: "4", value: "Район 4", label: "Район 4" },
  { id: "5", value: "Район 5", label: "Район 5" },
  { id: "6", value: "Район 6", label: "Район 6" },
];

const Carousel = ({ className }) => {
  return (
    <div className={clsx(style.container, className)}>
      <div className={style.header}>
        <div>
          <h2 className={style.title}>Квартиры на сутки</h2>
          <h3 className={style.subtitle}>Аренда квартир в Минске</h3>
        </div>
        <div className={style.selects}>
          <Select
            options={metro}
            isMetro={true}
            className="mainPageCarouselMetroSelect"
            placeholder="Метро"
          />
          <Select
            options={district}
            isMetro={true}
            className="mainPageCarouselDistrictSelect"
            placeholder="Район"
          />
        </div>
      </div>
      <div className={style.backgroundRectangle} />
      <div className={style.carousel}>
        <Swiper
          modules={[Navigation]}
          navigation
          slidesPerView={3}
          spaceBetween={30}
          speed={800}
        >
          <SwiperSlide>
            <ApartmentItem apartment={carouselItems[0]} />
          </SwiperSlide>
          <SwiperSlide>
            <ApartmentItem apartment={carouselItems[1]} />
          </SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
          <SwiperSlide>Slide 10</SwiperSlide>
        </Swiper>
      </div>
      <div className={style.footer}>
        <h4 className={style.offersAmount}>
          341 <span className={style.plus}>+</span>
          <span className={style.offresAmountFooter}>
            Предложений по Минску
          </span>
        </h4>
        <Separator
          height={70}
          width={2}
          color="linear-gradient(90deg, #94AFFF 0%, #4E64F9 94.5%)"
          className={style.separator}
        />
        <Link to={CATALOG_PATH} className={style.button}>
          <span>Посмотреть все</span> <GreaterSign className={style.sign} />
        </Link>
      </div>
    </div>
  );
};

export default Carousel;
