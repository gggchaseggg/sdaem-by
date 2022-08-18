import React from "react";

type SeparatorProps = {
  className: string;
  height: number;
  width: number;
  color: string;
};

const Separator: React.FC<SeparatorProps> = ({
  className,
  height,
  width,
  color,
}) => {
  return (
    <div
      className={className}
      style={{ height: height, width: width, background: color }}
    ></div>
  );
};

export default Separator;
