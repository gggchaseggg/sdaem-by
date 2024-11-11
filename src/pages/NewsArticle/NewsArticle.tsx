import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch } from "../../Redux/hooks";

import VkIcon from "../../components/SvgIcons/VkIcon";
import ViberIcon from "../../components/SvgIcons/ViberIcon";
import DateLabel from "../../components/DateLabel/DateLabel";
import FacebookIcon from "../../components/SvgIcons/FacebookIcon";
import WhatsappIcon from "../../components/SvgIcons/WhatsappIcon";
import TelegramIcon from "../../components/SvgIcons/TelegramIcon";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import NewsItem from "../../components/NewsPage/NewsItem/NewsItem";
import { useNewsById, useSimilarNewsById } from "../../api/dataHooks";
import { NEWS_PATH } from "../../data/pathConstants";
import { setActivePage } from "../../Redux/activePageSlice";

import style from "./NewsArticle.module.scss";

const NewsArticle: React.FC = () => {
  const IconFillColor = "#664EF9";
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const news = useNewsById(id as string);
  const similarNews = useSimilarNewsById(id as string);

  React.useEffect(() => {
    dispatch(setActivePage(1));
  }, []);

  return (
    <>
      <div className={style.backgroundRectangle} />
      {news ? (
        <div className={style.container}>
          <Breadcrumbs
            page={[
              { title: "Новости", path: NEWS_PATH },
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
      ) : (
        navigate(NEWS_PATH)
      )}

      <div className={style.readMore}>
        <div className={style.readMoreContainer}>
          <h2 className={style.read}>Читайте также</h2>
          {similarNews && (
            <ul className={style.feed}>
              {similarNews.map((item) => (
                <li className={style.newsItem} key={item.key}>
                  <NewsItem novost={item} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default NewsArticle;
