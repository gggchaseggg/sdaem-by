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
import { useApartmentsByPage } from "../../../api/dataHooks";

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

type CarouselProps = {
  className?: string;
};

const Carousel: React.FC<CarouselProps> = ({ className }) => {
  const { data: apartmentsList, status: apartmentsStatus } =
    useApartmentsByPage("1");

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
            isCarousel
            className="mainPageCarouselMetroSelect"
            placeholder="Метро"
          />
          <Select
            options={district}
            isCarousel
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
          {apartmentsStatus === "success" &&
            apartmentsList.items.map((item) => (
              <SwiperSlide key={item.id}>
                <ApartmentItem
                  apartment={item}
                  className={style.carouselItem}
                />
              </SwiperSlide>
            ))}
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
