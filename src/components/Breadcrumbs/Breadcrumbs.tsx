import React from "react";
import { Link } from "react-router-dom";

import BreadcrumbsHomeIcon from "../SvgIcons/HomeIcon";
import { PathConstants } from "../../data/pathConstants";

import style from "./Breadcrumbs.module.scss";

type PageProp = {
  title: string;
  path: PathConstants;
};

type BreadcrumbsProps = {
  page: PageProp[];
};

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ page }) => {
  return (
    <>
      <ul className={style.breadcrumbsList}>
        <BreadcrumbsHomeIcon fillColor={"#4E64F9"} />
        {page.map((item, idx) => (
          <li key={idx} className={style.breadcrumbsItem}>
            {idx !== page.length - 1 ? (
              <Link to={item.path}>{item.title}</Link>
            ) : (
              <>{item.title}</>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Breadcrumbs;
