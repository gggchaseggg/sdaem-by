import React, { useState } from "react";
import { useDispatch } from "react-redux";

import Search from "../../components/NewsPage/Search/Search";
import NewsItem from "../../components/NewsPage/NewsItem/NewsItem";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { setActivePage } from "../../Redux/Reducers/activePageReducer";

import style from "./News.module.scss";
import NewsPaginator from "../../components/NewsPage/NewsPaginator/NewsPaginator";
import { useNews } from "../../api/dataHooks";

export default function News() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);

  const { data: newsList, status: newsStatus } = useNews(page);

  React.useEffect(() => {
    if (newsStatus === "success") setPageCount(Math.ceil(newsList.count / 9));
  }, [newsList]);

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
          <div className={style.backgroundRectangle} />
        </div>
        {newsStatus === "success" && newsList && (
          <>
            <ul className={style.feed}>
              {newsList.items.map((item) => (
                <li className={style.newsItem} key={item.key}>
                  <NewsItem novost={item} />
                </li>
              ))}
            </ul>
          </>
        )}
        {pageCount !== 1 ? (
          <NewsPaginator
            className={style.paginator}
            pageSwitcher={setPage}
            pageCount={pageCount}
          />
        ) : (
          <div className={style.paginator}></div>
        )}
      </div>
    </>
  );
}
