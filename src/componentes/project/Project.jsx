import React from "react";
import { useEffect } from "react";
import { forwardRef, useRef } from "react";
import "./project.scss";
import { FaGithub, FaYoutube } from "react-icons/fa";
import ImageCarousel from "../carousel/ImageCarousel";
const Project = forwardRef((props, ref) => {
  const {
    mainTitleDisplay,
    bgPath,
    linePath,
    bgClass,
    lineClass,
    carouselPath,
    title,
    text_array,
    images,
    URLS,
  } = props;
  return (
    <div className="project" ref={ref}>
      <img src={bgPath} className={bgClass} />
      <img src={linePath} className={lineClass} />
      <div className="project__container">
        <div className={`project__main_title ${mainTitleDisplay}`}>
          My Projects
        </div>
        <div className="project__content_container">
          <div className="project__text_container">
            <div className="project__title general__text_gradiant">{title}</div>
            <ul className="project__list_container">
              {text_array.map((data, index) => {
                return <li key={index}>{data}</li>;
              })}
              <li
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  gap: "0.3em",
                }}
              >
                {URLS.map((url, i) => {
                  if (/youtu/.test(url) === true) {
                    return (
                      <a href={url} key={i}>
                        <FaYoutube className="nav_icon" />
                      </a>
                    );
                  } else {
                    return (
                      <a href={url} key={i}>
                        <FaGithub className="nav_icon" />
                      </a>
                    );
                  }
                })}
              </li>
            </ul>
          </div>
          <div className="project__slideshow_container">
            <ImageCarousel images={images} carouselPath={carouselPath} />
          </div>
        </div>
      </div>
    </div>
  );
});

export default Project;
