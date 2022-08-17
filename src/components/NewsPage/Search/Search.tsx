import React from "react";
import style from "./Search.module.scss";
import LoupeIcon from "../../SvgIcons/LoupeIcon";

const Search: React.FC = () => {
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
};

export default Search;
