import React from 'react';
import NewsItem from './NewsItem/NewsItem';
import style from './News.module.scss';
import { setActivePage } from '../../Redux/Redux-reducer/activePageReducer';
import { useDispatch } from 'react-redux';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Search from '../../components/Search/Search';

export default function News() {
	const dispath = useDispatch();

	React.useEffect(() => {
		dispath(setActivePage(1));
	}, [dispath]);

	const Novosti = [
		{
			id: 1,
			title: 'Линия Сталина: суровый отдых в усадьбах на сутки',
			body: 'Чем заняться в выходные? Когда нет безотлагательных домашних дел, а на улице хорошая погода, хочется уехать из города, чтобы сменить обстановку. Например, снять коттедж на сутки для семьи или большой компании друзей. А...',
			date: '14 Января 2008',
			photoUrl: '/img/newsPhotoExample.png',
			key: 'NewsItem-1',
		},
		{
			id: 2,
			title: 'Линия Сталина: суровый отдых в усадьбах на сутки',
			body: 'Чем заняться в выходные? Когда нет безотлагательных домашних дел, а на улице хорошая погода, хочется уехать из города, чтобы сменить обстановку. Например, снять коттедж на сутки для семьи или большой компании друзей. А...',
			date: '14 Января 2008',
			photoUrl: '/img/newsPhotoExample.png',
			key: 'NewsItem-2',
		},
		{
			id: 3,
			title: 'Линия Сталина: суровый отдых в усадьбах на сутки',
			body: 'Чем заняться в выходные? Когда нет безотлагательных домашних дел, а на улице хорошая погода, хочется уехать из города, чтобы сменить обстановку. Например, снять коттедж на сутки для семьи или большой компании друзей. А...',
			date: '14 Января 2008',
			photoUrl: '/img/newsPhotoExample.png',
			key: 'NewsItem-3',
		},
		{
			id: 4,
			title: 'Линия Сталина: суровый отдых в усадьбах на сутки',
			body: 'Чем заняться в выходные? Когда нет безотлагательных домашних дел, а на улице хорошая погода, хочется уехать из города, чтобы сменить обстановку. Например, снять коттедж на сутки для семьи или большой компании друзей. А...',
			date: '14 Января 2008',
			photoUrl: '/img/newsPhotoExample.png',
			key: 'NewsItem-4',
		},
		{
			id: 5,
			title: 'Линия Сталина: суровый отдых в усадьбах на сутки',
			body: 'Чем заняться в выходные? Когда нет безотлагательных домашних дел, а на улице хорошая погода, хочется уехать из города, чтобы сменить обстановку. Например, снять коттедж на сутки для семьи или большой компании друзей. А...',
			date: '14 Января 2008',
			photoUrl: '/img/newsPhotoExample.png',
			key: 'NewsItem-5',
		},
		{
			id: 6,
			title: 'Линия Сталина: суровый отдых в усадьбах на сутки',
			body: 'Чем заняться в выходные? Когда нет безотлагательных домашних дел, а на улице хорошая погода, хочется уехать из города, чтобы сменить обстановку. Например, снять коттедж на сутки для семьи или большой компании друзей. А...',
			date: '14 Января 2008',
			photoUrl: '/img/newsPhotoExample.png',
			key: 'NewsItem-6',
		},
		{
			id: 7,
			title: 'Линия Сталина: суровый отдых в усадьбах на сутки',
			body: 'Чем заняться в выходные? Когда нет безотлагательных домашних дел, а на улице хорошая погода, хочется уехать из города, чтобы сменить обстановку. Например, снять коттедж на сутки для семьи или большой компании друзей. А...',
			date: '14 Января 2008',
			photoUrl: '/img/newsPhotoExample.png',
			key: 'NewsItem-7',
		},
	];

	return (
		<>
			<div className={style.container}>
				<div className={style.header}>
					<Breadcrumbs page={[{ title: 'Новости', path: '/news' }]} />
					<h1 className={style.title}>Новости</h1>
					<div className={style.search}>
						<Search />
					</div>
					<div className={style.backgroundRectangle}></div>
				</div>
				<ul className={style.feed}>
					{Novosti.map((item) => (
						<li className={style.newsItem}>
							<NewsItem key={item.key} novost={item} />
						</li>
					))}
				</ul>
			</div>
		</>
	);
}
