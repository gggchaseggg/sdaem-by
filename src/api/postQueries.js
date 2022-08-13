import axios from "axios";

export const createUser = (user) => {
  axios
    .post("https://62c166972af60be89ec64660.mockapi.io/users", {
      login: user.login,
      password: user.password,
      email: user.email,
    })
    .then((r) => console.log(r));
};

export const addPost = (data) => {
  let obj = {};
  obj[data.email] = {
    name: data.name,
    message: data.message,
  };

  axios
    .put("https://62c166972af60be89ec64660.mockapi.io/rest/2", obj)
    .then((r) => console.log(r));
};
