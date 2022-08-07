import clsx from "clsx";
import React from "react";
import * as yup from "yup";
import Select from "../../Select/Select";
import { Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";

import MarkIcon from "../../SvgIcons/MarkIcon";
import GreaterSign from "../../SvgIcons/GreaterSign";
import MoreOptionsIcon from "../../SvgIcons/MoreOptionsIcon";
import Separator from "../../Separator/Separator";

import style from "./MainPageFilter.module.scss";

const cities = [
  { id: "1", value: "Минск", label: "Минск" },
  { id: "2", value: "Гомель", label: "Гомель" },
  { id: "3", value: "Брест", label: "Брест" },
  { id: "4", value: "Витебск", label: "Витебск" },
  { id: "5", value: "Гродно", label: "Гродно" },
  { id: "6", value: "Могилев", label: "Могилев" },
];

const rooms = [
  { id: "1", value: "Студия", label: "Студия" },
  { id: "2", value: "1 комната", label: "1 комната" },
  { id: "3", value: "2 комнаты", label: "2 комнаты" },
  { id: "5", value: "3 комнаты", label: "3 комнаты" },
];

const MainPageFilter = () => {
  const validationSchema = yup.object({
    city: yup.string().nullable(),
    rooms: yup.string().nullable(),
    priceFrom: yup
      .number()
      .transform((value) => (isNaN(value) ? undefined : value))
      .when("priceTo", {
        is: (val) => !!val,
        then: yup
          .number()
          .transform((value) => (isNaN(value) ? undefined : value))
          .lessThan(yup.ref("priceTo")),
      }),
    priceTo: yup
      .number()
      .transform((value) => (isNaN(value) ? undefined : value)),
  });
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  // console.log("errors: ", errors);
  // console.log("yupRef: ", yup.ref("priceFrom"));
  const onSubmit = (data) => {
    console.log("data: ", data);
  };

  const separator = (
    <Separator
      className={style.separator}
      height={68}
      width={1}
      color={"#664EF91A"}
    />
  );

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
        <label className={style.label}>
          <span className={style.title}>Город</span>
          <Controller
            name="city"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Select options={cities} value={value} onChange={onChange} />
            )}
          />
        </label>
        {separator}
        <label className={style.label}>
          <span className={style.title}>Комнаты</span>
          <Controller
            name="rooms"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Select options={rooms} value={value} onChange={onChange} />
            )}
          />
        </label>
        {separator}
        <label className={style.label}>
          <span className={style.title}>Цена за сутки (BYN)</span>
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
        <div className={style.moreOptions}>
          <Link to="/catalog" className={style.link}>
            Больше опций
            <MoreOptionsIcon fillColor="#664EF9" className={style.icon} />
          </Link>
        </div>
        {separator}
        <div className={style.onMap}>
          <Link to="/map" className={style.link}>
            <span>На карте</span>
            <MarkIcon fillColor="#664EF9" className={style.icon} width={12} />
          </Link>
        </div>
        <button className={style.button}>
          Показать
          <GreaterSign className={style.greaterSign} />
        </button>
      </form>
    </div>
  );
};

export default MainPageFilter;
