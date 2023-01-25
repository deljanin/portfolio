import React, { useRef } from 'react';
import './skills.scss';
import Skill from '../../componentes/skill/Skill';
import skill_data from '../../data/skills_data.json';
import useElementOnScreen from '../../hooks/useElementOnScreen';

const Skills = () => {
	const container = useRef();
	const title = useRef();
	const isVisible = useElementOnScreen(
		{
			root: null,
			rootMargin: '0px',
			threshold: 0.65,
		},
		title
	);

	return (
		<section className='skills' id='skills_section' ref={container}>
			<div className='skills__container'>
				<h1
					className={`skills__title general__drop_shadow ${
						isVisible ? 'skills__title_visible' : 'skills__title_notVisible'
					}`}
					ref={title}
				>
					My Skills
				</h1>
				<div className='skills__container_blocks'>
					{skill_data.map((data) => {
						return (
							<Skill
								key={data.id}
								title={data.skill}
								iconPath={data.icon}
								text={data.text}
								order={data.id}
								// ref={(e) => cards.current.push(e)}
							/>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Skills;
