import clsx from "clsx";
import React from "react";
import { Link } from "react-router-dom";

import UserIcon from "../SvgIcons/UserIcon";
import MarkIcon from "../SvgIcons/MarkIcon";
import PhoneIcon from "../SvgIcons/PhoneIcon";
import MetroIcon from "../SvgIcons/MetroIcon";
import ContactModal from "./ContactModal/ContactModal";
import { CATALOG_PATH } from "../../data/pathConstants";

import style from "./ApartmentItem.module.scss";
import FavoritesHeartIcon from "../SvgIcons/FavoritesHeartIcon";
import { ApartmentTypes } from "../../types/types";

type ApartmentItemProps = {
  apartment: ApartmentTypes;
  className?: string;
  isTiles?: boolean;
};

const ApartmentItem: React.FC<ApartmentItemProps> = ({
  apartment,
  className = "",
  isTiles = true,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isClick, setIsClick] = React.useState(false);

  if (isTiles)
    return (
      <div className={clsx(style.container, className)}>
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
            <span className={style.infoLabel}>
              {apartment.info.rooms} комн.
            </span>
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
                <MetroIcon
                  className={style.locationIcons}
                  fillColor="#BDBDBD"
                />
                {apartment.info.metro}
              </span>
              <span className={style.locationSpan}>
                <div className={clsx(style.circleIcon, style.locationIcons)} />
                {apartment.info.district}
              </span>
            </div>
          </div>
          <div className={style.description}>{apartment.description}</div>
          <hr className={style.hr} />
          <div className={style.footer}>
            <button className={style.favorites}>
              <FavoritesHeartIcon
                strokeColor="#EB5757"
                fillColor="transparent"
              />
            </button>
            <button
              className={style.contacts}
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => !isClick && setIsOpen(false)}
              onClick={() => {
                if (isClick) {
                  setIsOpen(false);
                  setIsClick(false);
                } else {
                  setIsOpen(true);
                  setIsClick(true);
                }
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

            <Link to={CATALOG_PATH} className={style.more}>
              Подробнее
            </Link>
          </div>
        </div>
      </div>
    );
  else
    return (
      <div className={clsx(style.container, style.listView, className)}>
        <div className={clsx(style.imgContainer, style.imgContainerListView)}>
          {apartment.status === "Gold" && (
            <div className={style.goldStatus}>Gold</div>
          )}
          <img src={apartment.img} alt="квартира" />
        </div>
        <div className={style.infoListView}>
          <div className={style.listViewCardHeader}>
            <div className={style.left}>
              <h4 className={style.apartmentTitle}>{apartment.title}</h4>
              <div
                className={clsx(style.locationSpan, style.locationSpanListView)}
              >
                <MarkIcon
                  width={20}
                  height={20}
                  className={clsx(
                    style.locationIcons,
                    style.locationIconsListView
                  )}
                  fillColor="#BDBDBD"
                />
                <span>{apartment.info.address}</span>
              </div>
            </div>
            <h5 className={clsx(style.price, style.priceListView)}>
              {apartment.price.price} {apartment.price.currency}
              <span className={clsx(style.interval, style.intervalListView)}>
                за {apartment.price.interval}
              </span>
            </h5>
          </div>

          <div className={style.labels}>
            <span className={clsx(style.infoLabel, style.infoLabelListView)}>
              <UserIcon
                width={19}
                fillColor="#686868"
                className={style.tenantsIcon}
              />
              {apartment.info.tenants}
            </span>
            <span className={clsx(style.infoLabel, style.infoLabelListView)}>
              {apartment.info.rooms} комн.
            </span>
            <span className={clsx(style.infoLabel, style.infoLabelListView)}>
              <MetroIcon className={style.locationIcons} fillColor="#664EF9" />
              {apartment.info.metro}
            </span>
            <span className={clsx(style.infoLabel, style.infoLabelListView)}>
              <span className={style.district}>район:&nbsp;</span>
              {apartment.info.metro}
            </span>
          </div>
          <div className={clsx(style.description, style.descriptionListView)}>
            {apartment.description}
          </div>
          <div className={clsx(style.footer, style.footerListView)}>
            <div className={style.leftButtonsFooter}>
              <button
                className={style.contacts}
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => !isClick && setIsOpen(false)}
                onClick={() => {
                  if (isClick) {
                    setIsOpen(false);
                    setIsClick(false);
                  } else {
                    setIsOpen(true);
                    setIsClick(true);
                  }
                }}
              >
                <PhoneIcon className={style.phoneIcon} fillColor="#664EF9" />
                <span>Контакты</span>
              </button>
              <button
                className={clsx(style.favorites, style.favoritesListView)}
              >
                В закладки
                <FavoritesHeartIcon
                  strokeColor="#EB5757"
                  fillColor="transparent"
                  className={style.heartIcon}
                />
              </button>
            </div>
            {isOpen && (
              <div
                className={clsx(style.modalContact, style.modalContactListView)}
                onMouseLeave={() => {
                  setIsOpen(false);
                  setIsClick(false);
                }}
              >
                <ContactModal ownerId={apartment.ownerId} />
              </div>
            )}

            <Link to={CATALOG_PATH} className={style.more}>
              Подробнее
            </Link>
          </div>
        </div>
      </div>
    );
};

export default ApartmentItem;
