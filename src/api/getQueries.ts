import axios from "axios";
import { APARTMENTS_COUNT_OF_PAGE, NEWS_COUNT_OF_PAGE } from "../config";
import { ApartmentQueryTypes, NewsQueryTypes, UserTypes } from "../types/types";

export const getUsers = (): Promise<UserTypes[]> =>
  axios
    .get(`https://62c166972af60be89ec64660.mockapi.io/users`)
    .then(({ data }) => data);

export const getNewsByPage = (page: string): Promise<NewsQueryTypes> =>
  axios
    .get(
      `https://62c166972af60be89ec64660.mockapi.io/news?page=${page}&limit=${NEWS_COUNT_OF_PAGE}`
    )
    .then(({ data }) => data);

export const getApartmentsByPage = (
  page: string
): Promise<ApartmentQueryTypes> =>
  axios
    .get(
      `https://62c166972af60be89ec64660.mockapi.io/apartments?page=${page}&limit=${APARTMENTS_COUNT_OF_PAGE}`
    )
    .then(({ data }) => data);
