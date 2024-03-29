import clsx from "clsx";
import React from "react";

import MailIcon from "../../SvgIcons/MailIcon";
import MarkIcon from "../../SvgIcons/MarkIcon";
import ClockIcon from "../../SvgIcons/ClockIcon";
import PhoneIcon from "../../SvgIcons/PhoneIcon";
import WhatsappIcon from "../../SvgIcons/ViberIcon";
import ViberIcon from "../../SvgIcons/WhatsappIcon";
import TelegramIcon from "../../SvgIcons/TelegramIcon";

import style from "./ContactList.module.scss";
import { useContacts } from "../../../api/dataHooks";

const ContactList = () => {
  const contacts = useContacts();

  return (
    <div className={style.container}>
      <ul className={style.contactList}>
        <li className={style.contactItem}>
          <MarkIcon className={style.marker} width={12} height={15} />
          <span className={style.text}>{contacts?.address}</span>
        </li>
        <li className={style.contactItem}>
          <PhoneIcon className={style.marker} />
          <a
            href={`tel:${contacts?.phone}`}
            className={clsx(style.text, style.phone)}
          >
            {contacts?.phone}
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
            href={`mailto:${contacts?.email}`}
            className={style.text}
            style={{ borderBottom: "solid 2px white", height: "25px" }}
          >
            {contacts?.email}
          </a>
        </li>
        <li className={style.contactItem}>
          <ClockIcon className={style.marker} width={15} height={15} />
          <span className={style.text}>
            <span className={style.unbold}>Режим работы: </span>
            {contacts?.workTime}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default ContactList;
