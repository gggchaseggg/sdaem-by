import React from "react";

import style from "./CatalogFilter.module.scss";
import Select from "../../Select/Select";
import { Controller, useForm } from "react-hook-form";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import MoreOptionsIcon from "../../SvgIcons/MoreOptionsIcon";
import GreaterSign from "../../SvgIcons/GreaterSign";
import Separator from "../../Separator/Separator";

const rooms = [
  { id: "1", value: "1", label: "1 комн." },
  { id: "2", value: "2", label: "2 комн." },
  { id: "3", value: "3", label: "3 комн." },
  { id: "4", value: "4", label: "4 комн." },
  { id: "5", value: "5", label: "5 комн." },
  { id: "6", value: "6", label: "6 комн." },
];

const checkboxes = [
  {
    id: "1",
    value: "ГазоваяПлита",
    label: "Газовая плита",
    registerName: "gaz1",
  },
  { id: "2", value: "Духовка", label: "Духовка", registerName: "duh1" },
  { id: "3", value: "Кофеварка", label: "Кофеварка", registerName: "coffe1" },
  {
    id: "4",
    value: "МикроволноваяПечь",
    label: "Микроволновая печь",
    registerName: "micro1",
  },
  { id: "5", value: "Посуда", label: "Посуда", registerName: "posuda1" },
  {
    id: "6",
    value: "ПосудомоечнаяМашина",
    label: "Посудомоечная машина",
    registerName: "posudMachine1",
  },
  {
    id: "7",
    value: "ГазоваяПлита",
    label: "Газовая плита",
    registerName: "gaz2",
  },
  { id: "8", value: "Духовка", label: "Духовка", registerName: "duh2" },
  { id: "9", value: "Кофеварка", label: "Кофеварка", registerName: "coffe2" },
  {
    id: "10",
    value: "МикроволноваяПечь",
    label: "Микроволновая печь",
    registerName: "micro2",
  },
  { id: "11", value: "Посуда", label: "Посуда", registerName: "posuda2" },
  {
    id: "12",
    value: "ПосудомоечнаяМашина",
    label: "Посудомоечная машина",
    registerName: "posudMachine2",
  },
  {
    id: "13",
    value: "ГазоваяПлита",
    label: "Газовая плита",
    registerName: "gaz3",
  },
  { id: "14", value: "Духовка", label: "Духовка", registerName: "duh3" },
  { id: "15", value: "Кофеварка", label: "Кофеварка", registerName: "coffe3" },
  {
    id: "16",
    value: "МикроволноваяПечь",
    label: "Микроволновая печь",
    registerName: "micro3",
  },
  { id: "17", value: "Посуда", label: "Посуда", registerName: "posuda3" },
  {
    id: "18",
    value: "ПосудомоечнаяМашина",
    label: "Посудомоечная машина",
    registerName: "posudMachine3",
  },
  {
    id: "19",
    value: "ГазоваяПлита",
    label: "Газовая плита",
    registerName: "gaz4",
  },
  { id: "20", value: "Духовка", label: "Духовка", registerName: "duh4" },
  { id: "21", value: "Кофеварка", label: "Кофеварка", registerName: "coffe4" },
  {
    id: "22",
    value: "МикроволноваяПечь",
    label: "Микроволновая печь",
    registerName: "micro4",
  },
  { id: "23", value: "Посуда", label: "Посуда", registerName: "posuda4" },
  {
    id: "24",
    value: "ПосудомоечнаяМашина",
    label: "Посудомоечная машина",
    registerName: "posudMachine4",
  },
  {
    id: "25",
    value: "ГазоваяПлита",
    label: "Газовая плита",
    registerName: "gaz5",
  },
  { id: "26", value: "Духовка", label: "Духовка", registerName: "duh5" },
  { id: "27", value: "Кофеварка", label: "Кофеварка", registerName: "coffe5" },
  {
    id: "28",
    value: "МикроволноваяПечь",
    label: "Микроволновая печь",
    registerName: "micro5",
  },
  { id: "29", value: "Посуда", label: "Посуда", registerName: "posuda5" },
  {
    id: "30",
    value: "ПосудомоечнаяМашина",
    label: "Посудомоечная машина",
    registerName: "posudMachine5",
  },
];

const CatalogFilter = ({ className }) => {
  const [isFilterOpen, setIsFilterOpen] = React.useState(false);

  const lowerDefaultValues = {
    sleepingPlaces: "",
    district: "",
    metro: "",
    gaz1: false,
    gaz2: false,
    gaz3: false,
    gaz4: false,
    gaz5: false,
    duh1: false,
    duh2: false,
    duh3: false,
    duh4: false,
    duh5: false,
    coffe1: false,
    coffe2: false,
    coffe3: false,
    coffe4: false,
    coffe5: false,
    micro1: false,
    micro2: false,
    micro3: false,
    micro4: false,
    micro5: false,
    posuda1: false,
    posuda2: false,
    posuda3: false,
    posuda4: false,
    posuda5: false,
    posudMachine1: false,
    posudMachine2: false,
    posudMachine3: false,
    posudMachine4: false,
    posudMachine5: false,
  };

  const defaultValues = {
    rooms: "",
    priceFrom: "",
    priceTo: "",
    ...lowerDefaultValues,
  };

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues });

  const navigate = useNavigate();

  const onSubmit = (data) => {
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

  const onMoreOptionsClick = (event) => {
    event.preventDefault();
    console.log("море оптионс");
    if (isFilterOpen) reset(lowerDefaultValues);
    setIsFilterOpen((prev) => !prev);
  };

  const onClearFormClick = (event) => {
    event.preventDefault();
    reset(defaultValues);
    console.log("клир форм");
  };

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
                <Select options={rooms} field={field} isCatalog={true} />
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
                    isCatalog={true}
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
                    isCatalog={true}
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
                    isCatalog={true}
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
                  name="checkboxes"
                  className={style.checkboxNonDisplay}
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
