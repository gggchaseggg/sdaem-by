import clsx from "clsx";
import React from "react";

import MarkIcon from "../../SvgIcons/MarkIcon";
import { APART_CITY } from "../../../data/layoutData";

import style from "./ApartmensModal.module.scss";

export default function ApartmentsModal() {
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
            {APART_CITY.map((item) => (
              <li key={item.key}>{item.title}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
