import React from 'react';
import { Link } from 'react-router-dom';
import style from './PlaceAd.module.scss';

export default function PlaceAd() {
	return (
		<Link to="/" className={style.adButton}>
			+ Разместить объявление
		</Link>
	);
}
