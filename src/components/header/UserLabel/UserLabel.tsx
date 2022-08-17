import React from "react";
import { Link } from "react-router-dom";

import { useUsers } from "../../../api/dataHooks";
import GreaterSign from "../../SvgIcons/GreaterSign";
import { LOGIN_PATH } from "../../../data/pathConstants";
import style from "./UserLabel.module.scss";
import { useAppDispatch, useAppSelector } from "../../../Redux/hooks";
import { setUser } from "../../../Redux/userSlice";

const UserLabel: React.FC = () => {
  const user = useAppSelector((state) => state.user);
  const { data: userList, status: getUsersStatus } = useUsers();
  const login = localStorage.getItem("login");
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (login && getUsersStatus === "success") {
      const userQuery = userList.find((elem) => elem.login === login);
      if (userQuery) {
        dispatch(
          setUser({
            name: userQuery.name ? userQuery.name : userQuery.login,
            email: userQuery.email,
          })
        );
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
