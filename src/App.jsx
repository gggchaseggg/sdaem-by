import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import News from "./pages/News/News";
import Layout from "./Layout/Layout";
import Main from "./pages/Main/Main";
import Login from "./pages/Login/Login";
import ScrollToTop from "./util/ScrollToTop";
import Contacts from "./pages/Contacts/Contacts";
import Register from "./pages/Register/Register";
import NotFound from "./pages/NotFound/NotFound";
import NewsArticle from "./pages/NewsArticle/NewsArticle";
import {
  CONTACTS_PATH,
  LOGIN_PATH,
  MAIN_PATH,
  MAP_PATH,
  NEWS_PATH,
  REGISTER_PATH,
  TARIFFS_PATH,
} from "./data/pathConstants";

//TODO: Сделать компонент кнопки и компонент инпутов
//TODO: Сделать скелетон лоадер для карточек новостей

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path={MAIN_PATH} element={<Layout />}>
            <Route index element={<Main />} />
            <Route path={NEWS_PATH} element={<News />} />
            <Route path="news/:id" element={<NewsArticle />} />
            {/*<Route path={TARIFFS_PATH} element={<Tariffs />} /> */}
            {/*<Route path={MAP_PATH} element={<Map />} /> */}
            <Route path={CONTACTS_PATH} element={<Contacts />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path={LOGIN_PATH} element={<Login />} />
          <Route path={REGISTER_PATH} element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
