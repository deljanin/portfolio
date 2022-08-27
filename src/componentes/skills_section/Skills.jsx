import React, { useEffect, useRef } from "react";
import "./skills.scss";
import Skill from "../skill/Skill";
import skill_data from "../../data/skills_data.json";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Skills = () => {
  gsap.registerPlugin(ScrollTrigger);
  const container = useRef();
  const title = useRef();
  const cards = useRef(new Array());
  useEffect(() => {
    let gsapCards = gsap.utils.toArray(cards.current);
    // let half = Math.ceil(cards.current.length / 2);
    // let gsapLeftCards = gsap.utils.toArray(cards.current.slice(0, half));
    // let gsapRightCards = gsap.utils.toArray(cards.current.slice(half));
    const animateTitle = gsap.fromTo(
      title.current,
      { autoAlpha: 0, y: -50 },
      { duration: 1, autoAlpha: 1, y: 0 }
    );
    // const animateLeftCards = gsap
    //   .fromTo(
    //     gsapLeftCards,
    //     { autoAlpha: 0, x: -50 },
    //     { duration: 1, autoAlpha: 1, x: 0 }
    //   )
    //   .delay(0.3);
    // const animateRightCards = gsap
    //   .fromTo(
    //     gsapRightCards,
    //     { autoAlpha: 0, x: 50 },
    //     { duration: 1, autoAlpha: 1, x: 0 }
    //   )
    //   .delay(0.3);
    let arr = [animateTitle];
    let i = 0;
    let moveX = -50;
    // console.log(gsapCards);
    gsapCards.forEach((element) => {
      arr.push(
        gsap
          .fromTo(
            element,
            { autoAlpha: 0, x: moveX },
            { duration: 1, autoAlpha: 1, x: 0 }
          )
          .delay(0.3 + i)
      );
      moveX += -270;
      i += 0.1;
    });

    // let arr = [animateTitle, animateLeftCards, animateRightCards];
    arr.forEach((element) => {
      ScrollTrigger.create({
        trigger: container.current,
        start: "center bottom",
        animation: element,
        toggleActions: "restart none none reverse",
      });
    });
  });
  return (
    <section className="skills" id="skills_section" ref={container}>
      <div className="skills__container">
        <h1 className="skills__title general__drop_shadow" ref={title}>
          My Skills
        </h1>
        <div className="skills__container_blocks">
          {skill_data.map((data) => {
            return (
              <Skill
                key={data.id}
                title={data.skill}
                iconPath={data.icon}
                text={data.text}
                ref={(e) => cards.current.push(e)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
