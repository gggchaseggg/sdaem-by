import React, { useState } from "react";
import { useAppDispatch } from "../../Redux/hooks";

import { useNewsByPage } from "../../api/dataHooks";
import Search from "../../components/NewsPage/Search/Search";
import NewsItem from "../../components/NewsPage/NewsItem/NewsItem";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Paginator from "../../components/Paginator/Paginator";
import { NEWS_COUNT_OF_PAGE } from "../../config";
import { NEWS_PATH } from "../../data/pathConstants";
import { setActivePage } from "../../Redux/activePageSlice";

import style from "./News.module.scss";

const News: React.FC = () => {
  const dispatch = useAppDispatch();
  const [page, setPage] = useState("1");
  const [pageCount, setPageCount] = useState(1);

  const { data: newsList, status: newsStatus } = useNewsByPage(page);

  React.useEffect(() => {
    if (newsStatus === "success")
      setPageCount(Math.ceil(newsList.count / NEWS_COUNT_OF_PAGE));
  }, [newsList]);

  React.useEffect(() => {
    dispatch(setActivePage(1));
  }, []);

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.header}>
          <Breadcrumbs page={[{ title: "Новости", path: NEWS_PATH }]} />
          <h1 className={style.title}>Новости</h1>
          <div className={style.search}>
            <Search />
          </div>
        </div>
        <div className={style.backgroundRectangle} />
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
          <Paginator
            className={style.paginator}
            pageSwitcher={setPage}
            pageCount={pageCount}
          />
        ) : (
          <div className={style.paginator}></div>
        )}
      </div>
    </div>
  );
};

export default News;
