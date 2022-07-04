import React from 'react';
import HeaderContext from '../header/HeaderContext';

export default function Main() {
	const { switchActivePage } = React.useContext(HeaderContext);
	React.useEffect(() => switchActivePage(0), []);

	return <>main Page</>;
}
