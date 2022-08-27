import React, { forwardRef } from "react";
import "./skill.scss";

const Skill = forwardRef((props, ref) => {
  const { title, iconPath, text } = props;
  return (
    <div className="skill general__drop_shadow" ref={ref}>
      <div className="skill__title_text_wrapper">
        <div className="skill__title">{title}</div>
        <div className="skill__icon_wrapper">
          <img src={iconPath} className="skill__icon" />
        </div>
      </div>
      <p className="skill__text">{text}</p>
    </div>
  );
});

export default Skill;
