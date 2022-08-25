import React from "react";
import "./skill.scss";
import icon from "../../assets/icons/skills_languages_icon.svg";

const Skill = (props) => {
  const { title, iconPath, text } = props;
  return (
    <div className="skill general__drop_shadow">
      <div className="skill__title_text_wrapper">
        <div className="skill__title">{title}</div>
        <div className="skill__icon_wrapper">
          <img src={iconPath} className="skill__icon" />
        </div>
      </div>
      <p className="skill__text">{text}</p>
    </div>
  );
};

export default Skill;
