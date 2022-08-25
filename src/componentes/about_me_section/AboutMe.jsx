import React from "react";
import "./aboutme.scss";
import Typewriter from "typewriter-effect";

function AboutMe() {
  return (
    <div className="about" id="about_me_section">
      <div className="about__upper"></div>
      <div className="about__middle">
        <div></div>
      </div>
      <div className="about__lower"></div>
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
        <p>
          Hi, I am Petar Deljanin, a Serbian software engineer currently based
          in Slovenia (Europe). I am finishing my undergraduate computer science
          studies at <a href="https://www.famnit.upr.si/en/">UP FAMNIT</a>. So I
          am looking for a job in Singapore because I want to "start a new life"
          there, because I think it is a city of future and innovation and
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
