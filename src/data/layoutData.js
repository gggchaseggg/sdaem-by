import {
  CATALOG_PATH,
  CONTACTS_PATH,
  MAIN_PATH,
  MAP_PATH,
  NEWS_PATH,
  TARIFFS_PATH,
} from "./pathConstants";

export const routeMenu = [
  { text: "Главная", active: false, link: { MAIN_PATH }, key: "menu-1" },
  { text: "Новости", active: false, link: { NEWS_PATH }, key: "menu-2" },
  {
    text: "Размещения и тарифы",
    active: false,
    link: { TARIFFS_PATH },
    key: "menu-3",
  },
  {
    text: "Объявления на карте",
    active: false,
    link: { MAP_PATH },
    key: "menu-4",
  },
  {
    text: "Контакты",
    active: false,
    link: { CONTACTS_PATH },
    key: "menu-5",
  },
];

export const rentMenu = [
  { text: "Коттеджи и усадьбы", key: "rent-menu-1", link: { MAIN_PATH } },
  { text: "Бани и cауны", key: "rent-menu-2", link: { MAIN_PATH } },
  { text: "Авто напрокат", key: "rent-menu-3", link: { MAIN_PATH } },
];

export const apartCity = [
  {
    title: "Квартиры на сутки в Минске",
    key: "city-1",
    link: { CATALOG_PATH },
  },
  {
    title: "Квартиры на сутки в Гомеле",
    key: "city-2",
    link: { CATALOG_PATH },
  },
  {
    title: "Квартиры на сутки в Бресте",
    key: "city-3",
    link: { CATALOG_PATH },
  },
  {
    title: "Квартиры на сутки в Витебске",
    key: "city-4",
    link: { CATALOG_PATH },
  },
  {
    title: "Квартиры на сутки в Гродно",
    key: "city-5",
    link: { CATALOG_PATH },
  },
  {
    title: "Квартиры на сутки в Могилеве",
    key: "city-6",
    link: { CATALOG_PATH },
  },
];

export const apartCityShorty = [
  { title: "Квартиры в Минске", key: "cityShorty-1", link: "" },
  { title: "Квартиры в Гомеле", key: "cityShorty-2", link: "" },
  { title: "Квартиры в Бресте", key: "cityShorty-3", link: "" },
  { title: "Квартиры в Витебске", key: "cityShorty-4", link: "" },
  { title: "Квартиры в Гродно", key: "cityShorty-5", link: "" },
  { title: "Квартиры в Могилеве", key: "cityShorty-6", link: "" },
];
