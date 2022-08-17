import React from "react";

import style from "./MainPageHeader.module.scss";
import MainPageTabs from "./MainPageTabs/MainPageTabs";
import Rent from "../Rent/Rent";
import clsx from "clsx";

type MainPageHeaderProps = {
  className?: string;
};

const MainPageHeader: React.FC<MainPageHeaderProps> = ({ className }) => {
  return (
    <>
      <div className={clsx(style.main, className)}>
        <div className={style.background}>
          <h1 className={style.title}>
            Sdaem.by - у нас живут{" "}
            <span className={style.titleYellow}>ваши объявления</span>
          </h1>
          <MainPageTabs className={style.tabs} />
        </div>
      </div>
    </>
  );
};

export default MainPageHeader;
