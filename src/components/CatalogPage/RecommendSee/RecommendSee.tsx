import React from "react";

import style from "./RecommendSee.module.scss";
import { Link } from "react-router-dom";
import { CATALOG_PATH } from "../../../data/pathConstants";

type ButtonsTypes = {
  id: string;
  label: string;
  key: string;
  params: string;
};

const buttons: ButtonsTypes[] = [
  {
    id: "1",
    label: "Недорогие",
    key: "buttonsKey1",
    params: "?other=Недорогие",
  },
  { id: "2", label: "1-комнатные", key: "buttonsKey2", params: "?rooms=1" },
  { id: "3", label: "2-комнатные", key: "buttonsKey3", params: "?rooms=2" },
  { id: "4", label: "3-комнатные", key: "buttonsKey4", params: "?rooms=3" },
  { id: "5", label: "4-комнатные", key: "buttonsKey5", params: "?rooms=4" },
  { id: "6", label: "5-комнатные", key: "buttonsKey6", params: "?rooms=5" },
  {
    id: "7",
    label: "Заводской р.",
    key: "buttonsKey7",
    params: "?district=Заводской",
  },
  {
    id: "8",
    label: "Ленинский р.",
    key: "buttonsKey8",
    params: "?district=Ленинский",
  },
  {
    id: "9",
    label: "Московский р.",
    key: "buttonsKey9",
    params: "?district=Московский",
  },
  {
    id: "10",
    label: "Октябрьский р.",
    key: "buttonsKey10",
    params: "?district=Октябрьский",
  },
  {
    id: "11",
    label: "Партизанский р.",
    key: "buttonsKey11",
    params: "?district=Партизанский",
  },
  {
    id: "12",
    label: "Первомайский р.",
    key: "buttonsKey12",
    params: "?district=Первомайский",
  },
  {
    id: "13",
    label: "Советский р.",
    key: "buttonsKey13",
    params: "?district=Советский",
  },
  {
    id: "14",
    label: "Фрунзенский р.",
    key: "buttonsKey14",
    params: "?district=Фрунзенский",
  },
  {
    id: "15",
    label: "Центральный р.",
    key: "buttonsKey15",
    params: "?district=Центральный",
  },
];

type RecommendSeeProps = {
  className?: string;
};

const RecommendSee: React.FC<RecommendSeeProps> = ({ className = "" }) => {
  return (
    <div className={className}>
      <h3 className={style.title}>Рекомендуем посмотреть</h3>
      <ul className={style.buttonsList}>
        {buttons.map((item) => (
          <li className={style.buttonsItem} key={item.key}>
            <Link to={CATALOG_PATH + item.params} className={style.link}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecommendSee;
