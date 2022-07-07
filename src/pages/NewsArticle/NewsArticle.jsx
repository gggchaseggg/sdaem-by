import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setActivePage } from '../../Redux/Redux-reducer/activePageReducer';

import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import NewsItem from '../../components/NewsItem/NewsItem';

import style from './NewsArticle.module.scss';
import DateLabel from '../../components/DateLabel/DateLabel';
import Share from '../../components/Share/Share';

// const readMoreNews = [];
// 	for (const item of newsList) {
// 		if (item.id >= 5) break;
// 		if (item.id != id) readMoreNews.push(item);
// 	}
// 	console.log(readMoreNews);

export default function NewsArticle() {
	const { id } = useParams();
	const dispath = useDispatch();
	const newsList = useSelector((state) => state.newsList);
	const news = newsList[id - 1];

	const readMoreNews = newsList.filter((item) => item.id != id && item.id < 5);

	React.useEffect(() => {
		dispath(setActivePage(1));
	}, []);

	return (
		<>
			<div className={style.backgroundRectangle} />
			<div className={style.container}>
				<div className={style.header}>
					<Breadcrumbs
						page={[
							{ title: 'Новости', path: '/news' },
							{ title: news.title, path: `/news/${news.id}` },
						]}
					/>
					<h1 className={style.title}>{news.title}</h1>
					<div className={style.info}>
						<div className={style.date}>
							<DateLabel date={news.date} isGray={false} />
						</div>
						<div className={style.share}>
							<Share />
						</div>
					</div>
					<img src={news.photoUrlBig} alt="фото" className={style.photo} />
					<article className={style.article}>
						{news.article.map((item, idx) => (
							<p key={idx}>{item}</p>
						))}
					</article>
				</div>
			</div>
			<div className={style.readMore}>
				<div className={style.readMoreContainer}>
					<h2 className={style.read}>Читайте также</h2>
					<ul className={style.feed}>
						{readMoreNews.map(
							(item, idx) =>
								idx < 3 && (
									<li className={style.newsItem} key={item.key}>
										<NewsItem novost={item} />
									</li>
								)
						)}
					</ul>
				</div>
			</div>
		</>
	);
}
