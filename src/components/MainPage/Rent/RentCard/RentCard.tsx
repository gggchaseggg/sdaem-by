import React from "react";

import style from "./RentCard.module.scss";
import RentButton from "./RentButton/RentButton";
import RentCardArrow from "../../../SvgIcons/RentCardArrow";

type RentCardProps = {
  width: number;
  height: number;
  title: string;
  subtitle: string;
  img: string;
};

const RentCard: React.FC<RentCardProps> = ({
  width,
  height,
  title,
  subtitle,
  img,
}) => {
  return (
    <div
      className={style.container}
      style={{
        width: width,
        height: height,
        background: `linear-gradient(to top, rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${img})`,
      }}
    >
      <div className={style.text}>
        <h4 className={style.subtitle}>{subtitle}</h4>
        <h2 className={style.title}>{title}</h2>
      </div>
      <div className={style.hoverButtons}>
        <RentButton text="Минск" />
        <RentButton text="Витебск" />
        <RentButton text="Гродно" />
        <RentButton text="Гомель" />
        <RentButton text="Брест" />
        <RentButton text="Могилев" />
      </div>
      <RentCardArrow fillColor="#ffffff" className={style.arrow} />
    </div>
  );
};

export default RentCard;
