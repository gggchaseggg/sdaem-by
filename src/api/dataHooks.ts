import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { getApartmentsByPage, getNewsByPage, getUsers } from "./getQueries";
import React, { useState } from "react";
import axios from "axios";
import {
  ApartmentQueryTypes,
  ContactsTypes,
  NewsQueryTypes,
  NewsTypes,
  UserTypes,
} from "../types/types";

export const useUsers = (): UseQueryResult<UserTypes[]> => {
  return useQuery<UserTypes[]>(["users"], getUsers, {
    onSuccess: () => {
      console.log("useUsers hook loading success");
    },
    onError: (err) => {
      console.log("Ошибка: ", err);
    },
    staleTime: 5 * 60 * 1000, //5 minutes
  });
};

export const useNewsByPage = (page: string): UseQueryResult<NewsQueryTypes> => {
  return useQuery<NewsQueryTypes>(["news", page], () => getNewsByPage(page), {
    onSuccess: (data) => {
      console.log("useNewsByPage hook loading success");
    },
    onError: (err) => {
      console.log("Ошибка: ", err);
    },
  });
};

export const useNewsByCount = (count: string): NewsTypes[] | undefined => {
  const [news, setNews] = React.useState<NewsTypes[] | undefined>(undefined);

  React.useEffect(() => {
    axios
      .get<NewsQueryTypes>(
        `https://62c166972af60be89ec64660.mockapi.io/news?page=1&limit=${count}`
      )
      .then(({ data }) => setNews(data.items));
  }, [count]);

  return news;
};

export const useNewsById = (id: string): NewsTypes | undefined => {
  const [news, setNews] = useState<NewsTypes | undefined>(undefined);

  React.useEffect(() => {
    axios
      .get<NewsQueryTypes>(
        `https://62c166972af60be89ec64660.mockapi.io/news?id=${id}`
      )
      .then(({ data }) => setNews(data.items[0]));
  }, [id]);

  return news;
};

export const useSimilarNewsById = (id: string): NewsTypes[] | undefined => {
  const [news, setNews] = useState<NewsTypes[] | undefined>(undefined);

  React.useEffect(() => {
    axios
      .get<NewsQueryTypes>(`https://62c166972af60be89ec64660.mockapi.io/news`)
      .then(({ data }) =>
        setNews(
          data.items
            .filter(
              (item) => item.id !== id.toString() && parseInt(item.id) < 5
            )
            .slice(0, 3)
        )
      );
  }, [id]);

  return news;
};

export const useContacts = (): ContactsTypes | undefined => {
  const [contacts, setContacts] = React.useState<ContactsTypes | undefined>(
    undefined
  );

  //Эффект, чтобы оно только 1 раз посмотрело
  //Запрос не типизирован из-за "особенностей" хранения
  React.useEffect(() => {
    axios
      .get("https://62c166972af60be89ec64660.mockapi.io/rest")
      .then(({ data }) => setContacts(data[0].contacts));
  }, []);

  return contacts;
};

export const useApartmentsByPage = (
  page: string
): UseQueryResult<ApartmentQueryTypes> => {
  return useQuery<ApartmentQueryTypes>(
    ["apartments", page],
    () => getApartmentsByPage(page),
    {
      onSuccess: (data) => {
        console.log("useApartments hook loading success");
      },
      onError: (err) => {
        console.log("Ошибка: ", err);
      },
    }
  );
};
