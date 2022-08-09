import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import PlaceAd from "./PlaceAd/PlaceAd";
import MarkIcon from "../SvgIcons/MarkIcon";
import UserLabel from "./UserLabel/UserLabel";
import FavoritesHeart from "../SvgIcons/FavoritesHeartIcon";
import ApartmentsModal from "./ApartmentsModal/ApartmentsModal";
import { MAIN_PATH } from "../../data/pathConstants";
import { routeMenu, rentMenu } from "../../data/layoutData";

import style from "./Header.module.scss";

export default function Header() {
  const [headerMenu, setHeaderMenu] = React.useState(routeMenu);
  const activePage = useSelector((state) => state.activePage.page);

  React.useEffect(() => {
    setHeaderMenu(
      headerMenu.map((item, idx) => {
        item.active = idx === activePage;
        return item;
      })
    );
  }, [activePage]);

  return (
    <>
      <header>
        <div className={style.upper}>
          <div className={style.container}>
            <nav>
              <ul>
                {headerMenu.map((item, idx) => (
                  <li
                    key={item.key}
                    className={item.active ? style.active : ""}
                  >
                    {idx === 3 && (
                      <MarkIcon
                        width={8}
                        height={10}
                        fillColor={"#1E2123"}
                        className={style.mark}
                      />
                    )}
                    <Link to={item.link}>{item.text}</Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className={style.profileNav}>
              <div className={style.favorites}>
                <Link to="/favorites">
                  <span>Закладки</span>
                  <FavoritesHeart
                    width={17}
                    height={15}
                    fillColor="transparent"
                  />
                </Link>
              </div>
              <UserLabel />
            </div>
          </div>
        </div>
        <div className={style.lower}>
          <div className={style.container}>
            <Link to={MAIN_PATH}>
              <img src="/img/logo.png" alt="Лого" className={style.logo} />
            </Link>
            <div className={style.type}>
              <ul className={style.lowerMenu}>
                <li>
                  <ApartmentsModal />
                </li>
                {rentMenu.map((item) => (
                  <li key={item.key} className={style.rentItem}>
                    <Link to={item.link}>{item.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <PlaceAd />
          </div>
        </div>
      </header>
    </>
  );
}
