import React from 'react';
import './projects.scss';
import Project from '../../componentes/project/Project';
import projects_data from '../../data/projects_data.json';

const Projects = () => {
	return (
		<div className='projects' id='projects_section'>
			<div className='projects_element_wrapper'>
				{projects_data.map((data, index) => {
					if (index === 0) {
						return (
							<Project
								key={data.id}
								layout=''
								linePath='./images/project_start_line.svg'
								lineClass='project_start_line'
								carouselPath={'./carousel_images/project1'}
								title={data.title}
								text_array={data.text_array}
								images={data.image_array}
								URLS={data.URLS}
							/>
						);
					} else if (index === projects_data.length - 1) {
						return (
							<Project
								key={data.id}
								layout=''
								mainTitleDisplay='project__no_display'
								linePath='./images/project_end_line.svg'
								lineClass='project_end_line'
								carouselPath={'./carousel_images/project5'}
								title={data.title}
								text_array={data.text_array}
								images={data.image_array}
								URLS={data.URLS}
							/>
						);
					} else {
						let layout = '';
						let imgIndex = index + 1;
						if ((index + 1) % 2 == 0) {
							layout = 'project__layout_inverted';
						}
						return (
							<Project
								key={data.id}
								layout={layout}
								mainTitleDisplay='project__no_display'
								linePath='./images/project_between_line.svg'
								lineClass='project_between_line'
								carouselPath={'./carousel_images/project' + imgIndex}
								title={data.title}
								text_array={data.text_array}
								images={data.image_array}
								URLS={data.URLS}
							/>
						);
					}
				})}
			</div>
		</div>
	);
};

export default Projects;
