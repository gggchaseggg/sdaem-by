import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import News from "./pages/News/News";
import Layout from "./Layout/Layout";
import Main from "./pages/Main/Main";
import NotFound from "./pages/NotFound/NotFound";
import NewsArticle from "./pages/NewsArticle/NewsArticle";
import ScrollToTop from "./util/ScrollToTop";
import Contacts from "./pages/Contacts/Contacts";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

//TODO: Сделать компонент кнопки и компонент инпутов(возможно)))
//TODO: На страницах регистрации и логина сделать лоадер пока не загрузятся данные из мока
//TODO: Почистить редакс от неиспользуемого стейта(список новостей)

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="news" element={<News />} />
            <Route path="news/:id" element={<NewsArticle />} />
            {/* <Route path="/tariffs" element={<Tariffs />} /> */}
            {/* <Route path="/map" element={<Map />} /> */}
            <Route path="/contacts" element={<Contacts />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
