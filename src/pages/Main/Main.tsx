import React from "react";
import { useAppDispatch } from "../../Redux/hooks";
import { setActivePage } from "../../Redux/activePageSlice";
import MainPageHeader from "../../components/MainPage/MainPageHeader/MainPageHeader";
import Rent from "../../components/MainPage/Rent/Rent";

import style from "./Main.module.scss";
import ApartmentsSearch from "../../components/MainPage/ApartmensSearch/ApartmentsSearch";
import About from "../../components/MainPage/About/About";
import Carousel from "../../components/MainPage/Carousel/Carousel";

const Main: React.FC = () => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(setActivePage(0));
  }, []);

  return (
    <>
      <MainPageHeader className={style.header} />
      <Rent className={style.rent} />
      <div className={style.carouselContainer}>
        <Carousel className={style.carousel} />
      </div>
      <ApartmentsSearch />
      <About className={style.about} />
    </>
  );
};

export default Main;
