import axios from "axios";
import React from "react";

export const getUsers = () =>
  axios
    .get(`https://62c166972af60be89ec64660.mockapi.io/users`)
    .then(({ data }) => data);

export const getUserById = (id) =>
  axios
    .get(`https://62c166972af60be89ec64660.mockapi.io/users?id=${id}`)
    .then(({ data }) => data);

export const getNews = (page) =>
  axios
    .get(
      `https://62c166972af60be89ec64660.mockapi.io/news?page=${page}&limit=9`
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

export const useContacts = () => {
  const [contacts, setContacts] = React.useState({
    address: "",
    phone: "",
    email: "",
    workTime: "",
  });

  React.useEffect(() => {
    axios
      .get("https://62c166972af60be89ec64660.mockapi.io/rest")
      .then(({ data }) => setContacts(data[0].contacts));
  }, []);

  return contacts;
};

export const useNewsByCount = (count) => {
  const [news, setNews] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(
        `https://62c166972af60be89ec64660.mockapi.io/news?page=1&limit=${count}`
      )
      .then(({ data }) => setNews(data.items));
  }, []);

  return news;
};
