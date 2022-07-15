import React from "react";
import { Link } from "react-router-dom";
import style from "./Breadcrumbs.module.scss";
import BreadcrumbsHomeIcon from "../SvgIcons/HomeIcon";

//В пропс массив объектов с названиями и путями
//page={[{ title: 'Новости', path: '/news' }]}
export default function Breadcrumbs(props) {
  return (
    <>
      <ul className={style.breadcrumbsList}>
        <BreadcrumbsHomeIcon fillColor={"#4E64F9"} />
        {props.page.map((item, idx) => (
          <li key={idx} className={style.breadcrumbsItem}>
            {idx !== props.page.length - 1 ? (
              <Link to={item.path}>{item.title}</Link>
            ) : (
              <>{item.title}</>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
