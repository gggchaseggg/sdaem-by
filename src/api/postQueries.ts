import axios from "axios";
import { PostTypes, UserTypes } from "../types/types";

export const createUser = (user: UserTypes): void => {
  axios
    .post("https://62c166972af60be89ec64660.mockapi.io/users", {
      login: user.login,
      password: user.password,
      email: user.email,
    })
    .then((r) => console.log(r));
};

export const addPost = (data: PostTypes) => {
  let obj = {};
  // Ввиду "особенностей" хранения данных:
  // посты обратной связи хранять на mockapi на эндпоинте rest
  // в массиве с индексом 1 в виде объектов,
  // именем которых является email отправившего пост,
  // а ключами имя человека и сообщение

  // @ts-ignore
  obj[data.email] = {
    name: data.name,
    message: data.message,
  };

  axios
    .put("https://62c166972af60be89ec64660.mockapi.io/rest/2", obj)
    .then((r) => console.log(r));
};
