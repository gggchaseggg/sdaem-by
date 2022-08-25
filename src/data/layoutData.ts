import {
  PathConstants,
  CATALOG_PATH,
  CONTACTS_PATH,
  MAIN_PATH,
  MAP_PATH,
  NEWS_PATH,
  TARIFFS_PATH,
} from "./pathConstants";

type RouteMenuItem = {
  text: string;
  active: boolean;
  link: PathConstants;
  key: string;
};

type RentMenuItem = {
  text: string;
  keyHeader: string;
  keyFooter: string;
  link: PathConstants;
};

type ApartCityItem = {
  title: string;
  shortTitle: string;
  key: string;
  forShortKey: string;
  link: PathConstants;
};

export const ROUTE_MENU: RouteMenuItem[] = [
  { text: "Главная", active: false, link: MAIN_PATH, key: "menu-1" },
  { text: "Новости", active: false, link: NEWS_PATH, key: "menu-2" },
  {
    text: "Размещения и тарифы",
    active: false,
    link: TARIFFS_PATH,
    key: "menu-3",
  },
  {
    text: "Объявления на карте",
    active: false,
    link: MAP_PATH,
    key: "menu-4",
  },
  {
    text: "Контакты",
    active: false,
    link: CONTACTS_PATH,
    key: "menu-5",
  },
];

export const RENT_MENU: RentMenuItem[] = [
  {
    text: "Коттеджи и усадьбы",
    keyHeader: "rent-menu-header-1",
    keyFooter: "rent-menu-footer-1",
    link: CATALOG_PATH,
  },
  {
    text: "Бани и cауны",
    keyHeader: "rent-menu-header-2",
    keyFooter: "rent-menu-footer-2",
    link: CATALOG_PATH,
  },
  {
    text: "Авто напрокат",
    keyHeader: "rent-menu-header-3",
    keyFooter: "rent-menu-footer-3",
    link: CATALOG_PATH,
  },
];

export const APART_CITY: ApartCityItem[] = [
  {
    title: "Квартиры на сутки в Минске",
    shortTitle: "Квартиры в Минске",
    key: "city-1",
    forShortKey: "cityShort-1",
    link: CATALOG_PATH,
  },
  {
    title: "Квартиры на сутки в Гомеле",
    shortTitle: "Квартиры в Гомеле",
    key: "city-2",
    forShortKey: "cityShort-2",
    link: CATALOG_PATH,
  },
  {
    title: "Квартиры на сутки в Бресте",
    shortTitle: "Квартиры в Бресте",
    key: "city-3",
    forShortKey: "cityShort-3",
    link: CATALOG_PATH,
  },
  {
    title: "Квартиры на сутки в Витебске",
    shortTitle: "Квартиры в Витебске",
    key: "city-4",
    forShortKey: "cityShort-4",
    link: CATALOG_PATH,
  },
  {
    title: "Квартиры на сутки в Гродно",
    shortTitle: "Квартиры в Гродно",
    key: "city-5",
    forShortKey: "cityShort-5",
    link: CATALOG_PATH,
  },
  {
    title: "Квартиры на сутки в Могилеве",
    shortTitle: "Квартиры в Могилеве",
    key: "city-6",
    forShortKey: "cityShort-6",
    link: CATALOG_PATH,
  },
];
