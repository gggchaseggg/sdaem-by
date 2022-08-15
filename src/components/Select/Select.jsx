import React from "react";
import ReactSelect from "react-select";

const Select = ({
  options,
  value,
  onChange,
  className = "",
  placeholder = "Выберите",
  isCarousel,
  isCatalog,
  isSorting,
  field,
}) => {
  if (isCarousel || isSorting)
    return (
      <div className={className}>
        <ReactSelect
          className="selectContainer"
          classNamePrefix="selectPrefix"
          options={options}
          placeholder={placeholder}
          isSearchable
          isClearable
        />
      </div>
    );
  else if (isCatalog)
    return (
      <div className={className}>
        <ReactSelect
          {...field}
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
