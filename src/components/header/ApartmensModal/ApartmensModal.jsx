import React from 'react';
import style from './ApartmensModal.module.scss';
import { apartCity } from '../../../data/layoutData';

export default function ApartmensModal() {
	const [isOpen, setIsOpen] = React.useState(false);

	return (
		<>
			<button
				className={[style.apartButton, style.active].join(' ')}
				onClick={() => setIsOpen((prev) => !prev)}
			>
				Квартиры на сутки
			</button>

			{isOpen && (
				<div className={style.modal}>
					<div className={style.modalBody}>
						{apartCity.map((item) => (
							<li key={item.key}>{item.title}</li>
						))}
					</div>
				</div>
			)}
		</>
	);
}
