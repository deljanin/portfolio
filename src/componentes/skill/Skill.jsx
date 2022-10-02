import React, { useRef } from 'react';
import './skill.scss';
import useElementOnScreen from '../../hooks/useElementOnScreen';

const Skill = (props) => {
	const { title, iconPath, text, order } = props;
	const ref = useRef();
	const isVisible = useElementOnScreen(
		{
			root: null,
			rootMargin: '0px',
			threshold: 0.5,
		},
		ref
	);
	return (
		<div
			className={`skill general__drop_shadow ${isVisible ? 'skill__visible' : 'skill__notVisible'}`}
			style={{ '--order': order }}
			ref={ref}
		>
			<div className='skill__title_text_wrapper'>
				<div className='skill__title'>{title}</div>
				<div className='skill__icon_wrapper'>
					<img src={iconPath} className='skill__icon' />
				</div>
			</div>
			<p className='skill__text'>{text}</p>
		</div>
	);
};

export default Skill;
