import React from 'react';
import { Link } from 'react-router-dom';
import style from './Footer.module.scss';
import logo from '../../images/header/logo.png';
import inst from '../../images/footer/insta.svg';
import vk from '../../images/footer/vk.svg';
import facebook from '../../images/footer/facebook.svg';
import visa from '../../images/footer/visa.png';
import webpay from '../../images/footer/webpay.png';
import verifiedVisa from '../../images/footer/verified-by-visa.png';
import mastercard from '../../images/footer/mastercard.png';
import MCSecure from '../../images/footer/securecode.png';
import belkart from '../../images/footer/belkart.png';
import {
	routeMenu,
	rentMenu,
	apartCityShorty as apartCity,
} from '../../data/layoutData';

export default function Footer() {
	return (
		<>
			<footer>
				<div className={style.container}>
					<div className={style.info}>
						<img src={logo} alt="Лого" />
						<p className={style.sdaem}>СДАЁМ БАЙ</p>
						<div className={style.IP}>
							<p>ИП Шушкевич Андрей Викторович</p>
							<p>УНП 192602485 Минским горисполкомом</p>
							<p>10.02.2016</p>
							<p>220068, РБ, г. Минск, ул. Осипенко, 21, кв.23</p>
							<p>+375 29 621 48 33, sdaem@sdaem.by</p>
							<p>Режим работы: 08:00-22:00</p>
						</div>
					</div>
					<div className={style.routes}>
						<div className={style.pages}>
							<div className={style.rent}>
								<ul>
									{rentMenu.map((item) => (
										<li key={item.key} className={style.rentItem}>
											<Link to={item.link}>{item.text}</Link>
										</li>
									))}
								</ul>
							</div>
							<div className={style.apart}>
								<p>Квартиры</p>
								<ul>
									{apartCity.map((item) => (
										<li key={item.key}>{item.title}</li>
									))}
								</ul>
							</div>
							<div className={style.links}>
								<ul>
									{routeMenu.map(
										(item, idx) =>
											idx !== 0 && (
												<li key={item.key}>
													<Link to={item.link}>{item.text}</Link>
												</li>
											)
									)}
								</ul>
							</div>
						</div>
						<div className={style.socAndPayments}>
							<div className={style.socials}>
								<span>Мы в соцсетях</span>
								<img src={inst} alt="Инстаграмм" />
								<img src={vk} alt="ВК" />
								<img src={facebook} alt="Фейсбук" />
							</div>
							<div className={style.payments}>
								<img src={visa} alt="виза" />
								<img src={webpay} alt="виза" />
								<img src={verifiedVisa} alt="виза" />
								<img src={mastercard} alt="виза" />
								<img src={MCSecure} alt="виза" />
								<img src={belkart} alt="виза" />
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}
