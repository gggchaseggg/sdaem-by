import React from 'react';
import style from './Share.module.scss';

export default function Share() {
	return (
		<div className={style.share}>
			<span className={style.title}>Поделиться</span>
			<ul className={style.shareList}>
				<a href="vk.com" target="_blank">
					<li className={style.shareItem}>
						<img src="/img/Share/vk.svg" alt="вк" width={18} />
					</li>
				</a>
				<a href="facebook.com" target="_blank">
					<li className={style.shareItem}>
						<img src="/img/Share/facebook.svg" alt="фб" width={10} />
					</li>
				</a>
				<a href="vk.com" target="_blank">
					<li className={style.shareItem}>
						<img src="/img/Share/viber.svg" alt="вб" width={17} />
					</li>
				</a>
				<a href="vk.com" target="_blank">
					<li className={style.shareItem}>
						<img src="/img/Share/telegram.svg" alt="тг" width={17} />
					</li>
				</a>
				<a href="vk.com" target="_blank">
					<li className={style.shareItem}>
						<img src="/img/Share/whatsapp.svg" alt="ва" width={18} />
					</li>
				</a>
			</ul>
		</div>
	);
}
