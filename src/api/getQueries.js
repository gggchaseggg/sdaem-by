import axios from "axios";
import { APARTMENTS_COUNT_OF_PAGE, NEWS_COUNT_OF_PAGE } from "../config";

export const getUsers = () =>
  axios
    .get(`https://62c166972af60be89ec64660.mockapi.io/users`)
    .then(({ data }) => data);

export const getNewsByPage = (page) =>
  axios
    .get(
      `https://62c166972af60be89ec64660.mockapi.io/news?page=${page}&limit=${NEWS_COUNT_OF_PAGE}`
    )
    .then(({ data }) => data);

export const getApartmentsByPage = (page) =>
  axios
    .get(
      `https://62c166972af60be89ec64660.mockapi.io/apartments?page=${page}&limit=${APARTMENTS_COUNT_OF_PAGE}`
    )
    .then(({ data }) => data);
