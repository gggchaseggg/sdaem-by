import React from "react";
import ReactSelect from "react-select";

const Select = ({
  options,
  value,
  onChange,
  className,
  placeholder = "Выберите",
  isMetro = false,
}) => {
  if (isMetro)
    return (
      <div className={className}>
        <ReactSelect
          className="selectContainer"
          classNamePrefix="selectPrefix"
          options={options}
          placeholder={placeholder}
          isSearchable
        />
      </div>
    );
  else
    return (
      <div className={className}>
        <ReactSelect
          className="selectContainer"
          classNamePrefix="selectPrefix"
          options={options}
          placeholder={placeholder}
          isSearchable
          value={options.find((option) => option.value === value)}
          onChange={(option) => onChange(option.value)}
        />
      </div>
    );
};

export default Select;
