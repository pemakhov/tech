import React from 'react';
import PropTypes from 'prop-types';
import SkillBlock from './SkillBlock';

const Skills = (props) => {
  const { skills } = props;
  return (
    <section className="skills">
      <div className="container">
        <h2>Skills</h2>
        {skills.map((skill) => {
          const { name, data } = skill;
          return <SkillBlock category={name} skills={data} key={name} />;
        })}
      </div>
    </section>
  );
};

Skills.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      data: PropTypes.arrayOf(PropTypes.string),
    })
  ).isRequired,
};

export default Skills;
