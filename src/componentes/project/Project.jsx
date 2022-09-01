import React from "react";
import { useEffect } from "react";
import { forwardRef, useRef } from "react";
import "./project.scss";
import { FaGithub, FaYoutube } from "react-icons/fa";
import ImageCarousel from "../carousel/ImageCarousel";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Project = forwardRef((props, ref) => {
  // gsap.registerPlugin(ScrollTrigger);
  const {
    mainTitleDisplay,
    // bgPath,
    linePath,
    bgClass,
    lineClass,
    carouselPath,
    title,
    text_array,
    images,
    URLS,
  } = props;

  const mainTitle = useRef();
  const projText = useRef();
  const projImgs = useRef();
  // useEffect(() => {
  //   const animateTitle = gsap.fromTo(
  //     mainTitle.current,
  //     { autoAlpha: 0, x: -50, y: -30 },
  //     { duration: 1, autoAlpha: 1, x: 0, y: 0 }
  //   );
  //   const animateText = gsap
  //     .fromTo(
  //       projText.current,
  //       { autoAlpha: 0, x: -50 },
  //       { duration: 1, autoAlpha: 1, x: 0 }
  //     )
  //     .delay(0.3);
  //   const animateImgs = gsap
  //     .fromTo(
  //       projImgs.current,
  //       { autoAlpha: 0, x: 50 },
  //       { duration: 1, autoAlpha: 1, x: 0 }
  //     )
  //     .delay(0.3);
  //   let arr = [animateTitle, animateText, animateImgs];
  //   arr.forEach((element) => {
  //     ScrollTrigger.create({
  //       trigger: ref.current,
  //       start: "center bottom",
  //       animation: element,
  //       toggleActions: "restart none none none",
  //       once: true,
  //     });
  //   });
  // });

  return (
    <div className={`project ${bgClass}`} ref={ref}>
      {/* <img src={bgPath} className={bgClass} /> */}
      <img src={linePath} className={lineClass} />
      <div className="project__container">
        <div
          className={`project__main_title ${mainTitleDisplay}`}
          ref={mainTitle}
        >
          My Projects
        </div>
        <div className="project__content_container">
          <div className="project__text_container" ref={projText}>
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
          <div className="project__slideshow_container" ref={projImgs}>
            <ImageCarousel images={images} carouselPath={carouselPath} />
          </div>
        </div>
      </div>
    </div>
  );
});

export default Project;
