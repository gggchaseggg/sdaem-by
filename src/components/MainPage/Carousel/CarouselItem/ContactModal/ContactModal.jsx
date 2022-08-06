import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../../../../../api/getQueries";

import style from "./ContactModal.module.scss";
import ViberIcon from "../../../../SvgIcons/WhatsappIcon";
import WhatsappIcon from "../../../../SvgIcons/ViberIcon";
import MailIcon from "../../../../SvgIcons/MailIcon";

//TODO: Наверное мемоизация поможет при том,чтобы при повторном возвращалось тоже самое

const ContactModal = ({ ownerId }) => {
  const [owner, setOwner] = React.useState({});

  const { data, status } = useQuery(["owners"], getUsers, {
    onSuccess: (dat) => {
      setOwner(dat.find((elem) => elem.id === ownerId));
      console.log("Owner loading success");
    },
    onError: (err) => {
      console.log("Ошибка: ", err);
    },
  });

  return (
    <>
      {owner && (
        <>
          <img src={owner.photoPath} alt="аватар" className={style.avatar} />
          <div className={style.owner}>Владелец</div>
          <div className={style.name}>{owner.name}</div>
          <a href="tel:+375 (29) 291-14-44" className={style.tel}>
            {owner.phoneNumber}
          </a>
          <a href={`mailto:${owner.email}`} className={style.email}>
            {owner.email}
          </a>
          <div className={style.socials}>
            <div className={style.viber}>
              <ViberIcon
                width={16}
                fillColor="#ffffff"
                className={style.icon}
              />
            </div>
            <div className={style.whatsapp}>
              <WhatsappIcon
                width={16}
                fillColor="#ffffff"
                className={style.icon}
              />
            </div>
            <div className={style.mail}>
              <MailIcon width={18} fillColor="#ffffff" className={style.icon} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ContactModal;