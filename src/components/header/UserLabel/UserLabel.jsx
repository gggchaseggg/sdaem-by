import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { useUsers } from "../../../api/dataHooks";
import GreaterSign from "../../SvgIcons/GreaterSign";
import { LOGIN_PATH } from "../../../data/pathConstants";
import { setUser } from "../../../Redux/Reducers/userReducer";

import style from "./UserLabel.module.scss";

const UserLabel = () => {
  const user = useSelector((state) => state.user);
  const { data: userList, status: getUsersStatus } = useUsers();
  const login = localStorage.getItem("login");
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (login && getUsersStatus === "success") {
      const userQuery = userList.find((elem) => elem.login === login);
      if (userQuery) {
        dispatch(setUser({ name: userQuery.name, email: userQuery.email }));
      }
    }
  }, [userList]);

  if (!user.isLogin) {
    return (
      <div className={style.user}>
        <Link to={LOGIN_PATH} className={style.link}>
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
        <Link to="/login" type="button" className={style.arrowButton}>
          <GreaterSign fillColor={"#4E64F9"} />
        </Link>
      </div>
    );
  }
};

export default UserLabel;
