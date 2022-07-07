import React from 'react';
import style from './NewsItem.module.scss';

export default function NewsItem({ novost }) {
	return (
		<>
			<div className={style.container}>
				<div className={style.image}>
					<img src={novost.photoUrl} alt="фото" />
				</div>
				<div className={style.NewsItemBody}>
					<h3>{novost.title}</h3>
					<p>{novost.body}</p>
					<div className={style.ItemFooter}>
						<div className={style.strip}></div>
						<div className={style.inf}>
							<div className={style.date}>{novost.date}</div>
							<button className={style.read}>
								<div>Читать</div>
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
