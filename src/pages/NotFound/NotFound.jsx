import React from 'react';
import { Link } from 'react-router-dom';
import style from './NotFound.module.scss';
import { useDispatch } from 'react-redux';
import { setActivePage } from '../../Redux/Redux-reducer/activePageReducer';

export default function NotFound() {
	const dispath = useDispatch();

	React.useEffect(() => {
		dispath(setActivePage(-1));
	}, []);

	return (
		<>
			<div className={style.background}>
				<div className={style.cityMap}>
					<div className={style.container}>
						<div className={style.info}>
							<h1 className={style.title}>Ошибка 404</h1>
							<p className={style.description}>
								Возможно, у вас опечатка в адресе страницы, или её просто не
								существует
							</p>
							<Link to={'/'} className={style.link}>
								<span className={style.returnText}>Вернуться на главную</span>
							</Link>
						</div>
						<div className={style.number}>
							<img src="/img/NotFound/404.png" alt="404" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
