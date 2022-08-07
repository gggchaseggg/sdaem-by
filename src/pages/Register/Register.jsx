import clsx from "clsx";
import React from "react";
import * as yup from "yup";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { useQuery } from "@tanstack/react-query";
import { yupResolver } from "@hookform/resolvers/yup";

import { useForm, Controller } from "react-hook-form";
import { getUsers } from "../../api/getQueries";
import UserIcon from "../../components/SvgIcons/UserIcon";
import InputMailIcon from "../../components/SvgIcons/InputMailIcon";
import InputLockIcon from "../../components/SvgIcons/InputLockIcon";
import InputErrorIcon from "../../components/SvgIcons/InputErrorIcon";

import SentEmailRegister from "../../components/Register/SentEmailRegister/SentEmailRegister";
import style from "./Register.module.scss";
import { createUser } from "../../api/postQueries";

export default function Register() {
  const [sentEmail, setSentEmail] = React.useState(false);
  const [isExistingUser, setIsExistingUser] = React.useState(false);
  const validationSchema = yup.object({
    login: yup
      .string()
      .required()
      .test("existing-user", "user-already-exists", () => !isExistingUser),
    email: yup.string().email().required(),
    password: yup.string().required(),
    passwordRepeat: yup
      .string()
      .oneOf([yup.ref("password")], "not equal")
      .required(),
    captcha: yup
      .object()
      .test("captcha-valid", "not-valid", () =>
        Boolean(captchaRef.current.getValue())
      ),
  });

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });
  const captchaRef = React.useRef();

  const { data } = useQuery(["users"], getUsers, {
    onSuccess: () => {
      console.log("Users loading success");
    },
    onError: (err) => {
      console.log("Ошибка: ", err);
    },
  });

  const registry = (formData) => {
    const user = data.find((elem) => elem.login === formData.login);
    if (!user) {
      console.log("no user with this login");
      return true;
    } else {
      console.log("user already exist");
      setIsExistingUser(true);
      return false;
    }
  };

  const onSubmit = (user) => {
    if (registry(user)) {
      createUser(user);
      reset();
      setSentEmail(true);
    }
    user.captcha = captchaRef.current.getValue();
    console.log(user);
  };

  return (
    <>
      <div className={style.main}>
        <div className={style.background}>
          {sentEmail ? (
            <SentEmailRegister />
          ) : (
            <div className={style.container}>
              <div className={style.formContainer}>
                <h1 className={style.title}>Регистрация</h1>

                <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
                  <label className={style.textInputsLabel}>
                    <input
                      className={clsx(
                        "textInputs",
                        style.textInput,
                        errors.login || isExistingUser ? "errorInputBorder" : ""
                      )}
                      type="text"
                      placeholder="Логин"
                      {...register("login", { required: true })}
                      onChange={() => setIsExistingUser(false)}
                    />
                    <span className="textInputsIcons">
                      <UserIcon />
                    </span>
                    {(errors.login || isExistingUser) && (
                      <span className={style.errorIcon}>
                        <InputErrorIcon />
                      </span>
                    )}
                  </label>
                  <label className={style.textInputsLabel}>
                    <input
                      type="text"
                      className={clsx(
                        "textInputs",
                        style.textInput,
                        errors.email ? "errorInputBorder" : ""
                      )}
                      placeholder="Электронная почта"
                      {...register("email", { required: true })}
                    />
                    <span className="textInputsIcons">
                      <InputMailIcon />
                    </span>
                    {errors.email && (
                      <span className={style.errorIcon}>
                        <InputErrorIcon />
                      </span>
                    )}
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
                    {errors.password && (
                      <span className={style.errorIcon}>
                        <InputErrorIcon />
                      </span>
                    )}
                  </label>
                  <label className={style.textInputsLabel}>
                    <input
                      className={clsx(
                        "textInputs",
                        style.textInput,
                        errors.passwordRepeat ? "errorInputBorder" : ""
                      )}
                      type="password"
                      placeholder="Повторите пароль"
                      {...register("passwordRepeat", { required: true })}
                    />
                    <span className="textInputsIcons">
                      <InputLockIcon />
                    </span>
                    {errors.passwordRepeat && (
                      <span className={style.errorIcon}>
                        <InputErrorIcon />
                      </span>
                    )}
                  </label>
                  <Controller
                    name="captcha"
                    control={control}
                    render={() => (
                      <ReCAPTCHA
                        ref={captchaRef}
                        sitekey="6LezjxwhAAAAAE-_EdHuULSyXlJ4Og6FirL1iq3E"
                      />
                    )}
                  />

                  <button className={style.button}>Зарегистрироваться</button>
                </form>
              </div>
              <div className={style.info}>
                <h4 className={style.responsibilitiesTitle}>
                  Пользователь обязуется
                </h4>
                <ul className={style.responsibilitiesList}>
                  <li className={style.responsibilitiesItem}>
                    <span>
                      предоставлять достоверную и актуальную информацию при
                      регистрации и добавлении объекта;
                    </span>
                  </li>
                  <li className={style.responsibilitiesItem}>
                    <span>
                      добавлять фотографии объектов соответствующие
                      действительности. Администрация сайта sdaem.by оставляет
                      за собой право удалять любую информацию, размещенную
                      пользователем, если сочтет, что информация не
                      соответствует действительности, носит оскорбительный
                      характер, нарушает права и законные интересы других
                      граждан либо действующее законодательство Республики
                      Беларусь.
                    </span>
                  </li>
                </ul>
                <span>Уже есть аккаунт? </span>
                <Link to="/login" className={style.link}>
                  Войдите
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
