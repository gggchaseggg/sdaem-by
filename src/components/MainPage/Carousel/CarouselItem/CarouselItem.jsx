import React from "react";

import style from "./CarouselItem.module.scss";
import UserIcon from "../../../SvgIcons/UserIcon";
import MarkIcon from "../../../SvgIcons/MarkIcon";
import MetroIcon from "../../../SvgIcons/MetroIcon";
import clsx from "clsx";
import { Link } from "react-router-dom";
import PhoneIcon from "../../../SvgIcons/PhoneIcon";
import ContactModal from "./ContactModal/ContactModal";

const CarouselItem = ({ apartment }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isClick, setIsClick] = React.useState(false);

  return (
    <div className={style.container}>
      <div className={style.imgContainer}>
        {apartment.status === "Gold" && (
          <div className={style.goldStatus}>Gold</div>
        )}
        <img src={apartment.img} alt="квартира" />
      </div>
      <div className={style.info}>
        <div className={style.priceAndLabels}>
          <h5 className={style.price}>
            {apartment.price.price} {apartment.price.currency}
            <span className={style.interval}>
              за {apartment.price.interval}
            </span>
          </h5>
          <span className={style.infoLabel}>
            <UserIcon
              width={15}
              fillColor="#686868"
              className={style.tenantsIcon}
            />
            {apartment.info.tenants}
          </span>
          <span className={style.infoLabel}>{apartment.info.rooms} комн.</span>
          <span className={style.infoLabel}>
            {apartment.info.area} м<sup>2</sup>
          </span>
        </div>
        <div className={style.location}>
          <div className={style.address}>
            <span className={style.locationSpan}>
              <MarkIcon
                width={14}
                className={style.locationIcons}
                fillColor="#BDBDBD"
              />
              {apartment.info.address}
            </span>
          </div>
          <div className={style.landmarks}>
            <span className={style.locationSpan}>
              <MetroIcon className={style.locationIcons} fillColor="#BDBDBD" />
              {apartment.info.metro}
            </span>
            <span className={style.locationSpan}>
              <div className={clsx(style.circleIcon, style.locationIcons)} />
              {apartment.info.district}
            </span>
          </div>
        </div>
        <div className={style.description}>{apartment.description}</div>
        <hr className={style.hr} width="367px" align="left" />
        <div className={style.footer}>
          <button
            className={style.contacts}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => !isClick && setIsOpen(false)}
            onClick={() => {
              setIsOpen(true);
              setIsClick(true);
            }}
          >
            <PhoneIcon className={style.phoneIcon} fillColor="#664EF9" />
            <span>Контакты</span>
          </button>
          {isOpen && (
            <div
              className={style.modalContact}
              onMouseLeave={() => {
                setIsOpen(false);
                setIsClick(false);
              }}
            >
              <ContactModal ownerId={apartment.ownerId} />
            </div>
          )}

          <Link to="/catalog" className={style.more}>
            Подробнее
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
