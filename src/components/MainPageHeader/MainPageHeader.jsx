import React from "react";

import style from "./MainPageHeader.module.scss";
import MainPageTabs from "../MainPageTabs/MainPageTabs";

const MainPageHeader = () => {
  return (
    <div className={style.main}>
      <div className={style.background}>
        <h1 className={style.title}>
          Sdaem.by - у нас живут{" "}
          <span className={style.titleYellow}>ваши объявления</span>
        </h1>
        <MainPageTabs />
      </div>
    </div>
  );
};

export default MainPageHeader;
