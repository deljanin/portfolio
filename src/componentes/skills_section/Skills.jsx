import React from "react";
import "./skills.scss";
import Skill from "../skill/Skill";
import skill_data from "../../data/skills_data.json";

const Skills = () => {
  return (
    <section className="skills" id="skills_section">
      <div className="skills__container">
        <h1 className="skills__title general__drop_shadow">My Skills</h1>
        <div className="skills__container_blocks">
          {skill_data.map((data) => {
            return (
              <Skill
                key={data.id}
                title={data.skill}
                iconPath={data.icon}
                text={data.text}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
