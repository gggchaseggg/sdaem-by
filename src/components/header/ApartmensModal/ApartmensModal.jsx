import React from "react";
import style from "./ApartmensModal.module.scss";
import { apartCity } from "../../../data/layoutData";
import MarkIcon from "../../SvgIcons/MarkIcon";

export default function ApartmensModal() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <button
        className={[style.apartButton, style.active].join(" ")}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span>Квартиры на сутки</span>
        <MarkIcon fillColor={"#FFD54F"} />
      </button>

      {isOpen && (
        <div className={style.modal}>
          <div className={style.modalBody}>
            {apartCity.map((item) => (
              <li key={item.key}>{item.title}</li>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
