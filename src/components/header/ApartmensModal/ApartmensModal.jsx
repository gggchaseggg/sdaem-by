import clsx from "clsx";
import React from "react";

import MarkIcon from "../../SvgIcons/MarkIcon";
import { apartCity } from "../../../data/layoutData";

import style from "./ApartmensModal.module.scss";

export default function ApartmensModal() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isClick, setIsClick] = React.useState(false);

  return (
    <>
      <div
        className={clsx(style.apartButton, style.active)}
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
        <span>Квартиры на сутки</span>
        <MarkIcon fillColor={"#FFD54F"} />
      </div>

      {isOpen && (
        <div
          className={style.modal}
          onMouseLeave={() => {
            setIsOpen(false);
            setIsClick(false);
          }}
        >
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
