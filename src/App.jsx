import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import News from './pages/News/News';
import Layout from './Layout/Layout';
import Main from './pages/Main/Main';
import NotFound from './pages/NotFound/NotFound';

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Main />} />
						<Route path="/news" element={<News />} />
						{/* <Route path="/tariffs" element={<Tariffs />} />
						<Route path="/map" element={<Map />} />
						<Route path="/contacts" element={<Contacts />} /> */}
						<Route path="*" element={<NotFound />} />
					</Route>
				</Routes>
			</Router>
		</>
	);
}

export default App;
