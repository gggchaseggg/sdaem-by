import React from 'react';
import { Link } from 'react-router-dom';
import style from './Header.module.scss';
import logo from '../../images/header/logo.png';
import ApartmensModal from './ApartmensModal/ApartmensModal';
import PlaceAd from './PlaceAd/PlaceAd';
import { routeMenu, rentMenu } from '../../data/layoutData';
import { useSelector } from 'react-redux';

export default function Header() {
	const [headerMenu, setHeaderMenu] = React.useState(routeMenu);
	const activePage = useSelector((state) => state.activePage.activePage);

	React.useEffect(() => {
		setHeaderMenu(
			headerMenu.map((item, idx) => {
				idx === activePage ? (item.active = true) : (item.active = false);
				return item;
			})
		);
	}, [activePage]);

	return (
		<>
			<header>
				<div className={style.upper}>
					<div className={style.container}>
						<nav>
							<ul>
								{headerMenu.map((item) => (
									<li
										key={item.key}
										className={item.active ? style.active : ''}
									>
										<Link to={item.link}>{item.text}</Link>
									</li>
								))}
							</ul>
						</nav>
						<div className={style.profileNav}>
							<div className={style.favorites}>
								<Link to="/favorites">Закладки</Link>
							</div>
							<div className={style.login}>
								<Link to="/login">Вход и регистрация</Link>
							</div>
						</div>
					</div>
				</div>
				<div className={style.lower}>
					<div className={style.container}>
						<Link to="/">
							<img src={logo} alt="Лого" className={style.logo} />
						</Link>
						<div className={style.type}>
							<ul>
								<ApartmensModal />
								{rentMenu.map((item) => (
									<li key={item.key} className={style.rentItem}>
										<Link to={item.link}>{item.text}</Link>
									</li>
								))}
							</ul>
						</div>
						<PlaceAd />
					</div>
				</div>
			</header>
		</>
	);
}
