import axios from "axios";
import React from "react";

export const getUsers = () =>
  axios
    .get(`https://62c166972af60be89ec64660.mockapi.io/users`)
    .then(({ data }) => data);

export const getNewsByPage = (page) =>
  axios
    .get(
      `https://62c166972af60be89ec64660.mockapi.io/news?page=${page}&limit=9`
    )
    .then(({ data }) => data);
