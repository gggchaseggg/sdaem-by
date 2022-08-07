import clsx from "clsx";
import React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";

import { useUsers } from "../../api/dataHooks";
import UserIcon from "../../components/SvgIcons/UserIcon";
import InputLockIcon from "../../components/SvgIcons/InputLockIcon";
import { setUser } from "../../Redux/Reducers/userReducer";
import { MAIN_PATH, REGISTER_PATH } from "../../data/pathConstants";

import style from "./Login.module.scss";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data: userList, isLoading: isUserLoading } = useUsers();

  const validationSchema = yup.object({
    login: yup
      .string()
      .required()
      .test("existing-login", "not-existing-login", (value) =>
        userList.find((elem) => elem.login === value)
      ),
    password: yup
      .string()
      .required()
      .test("valid-password", "not-valid-password", (value) =>
        userList.find((elem) => elem.password === value)
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const logUp = (login, rememberMe) => {
    const user = userList.find((elem) => elem.login === login);

    rememberMe
      ? localStorage.setItem("login", login)
      : localStorage.setItem("login", "");
    dispatch(setUser({ name: user.name, email: user.email }));
    navigate(MAIN_PATH);
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

              <Link to={MAIN_PATH} className={style.link}>
                Забыли пароль?
              </Link>
            </div>
            <button className={style.login} disabled={isUserLoading}>
              {isUserLoading ? (
                <div className={style.ldsDualRing}></div>
              ) : (
                "Войти"
              )}
            </button>
          </form>
          <div className={style.register}>
            <span>Еще нет акканута? </span>
            <Link to={REGISTER_PATH}>Создайте аккаунт</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
