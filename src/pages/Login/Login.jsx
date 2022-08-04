import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";

import UserIcon from "../../components/SvgIcons/UserIcon";
import InputLockIcon from "../../components/SvgIcons/InputLockIcon";
import { getUsers } from "../../api/getQueries";

import style from "./Login.module.scss";
import { useDispatch } from "react-redux";
import { setUser } from "../../Redux/Reducers/userReducer";

export default function Login(options) {
  const { register, handleSubmit, reset } = useForm({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { data } = useQuery(["users"], getUsers, {
    onSuccess: () => {
      console.log("Users loading success");
    },
    onError: (err) => {
      console.log("Ошибка: ", err);
    },
  });

  const logUp = (login, password, rememberMe) => {
    //TODO: При отправлении запроса блокировать кнопку ВОЙТИ и вывести там лоадер
    //TODO: Сравнение с данными логин пароль на mockapi(если такого нет, то подсветить красным)

    const user = data.find((elem) => elem.login === login);

    if (user && user.password === password) {
      rememberMe
        ? localStorage.setItem("login", login)
        : localStorage.setItem("login", "");
      dispatch(setUser({ name: user.name, email: user.email }));
      navigate("/");
    } else {
      console.log("Something wrong");
    }
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
                className={["textInputs", style.textInput].join(" ")}
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
                className={["textInputs", style.textInput].join(" ")}
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
            <button className={style.login}>Войти</button>
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
