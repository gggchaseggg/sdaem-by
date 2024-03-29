import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

import style from "./MainPageTabs.module.scss";
import MainPageFilter from "../MainPageFilter/MainPageFilter";

type MainPageTabsProps = {
  className?: string;
};

const MainPageTabs: React.FC<MainPageTabsProps> = ({ className = "" }) => {
  return (
    <div className={className}>
      <Tabs className={style.tabs}>
        <TabList className={style.tabsList}>
          <Tab
            className={style.tabsItem}
            selectedClassName={style.tabsItemActive}
          >
            Квартиры на сутки
          </Tab>
          <Tab
            className={style.tabsItem}
            selectedClassName={style.tabsItemActive}
          >
            Коттеджи и усадьбы
          </Tab>
          <Tab
            className={style.tabsItem}
            selectedClassName={style.tabsItemActive}
          >
            Бани и сауны
          </Tab>
          <Tab
            className={style.tabsItem}
            selectedClassName={style.tabsItemActive}
          >
            Авто напрокат
          </Tab>
        </TabList>

        <TabPanel
          className={style.tabPanel}
          selectedClassName={style.tabPanelActive}
        >
          <MainPageFilter />
        </TabPanel>
        <TabPanel
          className={style.tabPanel}
          selectedClassName={style.tabPanelActive}
        >
          2
        </TabPanel>
        <TabPanel
          className={style.tabPanel}
          selectedClassName={style.tabPanelActive}
        >
          3
        </TabPanel>
        <TabPanel
          className={style.tabPanel}
          selectedClassName={style.tabPanelActive}
        >
          4
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default MainPageTabs;
