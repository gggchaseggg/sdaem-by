import clsx from "clsx";
import React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";

import { getUsers } from "../../api/getQueries";
import UserIcon from "../../components/SvgIcons/UserIcon";
import { setUser } from "../../Redux/Reducers/userReducer";
import InputLockIcon from "../../components/SvgIcons/InputLockIcon";

import style from "./Login.module.scss";

//

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const validationSchema = yup.object({
    login: yup
      .string()
      .required()
      .test("existing-login", "not-existing-login", (value) =>
        data.find((elem) => elem.login === value)
      ),
    password: yup
      .string()
      .required()
      .test("valid-password", "not-valid-password", (value) =>
        data.find((elem) => elem.password === value)
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  console.log(errors);

  const { data, isLoading } = useQuery(["users"], getUsers, {
    onSuccess: () => {
      console.log("Users loading success");
    },
    onError: (err) => {
      console.log("Ошибка: ", err);
    },
  });

  const logUp = (login, rememberMe) => {
    const user = data.find((elem) => elem.login === login);

    rememberMe
      ? localStorage.setItem("login", login)
      : localStorage.setItem("login", "");
    dispatch(setUser({ name: user.name, email: user.email }));
    navigate("/");
  };

  const onSubmit = (formData) => {
    logUp(formData.login, formData.password, formData.rememberMe);
  };

  return (
    <div className={style.main}>
      <div className={style.background}>
        <div className={style.container}>
          <h1 className={style.title}>Авторизация</h1>
          <p className={style.text}>
            Авторизируйтесь, чтобы начать публиковать свои объявления
          </p>
          <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
            <label className={style.textInputsLabel}>
              <input
                className={clsx(
                  "textInputs",
                  style.textInput,
                  errors.login ? "errorInputBorder" : ""
                )}
                type="text"
                placeholder="Логин"
                {...register("login", { required: true })}
              />
              <span className="textInputsIcons">
                <UserIcon />
              </span>
            </label>
            <label className={style.textInputsLabel}>
              <input
                className={clsx(
                  "textInputs",
                  style.textInput,
                  errors.password ? "errorInputBorder" : ""
                )}
                type="password"
                placeholder="Пароль"
                {...register("password", { required: true })}
              />
              <span className="textInputsIcons">
                <InputLockIcon />
              </span>
            </label>

            <div className={style.remAndPass}>
              <label className={style.rememberLabel}>
                <input
                  className={style.rememberCheckbox}
                  type="checkbox"
                  name="rememberSwitcher"
                  {...register("rememberMe")}
                />
                <div className={style.rememberSwitcher} />
                Запомнить меня
              </label>

              <Link to="/" className={style.link}>
                Забыли пароль?
              </Link>
            </div>
            <button className={style.login} disabled={isLoading}>
              {isLoading ? <div className={style.ldsDualRing}></div> : "Войти"}
            </button>
          </form>
          <div className={style.register}>
            <span>Еще нет акканута? </span>
            <Link to="/register">Создайте аккаунт</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
