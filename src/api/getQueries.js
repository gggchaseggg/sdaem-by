import axios from "axios";

export const getUsers = () =>
  axios
    .get(`https://62c166972af60be89ec64660.mockapi.io/users`)
    .then(({ data }) => data);
