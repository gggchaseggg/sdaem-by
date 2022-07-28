import React from "react";
import { Link } from "react-router-dom";
import style from "./Header.module.scss";
import ApartmensModal from "./ApartmensModal/ApartmensModal";
import PlaceAd from "./PlaceAd/PlaceAd";
import { routeMenu, rentMenu } from "../../data/layoutData";
import { useSelector } from "react-redux";
import FavoritesHeart from "../SvgIcons/FavoritesHeartIcon";
import MarkIcon from "../SvgIcons/MarkIcon";
import UserLabel from "./UserLabel/UserLabel";

export default function Header() {
  const [headerMenu, setHeaderMenu] = React.useState(routeMenu);
  const activePage = useSelector((state) => state.activePage.page);

  React.useEffect(() => {
    setHeaderMenu(
      headerMenu.map((item, idx) => {
        idx === activePage ? (item.active = true) : (item.active = false);
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
                    {idx === 3 ? (
                      <MarkIcon
                        width={8}
                        height={10}
                        fillColor={"#1E2123"}
                        className={style.mark}
                      />
                    ) : (
                      ""
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
                  <FavoritesHeart width={16} header={17} />
                </Link>
              </div>
              <UserLabel />
            </div>
          </div>
        </div>
        <div className={style.lower}>
          <div className={style.container}>
            <Link to="/">
              <img src="/img/logo.png" alt="Лого" className={style.logo} />
            </Link>
            <div className={style.type}>
              <ul className={style.lowerMenu}>
                <li>
                  <ApartmensModal />
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
