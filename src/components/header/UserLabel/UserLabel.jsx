import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import style from "./UserLabel.module.scss";
import { setUser } from "../../../Redux/Reducers/userReducer";
import GreaterSign from "../../SvgIcons/GreaterSign";
import { useUsers } from "../../../api/dataHooks";

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
          <GreaterSign fillColor={"#4E64F9"} />
        </button>
      </div>
    );
  }
};

export default UserLabel;
