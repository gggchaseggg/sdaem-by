import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import style from './Breadcrumbs.module.scss';

export default function Breadcrumbs(props) {
	// let location = useLocation().pathname.split('/').shift();

	return (
		<>
			<ul className={style.breadcrumbsList}>
				<Link to="/">
					<img src="/img/Breadcrumbs/house.svg" alt="" />
				</Link>
				{props.page.map((item, idx) => (
					<li key={idx} className={style.breadcrumbsItem}>
						{idx !== props.page.length - 1 ? (
							<Link to={item.path}>{item.title}</Link>
						) : (
							<>{item.title}</>
						)}
					</li>
				))}
			</ul>
		</>
	);
}
