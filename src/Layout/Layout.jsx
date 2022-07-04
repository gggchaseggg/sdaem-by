import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import HeaderContext from '../components/header/HeaderContext';

export default function Layout() {
	const [activePage, setActivePage] = React.useState();

	function switchActivePage(id) {
		setActivePage(id);
	}

	return (
		<>
			<HeaderContext.Provider value={{ switchActivePage }}>
				<Header activePage={activePage} />
				<Outlet />
				<Footer />
			</HeaderContext.Provider>
		</>
	);
}
