import React from "react";
import { useDispatch } from "react-redux";

import { setActivePage } from "../../Redux/Reducers/activePageReducer";

import style from "./Catalog.module.scss";
import { CATALOG_PATH, NEWS_PATH } from "../../data/pathConstants";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import RecommendSee from "../../components/CatalogPage/RecommendSee/RecommendSee";
import CatalogFilter from "../../components/CatalogPage/CatalogFilter/CatalogFilter";
import ApartmentsList from "../../components/CatalogPage/ApartmentsList/ApartmentsList";

const Catalog = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(setActivePage(-1));
  }, []);

  return (
    <>
      <div className={style.headerBackground}>
        <div className={style.header}>
          <Breadcrumbs page={[{ title: "Квартиры", path: { CATALOG_PATH } }]} />
          <h1 className={style.title}>Аренда квартир на сутки в Минске</h1>
          <RecommendSee className={style.recommendSee} />
        </div>
      </div>
      <CatalogFilter className={style.filter} />
      <div className={style.container}>
        <ApartmentsList />
      </div>
    </>
  );
};

export default Catalog;
