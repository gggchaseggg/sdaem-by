import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setActivePage } from "../../Redux/Reducers/activePageReducer";

import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import NewsItem from "../../components/NewsItem/NewsItem";
import DateLabel from "../../components/DateLabel/DateLabel";
import VkIcon from "../../components/SvgIcons/VkIcon";

import style from "./NewsArticle.module.scss";
import FacebookIcon from "../../components/SvgIcons/FacebookIcon";
import WhatsappIcon from "../../components/SvgIcons/WhatsappIcon";
import TelegramIcon from "../../components/SvgIcons/TelegramIcon";
import ViberIcon from "../../components/SvgIcons/ViberIcon";

export default function NewsArticle() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const newsList = useSelector((state) => state.newsList);
  const news = newsList[id - 1];

  const IconFillColor = "#664EF9";

  const readMoreNews = newsList.filter((item) => item.id != id && item.id < 5);

  React.useEffect(() => {
    dispatch(setActivePage(1));
  }, []);

  return (
    <>
      <div className={style.backgroundRectangle} />
      <div className={style.container}>
        <div className={style.header}>
          <Breadcrumbs
            page={[
              { title: "Новости", path: "/news" },
              { title: news.title, path: `/news/${news.id}` },
            ]}
          />
          <h1 className={style.title}>{news.title}</h1>
          <div className={style.info}>
            <div className={style.date}>
              <DateLabel date={news.date} isGray={false} />
            </div>
            <div className={style.share}>
              <span>Поделиться</span>
              <VkIcon fillColor={IconFillColor} className={style.shareItem} />
              <FacebookIcon
                fillColor={IconFillColor}
                className={style.shareItem}
              />
              <WhatsappIcon
                fillColor={IconFillColor}
                className={style.shareItem}
              />
              <TelegramIcon
                fillColor={IconFillColor}
                className={style.shareItem}
              />
              <ViberIcon
                fillColor={IconFillColor}
                className={style.shareItem}
              />
            </div>
          </div>
          <img src={news.photoUrlBig} alt="фото" className={style.photo} />
          <article className={style.article}>
            {news.article.map((item, idx) => (
              <p key={idx}>{item}</p>
            ))}
          </article>
        </div>
      </div>
      <div className={style.readMore}>
        <div className={style.readMoreContainer}>
          <h2 className={style.read}>Читайте также</h2>
          <ul className={style.feed}>
            {readMoreNews.map(
              (item, idx) =>
                idx < 3 && (
                  <li className={style.newsItem} key={item.key}>
                    <NewsItem novost={item} />
                  </li>
                )
            )}
          </ul>
        </div>
      </div>
    </>
  );
}
