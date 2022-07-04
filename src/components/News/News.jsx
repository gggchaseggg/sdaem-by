import React from 'react';
import HeaderContext from '../header/HeaderContext';
import NewsItem from './NewsItem/NewsItem';

export default function News() {
	const { switchActivePage } = React.useContext(HeaderContext);
	React.useEffect(() => switchActivePage(1), []);

	return (
		<>
			News Page
			<NewsItem />
		</>
	);
}
