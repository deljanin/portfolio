import React, { useRef } from 'react';
import './project.scss';
import { FaGithub, FaYoutube } from 'react-icons/fa';
import ImageCarousel from '../carousel/ImageCarousel';
import useElementOnScreen from '../../hooks/useElementOnScreen';

const Project = (props) => {
	const {
		mainTitleDisplay,
		layout,
		linePath,
		lineClass,
		carouselPath,
		title,
		text_array,
		images,
		URLS,
	} = props;

	const titleRef = useRef();
	const textLines = useRef(new Array());
	const links = useRef();
	const slideshow = useRef();

	const titleIsVisible = useElementOnScreen(
		{
			root: null,
			rootMargin: '0px',
			threshold: 1,
		},
		titleRef
	);
	const linksVisible = useElementOnScreen(
		{
			root: null,
			rootMargin: '0px',
			threshold: 1,
		},
		links
	);

	const textLinesVisible = useElementOnScreen(
		{
			root: null,
			rootMargin: '0px',
			threshold: 1,
		},
		textLines
	);

	let lineNotVisible;
	if (layout !== 'project__layout_inverted') {
		lineNotVisible = 'project__line_notVisible_left';
	} else {
		lineNotVisible = 'project__line_notVisible_right';
	}
	return (
		<div className='project'>
			<img src={linePath} className={lineClass} />
			<div className='project__container'>
				<div className={`project__main_title ${mainTitleDisplay}`}>My Projects</div>
				<div className={`project__content_container ${layout}`}>
					<div className='project__text_container'>
						<div>
							<div
								className={`project__title general__text_gradiant ${
									titleIsVisible ? 'project__title_visible' : 'project__title_notVisible'
								}`}
								ref={titleRef}
							>
								{title}
							</div>
							<ul className='project__list_container'>
								{text_array.map((data, index) => {
									return (
										<li
											key={index}
											className={textLinesVisible ? 'project__line_visible' : lineNotVisible}
											style={{ '--order': index + 1 }}
											ref={(e) => textLines.current.push(e)}
										>
											{data}
										</li>
									);
								})}
								<li
									ref={links}
									className={linksVisible ? 'project__links_visible' : 'project__links_notVisible'}
									style={{
										display: 'flex',
										justifyContent: 'center',
										gap: '8px',
									}}
								>
									{URLS.map((url, i) => {
										if (/youtu/.test(url) === true) {
											return (
												<a href={url} key={i}>
													<FaYoutube
														className='nav_icon'
														style={{ width: '23px', height: '23px' }}
													/>
												</a>
											);
										} else {
											return (
												<a href={url} key={i}>
													<FaGithub
														className='nav_icon'
														style={{ width: '23px', height: '23px' }}
													/>
												</a>
											);
										}
									})}
								</li>
							</ul>
						</div>
					</div>
					<div className='project__slideshow_container' ref={slideshow}>
						<ImageCarousel images={images} carouselPath={carouselPath} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Project;
