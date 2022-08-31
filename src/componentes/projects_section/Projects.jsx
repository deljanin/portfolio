import React from "react";
import { useEffect, useRef } from "react";
import "./projects.scss";
import Project from "../project/Project";
import projects_data from "../../data/projects_data.json";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Projects = () => {
  gsap.registerPlugin(ScrollTrigger);

  const horizontal_section = useRef();
  const element_wrapper = useRef();
  const mysections = useRef(new Array());
  useEffect(() => {
    let sections = gsap.utils.toArray(mysections.current);
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: horizontal_section.current,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: "+=3500",
      },
    });
  });
  return (
    <div className="projects" ref={horizontal_section} id="projects_section">
      <div className="projects_element_wrapper" ref={element_wrapper}>
        {projects_data.map((data, index) => {
          if (index === 0) {
            return (
              <Project
                key={data.id}
                bgPath="./images/project_1_bg.svg"
                linePath="./images/project_start_line.svg"
                bgClass="project1_bg"
                lineClass="project_start_line"
                carouselPath={"./carousel_images/project1"}
                title={data.title}
                text_array={data.text_array}
                images={data.image_array}
                URLS={data.URLS}
                ref={(e) => mysections.current.push(e)}
              />
            );
          } else if (index === projects_data.length - 1) {
            return (
              <Project
                key={data.id}
                mainTitleDisplay="project__no_display"
                bgPath="./images/project_5_bg.svg"
                linePath="./images/project_end_line.svg"
                bgClass="project5_bg"
                lineClass="project_end_line"
                carouselPath={"./carousel_images/project5"}
                title={data.title}
                text_array={data.text_array}
                images={data.image_array}
                URLS={data.URLS}
                ref={(e) => mysections.current.push(e)}
              />
            );
          } else {
            let imgIndex = index + 1;
            return (
              <Project
                key={data.id}
                mainTitleDisplay="project__no_display"
                bgPath={"./images/project_" + imgIndex + "_bg.svg"}
                linePath="./images/project_between_line.svg"
                bgClass={"project" + imgIndex + "_bg"}
                lineClass="project_between_line"
                carouselPath={"./carousel_images/project" + imgIndex}
                title={data.title}
                text_array={data.text_array}
                images={data.image_array}
                URLS={data.URLS}
                ref={(e) => mysections.current.push(e)}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default Projects;
