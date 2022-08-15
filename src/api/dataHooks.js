import { useQuery } from "@tanstack/react-query";
import { getApartmentsByPage, getNewsByPage, getUsers } from "./getQueries";
import React, { useState } from "react";
import axios from "axios";

export const useUsers = () => {
  return useQuery(["users"], getUsers, {
    onSuccess: () => {
      console.log("useUsers hook loading success");
    },
    onError: (err) => {
      console.log("Ошибка: ", err);
    },
    staleTime: 5 * 60 * 1000,
  });
};

export const useNewsByPage = (page) => {
  return useQuery(["news", page], () => getNewsByPage(page), {
    onSuccess: (data) => {
      console.log("useNews hook loading success");
    },
    onError: (err) => {
      console.log("Ошибка: ", err);
    },
  });
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

export const useNewsById = (id) => {
  const [news, setNews] = useState(null);

  React.useEffect(() => {
    axios
      .get(`https://62c166972af60be89ec64660.mockapi.io/news?id=${id}`)
      .then(({ data }) => setNews(data.items[0]));
  }, []);

  return news;
};

export const useSimilarNewsById = (id) => {
  const [news, setNews] = useState(null);

  React.useEffect(() => {
    axios
      .get(`https://62c166972af60be89ec64660.mockapi.io/news`)
      .then(({ data }) =>
        setNews(
          data.items
            .filter((item) => item.id !== id.toString() && item.id < 5)
            .slice(0, 3)
        )
      );
  }, []);

  return news;
};

export const useContacts = () => {
  const [contacts, setContacts] = React.useState({
    address: "",
    phone: "",
    email: "",
    workTime: "",
  });
  //Эффект, чтобы оно только 1 раз посмотрело
  React.useEffect(() => {
    axios
      .get("https://62c166972af60be89ec64660.mockapi.io/rest")
      .then(({ data }) => setContacts(data[0].contacts));
  }, []);

  return contacts;
};

export const useApartmentsByPage = (page) => {
  return useQuery(["apartments", page], () => getApartmentsByPage(page), {
    onSuccess: (data) => {
      console.log("useApartments hook loading success");
    },
    onError: (err) => {
      console.log("Ошибка: ", err);
    },
  });
};
