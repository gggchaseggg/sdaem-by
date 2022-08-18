import React from "react";
import { Link } from "react-router-dom";
import style from "./Footer.module.scss";
import { ROUTE_MENU, RENT_MENU, APART_CITY } from "../../data/layoutData";
import InstagramIcon from "../SvgIcons/InstagramIcon";
import VkIcon from "../SvgIcons/VkIcon";
import FacebookInnerIcon from "../SvgIcons/FacebookInnerIcon";
import { useContacts } from "../../api/dataHooks";

//TODO: Брать контактные данные с мока(добавить их на мок и useContacts)

const Footer: React.FC = () => {
  const contacts = useContacts();

  return (
    <>
      <footer>
        <div className={style.container}>
          <div className={style.info}>
            <img src="/img/logo.png" alt="Лого" />
            <p className={style.sdaem}>СДАЁМ БАЙ</p>
            <div className={style.IP}>
              <p>{contacts?.IP.name}</p>
              <p>{contacts?.IP.UNP}</p>
              <p>{contacts?.IP.date}</p>
              <p>{contacts?.address}</p>
              <p>
                {contacts?.phone}, {contacts?.email}
              </p>
              <p>Режим работы: {contacts?.workTime}</p>
            </div>
          </div>
          <div className={style.routes}>
            <div className={style.pages}>
              <div className={style.rent}>
                <ul>
                  {RENT_MENU.map((item) => (
                    <li key={item.keyFooter} className={style.rentItem}>
                      <Link to={item.link}>{item.text}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={style.apart}>
                <p>Квартиры</p>
                <ul>
                  {APART_CITY.map((item) => (
                    <li key={item.forShortKey}>
                      <Link to={item.link}>{item.shortTitle}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={style.links}>
                <ul>
                  {ROUTE_MENU.map(
                    (item, idx) =>
                      idx !== 0 && (
                        <li key={item.key}>
                          <Link to={item.link}>{item.text}</Link>
                        </li>
                      )
                  )}
                </ul>
              </div>
            </div>
            <div className={style.socAndPayments}>
              <div className={style.socials}>
                <span>Мы в соцсетях</span>
                <InstagramIcon width={25} height={25} className={style.Inst} />
                <VkIcon width={24} height={15} className={style.VK} />
                <FacebookInnerIcon width={21} height={21} />
              </div>
              <div className={style.payments}>
                <img src="/img/Payments/visa.png" alt="виза" />
                <img src="/img/Payments/webpay.png" alt="вебпей" />
                <img
                  src="/img/Payments/verified-by-visa.png"
                  alt="верификация виза"
                />
                <img src="/img/Payments/mastercard.png" alt="мастеркард" />
                <img
                  src="/img/Payments/securecode.png"
                  alt="верификация мастеркард"
                />
                <img src="/img/Payments/belkart.png" alt="белкарт" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
