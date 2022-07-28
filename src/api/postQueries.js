import axios from "axios";

export const createUser = (user) => {
  axios
    .post("https://62c166972af60be89ec64660.mockapi.io/users", {
      login: user.login,
      password: user.password,
      email: user.email,
    })
    .then((response) => console.log(response));
};
