import clsx from "clsx";
import React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { yupResolver } from "@hookform/resolvers/yup";

import UserIcon from "../../SvgIcons/UserIcon";
import { addPost } from "../../../api/postQueries";
import InputMailIcon from "../../SvgIcons/InputMailIcon";
import InputErrorIcon from "../../SvgIcons/InputErrorIcon";

import style from "./ContactForm.module.scss";

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

  const mutation = useMutation(addPost);

  const onSubmit = (data) => {
    console.log(data);
    mutation.mutate(data);
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
                className={clsx(
                  "textInputs",
                  errors.name ? "errorInputBorder" : ""
                )}
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
                className={clsx(
                  "textInputs",
                  errors.email ? "errorInputBorder" : ""
                )}
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
                className={clsx(
                  style.text,
                  errors.message ? "errorInputBorder" : ""
                )}
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
