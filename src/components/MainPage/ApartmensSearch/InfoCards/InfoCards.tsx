import clsx from "clsx";
import React from "react";
import { Link } from "react-router-dom";

import MoveAdIcon from "../../../SvgIcons/MoveAdIcon";
import GreaterSign from "../../../SvgIcons/GreaterSign";
import TargetClientIcon from "../../../SvgIcons/TargetClientIcon";
import { MAIN_PATH } from "../../../../data/pathConstants";

import style from "./InfoCards.module.scss";

type InfoCardsProps = {
  className: string;
};

const InfoCards: React.FC<InfoCardsProps> = ({ className }) => {
  return (
    <div className={clsx(style.container, className)}>
      <div className={style.white}>
        <div className={style.header}>
          <div className={style.circle}>
            <TargetClientIcon />
          </div>
          <h3 className={style.lowerTitle}>
            Начните привлекать клиентов бесплатно!
          </h3>
        </div>
        <p className={style.text}>
          Пройдя простую регистрацию на сайте у Вас появится личный кабинет, в
          котором возможно <b>бесплатно создавать и публиковать</b> объявления
          на сайте.
        </p>
        <Link to={MAIN_PATH} className={style.link}>
          + Разместить объявление
        </Link>
      </div>
      <div className={style.white}>
        <div className={style.header}>
          <div className={style.circle}>
            <MoveAdIcon />{" "}
          </div>
          <h3 className={style.lowerTitle}>Поднимайте объявления</h3>
        </div>
        <p className={style.text}>
          Вы в любое время можете <b>поднимать</b> объявления{" "}
          <b>вверх первой страницы</b>
          каталога, они разместятся сразу после платных объявлений до тех пор,
          пока другой пользователь не повторит процедуру.
        </p>
        <Link to={MAIN_PATH} className={style.link}>
          <span>Узнать стоимость услуги</span>
          <GreaterSign className={style.sign} width={12} />
        </Link>
      </div>
      <div className={style.gold}>
        <h3 className={style.title}>Приоритет Gold</h3>
        <p className={clsx(style.goldText, style.text)}>
          Приоритетное размещение <b>Gold</b> позволяет{" "}
          <b>закрепить ваше объявление</b> в верхней части каталога!
        </p>
        <p className={clsx(style.goldText, style.text)}>
          Gold объявления <b>перемещаются каждые 5 мин</b> на 1 позицию, что
          делает размещение одинаковым для всех.
        </p>
        <Link to={MAIN_PATH} className={clsx(style.link, style.purpleLink)}>
          Еще о тарифе Gold
          <GreaterSign className={style.sign} width={12} />
        </Link>
      </div>
    </div>
  );
};

export default InfoCards;
