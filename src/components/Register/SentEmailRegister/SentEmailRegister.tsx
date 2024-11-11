import React from "react";
import { Link } from "react-router-dom";

import { MAIN_PATH } from "../../../data/pathConstants";

import style from "./SentEmailRegister.module.scss";

const SentEmailRegister: React.FC = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Подтвердите регистрацию</h1>
      <p className={style.text}>
        Письмо для подтверждения аккаунта отправлено почту. Перейдите по ссылке,
        указанной в письме. Если письма нет, то проверьте спам
      </p>
      <Link to={MAIN_PATH} className={style.link}>
        Понятно
      </Link>
    </div>
  );
};

export default SentEmailRegister;
