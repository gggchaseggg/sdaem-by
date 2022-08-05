import React from "react";
import style from "./Search.module.scss";
import LoupeIcon from "../../SvgIcons/LoupeIcon";

export default function Search() {
  return (
    <div className={style.container}>
      <input
        type="search"
        placeholder="Поиск по статьям"
        className={style.search}
      />
      <button className={style.button}>
        <LoupeIcon fillColor={"#FFFFFF"} />
      </button>
    </div>
  );
}
