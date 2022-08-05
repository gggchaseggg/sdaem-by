import React from "react";
import { useDispatch } from "react-redux";
import { setActivePage } from "../../Redux/Reducers/activePageReducer";
import MainPageHeader from "../../components/MainPage/MainPageHeader/MainPageHeader";
import Rent from "../../components/MainPage/Rent/Rent";

import style from "./Main.module.scss";
import ApartmentsSearch from "../../components/MainPage/ApartmensSearch/ApartmentsSearch";

export default function Main() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(setActivePage(0));
  }, []);

  return (
    <>
      <MainPageHeader className={style.header} />
      <Rent className={style.rent} />
      <ApartmentsSearch />
    </>
  );
}
