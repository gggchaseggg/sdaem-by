import axios from "axios";

export const getUsers = () =>
  axios
    .get(`https://62c166972af60be89ec64660.mockapi.io/users`)
    .then(({ data }) => data);

export const getNews = (page) =>
  axios
    .get(
      `https://62c166972af60be89ec64660.mockapi.io/news?page=${page}&limit=3`
    )
    .then(({ data }) => data);

export const getNewsById = (id) =>
  axios
    .get(`https://62c166972af60be89ec64660.mockapi.io/news?id=${id}`)
    .then(({ data }) => data.items);

export const getSimilarNews = (id) =>
  axios
    .get(`https://62c166972af60be89ec64660.mockapi.io/news`)
    .then(({ data }) =>
      data.items.filter((item) => item.id !== id.toString() && item.id < 5)
    );
