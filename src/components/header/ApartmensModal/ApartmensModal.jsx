import clsx from "clsx";
import React from "react";

import MarkIcon from "../../SvgIcons/MarkIcon";
import { apartCity } from "../../../data/layoutData";

import style from "./ApartmensModal.module.scss";

export default function ApartmensModal() {
  const [isOpen, setIsOpen] = React.useState(false);
  //TODO: Сделать чтобы модалка вылезала не по нажатию, а при наведении
  return (
    <>
      <div
        className={clsx(style.apartButton, style.active)}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span>Квартиры на сутки</span>
        <MarkIcon fillColor={"#FFD54F"} />
      </div>

      {isOpen && (
        <div className={style.modal}>
          <ul className={style.modalBody}>
            {apartCity.map((item) => (
              <li key={item.key}>{item.title}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
