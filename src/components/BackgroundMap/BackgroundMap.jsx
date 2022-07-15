import React from 'react';
import { Outlet } from 'react-router-dom';
import style from './BackgroundMap.module.scss';

export default function BackgroundMap() {
	return (
		<div className={style.background}>
			<div className={style.cityMap}>
				<Outlet />
			</div>
		</div>
	);
}
