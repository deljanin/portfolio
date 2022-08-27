import React, { useRef, useEffect } from "react";
import "./aboutme.scss";
import Typewriter from "typewriter-effect";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
function AboutMe() {
  gsap.registerPlugin(ScrollTrigger);
  const aboutTitle = useRef();
  const textBlock = useRef();
  const aboutContainer = useRef();
  useEffect(() => {
    const animateTitle = gsap.fromTo(
      aboutTitle.current,
      { autoAlpha: 0, y: -50 },
      { duration: 1, autoAlpha: 1, y: 0 }
    );
    const animateText = gsap
      .fromTo(
        textBlock.current,
        { autoAlpha: 0, y: 50 },
        { duration: 1, autoAlpha: 1, y: 0 }
      )
      .delay(0.3);
    let arr = [animateTitle, animateText];
    arr.forEach((element) => {
      ScrollTrigger.create({
        trigger: aboutContainer.current,
        start: "center bottom",
        animation: element,
        toggleActions: "restart none none none",
        once: true,
      });
    });
  });
  return (
    <div className="about" id="about_me_section" ref={aboutContainer}>
      <div className="about__upper"></div>
      <div className="about__middle">
        <div></div>
      </div>
      <div className="about__lower"></div>
      <div className="about__title_wrapper" ref={aboutTitle}>
        <h1 className="about__title">About</h1>
        <h1 className="about__anim">
          <Typewriter
            options={{
              strings: ["Me", "Code", "Art"],
              autoStart: true,
              loop: true,
              cursor: "_",
            }}
          />
        </h1>
      </div>
      <div className="about__text" ref={textBlock}>
        <p>
          Hi, I am{" "}
          <span className="general__text_highlight">Petar Deljanin</span>, a
          Serbian software engineer currently based in Slovenia (Europe). I am
          finishing my undergraduate computer science studies at{" "}
          <span className="general__text_highlight">
            <a href="https://www.famnit.upr.si/en/">UP FAMNIT. </a>
          </span>
          So I am looking for a job in Singapore because I want to "start a new
          life" there, because I think it is a city of future and innovation and
          because I want to be a part of a team in a world-class software
          engineering company. <br />I enjoy writing code and learning new
          technologies daily, as I am very passionate about this field.
          <br />
          In my free time I love to listen to intellectual podcasts, to create
          art through drawing and writing, and to learn by reading books and by
          taking online courses.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
