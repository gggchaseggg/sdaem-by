import React from "react";
import { useSelector } from "react-redux";
import style from "./ContactList.module.scss";
import MarkIcon from "../SvgIcons/MarkIcon";
import PhoneIcon from "../SvgIcons/PhoneIcon";
import ViberIcon from "../SvgIcons/WhatsappIcon";
import TelegramIcon from "../SvgIcons/TelegramIcon";
import WhatsappIcon from "../SvgIcons/ViberIcon";
import MailIcon from "../SvgIcons/MailIcon";
import ClockIcon from "../SvgIcons/ClockIcon";
import clsx from "clsx";

//TODO: Брать данные для этой страницы с мока

export default function ContactList() {
  const contactList = useSelector((state) => state.contactList);

  return (
    <div className={style.container}>
      <ul className={style.contactList}>
        <li className={style.contactItem}>
          <MarkIcon className={style.marker} width={12} height={15} />
          <span className={style.text}>{contactList.address}</span>
        </li>
        <li className={style.contactItem}>
          <PhoneIcon className={style.marker} />
          <a
            href={`tel:${contactList.phone}`}
            className={clsx(style.text, style.phone)}
          >
            {contactList.phone}
          </a>
          <ViberIcon
            className={clsx(style.marker, style.tel)}
            width={14}
            height={15}
          />
          <TelegramIcon
            className={clsx(style.marker, style.tel)}
            width={14}
            height={12}
          />
          <WhatsappIcon
            className={clsx(style.marker, style.tel)}
            width={14}
            height={14}
          />
        </li>
        <li className={style.contactItem}>
          <MailIcon className={style.marker} width={15} height={12} />
          <a
            href={`mailto:${contactList.email}`}
            className={style.text}
            style={{ borderBottom: "solid 2px white", height: "25px" }}
          >
            {contactList.email}
          </a>
        </li>
        <li className={style.contactItem}>
          <ClockIcon className={style.marker} width={15} height={15} />
          <span className={style.text}>
            <span className={style.unbold}>Режим работы: </span>
            {contactList.workTime}
          </span>
        </li>
      </ul>
    </div>
  );
}
