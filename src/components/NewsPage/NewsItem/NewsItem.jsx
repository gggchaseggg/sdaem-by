import React from "react";
import { Link } from "react-router-dom";
import DateLabel from "../../DateLabel/DateLabel";
import style from "./NewsItem.module.scss";

export default function NewsItem({ novost }) {
  return (
    <>
      <div className={style.container}>
        <div className={style.image}>
          <img src={novost.photoUrl} alt="фото" />
        </div>
        <div className={style.NewsItemBody}>
          <h3>{novost.title}</h3>
          <p>{novost.body}</p>
          <div className={style.ItemFooter}>
            <div className={style.strip}></div>
            <div className={style.inf}>
              <DateLabel date={novost.date} isGray={true} />
              <Link to={`/news/${novost.id}`} className={style.read}>
                Читать
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
