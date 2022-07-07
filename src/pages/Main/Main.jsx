import React from 'react';
import { useDispatch } from 'react-redux';
import { setActivePage } from '../../Redux/Redux-reducer/activePageReducer';

export default function Main() {
	const dispath = useDispatch();

	React.useEffect(() => {
		dispath(setActivePage(0));
	}, []);

	return <>main Page</>;
}
