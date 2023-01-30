import React, { useRef } from "react";
import "./aboutme.scss";
import Typewriter from "typewriter-effect";
import useElementOnScreen from "../../hooks/useElementOnScreen";

function AboutMe() {
  const textLines = useRef([]);
  const textIsVisible = useElementOnScreen(
    { root: null, rootMargin: "0px", threshold: 0.5 },
    textLines
  );

  return (
    <div className="about" id="about_me_section">
      <div className="about__upper"></div>
      <div className="about__middle">
        <div></div>
      </div>
      <div className="about__lower"></div>
      <div className="about__content_wrapper">
        <div className="about__title_wrapper">
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
        <div className="about__text">
          <p
            ref={(e) => textLines.current.push(e)}
            className={
              textIsVisible ? "about__text_visible" : "about__text_notVisible"
            }
            style={{ "--order": 1 }}
          >
            Hi, I am{" "}
            <span className="general__text_highlight">Petar Deljanin</span>, a
            Serbian software engineer. I finished my undergraduate computer
            science studies at{" "}
            <span className="general__text_highlight">
              <a href="https://www.famnit.upr.si/en/" target="_blank">
                UP FAMNIT{" "}
              </a>
            </span>{" "}
            in Slovenia and I'm currently looking for a remote position.
          </p>
          {/* <p
            ref={(e) => textLines.current.push(e)}
            className={
              textIsVisible ? "about__text_visible" : "about__text_notVisible"
            }
            style={{ "--order": 2 }}
          >
            I am looking for a job in Singapore because I want to "start a new
            life" there, because I think it is a city of future and innovation
            and because I want to be a part of a team in a world-class software
            engineering company.
          </p> */}
          <p
            ref={(e) => textLines.current.push(e)}
            className={
              textIsVisible ? "about__text_visible" : "about__text_notVisible"
            }
            style={{ "--order": 3 }}
          >
            I enjoy writing code and learning new technologies daily, as I am
            very passionate about this field.
          </p>
          <p
            ref={(e) => textLines.current.push(e)}
            className={
              textIsVisible ? "about__text_visible" : "about__text_notVisible"
            }
            style={{ "--order": 4 }}
          >
            In my free time, I love listening to intellectual podcasts, creating
            art through drawing and writing, and learning by reading books and
            by taking online courses.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
