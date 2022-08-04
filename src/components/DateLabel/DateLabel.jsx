import clsx from "clsx";
import React from "react";

import style from "./DateLabel.module.scss";

//В пропсы дата строкой и булеан значение серое ли
//date={novost.date} isGray={true}
export default function DateLabel(props) {
  return (
    <>
      <div
        className={clsx(style.date, props.isGray ? style.gray : style.purple)}
      >
        {props.date}
      </div>
    </>
  );
}
