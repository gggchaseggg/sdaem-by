import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import News from './pages/News/News';
import Layout from './Layout/Layout';
import Main from './pages/Main/Main';
import NotFound from './pages/NotFound/NotFound';
import NewsArticle from './pages/NewsArticle/NewsArticle';
import ScrollToTop from './util/ScrollToTop';
import Contacts from './pages/Contacts/Contacts';

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
				</Routes>
			</Router>
		</>
	);
}

export default App;
