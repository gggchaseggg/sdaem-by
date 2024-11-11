import React from "react";
import ReactSelect from "react-select";
import { OptionsItem } from "../../types/types";

//Не понял как типизировать пропсы:
// value(из контроллера UseFormHook),
// onChange(из контроллера UseFormHook)(тип Function, к моему удивлению, не работает),
// field(из контроллера UseFormHook)
type SelectProps = {
  options: OptionsItem[];
  value?: any;
  onChange?: any;
  className?: string;
  placeholder?: string;
  isCarousel?: boolean;
  isCatalog?: boolean;
  isSorting?: boolean;
  field?: any;
};

const Select: React.FC<SelectProps> = ({
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
      onChange && (
        <div className={className}>
          <ReactSelect
            className="selectContainer"
            classNamePrefix="selectPrefix"
            options={options}
            placeholder={placeholder}
            isSearchable
            value={options.find((option) => option.value === value)}
            onChange={(item) => item && onChange(item.value)}
          />
        </div>
      )
    );
};

export default Select;
