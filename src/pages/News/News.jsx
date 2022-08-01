import React, { useState } from "react";
import { useDispatch } from "react-redux";

import Search from "../../components/Search/Search";
import NewsItem from "../../components/NewsItem/NewsItem";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { setActivePage } from "../../Redux/Reducers/activePageReducer";

import style from "./News.module.scss";
import NewsPaginator from "../../components/NewsPaginator/NewsPaginator";
import { getNews } from "../../api/getQueries";
import { useQuery } from "@tanstack/react-query";
import { logDOM } from "@testing-library/react";

export default function News() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [newsList, setNewsList] = useState(null);

  const { data, status } = useQuery(["news", page], () => getNews(page), {
    onSuccess: (data) => {
      console.log("News loading success");
      setPageCount(Math.ceil(data.count / 3));
      setNewsList(data.items);
    },
    onError: (err) => {
      console.log("Ошибка: ", err);
    },
  });

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
        {status === "success" && newsList && (
          <>
            <ul className={style.feed}>
              {newsList.map((item) => (
                <li className={style.newsItem} key={item.key}>
                  <NewsItem novost={item} />
                </li>
              ))}
            </ul>
          </>
        )}
        <NewsPaginator
          className={style.paginator}
          pageSwitcher={setPage}
          pageCount={pageCount}
        />
      </div>
    </>
  );
}
