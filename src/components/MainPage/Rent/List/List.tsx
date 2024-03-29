import React from "react";

import style from "./List.module.scss";
import { Link } from "react-router-dom";
import GreaterSign from "../../../SvgIcons/GreaterSign";
import { RentItemTypes } from "../types/types";

type ListProps = {
  title: string;
  options: RentItemTypes[];
  className?: string;
  morePath?: string;
};

const List: React.FC<ListProps> = ({
  title,
  options,
  className = "",
  morePath = "",
}) => {
  return (
    <div className={className}>
      <h2 className={style.title}>{title}</h2>
      <ul className={style.optionsList}>
        {options.map((item) => (
          <li className={style.optionsItem} key={item.id}>
            <Link to={item.link} className={style.link}>
              <span className={style.name}>{item.title}</span>
            </Link>
            {item.amount !== "" && (
              <span className={style.amount}>{item.amount}</span>
            )}
          </li>
        ))}
      </ul>
      {morePath && (
        <Link to={morePath} className={style.moreLink}>
          <span>Еще</span>
          <GreaterSign width={7} fillColor="#FEB700" className={style.icon} />
        </Link>
      )}
    </div>
  );
};

export default List;
