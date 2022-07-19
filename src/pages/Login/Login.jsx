import React from "react";
import style from "./Login.module.scss";
import { Link } from "react-router-dom";
import UserIcon from "../../components/SvgIcons/UserIcon";
import InputLockIcon from "../../components/SvgIcons/InputLockIcon";
import { useForm } from "react-hook-form";

export default function Login() {
  const { register, handleSubmit, reset } = useForm({});

  const onSubmit = (data) => {
    //TODO: Сравнение с данными логин пароль на локалсторадже(тестово)
    console.log(data);
    reset();
  };

  return (
    <div className={style.main}>
      <div className={style.background}>
        <div className={style.container}>
          <h2 className={style.title}>Авторизация</h2>
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
