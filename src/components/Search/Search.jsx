import React from 'react';
import style from './Search.module.scss';

export default function Search() {
	return (
		<div className={style.container}>
			<input
				type="text"
				placeholder="Поиск по статьям"
				className={style.search}
			/>
			<button className={style.button}>
				<img src="/img/News/loupe.svg" alt="" />
			</button>
		</div>
	);
}
