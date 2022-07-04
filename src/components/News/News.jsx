import React from 'react';
import HeaderContext from '../header/HeaderContext';

export default function News() {
	const { switchActivePage } = React.useContext(HeaderContext);
	React.useEffect(() => switchActivePage(1), []);

	return <>news Page</>;
}
