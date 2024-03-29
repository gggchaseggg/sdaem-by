import React from "react";

import ViberIcon from "../../SvgIcons/WhatsappIcon";
import WhatsappIcon from "../../SvgIcons/ViberIcon";
import MailIcon from "../../SvgIcons/MailIcon";
import { useUsers } from "../../../api/dataHooks";
import { UserTypes } from "../../../types/types";

import style from "./ContactModal.module.scss";

type ContactModalProp = {
  ownerId: string;
};

const ContactModal: React.FC<ContactModalProp> = ({ ownerId }) => {
  const [owner, setOwner] = React.useState<UserTypes | undefined>(undefined);
  const { data: userList } = useUsers();

  React.useEffect(() => {
    if (userList) setOwner(userList.find((elem) => elem.id === ownerId));
  }, [userList]);

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
