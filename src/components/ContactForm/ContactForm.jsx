import React from "react";
import { useForm } from "react-hook-form";
import style from "./ContactForm.module.scss";
import UserIcon from "../SvgIcons/UserIcon";
import InputMailIcon from "../SvgIcons/InputMailIcon";
import InputErrorIcon from "../SvgIcons/InputErrorIcon";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export default function ContactForm() {
  const [isOpen, setIsOpen] = React.useState(false);

  const validationSchema = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    message: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    //TODO: Сделать отправку на импровизированный сервер данных
    console.log(data);
    setIsOpen((prev) => !prev);
    reset();
  };

  return (
    <>
      <div className={style.container}>
        <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={style.inputs}>
            <label className={style.textInputsLabel}>
              Ваше имя
              <input
                {...register("name")}
                type="text"
                className={[
                  "textInputs",
                  errors.name ? "errorInputBorder" : "",
                ].join(" ")}
                // className="textInputs"
                placeholder="Имя"
              />
              <span className="textInputsIcons">
                <UserIcon />
              </span>
              {errors.name && (
                <span className="errorInputsIcons">
                  <InputErrorIcon />
                </span>
              )}
            </label>
            <label className={style.textInputsLabel}>
              Ваша электронная почта
              <input
                {...register("email")}
                type="text"
                className={[
                  "textInputs",
                  errors.email ? "errorInputBorder" : "",
                ].join(" ")}
                placeholder="Почта"
              />
              <span className="textInputsIcons">
                <InputMailIcon />
              </span>
              {errors.email && (
                <span className="errorInputsIcons">
                  <InputErrorIcon />
                </span>
              )}
            </label>
          </div>
          <div className={style.message}>
            <label className={style.textInputsLabel}>
              Ваше сообщение
              <textarea
                {...register("message")}
                className={[
                  style.text,
                  errors.message ? "errorInputBorder" : "",
                ].join(" ")}
                placeholder="Сообщение"
              />
            </label>
          </div>
          <button className={style.send}>Отправить</button>
        </form>
        {isOpen && (
          <div className={style.sentMailModalContainer}>
            <div className={style.sentMailModal}>
              <div className={style.modalTitle}>Ваше письмо отправлено!</div>
              <p className={style.modalText}>
                Какое-то сообщение о том, что письмо отправлено, какое-то
                сообщение, что письмо отправлено.
              </p>
              <button
                className={style.modalButton}
                onClick={() => {
                  setIsOpen((prev) => !prev);
                }}
              >
                Закрыть окно
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
