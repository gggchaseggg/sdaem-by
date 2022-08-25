import React from "react";

import style from "./CatalogFilter.module.scss";
import Select from "../../Select/Select";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import MoreOptionsIcon from "../../SvgIcons/MoreOptionsIcon";
import GreaterSign from "../../SvgIcons/GreaterSign";
import Separator from "../../Separator/Separator";
import {
  checkboxes,
  defaultValues,
  defaultValuesTypes,
  lowerDefaultValues,
  rooms,
} from "./defaultValues";

type CatalogFilterProps = {
  className?: string;
};

const CatalogFilter: React.FC<CatalogFilterProps> = ({ className = "" }) => {
  const [isFilterOpen, setIsFilterOpen] = React.useState(false);

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<defaultValuesTypes>({ defaultValues });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<defaultValuesTypes> = (data) => {
    console.log("data: ", data);
    // let linkParams = "";
    // for (const param in data) {
    //   linkParams += `${param.toString()}=${data[param]}&`;
    // }
    // if (linkParams) navigate(`/catalog?${linkParams}`);
    // else navigate("/catalog");
  };

  const separator = (
    <Separator
      className={style.separator}
      height={80}
      width={1}
      color={"#664EF91A"}
    />
  );

  const onMoreOptionsClick = (event: any) => {
    event.preventDefault();
    console.log("море оптионс");
    if (isFilterOpen) reset(lowerDefaultValues);
    setIsFilterOpen((prev) => !prev);
  };

  const onClearFormClick = (event: any) => {
    event.preventDefault();
    reset(defaultValues);
    console.log("клир форм");
  };

  // @ts-ignore
  // @ts-ignore
  return (
    <div className={className}>
      <form className={style.form}>
        <div className={style.formHeader}>
          <label className={clsx(style.label, style.labelFlex)}>
            <span className={style.labelSpan}>Комнаты</span>
            <Controller
              name="rooms"
              control={control}
              render={({ field }) => (
                <Select options={rooms} field={field} isCatalog />
              )}
            />
          </label>
          {separator}
          <label className={clsx(style.label, style.labelFlex)}>
            <span className={style.labelSpan}>Цена за сутки (BYN)</span>
            <div className={style.fromTo}>
              <input
                type="number"
                placeholder="От"
                className={clsx(
                  "textInputs",
                  style.input,
                  errors.priceFrom ? "errorInputBorder" : ""
                )}
                {...register("priceFrom")}
              />
              <span className={style.minus}>-</span>
              <input
                type="number"
                placeholder="До"
                className={clsx(
                  "textInputs",
                  style.input,
                  errors.priceFrom ? "errorInputBorder" : ""
                )}
                {...register("priceTo")}
              />
            </div>
          </label>
          {separator}

          <button
            className={clsx(
              style.moreOptions,
              isFilterOpen ? style.moreOptionsBorder : ""
            )}
            onClick={onMoreOptionsClick}
          >
            <span>Больше опций</span>
            <MoreOptionsIcon fillColor="#664EF9" className={style.icon} />
          </button>

          {separator}

          <div className={style.buttons}>
            <button
              className={clsx(style.button, style.clearButton)}
              onClick={onClearFormClick}
            >
              Очистить
            </button>

            <button className={style.button} onClick={handleSubmit(onSubmit)}>
              Показать объекты
              <GreaterSign className={style.greaterSign} />
            </button>
          </div>
        </div>
        <div
          className={clsx(
            style.moreFilter,
            isFilterOpen ? style.moreFilterOpen : ""
          )}
        >
          <div className={style.moreFilterSelects}>
            <label className={clsx(style.label, style.verticalLabel)}>
              <span className={style.labelSpan}>Спальные места</span>
              <Controller
                name="sleepingPlaces"
                control={control}
                render={({ field }) => (
                  <Select
                    options={rooms}
                    field={field}
                    isCatalog
                    className="CatalogMoreFilterLongSelect"
                  />
                )}
              />
            </label>

            <label className={clsx(style.label, style.verticalLabel)}>
              <span className={style.labelSpan}>Район</span>
              <Controller
                name="district"
                control={control}
                render={({ field }) => (
                  <Select
                    options={rooms}
                    field={field}
                    isCatalog
                    className="CatalogMoreFilterLongSelect"
                  />
                )}
              />
            </label>
            <label className={clsx(style.label, style.verticalLabel)}>
              <span className={style.labelSpan}>Метро</span>
              <Controller
                name="metro"
                control={control}
                render={({ field }) => (
                  <Select
                    options={rooms}
                    field={field}
                    isCatalog
                    className="CatalogMoreFilterLongSelect"
                  />
                )}
              />
            </label>
          </div>
          <div className={style.moreFilterCheckboxes}>
            {checkboxes.map((item, idx) => (
              <label className={style.checkboxLabel} key={idx}>
                <input
                  type="checkbox"
                  className={style.checkboxNonDisplay}
                  // @ts-ignore
                  {...register(item.registerName)}
                />
                <div className={style.checkbox} />
                <span className={style.checkboxSpan}>{item.label}</span>
              </label>
            ))}
          </div>
        </div>
      </form>
    </div>
  );
};

export default CatalogFilter;
