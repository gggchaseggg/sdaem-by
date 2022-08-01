import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import style from "./UserLabel.module.scss";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../../../api/getQueries";
import { setUser } from "../../../Redux/Reducers/userReducer";
import UserInfoIcon from "../../SvgIcons/UserInfoIcon";

const UserLabel = () => {
  const user = useSelector((state) => state.user);

  const login = localStorage.getItem("login");
  const dispatch = useDispatch();
  const { data, status } = useQuery(["users"], getUsers, {
    onSuccess: () => {
      console.log("Users loading success");
    },
    onError: (err) => {
      console.log("Ошибка: ", err);
    },
    staleTime: Infinity,
  });

  React.useEffect(() => {
    if (login && status === "success") {
      const userQuery = data.find((elem) => elem.login === login);
      if (userQuery) {
        dispatch(setUser({ name: userQuery.name, email: userQuery.email }));
      }
    }
  }, [data]);

  if (!user.isLogin) {
    return (
      <div className={style.user}>
        <Link to="/login" className={style.link}>
          Вход и регистрация
        </Link>
      </div>
    );
  } else {
    return (
      <div className={style.user}>
        <img
          src="/img/Header/avatar.png"
          alt="аватар"
          className={style.image}
        />
        <span className={style.name}>{user.info.name}</span>
        <button type="button" className={style.arrowButton}>
          <UserInfoIcon fillColor={"#4E64F9"} />
        </button>
      </div>
    );
  }
};

export default UserLabel;
