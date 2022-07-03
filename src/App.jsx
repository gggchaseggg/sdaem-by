import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Routes,
	Link,
	useNavigate,
	useParams,
	useSearchParams,
	useLocation,
	Outlet,
} from 'react-router-dom';
import News from './components/News/News';
import Layout from './Layout/Layout';

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Layout />}>
						{/* <Route index element={<Main />} /> */}
						<Route path="/news" element={<News />} />
						{/* <Route path="/tariffs" element={<Tariffs />} />
						<Route path="/map" element={<Map />} />
						<Route path="/contacts" element={<Contacts />} /> */}
					</Route>
				</Routes>
			</Router>
		</>
	);
}

export default App;
