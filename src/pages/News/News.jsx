import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { setActivePage } from "../../Redux/redux-reducers/activePageReducer";

import NewsItem from "../../components/NewsItem/NewsItem";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Search from "../../components/Search/Search";

import style from "./News.module.scss";

export default function News() {
  const dispatch = useDispatch();
  const newsList = useSelector((state) => state.newsList);

  React.useEffect(() => {
    dispatch(setActivePage(1));
  }, []);

  return (
    <>
      <div className={style.container}>
        <div className={style.header}>
          <Breadcrumbs page={[{ title: "Новости", path: "/news" }]} />
          <h1 className={style.title}>Новости</h1>
          <div className={style.search}>
            <Search />
          </div>
          <div className={style.backgroundRectangle}></div>
        </div>
        <ul className={style.feed}>
          {newsList.map((item) => (
            <li className={style.newsItem} key={item.key}>
              <NewsItem novost={item} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
