import React from "react";
import ReactSelect from "react-select";

const Select = ({ options, value, onChange }) => {
  return (
    <div>
      <ReactSelect
        className="selectContainer"
        classNamePrefix="selectPrefix"
        options={options}
        placeholder="Выберите"
        isSearchable
        value={options.find((option) => option.value === value)}
        onChange={(option) => onChange(option.value)}
      />
    </div>
  );
};

export default Select;
