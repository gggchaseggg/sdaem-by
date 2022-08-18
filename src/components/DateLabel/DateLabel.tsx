import clsx from "clsx";
import React from "react";

import style from "./DateLabel.module.scss";

type DateLabelProps = {
  date: string;
  isGray: boolean;
};

const DateLabel: React.FC<DateLabelProps> = ({ date, isGray }) => {
  return (
    <>
      <div className={clsx(style.date, isGray ? style.gray : style.purple)}>
        {date}
      </div>
    </>
  );
};

export default DateLabel;
